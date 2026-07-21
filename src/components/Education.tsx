"use client"

import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react'
import SectionHeader from './SectionHeader'

const COURSES = [
  'Data Structures & Algorithms', 'Machine Learning',
  'Computer Vision', 'Database Systems',
  'Operating Systems', 'Computer Networks',
  'Software Engineering', 'Linear Algebra',
  'Discrete Mathematics', 'Artificial Intelligence',
]

const ACHIEVEMENTS = [
  { label: "Dean's List", desc: 'All 4 semesters', icon: '🏆' },
  { label: 'GPA 3.87/4.0', desc: 'Academic excellence', icon: '📊' },
  { label: 'Best Project Award', desc: 'CS Senior Showcase 2024', icon: '🥇' },
  { label: 'Merit Scholarship', desc: '2022, 2023, 2024', icon: '🎓' },
]

export default function Education() {
  return (
    <section id="education" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="education"
          title="Academic"
          highlight="Foundation"
          subtitle="Building strong theoretical foundations alongside real-world practical skills."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {/* Main degree card */}
          <div className="glass gradient-border" style={{
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            gridColumn: 'span 1',
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: 16,
              background: 'var(--gradient)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem',
              boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
            }}>
              <GraduationCap size={28} color="#fff" />
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.4rem',
              fontWeight: 800, color: 'var(--text)', margin: '0 0 0.25rem',
            }}>B.S. Computer Science &amp; Engineering</h3>

            <p style={{ color: 'var(--primary-light)', fontSize: '1rem', margin: '0 0 1.5rem', fontWeight: 500 }}>
              State Technical University
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: '1.5rem' }}>
              {[
                { icon: <Calendar size={14} />, label: 'Graduation', value: 'May 2026' },
                { icon: <Award size={14} />, label: 'GPA', value: '3.87 / 4.0' },
                { icon: <BookOpen size={14} />, label: 'Year', value: 'Third Year' },
                { icon: <GraduationCap size={14} />, label: 'Type', value: 'Full-time' },
              ].map(item => (
                <div key={item.label} style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    color: 'var(--text-muted)', fontSize: '0.72rem', marginBottom: 2,
                  }}>
                    {item.icon} {item.label}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h4 style={{
              fontFamily: 'var(--font-display)', fontSize: '0.95rem',
              fontWeight: 700, color: 'var(--text)', margin: '0 0 0.75rem',
            }}>Honors &amp; Achievements</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {ACHIEVEMENTS.map(ach => (
                <div key={ach.label} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '0.6rem 0.8rem',
                  borderRadius: 8,
                  background: 'rgba(99,102,241,0.06)',
                  border: '1px solid rgba(99,102,241,0.12)',
                }}>
                  <span style={{ fontSize: '1rem' }}>{ach.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{ach.label}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{ach.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coursework card */}
          <div className="glass" style={{
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.2rem',
              fontWeight: 700, color: 'var(--text)', margin: '0 0 1.5rem',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <BookOpen size={20} style={{ color: 'var(--accent)' }} />
              Relevant Coursework
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {COURSES.map((course, i) => (
                <span key={course} style={{
                  padding: '6px 14px', borderRadius: 100,
                  background: i % 3 === 0 ? 'rgba(99,102,241,0.1)' : i % 3 === 1 ? 'rgba(168,85,247,0.1)' : 'rgba(6,182,212,0.1)',
                  border: `1px solid ${i % 3 === 0 ? 'rgba(99,102,241,0.2)' : i % 3 === 1 ? 'rgba(168,85,247,0.2)' : 'rgba(6,182,212,0.2)'}`,
                  fontSize: '0.8rem',
                  color: i % 3 === 0 ? 'var(--primary-light)' : i % 3 === 1 ? 'var(--accent-light)' : 'var(--teal)',
                  fontWeight: 500,
                }}>{course}</span>
              ))}
            </div>

            {/* Extracurricular */}
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: '0.95rem',
                fontWeight: 700, color: 'var(--text)', margin: '0 0 1rem',
              }}>Extracurricular Activities</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { name: 'ACM Student Chapter', role: 'Technical Lead', period: '2023–Present' },
                  { name: 'AI/ML Club', role: 'Co-Founder & President', period: '2023–Present' },
                  { name: 'Competitive Programming Team', role: 'Member', period: '2022–2024' },
                  { name: 'Hackathon Committee', role: 'Organizer', period: '2024' },
                ].map(activity => (
                  <div key={activity.name} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.75rem 1rem',
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-subtle)',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)' }}>{activity.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-light)' }}>{activity.role}</div>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                    }}>{activity.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
