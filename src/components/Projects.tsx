"use client"

import { useState } from 'react'
import { Film } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import SectionHeader from './SectionHeader'

type Project = {
  id: number
  featured: boolean
  title: string
  subtitle: string
  period: string
  desc: string
  image: string | null
  tags: string[]
  github: string
  color: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    featured: true,
    title: 'SnapStock AI',
    subtitle: 'AI-Powered Inventory Management System',
    period: '2026',
    desc: 'AI inventory platform for real-time product recognition, stock counting, and anomaly detection.',
    image: '/img1.png',
    tags: ['Python', 'YOLOv8', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/SenuthAbey12',
    color: 'var(--primary)',
  },
  {
    id: 2,
    featured: false,
    title: 'AI Resume Screening',
    subtitle: 'LLM-Powered Recruitment Platform',
    period: '2026',
    desc: 'LLM-powered platform for resume parsing, candidate ranking, and job matching.',
    image: '/img2.png',
    tags: ['Python', 'FastAPI', 'LLM', 'PostgreSQL', 'Next.js', 'Docker'],
    github: 'https://github.com/SenuthAbey12/AI-Powered-Resume-Screening-Platform',
    color: 'var(--accent)',
  },
  {
    id: 3,
    featured: false,
    title: 'Movie Ticket Reservation System',
    subtitle: 'Java Desktop Reservation Application',
    period: '2025',
    desc: 'Java Swing application for show scheduling, visual seat selection, bookings, and ticket generation.',
    image: null,
    tags: ['Java', 'Swing', 'OOP', 'Multithreading', 'Synchronization', 'Serialization'],
    github: 'https://github.com/SenuthAbey12',
    color: 'var(--teal)',
  },
  {
    id: 4,
    featured: false,
    title: 'Nova Assistant',
    subtitle: 'AI Desktop Assistant for Windows',
    period: '2025',
    desc: 'Windows assistant for voice commands, application launching, file management, and system monitoring.',
    image: '/img3.png',
    tags: ['Python', 'LLM', 'Windows', 'FastAPI', 'Speech', 'Automation'],
    github: 'https://github.com/SenuthAbey12',
    color: 'var(--green)',
  },
]

function GitHubLink({ href, compact = false }: { href: string; compact?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="View project on GitHub"
      style={{
        padding: compact ? '0.5rem 0.8rem' : '0.6rem 1.1rem',
        borderRadius: 10,
        border: '1px solid var(--border)',
        background: 'rgba(255,255,255,0.04)',
        color: 'var(--text-muted)',
        textDecoration: 'none',
        fontSize: compact ? '0.76rem' : '0.82rem',
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
        e.currentTarget.style.color = 'var(--text)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.color = 'var(--text-muted)'
      }}
    >
      <SiGithub size={14} /> GitHub
    </a>
  )
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const featured = PROJECTS.find(project => project.featured)!
  const others = PROJECTS.filter(project => !project.featured)

  return (
    <section id="projects" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="projects"
          title="Featured"
          highlight="Projects"
          subtitle="Selected software projects demonstrating practical engineering, AI, and problem-solving skills."
        />

        <div className="glass project-card" style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          marginBottom: '2rem',
          transition: 'all 0.4s ease',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}>
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: 250 }}>
            <img
              src={featured.image!}
              alt={featured.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(8,11,20,0.8) 0%, transparent 60%)',
            }} />
            <div style={{
              position: 'absolute', top: 16, left: 16,
              padding: '6px 14px', borderRadius: 100,
              background: 'var(--gradient)',
              fontSize: '0.7rem', fontWeight: 600, color: '#fff',
              fontFamily: 'var(--font-mono)',
            }}>Featured Project</div>
          </div>

          <div style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--primary-light)' }}>{featured.subtitle}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>{featured.period}</span>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.75rem',
              fontWeight: 800, color: 'var(--text)', margin: '0 0 1rem',
            }}>{featured.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, margin: '0 0 1.25rem', fontSize: '0.9rem' }}>
              {featured.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.75rem' }}>
              {featured.tags.slice(0, 5).map(tag => (
                <span key={tag} style={{
                  padding: '4px 10px', borderRadius: 6,
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  fontSize: '0.72rem', color: 'var(--primary-light)',
                  fontFamily: 'var(--font-mono)',
                }}>{tag}</span>
              ))}
            </div>

            <GitHubLink href={featured.github} />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch',
        }}>
          {others.map(project => (
            <article
              key={project.id}
              className="glass project-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'all 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={{ height: 165, overflow: 'hidden', position: 'relative' }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      transform: hoveredId === project.id ? 'scale(1.06)' : 'scale(1)',
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.24), rgba(99,102,241,0.2))',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
                    color: project.color,
                  }}>
                    <Film size={44} />
                    <span style={{ color: 'var(--text)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem' }}>
                      Movie Reservation System
                    </span>
                  </div>
                )}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,11,20,0.9) 0%, transparent 60%)' }} />
                <span style={{
                  position: 'absolute', right: 14, bottom: 12,
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#fff',
                  padding: '3px 8px', borderRadius: 6, background: 'rgba(8,11,20,0.65)',
                }}>{project.period}</span>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: project.color, marginBottom: 6 }}>
                  {project.subtitle}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1.15rem', color: 'var(--text)', margin: '0 0 0.65rem',
                }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6, margin: '0 0 1rem' }}>
                  {project.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '1.25rem' }}>
                  {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} style={{
                      padding: '3px 8px', borderRadius: 5,
                      background: 'rgba(99,102,241,0.08)',
                      border: '1px solid rgba(99,102,241,0.15)',
                      fontSize: '0.66rem', color: 'var(--primary-light)',
                      fontFamily: 'var(--font-mono)',
                    }}>{tag}</span>
                  ))}
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <GitHubLink href={project.github} compact />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <GitHubLink href="https://github.com/SenuthAbey12" />
        </div>
      </div>
    </section>
  )
}
