"use client"

import { useState } from 'react'
import { CheckCircle, MapPin, Phone, Send } from 'lucide-react'
import { SiGithub, SiWhatsapp } from 'react-icons/si'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const [form, setForm] = useState({ email: '', message: '', website: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          message: form.message,
          website: form.website,
          pageUrl: window.location.href,
        }),
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || 'Your message could not be sent. Please try again.')
      }

      setForm({ email: '', message: '', website: '' })
      setSent(true)
    } catch (submissionError) {
      setError(submissionError instanceof Error
        ? submissionError.message
        : 'Your message could not be sent. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: 12,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontSize: '0.88rem',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    boxSizing: 'border-box' as const,
  }

  return (
    <section id="contact" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="contact"
          title="Get In"
          highlight="Touch"
          subtitle="Have an opportunity, a project idea, or just want to connect? I would be happy to hear from you."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: 'var(--gradient)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', marginBottom: '1.25rem',
                boxShadow: '0 8px 24px rgba(99,102,241,0.28)',
              }}>
                <Send size={20} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1.25rem', color: 'var(--text)', margin: '0 0 0.9rem',
              }}>Let&apos;s Connect</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, fontSize: '0.88rem' }}>
                I&apos;m open to software engineering internships, project collaborations, and opportunities to contribute to meaningful software products. Feel free to reach out and start a conversation.
              </p>
            </div>

            <div className="glass" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)' }}>
              {[
                {
                  icon: <SiGithub size={19} />,
                  label: 'GitHub',
                  value: 'github.com/SenuthAbey12',
                  href: 'https://github.com/SenuthAbey12',
                  color: 'var(--primary-light)',
                  rgb: '99,102,241',
                },
                {
                  icon: <Phone size={19} />,
                  label: 'Contact Number',
                  value: '071 557 4466',
                  href: 'tel:+94715574466',
                  color: 'var(--teal)',
                  rgb: '6,182,212',
                },
                {
                  icon: <SiWhatsapp size={19} />,
                  label: 'WhatsApp',
                  value: '074 155 0112',
                  href: 'https://wa.me/94741550112',
                  color: 'var(--green)',
                  rgb: '16,185,129',
                },
                {
                  icon: <MapPin size={19} />,
                  label: 'Location',
                  value: 'Gampaha, Sri Lanka',
                  href: null,
                  color: 'var(--accent-light)',
                  rgb: '168,85,247',
                },
              ].map((item, index) => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '0.9rem 0',
                  borderBottom: index < 3 ? '1px solid var(--border-subtle)' : 'none',
                }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                    background: `rgba(${item.rgb},0.1)`, border: `1px solid rgba(${item.rgb},0.2)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color,
                  }}>{item.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 3 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" style={{
                        fontSize: '0.86rem', color: item.color, textDecoration: 'none', fontWeight: 600,
                      }}>{item.value}</a>
                    ) : (
                      <span style={{ fontSize: '0.86rem', color: 'var(--text)', fontWeight: 600 }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass gradient-border" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', minHeight: 520 }}>
            {sent ? (
              <div style={{
                height: '100%', minHeight: 420,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '1rem', textAlign: 'center',
              }}>
                <div style={{
                  width: 66, height: 66, borderRadius: '50%',
                  background: 'rgba(16,185,129,0.14)', border: '2px solid rgba(16,185,129,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <CheckCircle size={29} style={{ color: 'var(--green)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.88rem' }}>
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <button onClick={() => setSent(false)} style={{
                  marginTop: 8, padding: '0.7rem 1.4rem', borderRadius: 10,
                  border: '1px solid var(--border)', background: 'transparent',
                  color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'var(--font-sans)',
                }}>Send Another</button>
              </div>
            ) : (
              <form
                action="/api/contact"
                method="POST"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div style={{ marginBottom: '0.35rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '1.25rem', color: 'var(--text)', margin: '0 0 0.35rem',
                  }}>Send a Message</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', margin: 0 }}>
                    Share a few details and I&apos;ll get back to you.
                  </p>
                </div>

                <Field label="Email Address">
                  <input
                    type="email" name="email" required autoComplete="email"
                    placeholder="you@example.com" value={form.email}
                    onChange={event => setForm(current => ({ ...current, email: event.target.value }))}
                    style={inputStyle}
                  />
                </Field>

                <Field label="Message">
                  <textarea
                    name="message" required rows={7}
                    placeholder="Hi Senuth, I came across your portfolio and would like to discuss..."
                    value={form.message}
                    onChange={event => setForm(current => ({ ...current, message: event.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 170 }}
                  />
                </Field>

                <input
                  type="text" name="_honey" value={form.website}
                  onChange={event => setForm(current => ({ ...current, website: event.target.value }))}
                  tabIndex={-1} autoComplete="off" aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
                />
                {error && (
                  <p role="alert" style={{
                    margin: 0, padding: '0.75rem 0.9rem', borderRadius: 10,
                    color: '#fca5a5', background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.18)', fontSize: '0.74rem', lineHeight: 1.5,
                  }}>{error}</p>
                )}

                <button type="submit" disabled={loading} className="btn-gradient" style={{
                  padding: '0.9rem', borderRadius: 12, border: 'none',
                  color: '#fff', cursor: loading ? 'wait' : 'pointer',
                  fontSize: '0.9rem', fontWeight: 600,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
                  fontFamily: 'var(--font-sans)', position: 'relative', zIndex: 1,
                  opacity: loading ? 0.8 : 1,
                }}>
                  {loading ? (
                    <>
                      <span style={{
                        width: 15, height: 15, borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff',
                        animation: 'spin-slow 0.8s linear infinite',
                      }} />
                      Sending...
                    </>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 6 }}>
        {label} *
      </span>
      {children}
    </label>
  )
}
