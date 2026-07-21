"use client"

import { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'

export default function FloatingActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed', bottom: '2rem', right: '2rem',
      display: 'flex', flexDirection: 'column', gap: 12,
      zIndex: 500,
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.3s ease',
      pointerEvents: show ? 'all' : 'none',
    }}>
      <a href="#contact" style={{
        width: 44, height: 44,
        borderRadius: '50%',
        background: 'var(--gradient)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(168,85,247,0.4)',
        transition: 'transform 0.2s',
      }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={18} />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          width: 44, height: 44,
          borderRadius: '50%',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--text-muted)', cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.color = 'var(--text-muted)' }}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  )
}
