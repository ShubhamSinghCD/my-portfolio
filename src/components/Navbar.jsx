import { useState, useEffect } from 'react'

const links = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact'    },
]

export default function Navbar({ theme, onToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const textColor = isDark ? 'text-light' : 'text-day-text'
  const mutedText = isDark ? 'text-muted'  : 'text-day-muted'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        {/* <a href="#hero" className="font-display font-extrabold text-xl tracking-tight">
          <span className="grad-text">SS</span>
          <span className={mutedText}>.</span>
        </a> */} 
        <a href="#hero" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight">
          <img src="/img/logo.png" alt="Coredev Logo" className="h-10 w-auto object-contain" />
          <span className="grad-text">coredev</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link uppercase">{l.label}</a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={onToggle}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            <div className="theme-toggle-thumb flex items-center justify-center text-[10px]">
              {isDark ? '🌙' : '☀️'}
            </div>
          </button>

          {/* Hire Me */}
          <a
            href="mailto:shubhamsingh4954@gmail.com"
            className="hidden md:block btn-primary px-5 py-2 rounded-full text-sm"
          >
            <span>Hire Me</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 ${isDark ? 'bg-ink-2 border-white/5' : 'bg-day-bg2 border-black/5'}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link uppercase text-sm" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
