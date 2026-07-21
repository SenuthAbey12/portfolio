"use client"

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    NAV_LINKS.forEach(link => {
      const el = document.querySelector(link.href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'none', border: 'none', cursor: 'pointer'
            }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'var(--gradient)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: '0.85rem', color: '#fff',
              boxShadow: '0 4px 16px rgba(99,102,241,0.4)'
            }}>AK</div>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '1rem', color: 'var(--text)'
            }}>Alex Kim</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '0.25rem' }}>
            {NAV_LINKS.map(link => (
              <button key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0.5rem 0.75rem',
                  borderRadius: 8,
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: activeSection === link.href.slice(1) ? 600 : 400,
                  color: activeSection === link.href.slice(1) ? 'var(--primary-light)' : 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = activeSection === link.href.slice(1) ? 'var(--primary-light)' : 'var(--text-muted)')}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <div style={{
                    position: 'absolute', bottom: 2, left: '50%',
                    transform: 'translateX(-50%)',
                    width: 4, height: 4, borderRadius: '50%',
                    background: 'var(--primary)'
                  }} />
                )}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={toggleTheme}
              style={{
                width: 36, height: 36,
                borderRadius: 10,
                background: 'var(--border-subtle)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s',
              }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <a href="#contact" style={{
              padding: '0.5rem 1rem',
              background: 'var(--gradient)',
              borderRadius: 10,
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#fff',
              textDecoration: 'none',
              display: 'none',
              boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
            }}
              className="hidden sm:block"
            >Hire Me</a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              style={{
                width: 36, height: 36,
                borderRadius: 10,
                background: 'var(--border-subtle)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)',
              }}
              className="md:hidden"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(8,11,20,0.8)',
        backdropFilter: 'blur(8px)',
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease',
      }}
        onClick={() => setMobileOpen(false)}
      />
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 280, zIndex: 1000,
        background: 'var(--bg-secondary)',
        borderLeft: '1px solid var(--border)',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        padding: '5rem 1.5rem 2rem',
        display: 'flex', flexDirection: 'column', gap: '0.5rem'
      }}>
        {NAV_LINKS.map(link => (
          <button key={link.href}
            onClick={() => handleNav(link.href)}
            style={{
              background: activeSection === link.href.slice(1) ? 'rgba(99,102,241,0.1)' : 'none',
              border: 'none', cursor: 'pointer',
              padding: '0.75rem 1rem',
              borderRadius: 10,
              textAlign: 'left',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: activeSection === link.href.slice(1) ? 'var(--primary-light)' : 'var(--text-muted)',
              transition: 'all 0.2s',
            }}
          >{link.label}</button>
        ))}
        <div style={{ marginTop: 'auto' }}>
          <a href="/resume.pdf" download style={{
            display: 'block', textAlign: 'center',
            padding: '0.75rem',
            background: 'var(--gradient)',
            borderRadius: 12,
            color: '#fff', fontWeight: 600,
            textDecoration: 'none',
            fontSize: '0.875rem',
          }}>Download Resume</a>
        </div>
      </div>
    </>
  )
}
