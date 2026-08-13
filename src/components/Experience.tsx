"use client"

import { Calendar, MapPin, Users } from 'lucide-react'
import SectionHeader from './SectionHeader'

const EXPERIENCE = {
  title: 'Committee Member — Web Development Team',
  org: 'MoraLenz Club — University of Moratuwa',
  period: '2025 — Present',
  location: 'Moratuwa, Sri Lanka',
  bullets: [
    'Contribute to the design and development of the official MoraLenz Club website.',
    'Collaborate with designers and fellow developers to implement responsive, user-friendly web interfaces.',
    'Participate in planning and development using modern web technologies and version control.',
    'Work in an agile team environment by attending meetings, reviewing progress, and contributing ideas that improve the website’s functionality and user experience.',
  ],
  tags: ['Web Development', 'Responsive Design', 'Version Control', 'Agile Collaboration'],
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="experience"
          title="Work &"
          highlight="Experience"
          subtitle="Collaborative web development experience at the University of Moratuwa."
        />

        <article className="glass" style={{
          maxWidth: 880,
          margin: '0 auto',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          borderLeft: '3px solid var(--primary)',
          transition: 'all 0.3s ease',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,102,241,0.14)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(99,102,241,0.12)',
                border: '1px solid rgba(99,102,241,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--primary-light)', flexShrink: 0,
              }}>
                <Users size={20} />
              </div>
              <div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                  color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>Committee Experience</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text)', margin: '3px 0 0',
                }}>{EXPERIENCE.title}</h3>
              </div>
            </div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 11px', borderRadius: 100,
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
              fontSize: '0.7rem', color: 'var(--green)', fontFamily: 'var(--font-mono)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }} />
              Current
            </span>
          </div>

          <div style={{ color: 'var(--primary-light)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.65rem' }}>
            {EXPERIENCE.org}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.25rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={13} /> {EXPERIENCE.period}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><MapPin size={13} /> {EXPERIENCE.location}</span>
          </div>

          <ul style={{ margin: '0 0 1.5rem', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {EXPERIENCE.bullets.map(bullet => (
              <li key={bullet} style={{ display: 'flex', gap: 9, color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.65 }}>
                <span style={{ color: 'var(--primary-light)', flexShrink: 0 }}>▸</span>
                {bullet}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {EXPERIENCE.tags.map(tag => (
              <span key={tag} style={{
                padding: '4px 9px', borderRadius: 6,
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.18)',
                fontSize: '0.68rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)',
              }}>{tag}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
