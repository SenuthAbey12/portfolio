"use client"

import SectionHeader from './SectionHeader'

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    category: 'Hackathon',
    title: '1st Place — HackState 2024',
    org: 'State University Tech Fest',
    date: 'Nov 2024',
    desc: 'Won first place among 120 teams for building an AI-powered campus safety alert system using real-time video analysis.',
    highlight: '1st / 120 teams',
    color: '#f59e0b',
  },
  {
    icon: '🥈',
    category: 'Competition',
    title: '2nd Place — ACM ICPC Regional',
    org: 'ACM International Collegiate Programming Contest',
    date: 'Oct 2024',
    desc: 'Solved 7 out of 10 competitive programming problems in the regional qualifying round, advancing to nationals.',
    highlight: '2nd / 45 teams',
    color: '#94a3b8',
  },
  {
    icon: '⭐',
    category: 'Open Source',
    title: 'GitHub Arctic Code Vault',
    org: 'GitHub',
    date: 'Feb 2024',
    desc: 'Recognized contributor — one of my open-source repositories was selected for the GitHub Arctic Code Vault initiative.',
    highlight: 'Featured Contributor',
    color: 'var(--primary)',
  },
  {
    icon: '🎯',
    category: 'Academic',
    title: "Dean's List — 4 Consecutive Semesters",
    org: "State Technical University — Dean's Office",
    date: '2022–2024',
    desc: 'Maintained top-5% academic standing every semester since enrollment, earning the Dean\'s List distinction consistently.',
    highlight: 'Top 5% GPA',
    color: 'var(--teal)',
  },
  {
    icon: '🤝',
    category: 'Community',
    title: 'AI/ML Club Co-Founder',
    org: 'State Technical University',
    date: 'Sep 2023',
    desc: 'Co-founded the university\'s AI/ML Club from scratch — grew to 80+ active members in one year, hosting weekly workshops and guest lectures.',
    highlight: '80+ members',
    color: 'var(--accent)',
  },
  {
    icon: '📝',
    category: 'Research',
    title: 'Best Paper — Undergrad Research Symposium',
    org: 'Department of Computer Science',
    date: 'Apr 2024',
    desc: 'Paper on "Lightweight Object Detection for Edge Devices" selected as best undergraduate research paper at the annual department symposium.',
    highlight: 'Best Paper Award',
    color: 'var(--green)',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg) 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="achievements"
          title="Awards &"
          highlight="Recognition"
          subtitle="Competitions, open-source milestones, and academic honors I'm proud of."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {ACHIEVEMENTS.map((ach, i) => (
            <div key={i}
              className="glass"
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                borderTop: `3px solid ${ach.color}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${ach.color}15` }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{ach.icon}</span>
                  <span style={{
                    padding: '3px 10px', borderRadius: 100,
                    background: `${ach.color}15`, border: `1px solid ${ach.color}25`,
                    fontSize: '0.68rem', color: ach.color,
                    fontFamily: 'var(--font-mono)',
                  }}>{ach.category}</span>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)',
                }}>{ach.date}</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1rem', color: 'var(--text)', margin: '0 0 0.35rem',
                lineHeight: 1.3,
              }}>{ach.title}</h3>
              <p style={{ fontSize: '0.78rem', color: ach.color, margin: '0 0 0.75rem', fontWeight: 500 }}>{ach.org}</p>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 1rem' }}>
                {ach.desc}
              </p>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '5px 12px', borderRadius: 8,
                background: `${ach.color}10`,
                border: `1px solid ${ach.color}20`,
                fontSize: '0.78rem', fontWeight: 600, color: ach.color,
              }}>
                🎖️ {ach.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
