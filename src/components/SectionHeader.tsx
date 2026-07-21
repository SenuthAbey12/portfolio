"use client"

interface SectionHeaderProps {
  tag: string
  title: string
  highlight?: string
  subtitle?: string
}

export default function SectionHeader({ tag, title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <div style={{ display: 'inline-block', marginBottom: '1rem' }}>
        <span className="section-tag"># {tag}</span>
      </div>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800,
        color: 'var(--text)',
        margin: '0 0 1rem',
        lineHeight: 1.1,
      }}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1rem',
          maxWidth: 520,
          margin: '0 auto',
          lineHeight: 1.7,
        }}>{subtitle}</p>
      )}
      <div style={{
        width: 60, height: 3,
        background: 'var(--gradient)',
        borderRadius: 2,
        margin: '1.5rem auto 0',
      }} />
    </div>
  )
}
