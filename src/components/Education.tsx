"use client"

import { BookOpen, Calendar, GraduationCap, MapPin, Users } from 'lucide-react'
import SectionHeader from './SectionHeader'

const COURSES = [
  'Programming Fundamentals (Python)',
  'Program Construction (Java & OOP)',
  'Data Structures and Algorithms',
  'Programming Languages',
  'Software Engineering',
  'Advanced Software Engineering',
  'Database Systems',
  'Operating Systems',
  'Computer Networks',
  'Introduction to Artificial Intelligence',
  'Image Processing',
  'IoT Devices and Applications',
  'Computer Security',
]

const ACTIVITIES = [
  { role: 'Organizing Committee Member', name: 'IESL RoboGames', period: '2025/26' },
  { role: 'Organizing Committee Member', name: 'SLIoT Challenge', period: '2026' },
  { role: 'Company Coordinator', name: 'CSE Careers Day', period: '2026' },
  { role: 'Organizing Committee Member', name: 'Hit the Ground', period: '2026' },
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
          subtitle="Computer Science and Engineering studies supported by practical technical and team experience."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}>
          <article className="glass gradient-border" style={{ borderRadius: 'var(--radius-xl)', padding: '2.5rem' }}>
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
              fontFamily: 'var(--font-display)', fontSize: '1.35rem',
              fontWeight: 800, color: 'var(--text)', margin: '0 0 0.35rem', lineHeight: 1.35,
            }}>Computer Science &amp; Engineering Undergraduate</h3>
            <p style={{ color: 'var(--primary-light)', fontSize: '1rem', margin: '0 0 1.5rem', fontWeight: 600 }}>
              University of Moratuwa
            </p>

            <div style={{ display: 'grid', gap: 10 }}>
              {[
                { icon: <Calendar size={15} />, label: 'Period', value: '2023 — Present' },
                { icon: <BookOpen size={15} />, label: 'Study', value: 'Third Year · Full-time' },
                { icon: <MapPin size={15} />, label: 'Location', value: 'Moratuwa, Sri Lanka' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '0.85rem 1rem', borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <span style={{ color: 'var(--primary-light)', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.68rem', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.86rem', color: 'var(--text)' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="glass" style={{ borderRadius: 'var(--radius-xl)', padding: '2.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.15rem',
              fontWeight: 700, color: 'var(--text)', margin: '0 0 1.35rem',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <BookOpen size={20} style={{ color: 'var(--accent)' }} />
              Relevant Coursework
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {COURSES.map((course, index) => (
                <span key={course} style={{
                  padding: '6px 11px', borderRadius: 100,
                  background: index % 3 === 0 ? 'rgba(99,102,241,0.1)' : index % 3 === 1 ? 'rgba(168,85,247,0.1)' : 'rgba(6,182,212,0.1)',
                  border: `1px solid ${index % 3 === 0 ? 'rgba(99,102,241,0.2)' : index % 3 === 1 ? 'rgba(168,85,247,0.2)' : 'rgba(6,182,212,0.2)'}`,
                  fontSize: '0.72rem',
                  color: index % 3 === 0 ? 'var(--primary-light)' : index % 3 === 1 ? 'var(--accent-light)' : 'var(--teal)',
                  fontWeight: 500,
                }}>{course}</span>
              ))}
            </div>
          </article>
        </div>

        <article className="glass" style={{ borderRadius: 'var(--radius-xl)', padding: '2.5rem', marginTop: '2rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.15rem',
            fontWeight: 700, color: 'var(--text)', margin: '0 0 1.35rem',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Users size={20} style={{ color: 'var(--teal)' }} />
            Extracurricular Activities
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 10 }}>
            {ACTIVITIES.map(activity => (
              <div key={`${activity.name}-${activity.period}`} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
                padding: '0.9rem 1rem', borderRadius: 10,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-subtle)',
              }}>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text)', marginBottom: 3 }}>{activity.name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-light)', lineHeight: 1.45 }}>{activity.role}</div>
                  <div style={{ fontSize: '0.66rem', color: 'var(--text-dim)', marginTop: 3 }}>University of Moratuwa</div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                  {activity.period}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
