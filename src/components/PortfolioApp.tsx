"use client"

import { useState, useEffect } from 'react'
import LoadingScreen from './LoadingScreen'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Education from './Education'
import Certifications from './Certifications'
import Achievements from './Achievements'
import GitHubActivity from './GitHubActivity'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import FloatingActions from './FloatingActions'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setTheme(t => t === 'dark' ? 'light' : 'dark')
  }

  if (loading) return <LoadingScreen />

  return (
    <div className={theme === 'light' ? 'light' : ''} style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <GitHubActivity />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
