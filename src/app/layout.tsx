import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Senuth Abeywardana | Portfolio',
  description: 'Portfolio of Senuth Abeywardana, a Computer Science and Engineering undergraduate at the University of Moratuwa.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
