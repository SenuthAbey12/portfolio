"use client"

import { Quote } from 'lucide-react'
import SectionHeader from './SectionHeader'

const TESTIMONIALS = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Research Advisor',
    org: 'State Technical University — CV Lab',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
    text: "Alex is one of the most driven undergraduate researchers I've mentored. His ability to quickly prototype deep learning solutions, combined with his rigorous experimental methodology, sets him apart from his peers. He'll thrive in any engineering environment.",
    stars: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Senior Software Engineer',
    org: 'TechFlow Inc. (Mentor)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    text: "I've worked with Alex during our company's mentorship program. His grasp of system design concepts is impressive for his experience level. He asks exactly the right questions and ships clean, maintainable code. A clear standout candidate.",
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Teammate & CS Student',
    org: 'SnapStock AI Project',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&h=80&fit=crop&auto=format',
    text: "Alex led our senior project team with exceptional clarity and calm. When we hit technical blockers — like integrating the YOLO model with our PostgreSQL pipeline — he always had a solution within hours. A natural technical leader.",
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="testimonials"
          title="What People"
          highlight="Say"
          subtitle="Recommendations from teammates, mentors, and collaborators."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i}
              className="glass"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
            >
              {/* Quote icon */}
              <div style={{
                position: 'absolute', top: 20, right: 20,
                width: 36, height: 36, borderRadius: 10,
                background: 'rgba(99,102,241,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Quote size={16} style={{ color: 'var(--primary-light)' }} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: '1.25rem' }}>
                {Array(t.stars).fill(0).map((_, j) => (
                  <span key={j} style={{ color: '#f59e0b', fontSize: '0.9rem' }}>★</span>
                ))}
              </div>

              {/* Text */}
              <p style={{
                color: 'var(--text-muted)', lineHeight: 1.8,
                fontSize: '0.9rem', margin: '0 0 1.5rem',
                fontStyle: 'italic',
              }}>"{t.text}"</p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src={t.avatar} alt={t.name} style={{
                  width: 44, height: 44, borderRadius: '50%',
                  objectFit: 'cover', border: '2px solid rgba(99,102,241,0.25)',
                }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-light)' }}>{t.role}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
