"use client"

import { ExternalLink, Award, Calendar } from 'lucide-react'
import SectionHeader from './SectionHeader'

const CERTS = [
  {
    title: 'TensorFlow Developer Certificate',
    org: 'Google',
    date: 'Oct 2024',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300&h=180&fit=crop&auto=format',
    color: 'var(--primary)',
    credentialId: 'TF-DEV-2024-9821',
    link: '#',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    org: 'Amazon Web Services',
    date: 'Aug 2024',
    image: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=300&h=180&fit=crop&auto=format',
    color: 'var(--accent)',
    credentialId: 'AWS-CP-2024-17243',
    link: '#',
  },
  {
    title: 'Machine Learning Specialization',
    org: 'Coursera / DeepLearning.AI',
    date: 'Jun 2024',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&h=180&fit=crop&auto=format',
    color: 'var(--teal)',
    credentialId: 'DL-ML-SPEC-2024',
    link: '#',
  },
  {
    title: 'Docker Certified Associate',
    org: 'Docker Inc.',
    date: 'Mar 2024',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=300&h=180&fit=crop&auto=format',
    color: 'var(--green)',
    credentialId: 'DCA-2024-4412',
    link: '#',
  },
  {
    title: 'Meta Front-End Developer',
    org: 'Meta / Coursera',
    date: 'Dec 2023',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=180&fit=crop&auto=format',
    color: 'var(--primary)',
    credentialId: 'META-FE-2023-8810',
    link: '#',
  },
  {
    title: 'Google Data Analytics',
    org: 'Google / Coursera',
    date: 'Sep 2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=180&fit=crop&auto=format',
    color: 'var(--accent)',
    credentialId: 'GDA-2023-3309',
    link: '#',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="certifications"
          title="Certificates &"
          highlight="Credentials"
          subtitle="Industry-recognized certifications validating my technical expertise."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {CERTS.map((cert, i) => (
            <div key={i}
              className="glass"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${cert.color}18` }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
            >
              {/* Thumbnail */}
              <div style={{ height: 140, overflow: 'hidden', position: 'relative' }}>
                <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, rgba(8,11,20,0.92) 0%, rgba(8,11,20,0.3) 60%)`,
                }} />
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  width: 36, height: 36, borderRadius: 10,
                  background: `${cert.color}22`, border: `1px solid ${cert.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                }}>
                  <Award size={16} style={{ color: cert.color }} />
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1rem', color: 'var(--text)', margin: '0 0 0.4rem',
                  lineHeight: 1.3,
                }}>{cert.title}</h3>
                <p style={{ color: cert.color, fontSize: '0.82rem', margin: '0 0 0.75rem', fontWeight: 500 }}>
                  {cert.org}
                </p>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  marginBottom: '1rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    <Calendar size={12} /> {cert.date}
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    color: 'var(--text-dim)', letterSpacing: '0.05em',
                  }}>ID: {cert.credentialId}</span>
                </div>
                <a href={cert.link} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  padding: '0.6rem',
                  borderRadius: 10,
                  background: `${cert.color}12`,
                  border: `1px solid ${cert.color}25`,
                  color: cert.color, fontSize: '0.8rem', fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${cert.color}22` }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${cert.color}12` }}
                >
                  <ExternalLink size={13} /> View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
