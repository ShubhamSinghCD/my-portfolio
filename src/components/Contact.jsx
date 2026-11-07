import { useState } from 'react'

const EMAIL  = 'shubhamsingh4954@gmail.com'
const PHONE  = '+91 7738684954'
const WA_URL = `https://wa.me/917738684954?text=${encodeURIComponent(
  'Hi Shubham! I came across your portfolio and would love to discuss a project with you.'
)}`

// key / value rows rendered inside the terminal card
const CHANNELS = [
  { key: 'email',    val: EMAIL,                  href: `mailto:${EMAIL}` },
  { key: 'phone',    val: PHONE,                  href: 'tel:+917738684954' },
  { key: 'whatsapp', val: 'wa.me/917738684954',   href: WA_URL, external: true },
  { key: 'github',   val: 'github.com/ShubhamSinghCD', href: 'https://github.com/ShubhamSinghCD', external: true },
  { key: 'website',  val: 'coredev.in',           href: 'https://coredev.in', external: true },
  { key: 'location', val: 'Kandivali East, Mumbai, IN', href: null },
]

export default function Contact({ isDark }) {
  const [copied, setCopied] = useState(false)

  const bg     = isDark ? 'bg-ink-2'    : 'bg-day-bg2'
  const muted  = isDark ? 'text-muted'  : 'text-gray-500'
  const head   = isDark ? 'text-light'  : 'text-day-text'
  const accent = isDark ? 'text-accent' : 'text-blue-600'
  const border = isDark ? 'border-white/10' : 'border-black/10'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // clipboard API unavailable (http / old browser) → legacy fallback
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch { /* ignore */ }
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className={`py-32 relative overflow-hidden ${bg}`}>
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at 20% 30%,#00e5ff,transparent 60%)', opacity: isDark ? 0.05 : 0.03 }} />
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at 90% 90%,#7b61ff,transparent 55%)', opacity: isDark ? 0.07 : 0.04 }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-5 gap-14 items-center">

          {/* ── Left: pitch + actions ───────────────────────── */}
          <div className="lg:col-span-3" data-aos="fade-right">
            <div className="section-line">
              <p className={`font-body text-sm uppercase tracking-widest mb-3 ${accent}`}>— Let's Talk</p>
            </div>

            <h2 className={`font-display font-extrabold leading-[1.05] mb-6 ${head}`}
                style={{ fontSize: 'clamp(2.6rem,6vw,4.6rem)' }}>
              Let's build something <span className="grad-text">reliable.</span>
            </h2>

            <p className={`font-body text-lg leading-relaxed max-w-xl mb-8 ${muted}`}>
              Backend roles, API projects or a Python / Laravel system that needs a steady pair of hands —
              drop me a line and I'll get back to you.
            </p>

            <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 mb-10 ${border}`}>
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-400" />
              </span>
              <span className={`font-body text-xs uppercase tracking-widest ${head}`}>Open to opportunities</span>
            </div>

            {/* Big email line */}
            <div className={`flex flex-wrap items-center gap-3 mb-8`}>
              <a href={`mailto:${EMAIL}`}
                 className={`font-display font-bold break-all hover:underline ${head}`}
                 style={{ fontSize: 'clamp(1.15rem,2.6vw,1.8rem)' }}>
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className={`font-body text-xs uppercase tracking-wider rounded-full border px-4 py-2 transition-all duration-300 hover:border-accent ${border} ${copied ? 'text-green-400 border-green-400/50' : head}`}
                aria-live="polite"
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent('Opportunity — via coredev.in')}`}
                 className="btn-primary px-8 py-4 rounded-full text-sm">
                <span>Email Me →</span>
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer"
                 className={`px-8 py-4 rounded-full text-sm font-display font-semibold border transition-all duration-300 hover:border-[#25d366] hover:text-[#25d366] ${border} ${head}`}>
                WhatsApp
              </a>
              <a href="/resume/Shubham_Singh_Resume.docx" download
                 className={`px-8 py-4 rounded-full text-sm font-display font-semibold border transition-all duration-300 hover:border-accent ${border} ${head}`}>
                Résumé ↓
              </a>
            </div>
          </div>

          {/* ── Right: terminal card ────────────────────────── */}
          <div className="lg:col-span-2" data-aos="fade-left" data-aos-delay="150">
            <div className="rounded-2xl overflow-hidden term-shadow"
                 style={{ background: '#0b0d14', border: '1px solid rgba(0,229,255,0.2)' }}>
              {/* title bar */}
              <div className="flex items-center gap-2 px-4 py-3"
                   style={{ background: '#11141d', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                <span className="ml-3 font-mono text-xs" style={{ color: '#6b6b80' }}>~/coredev — contact</span>
              </div>

              {/* body */}
              <div className="p-5 sm:p-6 font-mono text-[13px] leading-7" style={{ color: '#e8e8f0' }}>
                <p><span style={{ color: '#28c840' }}>➜</span> <span style={{ color: '#00e5ff' }}>~</span> whoami</p>
                <p className="mb-3" style={{ color: '#9aa0b4' }}>shubham-singh · backend developer</p>

                <p><span style={{ color: '#28c840' }}>➜</span> <span style={{ color: '#00e5ff' }}>~</span> cat contact.json</p>
                <div className="mt-1 mb-3">
                  <span style={{ color: '#7b61ff' }}>{'{'}</span>
                  {CHANNELS.map(({ key, val, href, external }) => {
                    const line = (
                      <>
                        <span style={{ color: '#00e5ff' }}>"{key}"</span>
                        <span style={{ color: '#6b6b80' }}>: </span>
                        <span className="term-val break-all" style={{ color: '#ffd479' }}>"{val}"</span>
                        <span style={{ color: '#6b6b80' }}>,</span>
                      </>
                    )
                    return href ? (
                      <a key={key} href={href}
                         {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                         className="term-row block pl-4 -mx-2 px-2 rounded-md">
                        {line}
                      </a>
                    ) : (
                      <div key={key} className="pl-4 -mx-2 px-2">{line}</div>
                    )
                  })}
                  <span style={{ color: '#7b61ff' }}>{'}'}</span>
                </div>

                <p><span style={{ color: '#28c840' }}>➜</span> <span style={{ color: '#00e5ff' }}>~</span> <span className="term-caret" /></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
