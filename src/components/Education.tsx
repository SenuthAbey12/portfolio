"use client"

import { Award, BookOpen, Calendar, GraduationCap, MapPin, Users } from 'lucide-react'
import SectionHeader from './SectionHeader'

const COURSES = [
  'Programming Fundamentals (Python)',
  'Program Construction (Java & OOP)',
  'Data Structures and Algorithms',
  'Programming Languages',
  'Software Engineering',
  'Advanced Software Engineering',
  'Software Engineering Project',
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
    <section id="education" className="education-section" style={{
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
          <article className="glass gradient-border education-degree-card" style={{ borderRadius: 'var(--radius-xl)', padding: '2.5rem' }}>
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
                { icon: <Award size={15} />, label: 'Current GPA', value: '3.72 · First Class' },
                { icon: <MapPin size={15} />, label: 'Location', value: 'Moratuwa, Sri Lanka' },
              ].map(item => (
                <div key={item.label} className="education-detail-card" style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '0.85rem 1rem', borderRadius: 10,
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

          <article className="glass education-content-card" style={{ borderRadius: 'var(--radius-xl)', padding: '2.5rem' }}>
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
                <span key={course} className="education-course-chip" data-tone={index % 3} style={{
                  padding: '6px 11px', borderRadius: 100,
                  fontSize: '0.72rem',
                  fontWeight: 500,
                }}>{course}</span>
              ))}
            </div>
          </article>
        </div>

        <article className="glass education-content-card" style={{ borderRadius: 'var(--radius-xl)', padding: '2.5rem', marginTop: '2rem' }}>
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
              <div key={`${activity.name}-${activity.period}`} className="education-activity-card" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
                padding: '0.9rem 1rem', borderRadius: 10,
              }}>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text)', marginBottom: 3 }}>{activity.name}</div>
                  <div className="education-activity-role" style={{ fontSize: '0.7rem', lineHeight: 1.45 }}>{activity.role}</div>
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
