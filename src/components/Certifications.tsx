"use client"

import { Award, Bot, Calendar, Code2, GraduationCap, MapPin } from 'lucide-react'
import SectionHeader from './SectionHeader'

const CREDENTIALS = [
  {
    title: 'Information & Technology Diploma',
    org: 'ICBT Campus',
    date: '2023',
    location: 'Gampaha, Sri Lanka',
    description: 'Completed a Diploma in Information & Technology covering programming fundamentals, networking, databases, and software applications.',
    highlights: [],
    icon: <GraduationCap size={30} />,
    color: 'var(--primary)',
  },
  {
    title: 'Python for Beginners',
    org: 'University of Moratuwa — Centre for Open & Distance Learning (CODL)',
    date: '2026',
    location: 'Sri Lanka',
    description: 'Participated in the Python for Beginners online learning programme conducted by the Department of Computer Science & Engineering, Faculty of Engineering, University of Moratuwa.',
    highlights: [],
    icon: <Code2 size={30} />,
    color: 'var(--teal)',
  },
  {
    title: 'Competitive Programming & Hackathons',
    org: 'University-Level Competitions',
    date: '',
    location: '',
    description: '',
    highlights: [
      'Participated in UoJ Coders, solving algorithmic and programming challenges in a competitive environment.',
      'Competed in MoraXtreme 10.0, an overnight coding competition focused on problem solving and teamwork.',
      'Participated in CodeRally, gaining experience in collaborative software development and rapid solution design.',
    ],
    icon: <Award size={30} />,
    color: 'var(--accent)',
  },
  {
    title: 'Robotics Competitions',
    org: 'University Competitions',
    date: '',
    location: '',
    description: '',
    highlights: [
      'SLRC 2025 — Finalist in the Sri Lanka Robotics Challenge.',
      'SLRC 2026 — Finalist in the Sri Lanka Robotics Challenge.',
      'MicroMaze 2.0 — Achieved a Top 10 finish in an autonomous robotics competition.',
    ],
    icon: <Bot size={30} />,
    color: 'var(--green)',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="credentials"
          title="Certificates &"
          highlight="Credentials"
          subtitle="Technical education, programming competitions, and robotics achievements."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch',
        }}>
          {CREDENTIALS.map(credential => (
            <article
              key={credential.title}
              className="glass"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                display: 'flex', flexDirection: 'column',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 16px 48px ${credential.color}18`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                height: 120,
                position: 'relative', overflow: 'hidden',
                background: `linear-gradient(135deg, ${credential.color}22, rgba(13,17,32,0.92))`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 62, height: 62, borderRadius: 18,
                  background: `${credential.color}18`,
                  border: `1px solid ${credential.color}35`,
                  color: credential.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 8px 28px ${credential.color}18`,
                }}>
                  {credential.icon}
                </div>
              </div>

              <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1rem', color: 'var(--text)', margin: '0 0 0.45rem', lineHeight: 1.4,
                }}>{credential.title}</h3>
                <p style={{ color: credential.color, fontSize: '0.78rem', margin: '0 0 0.8rem', fontWeight: 600, lineHeight: 1.5 }}>
                  {credential.org}
                </p>

                {(credential.date || credential.location) && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1rem', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                    {credential.date && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Calendar size={12} /> {credential.date}</span>}
                    {credential.location && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><MapPin size={12} /> {credential.location}</span>}
                  </div>
                )}

                {credential.description && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.65, margin: 0 }}>
                    {credential.description}
                  </p>
                )}

                {credential.highlights.length > 0 && (
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {credential.highlights.map(highlight => (
                      <li key={highlight} style={{ display: 'flex', gap: 7, color: 'var(--text-muted)', fontSize: '0.76rem', lineHeight: 1.55 }}>
                        <span style={{ color: credential.color, flexShrink: 0 }}>▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
