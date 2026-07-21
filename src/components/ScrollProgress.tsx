"use client"

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight)
      setPct(scrolled * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: 3, zIndex: 9998, background: 'transparent'
    }}>
      <div style={{
        height: '100%',
        width: `${pct}%`,
        background: 'var(--gradient)',
        boxShadow: '0 0 10px rgba(99,102,241,0.7)',
        transition: 'width 0.1s linear'
      }} />
    </div>
  )
}
