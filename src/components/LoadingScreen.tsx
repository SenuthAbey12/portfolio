"use client"

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 12
      })
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, gap: '32px'
    }}>
      {/* Animated logo */}
      <div style={{ position: 'relative' }}>
        <div style={{
          width: 72, height: 72,
          borderRadius: '50%',
          background: 'var(--gradient)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.75rem', fontWeight: 800,
          fontFamily: 'var(--font-display)',
          color: '#fff',
          boxShadow: '0 0 48px rgba(99,102,241,0.5)',
          animation: 'float 2s ease-in-out infinite',
        }}>AK</div>
        <div style={{
          position: 'absolute', inset: -6,
          borderRadius: '50%',
          border: '2px solid transparent',
          borderTopColor: 'var(--primary)',
          animation: 'spin-slow 1.2s linear infinite',
        }} />
      </div>

      {/* Progress bar */}
      <div style={{ width: 200, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <div style={{
          width: '100%', height: 3,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 8, overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${Math.min(progress, 100)}%`,
            background: 'var(--gradient)',
            borderRadius: 8,
            transition: 'width 0.15s ease',
          }} />
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
          color: 'var(--text-muted)', letterSpacing: '0.1em'
        }}>{Math.min(Math.round(progress), 100)}%</span>
      </div>

      {/* Bouncing dots */}
      <div style={{ display: 'flex', gap: 6 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 6, height: 6,
            background: i === 0 ? 'var(--primary)' : i === 1 ? 'var(--accent)' : 'var(--teal)',
            borderRadius: '50%',
            animation: `bounce-dot 1.2s ease-in-out ${i * 0.2}s infinite`
          }} />
        ))}
      </div>
    </div>
  )
}
