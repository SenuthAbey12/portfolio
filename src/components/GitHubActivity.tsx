"use client"

import { Star, GitFork, GitCommit, Code2, ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import SectionHeader from './SectionHeader'

// Generate fake contribution grid data
function generateContributions() {
  const weeks = 52
  const days = 7
  return Array.from({ length: weeks }, () =>
    Array.from({ length: days }, () => Math.floor(Math.random() * 5))
  )
}

const contributions = generateContributions()

function getColor(level: number) {
  if (level === 0) return 'rgba(255,255,255,0.05)'
  if (level === 1) return 'rgba(99,102,241,0.3)'
  if (level === 2) return 'rgba(99,102,241,0.55)'
  if (level === 3) return 'rgba(99,102,241,0.78)'
  return 'var(--primary)'
}

const TOP_REPOS = [
  { name: 'snapstock-ai', desc: 'Computer Vision inventory system', lang: 'Python', stars: 128, forks: 34, color: '#3572A5' },
  { name: 'neuralchat', desc: 'Context-aware AI chatbot with RAG', lang: 'TypeScript', stars: 84, forks: 19, color: '#2b7489' },
  { name: 'devportal', desc: 'Developer documentation platform', lang: 'TypeScript', stars: 201, forks: 57, color: '#2b7489' },
  { name: 'cv-toolkit', desc: 'Computer vision utility library', lang: 'Python', stars: 62, forks: 15, color: '#3572A5' },
]

const STATS = [
  { label: 'Total Commits', value: '1,247', icon: <GitCommit size={18} /> },
  { label: 'Pull Requests', value: '89', icon: <GitFork size={18} /> },
  { label: 'Repositories', value: '32', icon: <Code2 size={18} /> },
  { label: 'Stars Earned', value: '475', icon: <Star size={18} /> },
]

const LANGUAGES = [
  { name: 'Python', pct: 42, color: '#3572A5' },
  { name: 'TypeScript', pct: 30, color: '#2b7489' },
  { name: 'JavaScript', pct: 14, color: '#f1e05a' },
  { name: 'C++', pct: 8, color: '#f34b7d' },
  { name: 'Other', pct: 6, color: '#555' },
]

export default function GitHubActivity() {
  return (
    <section id="github" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="github"
          title="GitHub"
          highlight="Activity"
          subtitle="Open source contributions, repositories, and coding consistency."
        />

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {STATS.map((stat, i) => (
            <div key={i} className="glass" style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'rgba(99,102,241,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 0.75rem', color: 'var(--primary-light)',
              }}>{stat.icon}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '1.75rem',
                fontWeight: 800, color: 'var(--text)',
              }}
                className="gradient-text"
              >{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {/* Contribution heatmap */}
          <div className="glass" style={{
            padding: '1.75rem',
            borderRadius: 'var(--radius-lg)',
            gridColumn: 'span 1',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '1rem', color: 'var(--text)', margin: '0 0 1.25rem',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <GitCommit size={16} style={{ color: 'var(--primary)' }} />
              Contribution Graph
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>2024</span>
            </h3>

            <div style={{
              display: 'flex', gap: 2, overflowX: 'auto',
            }}>
              {contributions.map((week, wi) => (
                <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {week.map((day, di) => (
                    <div key={di} title={`${day} contributions`} style={{
                      width: 11, height: 11,
                      borderRadius: 2,
                      background: getColor(day),
                      transition: 'transform 0.15s',
                      cursor: 'default',
                    }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.4)')}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 12 }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Less</span>
              {[0, 1, 2, 3, 4].map(l => (
                <div key={l} style={{ width: 11, height: 11, borderRadius: 2, background: getColor(l) }} />
              ))}
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>More</span>
            </div>
          </div>

          {/* Languages */}
          <div className="glass" style={{
            padding: '1.75rem',
            borderRadius: 'var(--radius-lg)',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '1rem', color: 'var(--text)', margin: '0 0 1.5rem',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <Code2 size={16} style={{ color: 'var(--accent)' }} />
              Most Used Languages
            </h3>

            {/* Stacked bar */}
            <div style={{ display: 'flex', height: 10, borderRadius: 5, overflow: 'hidden', marginBottom: '1.25rem' }}>
              {LANGUAGES.map(lang => (
                <div key={lang.name} style={{ width: `${lang.pct}%`, background: lang.color }} />
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {LANGUAGES.map(lang => (
                <div key={lang.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: lang.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text)', flex: 1 }}>{lang.name}</span>
                  <div style={{
                    height: 4, flex: '0 0 100px',
                    background: 'rgba(255,255,255,0.06)', borderRadius: 2,
                  }}>
                    <div style={{ width: `${lang.pct}%`, height: '100%', background: lang.color, borderRadius: 2 }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', width: 36, textAlign: 'right' }}>
                    {lang.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top repos */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '1.1rem', color: 'var(--text)', margin: '0 0 1.25rem',
          }}>Pinned Repositories</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
          }}>
            {TOP_REPOS.map(repo => (
              <a key={repo.name} href="#" style={{
                textDecoration: 'none',
                display: 'block',
              }}>
                <div className="glass" style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.3)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <SiGithub size={14} style={{ color: 'var(--text-muted)' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-light)' }}>
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink size={13} style={{ color: 'var(--text-dim)' }} />
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 0.75rem', lineHeight: 1.5 }}>
                    {repo.desc}
                  </p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: repo.color }} />
                      {repo.lang}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                      <Star size={11} style={{ color: '#f59e0b' }} /> {repo.stars}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                      <GitFork size={11} style={{ color: 'var(--teal)' }} /> {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
