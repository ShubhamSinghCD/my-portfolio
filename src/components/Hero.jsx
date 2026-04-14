import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import HeroCanvas from './HeroCanvas'

export default function Hero({ isDark }) {
  const refs = {
    tag:   useRef(null),
    n1:    useRef(null),
    n2:    useRef(null),
    desc:  useRef(null),
    cta:   useRef(null),
    stats: useRef(null),
  }

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })
    tl.fromTo(refs.tag.current,   { opacity:0, y:20 }, { opacity:1, y:0, duration:0.6, ease:'power3.out' })
      .fromTo(refs.n1.current,    { opacity:0, y:50 }, { opacity:1, y:0, duration:0.7, ease:'power3.out' }, '-=0.35')
      .fromTo(refs.n2.current,    { opacity:0, y:50 }, { opacity:1, y:0, duration:0.7, ease:'power3.out' }, '-=0.5')
      .fromTo(refs.desc.current,  { opacity:0, y:24 }, { opacity:1, y:0, duration:0.6, ease:'power3.out' }, '-=0.4')
      .fromTo(refs.cta.current,   { opacity:0, y:20 }, { opacity:1, y:0, duration:0.55, ease:'power3.out' }, '-=0.35')
      .fromTo(refs.stats.current, { opacity:0, y:20 }, { opacity:1, y:0, duration:0.55, ease:'power3.out' }, '-=0.3')
  }, [])

  const accentColor = isDark ? 'text-accent' : 'text-blue-600'
  const mutedColor  = isDark ? 'text-muted'  : 'text-gray-500'
  const textColor   = isDark ? 'text-light'  : 'text-day-text'
  const bg          = isDark ? 'bg-grid-dark' : 'bg-grid-light'
  const borderColor = isDark ? 'border-white/10' : 'border-black/10'

  return (
    <section id="hero" className={`relative min-h-screen flex items-center overflow-hidden ${bg}`}>
      <HeroCanvas isDark={isDark} />

      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, #00e5ff, transparent 70%)', filter:'blur(70px)', opacity: isDark ? 0.09 : 0.05 }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, #7b61ff, transparent 70%)', filter:'blur(70px)', opacity: isDark ? 0.09 : 0.05 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <p ref={refs.tag} className={`font-body text-sm uppercase tracking-widest mb-6 opacity-0 ${accentColor}`}>
            ✦ Full Stack Web Developer · Mumbai, India
          </p>
          <h1 className="font-display font-extrabold leading-none mb-6"
              style={{ fontSize: 'clamp(52px,9vw,110px)' }}>
            <span ref={refs.n1} className={`block opacity-0 ${textColor}`}>Shubham</span>
            <span ref={refs.n2} className="block grad-text opacity-0">Singh.</span>
          </h1>
          <p ref={refs.desc} className={`font-body text-lg max-w-xl leading-relaxed mb-10 opacity-0 ${mutedColor}`}>
            Crafting performant, scalable web applications with{' '}
            <strong className={textColor}>PHP · Laravel · React</strong>.{' '}
            4+ years shipping production code from film platforms to enterprise NSE systems.
          </p>
          <div ref={refs.cta} className="flex flex-wrap gap-4 opacity-0">
            <a href="#experience" className="btn-primary px-8 py-4 rounded-full text-sm">
              <span>View My Work ↓</span>
            </a>
            <a href="#contact"
               className={`px-8 py-4 rounded-full text-sm font-display font-semibold border ${borderColor} ${textColor} hover:border-accent transition-all duration-300`}>
              Get In Touch
            </a>
          </div>
          <div ref={refs.stats} className="flex gap-10 mt-16 opacity-0">
            {[['4+','Years Exp'],['8+','Projects Built'],['3','Companies']].map(([num,label]) => (
              <div key={label}>
                <p className="font-display font-extrabold text-4xl grad-text">{num}</p>
                <p className={`font-body text-xs uppercase tracking-wider mt-1 ${mutedColor}`}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 ${mutedColor}`}>
        <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-accent to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  )
}
