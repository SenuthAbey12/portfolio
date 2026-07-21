"use client"

import { Brain, Code2, Eye, Server, Calendar, GraduationCap, Trophy, GitBranch , Workflow } from 'lucide-react'
import SectionHeader from './SectionHeader'

const INTERESTS = [
  { icon: <Server size={20} />, label: 'Full Stack Development', color: 'var(--green)' },
  { icon: <Workflow size={20} />, label: 'DevOps & Cloud', color: 'var(--red)' },
  { icon: <Brain size={20} />, label: 'Artificial Intelligence', color: 'var(--primary)' },
  { icon: <Eye size={20} />, label: 'Machine Learning', color: 'var(--accent)' },
  { icon: <Code2 size={20} />, label: 'Computer Vision', color: 'var(--teal)' },
  
]

const STATS = [
  { value: '', label: 'Projects Completed', icon: <Code2 size={20} /> },
  { value: '20+', label: 'Technologies Learned', icon: <Brain size={20} /> },
  { value: '138', label: 'GitHub Contributions', icon: <GitBranch size={20} /> },
  { value: '4+', label: 'Years of Programming', icon: <Calendar size={20} /> },
]

const TIMELINE = [
  { year: '2023', title: 'Started Programming', desc: 'Wrote first Python script, discovered a passion for problem-solving and automation.' },
  { year: '2024', title: 'Joined University', desc: 'Enrolled in B.S. Computer Science & Engineering at University of Moratuwa.' },
  { year: '2024', title: 'Built First Web App', desc: 'Developed a full-stack task manager with React and Node.js as a self-taught project.' },
  { year: '2025', title: 'First Web Development Project', desc: 'Built a full-stack logistics management system to automate rail-road supply chain operations, order allocation, and delivery tracking.' },
  { year: '2026', title: 'SnapStock AI', desc: 'Led team to build an AI-powered inventory management system using Computer Vision.' },
  { year: '2026', title: 'AI Resume Screening Platform', desc: 'Built an AI-powered recruitment platform that automates resume screening, candidate ranking, and job matching to help recruiters make faster hiring decisions.' },
]

export default function About() {
  return (
    <section id="about" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 50%, var(--bg) 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="about"
          title="About"
          highlight="Me"
          subtitle="A passionate CS student bridging theory and practice through impactful projects."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Bio column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1.2rem', color: 'var(--text)', marginBottom: '1rem'
              }}>Who I Am</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                I'm <strong>Senuth Abeywardana</strong>, a third-year Computer Science &amp; Engineering undergraduate student at the
                <strong> University of Moratuwa</strong>. My primary interests are Full Stack Development and DevOps, complemented
                by hands-on experience in Artificial Intelligence, Machine Learning,Deep Learning and Computer Vision. I enjoy building scalable software, learning
                modern technologies, and creating solutions that have a meaningful real-world impact.
              </p>
            </div>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1.2rem', color: 'var(--text)', marginBottom: '1rem'
              }}>Career Objective</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                To build scalable, high-quality software that solves real-world problems and delivers meaningful user experiences.
                I aspire to grow as a Full Stack Software Engineer while expanding my expertise in DevOps, cloud technologies,
                and Artificial Intelligence to develop innovative and impactful solutions while growing under experienced engineers.
              </p>
            </div>

            {/* Areas of interest */}
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1.2rem', color: 'var(--text)', marginBottom: '1.25rem'
              }}>Areas of Interest</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {INTERESTS.map(item => (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '0.75rem 1rem',
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                  >
                    <div style={{ color: item.color, flexShrink: 0 }}>{item.icon}</div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline column */}
          <div>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1.2rem', color: 'var(--text)', marginBottom: '1.75rem',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <GraduationCap size={20} style={{ color: 'var(--primary)' }} />
                Academic Journey
              </h3>
              <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                <div className="timeline-line" />
                {TIMELINE.map((item, i) => (
                  <div key={i} style={{
                    marginBottom: i < TIMELINE.length - 1 ? '1.75rem' : 0,
                    position: 'relative',
                  }}>
                    {/* Dot */}
                    <div style={{
                      position: 'absolute', left: -32,
                      width: 12, height: 12,
                      borderRadius: '50%',
                      background: i === TIMELINE.length - 1 ? 'var(--accent)' : 'var(--primary)',
                      border: '2px solid var(--bg)',
                      boxShadow: `0 0 0 3px ${i === TIMELINE.length - 1 ? 'rgba(168,85,247,0.2)' : 'rgba(99,102,241,0.2)'}`,
                      top: 4,
                    }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                        color: 'var(--primary-light)', background: 'rgba(99,102,241,0.1)',
                        padding: '2px 8px', borderRadius: 4,
                      }}>{item.year}</span>
                      <span style={{
                        fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)'
                      }}>{item.title}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
        }}>
          {STATS.map((stat, i) => (
            <div key={i} className="glass glow-on-hover" style={{
              padding: '1.75rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: `rgba(${i % 4 === 0 ? '99,102,241' : i % 4 === 1 ? '168,85,247' : i % 4 === 2 ? '6,182,212' : '16,185,129'},0.15)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1rem',
                color: [' var(--primary)', 'var(--accent)', 'var(--teal)', 'var(--green)'][i],
              }}>{stat.icon}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '2rem',
                fontWeight: 800, color: 'var(--text)',
                background: 'var(--gradient-text)', WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>{stat.value}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
