"use client"

import { Briefcase, Users, FlaskConical, Code2 } from 'lucide-react'
import SectionHeader from './SectionHeader'

const EXPERIENCES = [
  {
    icon: <FlaskConical size={18} />,
    type: 'Research',
    title: 'Undergraduate Research Assistant',
    org: 'Computer Vision Lab — State Technical University',
    period: 'Sep 2024 — Present',
    location: 'On-Campus',
    desc: 'Conducting research on real-time multi-object tracking for autonomous navigation systems. Implementing and benchmarking state-of-the-art transformer-based detection models.',
    bullets: [
      'Improved tracking accuracy by 7% over baseline using custom data augmentation',
      'Co-authored internal technical report on ByteTrack vs. StrongSORT comparison',
      'Maintained codebase of 4,000+ lines across 3 research modules',
    ],
    tags: ['Python', 'PyTorch', 'OpenCV', 'YOLOv9'],
    color: 'var(--teal)',
    status: 'current',
  },
  {
    icon: <Users size={18} />,
    type: 'Team Project',
    title: 'Lead Developer',
    org: 'SnapStock AI — Senior Project Team',
    period: 'Jan 2024 — May 2024',
    location: 'University Project',
    desc: 'Led a 4-person team to design and deliver an AI-powered inventory management system in a single semester. Architected the full-stack system and mentored junior team members.',
    bullets: [
      'Shipped production-ready system under 5-month deadline',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Project awarded "Best Computer Vision Application" at department showcase',
    ],
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'YOLOv8'],
    color: 'var(--primary)',
    status: 'completed',
  },
  {
    icon: <Code2 size={18} />,
    type: 'Open Source',
    title: 'Open Source Contributor',
    org: 'Various GitHub Projects',
    period: 'Mar 2023 — Present',
    location: 'Remote',
    desc: 'Regular contributor to Python and JavaScript open-source projects. Focused on bug fixes, documentation improvements, and feature additions to developer tooling.',
    bullets: [
      'Merged 14 pull requests across 6 different repositories',
      'Fixed critical pagination bug in popular React component library (1.2k⭐)',
      'Contributed async improvements to FastAPI middleware module',
    ],
    tags: ['Python', 'TypeScript', 'React', 'GitHub'],
    color: 'var(--accent)',
    status: 'current',
  },
  {
    icon: <Briefcase size={18} />,
    type: 'Internship',
    title: 'Software Engineering Intern',
    org: 'Available Summer 2025',
    period: 'Expected Summer 2025',
    location: 'Open to Relocation',
    desc: 'Actively seeking a summer software engineering internship at innovative technology companies. Interested in AI/ML, full-stack engineering, and cloud infrastructure.',
    bullets: [
      'Strong fundamentals in data structures and algorithms',
      'Experience with production systems through university projects',
      'Available for full-time internship starting June 2025',
    ],
    tags: ['Seeking', 'AI/ML', 'Full Stack', 'Cloud'],
    color: 'var(--green)',
    status: 'upcoming',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="experience"
          title="Work &"
          highlight="Experience"
          subtitle="Projects, research, and contributions that shaped my engineering journey."
        />

        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          {/* Center line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: 2, background: 'linear-gradient(to bottom, transparent, var(--primary), var(--accent), transparent)',
            transform: 'translateX(-50%)',
          }} className="hidden md:block" />

          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              marginBottom: '2rem',
              position: 'relative',
            }}>
              {/* Center dot */}
              <div style={{
                position: 'absolute', left: '50%', top: 28,
                transform: 'translateX(-50%)',
                width: 14, height: 14, borderRadius: '50%',
                background: exp.color,
                border: '3px solid var(--bg)',
                boxShadow: `0 0 0 4px ${exp.color}25`,
                zIndex: 1,
              }} className="hidden md:block" />

              {/* Card — alternates left/right on desktop */}
              <div className="glass" style={{
                width: '100%',
                maxWidth: '92%',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                borderLeft: `3px solid ${exp.color}`,
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${exp.color}20` }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: `${exp.color}18`,
                      border: `1px solid ${exp.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: exp.color,
                    }}>{exp.icon}</div>
                    <div>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                        color: exp.color, textTransform: 'uppercase', letterSpacing: '0.1em',
                      }}>{exp.type}</span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)', fontWeight: 700,
                        fontSize: '1.05rem', color: 'var(--text)', margin: 0,
                      }}>{exp.title}</h3>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {exp.status === 'current' && (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
                        fontSize: '0.68rem', color: 'var(--green)',
                        fontFamily: 'var(--font-mono)',
                        marginBottom: 4,
                      }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }} />
                        Active
                      </span>
                    )}
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{exp.period}</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--primary-light)', marginBottom: '0.75rem' }}>
                  {exp.org} · {exp.location}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 1rem' }}>
                  {exp.desc}
                </p>

                {/* Bullets */}
                <ul style={{ margin: '0 0 1.25rem', paddingLeft: 0, listStyle: 'none' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{
                      display: 'flex', gap: 8,
                      color: 'var(--text-muted)', fontSize: '0.84rem',
                      lineHeight: 1.5, marginBottom: 6,
                    }}>
                      <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {exp.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '3px 8px', borderRadius: 6,
                      background: `${exp.color}0f`,
                      border: `1px solid ${exp.color}20`,
                      fontSize: '0.7rem', color: exp.color,
                      fontFamily: 'var(--font-mono)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
