"use client"

import { ArrowUp, Heart } from 'lucide-react'
import { SiGithub } from 'react-icons/si'

const NAV_SECTIONS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-subtle)', padding: '4rem 0 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'var(--gradient)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '0.95rem', color: '#fff',
                boxShadow: '0 4px 16px rgba(99,102,241,0.4)',
              }}>SA</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>
                Senuth Abeywardana
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.7, margin: '0 0 1.25rem', maxWidth: 300 }}>
              Computer Science &amp; Engineering undergraduate building practical software across full-stack development, AI, and computer vision.
            </p>
            <a
              href="https://github.com/SenuthAbey12"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{
                width: 38, height: 38, borderRadius: 10,
                border: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.12)'
                e.currentTarget.style.color = 'var(--primary-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.color = 'var(--text-muted)'
              }}
            >
              <SiGithub size={17} />
            </a>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '0.9rem', color: 'var(--text)', margin: '0 0 1rem', letterSpacing: '0.05em',
            }}>Navigation</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem 1.5rem' }}>
              {NAV_SECTIONS.map(link => (
                <a key={link.href} href={link.href} style={{
                  color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >{link.label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '0.9rem', color: 'var(--text)', margin: '0 0 1rem',
            }}>Status</h4>
            <div style={{
              padding: '1rem', borderRadius: 12,
              background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--green)' }}>Open to Opportunities</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                Interested in software engineering internships and collaborative development opportunities.
              </p>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12, paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)',
        }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.78rem', margin: 0 }}>
            © 2026 Senuth Abeywardana. Built with{' '}
            <Heart size={11} style={{ display: 'inline', color: '#f43f5e', verticalAlign: 'middle' }} />{' '}
            using React &amp; TypeScript.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '0.5rem 1rem', borderRadius: 10, border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', cursor: 'pointer',
              fontSize: '0.78rem', fontFamily: 'var(--font-sans)', transition: 'all 0.2s',
            }}
          >
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
