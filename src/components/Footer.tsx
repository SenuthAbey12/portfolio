"use client"

import { Mail, ArrowUp, Heart } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGithub, SiX } from 'react-icons/si'

const NAV_SECTIONS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'GitHub', href: '#github' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '4rem 0 2rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'var(--gradient)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '1rem', color: '#fff',
                boxShadow: '0 4px 16px rgba(99,102,241,0.4)',
              }}>AK</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>
                Alex Kim
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7, margin: '0 0 1.25rem', maxWidth: 260 }}>
              CS & Engineering student building intelligent systems at the intersection of AI and Full Stack development.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { icon: <SiGithub size={16} />, href: '#', label: 'GitHub' },
                { icon: <FaLinkedin size={16} />, href: '#', label: 'LinkedIn' },
                { icon: <SiX size={16} />, href: '#', label: 'X/Twitter' },
                { icon: <Mail size={16} />, href: 'mailto:alex@example.com', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: 36, height: 36, borderRadius: 10,
                  border: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.03)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(99,102,241,0.12)'; el.style.borderColor = 'rgba(99,102,241,0.3)'; el.style.color = 'var(--primary-light)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.03)'; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--text-muted)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '0.9rem', color: 'var(--text)', margin: '0 0 1rem',
              letterSpacing: '0.05em',
            }}>Navigation</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem' }}>
              {NAV_SECTIONS.map(link => (
                <a key={link.href} href={link.href} style={{
                  color: 'var(--text-muted)', fontSize: '0.85rem',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--primary-light)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
                >{link.label}</a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '0.9rem', color: 'var(--text)', margin: '0 0 1rem',
            }}>Status</h4>
            <div style={{
              padding: '1rem',
              borderRadius: 12,
              background: 'rgba(16,185,129,0.06)',
              border: '1px solid rgba(16,185,129,0.15)',
              marginBottom: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <div style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: 'var(--green)', boxShadow: '0 0 6px var(--green)',
                }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--green)' }}>
                  Open to Opportunities
                </span>
              </div>
              <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Seeking SWE internships for Summer 2025. Available for full-time starting June.
              </p>
            </div>
            <a href="/resume.pdf" download style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '0.6rem 1rem',
              borderRadius: 10,
              border: '1px solid rgba(99,102,241,0.3)',
              background: 'rgba(99,102,241,0.08)',
              color: 'var(--primary-light)', textDecoration: 'none',
              fontSize: '0.82rem', fontWeight: 500,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.15)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.08)' }}
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', margin: 0 }}>
            © 2025 Alex Kim. Built with{' '}
            <Heart size={11} style={{ display: 'inline', color: '#f43f5e', verticalAlign: 'middle' }} />{' '}
            using React &amp; TypeScript.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '0.5rem 1rem',
              borderRadius: 10, border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.04)',
              color: 'var(--text-muted)', cursor: 'pointer',
              fontSize: '0.8rem', fontFamily: 'var(--font-sans)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.4)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
          >
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
