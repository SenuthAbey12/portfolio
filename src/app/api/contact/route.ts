import { NextResponse } from 'next/server'

const DESTINATION_EMAIL = 'senuthabeywardana@gmail.com'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getSubmissionLocation(request: Request, suppliedUrl: string) {
  const requestUrl = new URL(request.url)
  let siteOrigin = requestUrl.origin

  try {
    const headerOrigin = request.headers.get('origin')

    if (headerOrigin) {
      const parsedOrigin = new URL(headerOrigin)

      if (parsedOrigin.protocol === 'http:' || parsedOrigin.protocol === 'https:') {
        siteOrigin = parsedOrigin.origin
      }
    }
  } catch {
    // Fall back to the API request URL when the Origin header is malformed.
  }

  try {
    const parsedPageUrl = new URL(suppliedUrl)

    if (parsedPageUrl.origin === siteOrigin) {
      return { siteOrigin, pageUrl: parsedPageUrl.toString() }
    }
  } catch {
    // Fall back to the contact section for missing or malformed page URLs.
  }

  return { siteOrigin, pageUrl: `${siteOrigin}/#contact` }
}

type ContactPayload = {
  email?: unknown
  message?: unknown
  website?: unknown
  pageUrl?: unknown
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    const contentType = request.headers.get('content-type') ?? ''

    if (contentType.includes('application/json')) {
      payload = await request.json()
    } else {
      const formData = await request.formData()
      payload = Object.fromEntries(formData.entries())
    }
  } catch {
    return NextResponse.json({ error: 'The submitted form could not be read.' }, { status: 400 })
  }

  const email = typeof payload.email === 'string' ? payload.email.trim() : ''
  const message = typeof payload.message === 'string' ? payload.message.trim() : ''
  const website = typeof payload.website === 'string' ? payload.website.trim() : ''
  const suppliedUrl = typeof payload.pageUrl === 'string' ? payload.pageUrl : ''

  // Silently accept bot submissions caught by the honeypot.
  if (website) return NextResponse.json({ success: true })

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  if (message.length < 2 || message.length > 3000) {
    return NextResponse.json({ error: 'Your message must contain between 2 and 3,000 characters.' }, { status: 400 })
  }

  const { siteOrigin, pageUrl } = getSubmissionLocation(request, suppliedUrl)

  try {
    const deliveryResponse = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // FormSubmit validates the submitting website. Server-side fetch does not
        // forward these browser headers automatically, so provide the validated
        // page location explicitly.
        Origin: siteOrigin,
        Referer: pageUrl,
      },
      body: JSON.stringify({
        email,
        message,
        _subject: 'New message from Senuth Abeywardana’s portfolio',
        _template: 'table',
        _url: pageUrl,
      }),
      cache: 'no-store',
    })

    const result = await deliveryResponse.json().catch(() => null)
    const failed = !deliveryResponse.ok || !result || result.success === false || result.success === 'false'

    if (failed) {
      const serviceMessage = typeof result?.message === 'string'
        ? result.message
        : 'The email service rejected the submission. Please try again shortly.'

      if (serviceMessage.toLowerCase().includes('activation')) {
        return NextResponse.json(
          { error: 'The contact form needs activation. Check the portfolio inbox for the FormSubmit activation email, activate it, then try again.' },
          { status: 503 },
        )
      }

      return NextResponse.json({ error: serviceMessage }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'The email service is temporarily unavailable. Please try again shortly.' },
      { status: 502 },
    )
  }
}
