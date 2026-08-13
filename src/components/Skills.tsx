"use client"

import { useState } from 'react'
import { Brain, ChevronRight, Code2, Database, Layout, Server, Sparkles, Wrench } from 'lucide-react'
import SectionHeader from './SectionHeader'

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    short: 'Core programming',
    description: 'Languages I use to solve problems, build applications, and explore new engineering ideas.',
    icon: <Code2 size={19} />,
    skills: [
      { name: 'Python', desc: 'AI, automation, and backend development', mark: 'PY' },
      { name: 'Java', desc: 'OOP, Swing, concurrency, and desktop applications', mark: 'JV' },
      { name: 'JavaScript', desc: 'Modern interactive web development', mark: 'JS' },
      { name: 'TypeScript', desc: 'Type-safe web applications', mark: 'TS' },
      { name: 'C++', desc: 'Algorithms and systems programming', mark: 'C+' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    short: 'Interface engineering',
    description: 'Tools for creating responsive, accessible, and polished user experiences across web and desktop.',
    icon: <Layout size={19} />,
    skills: [
      { name: 'React', desc: 'Component-based interfaces', mark: 'RE' },
      { name: 'Next.js', desc: 'Full-stack React applications', mark: 'NX' },
      { name: 'HTML', desc: 'Semantic web structure', mark: 'HT' },
      { name: 'CSS', desc: 'Responsive layouts and animation', mark: 'CS' },
      { name: 'Tailwind CSS', desc: 'Utility-first styling', mark: 'TW' },
      { name: 'Java Swing', desc: 'Desktop user interfaces', mark: 'SW' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    short: 'Services and APIs',
    description: 'Frameworks I use to design APIs, application logic, and maintainable server-side systems.',
    icon: <Server size={19} />,
    skills: [
      { name: 'FastAPI', desc: 'Python REST APIs', mark: 'FA' },
      { name: 'Node.js', desc: 'Server-side JavaScript', mark: 'NO' },
      { name: 'Express', desc: 'Node.js web services', mark: 'EX' },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    short: 'Intelligent systems',
    description: 'Technologies for learning from data, processing images, and building computer-vision solutions.',
    icon: <Brain size={19} />,
    skills: [
      { name: 'TensorFlow', desc: 'Deep-learning workflows', mark: 'TF' },
      { name: 'OpenCV', desc: 'Image processing and computer vision', mark: 'CV' },
      { name: 'YOLO', desc: 'Real-time object detection', mark: 'YO' },
    ],
  },
  {
    id: 'database',
    label: 'Databases',
    short: 'Data management',
    description: 'Relational and document databases for reliable storage, querying, and application data design.',
    icon: <Database size={19} />,
    skills: [
      { name: 'PostgreSQL', desc: 'Relational data management', mark: 'PG' },
      { name: 'MongoDB', desc: 'Document-oriented data storage', mark: 'MO' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    short: 'Developer workflow',
    description: 'Everyday tools for collaboration, repeatable environments, source control, and productive development.',
    icon: <Wrench size={19} />,
    skills: [
      { name: 'Git', desc: 'Version control and collaboration', mark: 'GT' },
      { name: 'GitHub', desc: 'Code hosting and teamwork', mark: 'GH' },
      { name: 'Docker', desc: 'Containerized development', mark: 'DK' },
      { name: 'Linux', desc: 'Development and shell environments', mark: 'LX' },
      { name: 'VS Code', desc: 'Development environment', mark: 'VS' },
    ],
  },
]

export default function Skills() {
  const [activeId, setActiveId] = useState(SKILL_CATEGORIES[0].id)
  const active = SKILL_CATEGORIES.find(category => category.id === activeId) ?? SKILL_CATEGORIES[0]
  const totalSkills = SKILL_CATEGORIES.reduce((total, category) => total + category.skills.length, 0)
  const accent = '#818cf8'

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.22,
        backgroundImage: 'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'linear-gradient(to bottom, transparent, black 22%, black 78%, transparent)',
      }} />
      <div style={{
        position: 'absolute', width: 420, height: 420, borderRadius: '50%',
        top: '18%', left: '50%', transform: 'translateX(-50%)',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent 68%)',
        filter: 'blur(32px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        <SectionHeader
          tag="skills"
          title="Technical"
          highlight="Toolkit"
          subtitle="Explore the technologies I use to turn ideas into working software."
        />

        <div className="skills-explorer-layout">
          <aside className="glass" style={{
            borderRadius: 'var(--radius-xl)', padding: '1rem',
            display: 'flex', flexDirection: 'column', gap: 7,
            alignSelf: 'start',
          }}>
            <div style={{ padding: '0.75rem 0.8rem 1rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontFamily: 'var(--font-mono)', fontSize: '0.66rem',
                color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.1em',
              }}><Sparkles size={12} /> Skill Explorer</span>
              <div style={{ marginTop: 7, color: 'var(--text)', fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700 }}>
                {totalSkills} technologies
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', lineHeight: 1.5, margin: '5px 0 0' }}>
                Select a category to explore.
              </p>
            </div>

            <div className="skills-category-list">
              {SKILL_CATEGORIES.map(category => {
                const selected = category.id === active.id
                return (
                  <button
                    key={category.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveId(category.id)}
                    style={{
                      width: '100%', border: selected ? '1px solid rgba(99,102,241,0.32)' : '1px solid transparent',
                      background: selected ? 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(99,102,241,0.035))' : 'transparent',
                      borderRadius: 13, padding: '0.8rem', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 11, textAlign: 'left',
                      fontFamily: 'var(--font-sans)', transition: 'all 0.25s ease',
                    }}
                  >
                    <span style={{
                      width: 38, height: 38, borderRadius: 11, flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: selected ? accent : 'var(--text-muted)',
                      background: selected ? 'rgba(99,102,241,0.13)' : 'rgba(148,163,184,0.06)',
                      border: selected ? '1px solid rgba(99,102,241,0.25)' : '1px solid rgba(148,163,184,0.1)',
                      boxShadow: selected ? '0 7px 20px rgba(99,102,241,0.1)' : 'none',
                    }}>{category.icon}</span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ display: 'block', color: selected ? 'var(--text)' : 'var(--text-muted)', fontWeight: 650, fontSize: '0.83rem' }}>
                        {category.label}
                      </span>
                      <span style={{ display: 'block', color: 'var(--text-dim)', fontSize: '0.64rem', marginTop: 2 }}>
                        {category.short}
                      </span>
                    </span>
                    <ChevronRight size={14} style={{ color: selected ? accent : 'var(--text-dim)', transform: selected ? 'translateX(2px)' : 'none', transition: 'all 0.2s' }} />
                  </button>
                )
              })}
            </div>
          </aside>

          <article className="glass skills-stage" style={{
            borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative',
            border: '1px solid rgba(99,102,241,0.2)',
            boxShadow: '0 24px 80px rgba(15,23,42,0.14)',
            transition: 'border-color 0.35s, box-shadow 0.35s',
          }}>
            <div style={{
              position: 'absolute', top: -150, right: -110, width: 360, height: 360, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.13), transparent 68%)',
              filter: 'blur(16px)', pointerEvents: 'none',
            }} />
            <div style={{
              height: 3, width: '100%',
              background: 'linear-gradient(90deg, transparent, #6366f1 35%, #38bdf8 65%, transparent)',
            }} />

            <div key={active.id} className="skills-panel-enter" style={{ padding: 'clamp(1.5rem, 4vw, 2.25rem)', position: 'relative' }}>
              <div style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                gap: 20, flexWrap: 'wrap', marginBottom: '1.75rem',
              }}>
                <div style={{ maxWidth: 590 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 10 }}>
                    <span style={{
                      width: 44, height: 44, borderRadius: 13,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: accent, background: 'rgba(99,102,241,0.11)',
                      border: '1px solid rgba(99,102,241,0.22)',
                    }}>{active.icon}</span>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: accent, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                        Selected category
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                        color: 'var(--text)', margin: '2px 0 0', fontWeight: 800,
                      }}>{active.label}</h3>
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.7, margin: 0 }}>
                    {active.description}
                  </p>
                </div>
                <span style={{
                  padding: '6px 11px', borderRadius: 100,
                  background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)',
                  color: accent, fontFamily: 'var(--font-mono)', fontSize: '0.66rem',
                }}>{active.skills.length} technologies</span>
              </div>

              <div className="skills-tile-grid">
                {active.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={index === 0 && active.skills.length > 3 ? 'skill-explorer-tile skill-explorer-featured' : 'skill-explorer-tile'}
                    style={{
                      padding: '1rem', borderRadius: 14,
                      background: index === 0 ? 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(255,255,255,0.025))' : 'rgba(255,255,255,0.025)',
                      border: index === 0 ? '1px solid rgba(99,102,241,0.22)' : '1px solid var(--border-subtle)',
                      display: 'flex', alignItems: 'center', gap: 12,
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={event => {
                      event.currentTarget.style.transform = 'translateY(-3px)'
                      event.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
                      event.currentTarget.style.background = 'rgba(99,102,241,0.075)'
                    }}
                    onMouseLeave={event => {
                      event.currentTarget.style.transform = 'translateY(0)'
                      event.currentTarget.style.borderColor = index === 0 ? 'rgba(99,102,241,0.22)' : 'var(--border-subtle)'
                      event.currentTarget.style.background = index === 0 ? 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(255,255,255,0.025))' : 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <span style={{
                      width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: accent, background: 'rgba(99,102,241,0.1)',
                      border: '1px solid rgba(99,102,241,0.18)',
                      fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.68rem',
                    }}>{skill.mark}</span>
                    <span>
                      <span style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>
                        {skill.name}
                      </span>
                      <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                        {skill.desc}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '1.5rem', paddingTop: '1.1rem', borderTop: '1px solid var(--border-subtle)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap',
              }}>
                <span style={{ color: 'var(--text-dim)', fontSize: '0.68rem' }}>Click another category to explore the rest of the toolkit.</span>
                <div style={{ display: 'flex', gap: 5 }}>
                  {SKILL_CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      type="button"
                      aria-label={`Show ${category.label}`}
                      onClick={() => setActiveId(category.id)}
                      style={{
                        width: category.id === active.id ? 22 : 7, height: 7, borderRadius: 100,
                        border: 'none', padding: 0, cursor: 'pointer',
                        background: category.id === active.id ? accent : 'var(--border)',
                        transition: 'all 0.25s ease',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
