"use client"

import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import SectionHeader from './SectionHeader'

const POSTS = [
  {
    title: 'Building Real-Time Object Detection with YOLOv8 and FastAPI',
    excerpt: 'A practical walkthrough of deploying a production-grade computer vision pipeline — from model selection to WebSocket streaming with sub-50ms latency.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=340&fit=crop&auto=format',
    date: 'Dec 15, 2024',
    readTime: '9 min read',
    tags: ['Computer Vision', 'Python', 'FastAPI'],
    featured: true,
  },
  {
    title: 'Why I Switched from REST to GraphQL for My Portfolio API',
    excerpt: 'After rebuilding my personal API three times, I finally understand when GraphQL is — and isn\'t — the right tool. Here\'s what I learned the hard way.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=340&fit=crop&auto=format',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    tags: ['GraphQL', 'API Design', 'Node.js'],
    featured: false,
  },
  {
    title: 'From Zero to Docker: Containerizing a Full-Stack ML App',
    excerpt: 'A beginner-friendly guide to containerizing a React + FastAPI + PostgreSQL application, including multi-stage builds that actually keep images small.',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=340&fit=crop&auto=format',
    date: 'Oct 10, 2024',
    readTime: '11 min read',
    tags: ['Docker', 'DevOps', 'Python'],
    featured: false,
  },
  {
    title: 'Understanding Transformer Attention: A Visual Deep-Dive',
    excerpt: 'Self-attention, multi-head attention, positional encodings — explained from scratch with animations and code, no PhD required.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=340&fit=crop&auto=format',
    date: 'Sep 4, 2024',
    readTime: '14 min read',
    tags: ['Deep Learning', 'NLP', 'Theory'],
    featured: false,
  },
]

export default function Blog() {
  const featured = POSTS.find(p => p.featured)!
  const others = POSTS.filter(p => !p.featured)

  return (
    <section id="blog" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          tag="blog"
          title="Articles &"
          highlight="Writing"
          subtitle="Technical write-ups, tutorials, and engineering deep-dives."
        />

        {/* Featured post */}
        <div className="glass" style={{
          borderRadius: 'var(--radius-xl)', overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          marginBottom: '1.5rem',
          transition: 'all 0.3s ease',
        }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
        >
          <div style={{ overflow: 'hidden', minHeight: 240, position: 'relative' }}>
            <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(8,11,20,0.7) 0%, transparent 60%)',
            }} />
            <span style={{
              position: 'absolute', top: 16, left: 16,
              padding: '5px 12px', borderRadius: 100,
              background: 'var(--gradient)',
              fontSize: '0.7rem', fontWeight: 600, color: '#fff',
              fontFamily: 'var(--font-mono)',
            }}>✍️ Featured</span>
          </div>
          <div style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '0.75rem' }}>
              {featured.tags.map(tag => (
                <span key={tag} style={{
                  padding: '3px 10px', borderRadius: 100,
                  background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
                  fontSize: '0.7rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)',
                }}>{tag}</span>
              ))}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.4rem',
              fontWeight: 800, color: 'var(--text)', margin: '0 0 0.75rem', lineHeight: 1.3,
            }}>{featured.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 1.5rem', fontSize: '0.9rem' }}>
              {featured.excerpt}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <Calendar size={13} /> {featured.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <Clock size={13} /> {featured.readTime}
                </span>
              </div>
              <a href="#" style={{
                display: 'flex', alignItems: 'center', gap: 6,
                color: 'var(--primary-light)', fontSize: '0.85rem',
                fontWeight: 600, textDecoration: 'none',
                transition: 'gap 0.2s',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.gap = '10px')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.gap = '6px')}
              >
                Read More <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Other posts grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {others.map((post, i) => (
            <div key={i} className="glass" style={{
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
            >
              <div style={{ height: 160, overflow: 'hidden', position: 'relative' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,11,20,0.85) 0%, transparent 50%)',
                }} />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} style={{
                      display: 'flex', alignItems: 'center', gap: 3,
                      padding: '2px 8px', borderRadius: 100,
                      background: 'rgba(99,102,241,0.08)',
                      fontSize: '0.65rem', color: 'var(--primary-light)',
                    }}>
                      <Tag size={9} /> {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '0.95rem', color: 'var(--text)', margin: '0 0 0.5rem', lineHeight: 1.35,
                }}>{post.title}</h3>
                <p style={{
                  color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6, margin: '0 0 1rem',
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Calendar size={11} /> {post.date}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <a href="#" style={{
                    color: 'var(--primary-light)', fontSize: '0.78rem',
                    textDecoration: 'none', fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}>
                    Read <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
