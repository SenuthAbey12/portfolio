"use client"

import { useState } from 'react'
import { ExternalLink, BookOpen, Star, GitFork, ChevronRight } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import SectionHeader from './SectionHeader'

const PROJECTS = [
  {
    id: 1,
    featured: true,
    title: 'SnapStock AI',
    subtitle: 'AI-Powered Inventory Management System',
    desc: 'A production-grade inventory management platform leveraging Computer Vision and Deep Learning. Uses YOLOv8 for real-time product recognition, enabling automatic stock counting and anomaly detection with 94.3% accuracy.',
    image: '/img1.png',
    tags: ['Python', 'YOLOv8', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    features: ['Real-time object detection at 30 FPS', '94.3% inventory accuracy', 'Auto-reorder alerts', 'Dashboard analytics'],
    stars: 128,
    forks: 34,
    github: '#',
    demo: '#',
    caseStudy: '#',
    color: 'var(--primary)',
  },
  {
    id: 2,
    featured: false,
    title: 'AI Resume Screening',
    subtitle: 'LLM-Powered Recruitment Platform',
    desc: 'An AI-powered recruitment platform that automatically parses resumes, extracts candidate information, and matches applicants to job descriptions using Large Language Models. Built with a scalable microservice architecture, FastAPI, PostgreSQL, and modern DevOps practices for enterprise-ready deployment.',
    image: '/img2.png',
    tags: ['Python', 'FastAPI', 'LLM', 'PostgreSQL', 'Next.js', 'Docker'],
    features: [
      'Resume parsing',
      'AI candidate matching',
      'LLM extraction',
      'Recruiter dashboard'
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/SenuthAbey12/AI-Powered-Resume-Screening-Platform',
    demo: '#',
    caseStudy: '#',
    color: 'var(--accent)',
  },
  {
    id: 3,
    featured: false,
    title: 'Nova Assistant',
    subtitle: 'AI Desktop Assistant for Windows',
    desc: 'An intelligent Windows desktop assistant that executes natural language commands, launches applications, monitors system resources, manages files, and provides conversational AI capabilities. Designed with modular services, local memory, and extensible command execution for everyday productivity.',
    image: '/img3.png',
    tags: ['Python', 'LLM', 'Windows', 'FastAPI', 'Speech', 'Automation'],
    features: [
      'Voice commands',
      'System monitoring',
      'Application launcher',
      'File management'
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/SenuthAbey12',
    demo: '#',
    caseStudy: '#',
    color: 'var(--teal)',
  },
  {
    id: 4,
    featured: false,
    title: 'GradeFlow',
    subtitle: 'Academic Performance Tracker',
    desc: 'A student-centric web app that aggregates grades across courses, predicts final GPA using ML models, and sends smart study reminders based on upcoming deadlines.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop&auto=format',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Python', 'Chart.js'],
    features: ['GPA prediction', 'Study reminders', 'Grade analytics', 'Course planner'],
    stars: 56,
    forks: 12,
    github: '#',
    demo: '#',
    caseStudy: null,
    color: 'var(--green)',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const featured = PROJECTS.find(p => p.featured)!
  const others = PROJECTS.filter(p => !p.featured)

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
          subtitle="A selection of projects that showcase my technical depth and creative problem-solving."
        />

        {/* Featured project */}
        <div className="glass project-card" style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          marginBottom: '2rem',
          transition: 'all 0.4s ease',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}>
          {/* Image */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: 280 }}>
            <img
              src={featured.image}
              alt={featured.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
              onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
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
            }}>⭐ Featured Project</div>
          </div>

          {/* Content */}
          <div style={{ padding: '2.5rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--primary-light)' }}>{featured.subtitle}</span>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.75rem',
              fontWeight: 800, color: 'var(--text)', margin: '0 0 1rem',
            }}>{featured.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 1.25rem', fontSize: '0.95rem' }}>
              {featured.desc}
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1.5rem' }}>
              {featured.features.map(f => (
                <div key={f} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: '0.78rem', color: 'var(--text-muted)',
                }}>
                  <ChevronRight size={12} style={{ color: 'var(--primary)' }} />
                  {f}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.75rem' }}>
              {featured.tags.map(tag => (
                <span key={tag} style={{
                  padding: '4px 10px', borderRadius: 6,
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  fontSize: '0.72rem', color: 'var(--primary-light)',
                  fontFamily: 'var(--font-mono)',
                }}>{tag}</span>
              ))}
            </div>

            {/* Metrics + Actions */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Star size={14} style={{ color: '#f59e0b' }} /> {featured.stars}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <GitFork size={14} style={{ color: 'var(--teal)' }} /> {featured.forks}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <a href={featured.github} style={{
                  padding: '0.55rem 1rem', borderRadius: 10,
                  border: '1px solid var(--border)', background: 'rgba(255,255,255,0.04)',
                  color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.82rem',
                  display: 'flex', alignItems: 'center', gap: 6,
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.4)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
                >
                  <SiGithub size={14} /> GitHub
                </a>
                <a href={featured.demo} style={{
                  padding: '0.55rem 1rem', borderRadius: 10,
                  background: 'var(--gradient)', color: '#fff',
                  textDecoration: 'none', fontSize: '0.82rem',
                  display: 'flex', alignItems: 'center', gap: 6,
                  boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href={featured.caseStudy!} style={{
                  padding: '0.55rem 1rem', borderRadius: 10,
                  border: '1px solid var(--border)', background: 'rgba(255,255,255,0.04)',
                  color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.82rem',
                  display: 'flex', alignItems: 'center', gap: 6,
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,85,247,0.4)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent-light)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
                >
                  <BookOpen size={14} /> Case Study
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {others.map(project => (
            <div key={project.id}
              className="glass project-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    transform: hoveredId === project.id ? 'scale(1.06)' : 'scale(1)',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, rgba(8,11,20,0.9) 0%, transparent 60%)`,
                }} />
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1.15rem', color: 'var(--text)', margin: '0 0 0.4rem',
                }}>{project.title}</h3>
                <p style={{
                  color: 'var(--text-muted)', fontSize: '0.85rem',
                  lineHeight: 1.6, margin: '0 0 1.25rem',
                  display: '-webkit-box', WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>{project.desc}</p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '1.25rem' }}>
                  {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} style={{
                      padding: '3px 8px', borderRadius: 5,
                      background: 'rgba(99,102,241,0.08)',
                      border: '1px solid rgba(99,102,241,0.15)',
                      fontSize: '0.68rem', color: 'var(--primary-light)',
                      fontFamily: 'var(--font-mono)',
                    }}>{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span style={{
                      padding: '3px 8px', borderRadius: 5,
                      background: 'rgba(255,255,255,0.05)',
                      fontSize: '0.68rem', color: 'var(--text-dim)',
                    }}>+{project.tags.length - 4}</span>
                  )}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-dim)', fontSize: '0.78rem' }}>
                      <Star size={12} style={{ color: '#f59e0b' }} /> {project.stars}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-dim)', fontSize: '0.78rem' }}>
                      <GitFork size={12} style={{ color: 'var(--teal)' }} /> {project.forks}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <a href={project.github} style={{
                      width: 32, height: 32, borderRadius: 8,
                      border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-muted)', textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.15)'; (e.currentTarget as HTMLElement).style.color = 'var(--primary-light)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
                    ><SiGithub size={14} /></a>
                    <a href={project.demo} style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: 'var(--gradient)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', textDecoration: 'none',
                      transition: 'transform 0.2s',
                    }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.05)')}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                    ><ExternalLink size={14} /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="https://github.com/SenuthAbey12" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '0.75rem 1.75rem',
            borderRadius: 12,
            border: '1px solid var(--border)',
            background: 'rgba(255,255,255,0.04)',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.9rem', fontWeight: 500,
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.4)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
          >
            <SiGithub size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
