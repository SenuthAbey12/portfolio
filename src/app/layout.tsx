import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alex Kim | Portfolio',
  description: 'Interactive personal portfolio built from a Figma export.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}