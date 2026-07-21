"use client"

import { useState } from 'react'
import { Mail, MapPin, Download, Send, CheckCircle } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1500)
  }

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem',
    borderRadius: 12,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    color: 'var(--text)', fontSize: '0.9rem',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box' as const,
  }

  return (
    <section id="contact" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="contact"
          title="Get In"
          highlight="Touch"
          subtitle="Have an opportunity or just want to chat? My inbox is always open."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
        }}>
          {/* Left — info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1.2rem', color: 'var(--text)', margin: '0 0 1rem',
              }}>Let's Connect</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, fontSize: '0.9rem' }}>
                I'm currently seeking software engineering internships for Summer 2025. I respond to all messages within 24 hours.
                Whether it's a job opportunity, a collaboration, or just saying hello — reach out!
              </p>
            </div>

            {/* Contact links */}
            <div className="glass" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)' }}>
              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'alex.kim@university.edu', href: 'mailto:alex.kim@university.edu', color: 'var(--primary)' },
                { icon: <FaLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/alexkim-cs', href: '#', color: '#0a66c2' },
                { icon: <SiGithub size={18} />, label: 'GitHub', value: 'https://github.com/SenuthAbey12', href: 'https://github.com/SenuthAbey12', color: '#6e7681' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'San Francisco Bay Area, CA', href: null, color: 'var(--accent)' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '0.9rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color,
                  }}>{item.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 2 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{
                        fontSize: '0.88rem', color: item.color,
                        textDecoration: 'none', fontWeight: 500,
                        overflow: 'hidden', textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap', display: 'block',
                      }}>{item.value}</a>
                    ) : (
                      <span style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 500 }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume download */}
            <a href="/resume.pdf" download style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              padding: '1rem',
              borderRadius: 14,
              background: 'var(--gradient)',
              color: '#fff', textDecoration: 'none',
              fontWeight: 600, fontSize: '0.95rem',
              boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Right — form */}
          <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)' }}>
            {sent ? (
              <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                height: '100%', gap: '1rem', textAlign: 'center',
                padding: '2rem 0',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(16,185,129,0.15)',
                  border: '2px solid rgba(16,185,129,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <CheckCircle size={28} style={{ color: 'var(--green)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button onClick={() => setSent(false)} style={{
                  marginTop: 8, padding: '0.7rem 1.5rem',
                  borderRadius: 10, border: '1px solid var(--border)',
                  background: 'transparent', color: 'var(--text-muted)',
                  cursor: 'pointer', fontSize: '0.88rem',
                  fontFamily: 'var(--font-sans)',
                }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1.2rem', color: 'var(--text)', margin: '0 0 0.5rem',
                }}>Send a Message</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 6 }}>
                      Your Name *
                    </label>
                    <input
                      type="text" required placeholder="John Doe"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(99,102,241,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 6 }}>
                      Email Address *
                    </label>
                    <input
                      type="email" required placeholder="john@company.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(99,102,241,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 6 }}>
                    Subject *
                  </label>
                  <input
                    type="text" required placeholder="Software Engineering Internship Opportunity"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'rgba(99,102,241,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 6 }}>
                    Message *
                  </label>
                  <textarea
                    required rows={5} placeholder="Hi Alex, I came across your portfolio and would love to discuss..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(99,102,241,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-gradient" style={{
                  padding: '0.9rem',
                  borderRadius: 12, border: 'none',
                  color: '#fff', cursor: loading ? 'wait' : 'pointer',
                  fontSize: '0.95rem', fontWeight: 600,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
                  fontFamily: 'var(--font-sans)',
                  position: 'relative', zIndex: 1,
                  opacity: loading ? 0.8 : 1,
                  transition: 'all 0.3s',
                }}>
                  {loading ? (
                    <>
                      <div style={{
                        width: 16, height: 16, borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff',
                        animation: 'spin-slow 0.8s linear infinite',
                      }} />
                      Sending...
                    </>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
