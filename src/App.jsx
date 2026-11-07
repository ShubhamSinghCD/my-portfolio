import { useEffect } from 'react'
import AOS from 'aos'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useTheme }      from './hooks/useTheme'
import Cursor            from './components/Cursor'
import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import About             from './components/About'
import Skills            from './components/Skills'
import Projects          from './components/Projects'
import Marquee           from './components/Marquee'
import Experience        from './components/Experience'
import Education         from './components/Education'
import Contact           from './components/Contact'
import Footer            from './components/Footer'
import WhatsAppButton    from './components/WhatsAppButton'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const { theme, toggle, isDark } = useTheme()

  useEffect(() => {
    AOS.init({ once: true, offset: 80, easing: 'ease-out-cubic', duration: 700 })
  }, [])

  // Refresh AOS on theme change so re-entering elements animate correctly
  useEffect(() => {
    AOS.refresh()
  }, [theme])

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <Cursor />
      <Navbar theme={theme} onToggle={toggle} />

      <main>
        <Hero      isDark={isDark} />
        <About     isDark={isDark} />
        <Skills    isDark={isDark} />
        <Projects  isDark={isDark} />
        <Marquee   isDark={isDark} />
        <Experience isDark={isDark} />
        <Education isDark={isDark} />
        <Contact   isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
      <WhatsAppButton />
    </div>
  )
}
