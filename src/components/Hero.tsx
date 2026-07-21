"use client"

import { useEffect, useRef } from 'react'
import { Mail, ArrowDown, Download, ExternalLink } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGithub, SiX } from 'react-icons/si'

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  speed: Math.random() * 3 + 1.5,
  opacity: Math.random() * 0.5 + 0.15,
}))

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = PARTICLES.map(p => ({ ...p, vy: -p.speed * 0.3, vx: (Math.random() - 0.5) * 0.3 }))

    let frame: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y -= 0.15
        if (p.y < -1) { p.y = 101; p.x = Math.random() * 100 }
        if (p.x < -1) p.x = 101
        if (p.x > 101) p.x = -1

        const x = (p.x / 100) * canvas.width
        const y = (p.y / 100) * canvas.height
        ctx.beginPath()
        ctx.arc(x, y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.id % 3 === 0 ? '99,102,241' : p.id % 3 === 1 ? '168,85,247' : '6,182,212'},${p.opacity})`
        ctx.fill()
      })
      frame = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: '5rem',
    }}>
      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
        animation: 'blobMove 10s ease-in-out infinite',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '-8%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
        animation: 'blobMove 12s ease-in-out 3s infinite',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '40%', right: '20%',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        animation: 'blobMove 9s ease-in-out 6s infinite',
        filter: 'blur(30px)',
        pointerEvents: 'none',
      }} />

      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', opacity: 0.7,
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px),
          linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        pointerEvents: 'none', opacity: 0.4,
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem',
        width: '100%', position: 'relative',
        display: 'grid', gridTemplateColumns: '1fr auto',
        gap: '4rem', alignItems: 'center',
      }}>
        {/* Left content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Status badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 100,
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.25)',
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--green)',
                boxShadow: '0 0 8px var(--green)',
                animation: 'pulse-ring 2s ease-out infinite',
              }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--green)' }}>
                Available for Internships
              </span>
            </div>
          </div>

          {/* Headline */}
          <div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              color: 'var(--text)',
              margin: 0,
            }}>
              Hi, I'm{' '}
              <span className="gradient-text">Senuth Abeywardana</span>
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: '0.5rem' }}>
              <div style={{ height: 2, width: 40, background: 'var(--gradient)', borderRadius: 1 }} />
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                color: 'var(--primary-light)',
                margin: 0, letterSpacing: '0.05em',
              }}>Computer Science &amp; Engineering Undergraduate</p>
            </div>
          </div>

          {/* Bio */}
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            maxWidth: 560, margin: 0,
          }}>
            I specialize in{' '}
            <span style={{ color: 'var(--teal)', fontWeight: 500 }}>Full Stack Development</span>{' '}
            and{' '}
            <span style={{ color: 'var(--primary-light)', fontWeight: 500 }}>DevOps</span>, with a strong interest in{' '}
            <span style={{ color: 'var(--accent-light)', fontWeight: 500 }}>Artificial Intelligence</span>{' '}
            and{' '}
            <span style={{ color: 'var(--primary-light)', fontWeight: 500 }}>Computer Vision</span>. I enjoy building scalable, high-quality software that solves real-world problems and delivers meaningful user experiences.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient"
              style={{
                padding: '0.8rem 1.75rem',
                borderRadius: 12, border: 'none',
                color: '#fff', cursor: 'pointer',
                fontSize: '0.95rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 8px 32px rgba(99,102,241,0.35)',
                fontFamily: 'var(--font-sans)',
                position: 'relative', zIndex: 1,
              }}
            >
              <ExternalLink size={16} />
              View Projects
            </button>
            <a
              href="/resume.pdf" download
              style={{
                padding: '0.8rem 1.75rem',
                borderRadius: 12,
                border: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.04)',
                color: 'var(--text)', cursor: 'pointer',
                fontSize: '0.95rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 8,
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.4)'; (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.08)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)' }}
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { icon: <SiGithub size={18} />, href: 'https://github.com/SenuthAbey12', label: 'GitHub' },
              { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <SiX size={18} />, href: 'https://twitter.com', label: 'X/Twitter' },
              { icon: <Mail size={18} />, href: 'mailto:alex@example.com', label: 'Email' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                style={{
                  width: 42, height: 42,
                  borderRadius: 12,
                  border: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(99,102,241,0.15)'
                  el.style.borderColor = 'rgba(99,102,241,0.4)'
                  el.style.color = 'var(--primary-light)'
                  el.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(255,255,255,0.04)'
                  el.style.borderColor = 'var(--border)'
                  el.style.color = 'var(--text-muted)'
                  el.style.transform = 'translateY(0)'
                }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Right — profile photo */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
        }}
          className="hidden lg:flex"
        >
          <div style={{ position: 'relative', animation: 'float 5s ease-in-out infinite' }}>
            {/* Outer glow ring */}
            <div style={{
              position: 'absolute', inset: -16,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, var(--primary), var(--accent), var(--teal), var(--primary))',
              animation: 'spin-slow 8s linear infinite',
              opacity: 0.6,
              filter: 'blur(2px)',
            }} />
            <div style={{
              position: 'absolute', inset: -12,
              borderRadius: '50%',
              background: 'var(--bg)',
            }} />

            {/* Photo */}
            <div style={{
              width: 280, height: 280,
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              border: '3px solid rgba(99,102,241,0.3)',
            }}>
              <img
                src="/image.jpeg"
                alt="S M Abeywardana - CS Engineering Student"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, transparent 60%)',
              }} />
            </div>

            {/* Floating badges */}
            <div style={{
              position: 'absolute', top: 16, right: -32,
              padding: '8px 14px', borderRadius: 12,
              background: 'var(--bg-card)', backdropFilter: 'blur(16px)',
              border: '1px solid var(--border)',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--primary-light)' }}>🤖 AI/ML</div>
            </div>
            <div style={{
              position: 'absolute', bottom: 24, left: -40,
              padding: '8px 14px', borderRadius: 12,
              background: 'var(--bg-card)', backdropFilter: 'blur(16px)',
              border: '1px solid var(--border)',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-light)' }}>⚡ Full Stack</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        cursor: 'pointer',
      }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{
          width: 24, height: 38, borderRadius: 12,
          border: '1.5px solid var(--border)',
          display: 'flex', justifyContent: 'center', paddingTop: 6,
        }}>
          <div style={{
            width: 4, height: 8, borderRadius: 2,
            background: 'var(--primary)',
            animation: 'scroll-down 1.5s ease-in-out infinite',
          }} />
        </div>
        <ArrowDown size={12} style={{ color: 'var(--text-dim)', marginTop: -4 }} />
      </div>
    </section>
  )
}
