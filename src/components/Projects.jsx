const PROJECTS = [
    {
    emoji: '💍',
    title: 'Marriage Biodata Builder',
    desc: 'A responsive web app to create, customize, and download professional marriage biodatas. Features 6 premium templates, live preview, font editor, dark/light mode, and one-click export to PDF & Word. Built with React + Vite, Tailwind CSS, html2canvas, jsPDF, docx.js, and n8n webhook integration for form data automation.',
    tags: ['React.js','Vite.js','Tailwind CSS','html2canvas'],
    link: 'https://coredev.in/marriage-biodata',
    badge: 'Live',
    badgeColor: '#7b61ff',
    bg: 'linear-gradient(135deg,#0a1628,#0d2040)',
    glow: '123,97,255',
  },
  {
    emoji: '💬',
    title: 'Chatway.in',
    desc: 'CPaaS messaging platform for digital marketing. Full-stack Laravel + Tailwind CSS dashboard with real-time communication features.',
    tags: ['Laravel','Tailwind','Alpine.js'],
    link: 'https://chatway.in',
    badge: 'Live',
    badgeColor: '#00e5ff',
    bg: 'linear-gradient(135deg,#0a1628,#0d2040)',
    glow: '0,229,255',
  },
  {
    emoji: '📡',
    title: 'SMPP Gateway',
    desc: 'High-throughput SMS gateway built on SMPP protocol. Handles bulk messaging pipelines with RESTful API integrations.',
    tags: ['PHP','RESTful API','MySQL'],
    link: 'https://smppgateway.in',
    badge: 'Live',
    badgeColor: '#7b61ff',
    bg: 'linear-gradient(135deg,#0f0a28,#1a0d40)',
    glow: '123,97,255',
  },
  {
    emoji: '🧠',
    title: 'Ceptiv.io',
    desc: 'Digital marketing intelligence platform with custom analytics dashboards, campaign tracking, and performance reporting.',
    tags: ['Laravel','Core PHP','MySQL'],
    link: 'https://ceptiv.io',
    badge: 'Live',
    badgeColor: '#00c49a',
    bg: 'linear-gradient(135deg,#081a14,#0c2a1e)',
    glow: '0,196,154',
  },
  {
    emoji: '🎬',
    title: 'IeveEra News',
    desc: 'High-traffic film industry news portal with dynamic Core PHP backend, SEO optimisation, and full content management.',
    tags: ['Core PHP','MySQL','SEO'],
    link: 'https://ieveeranews.com',
    badge: 'Film',
    badgeColor: '#ffaa00',
    bg: 'linear-gradient(135deg,#1a0f08,#2a1a0c)',
    glow: '255,170,0',
  },
  {
    emoji: '📁',
    title: 'NSE — DMS',
    desc: 'Document Management System for National Stock Exchange of India. Enterprise-grade Laravel app with robust access controls and audit trails.',
    tags: ['Laravel','MySQL','Enterprise'],
    link: null,
    badge: 'Enterprise',
    badgeColor: '#00e5ff',
    bg: 'linear-gradient(135deg,#08101a,#0c1a2a)',
    glow: '0,229,255',
  },
  {
    emoji: '📊',
    title: 'NSE — PPMS',
    desc: 'Project & Portfolio Management System at NSE. Tracks multi-team initiatives, timelines, and deliverables organisation-wide.',
    tags: ['Laravel','PHP','MySQL'],
    link: null,
    badge: 'Enterprise',
    badgeColor: '#7b61ff',
    bg: 'linear-gradient(135deg,#100828,#18103a)',
    glow: '123,97,255',
  },
  {
    emoji: '🤝',
    title: 'NSE — CSR System',
    desc: 'Corporate Social Responsibility management platform for NSE. Tracks initiatives, budgets, and compliance reporting at scale.',
    tags: ['Laravel','PHP','MySQL'],
    link: null,
    badge: 'Enterprise',
    badgeColor: '#00c49a',
    bg: 'linear-gradient(135deg,#0a1a10,#102a18)',
    glow: '0,196,154',
  },
  {
    emoji: '🎯',
    title: 'Promo Chatway',
    desc: 'Promotional landing & campaign sub-platform for Chatway. Handles marketing funnels, lead capture, and conversion tracking.',
    tags: ['Laravel','Tailwind','Alpine.js'],
    link: 'https://promo.chatway.in',
    badge: 'Promo',
    badgeColor: '#ff6b35',
    bg: 'linear-gradient(135deg,#1a1008,#2a1e0c)',
    glow: '255,107,53',
  },
]

export default function Projects({ isDark }) {
  const bg     = isDark ? 'bg-ink-2' : 'bg-day-bg2'
  const card   = isDark ? 'bg-ink'   : 'bg-white'
  const muted  = isDark ? 'text-muted' : 'text-gray-500'
  const head   = isDark ? 'text-light' : 'text-day-text'
  const accent = isDark ? 'text-accent' : 'text-blue-600'

  return (
    <section id="projects" className={`py-32 relative overflow-hidden ${bg}`}>
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
           style={{ background:'radial-gradient(ellipse at right top,#7b61ff,transparent 70%)', opacity:isDark?0.05:0.02 }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16" data-aos="fade-up">
          <div>
            <p className={`font-body text-sm uppercase tracking-widest mb-3 ${accent}`}>— What I've Built</p>
            <h2 className={`font-display font-extrabold leading-tight ${head}`}
                style={{ fontSize:'clamp(2.4rem,5vw,3.5rem)' }}>
              Featured <span className="grad-text">Projects</span>
            </h2>
          </div>
          <p className={`font-body max-w-xs text-sm leading-relaxed ${muted}`}>
            Production projects across CPaaS, digital marketing, and enterprise systems.
          </p>
        </div>

        {/* 4-col 2-row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className={`project-card group glow-border rounded-2xl overflow-hidden relative ${card}`}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 70}
            >
              {/* Preview area */}
              <div className="h-36 relative flex items-center justify-center overflow-hidden"
                   style={{ background: p.bg }}>
                <div className="absolute inset-0"
                     style={{ background:`radial-gradient(circle at 40% 50%,rgba(${p.glow},0.25),transparent 65%)` }} />
                <span className="text-5xl relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 inline-block">
                  {p.emoji}
                </span>
                <div className="absolute top-3 right-3">
                  <span className="font-body text-xs px-2 py-1 rounded-full"
                        style={{ color: p.badgeColor, background:`rgba(${p.glow},0.12)`, border:`1px solid rgba(${p.glow},0.25)`, fontSize:'0.65rem' }}>
                    {p.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`font-display font-bold text-base mb-2 transition-colors duration-300 group-hover:text-accent ${head}`}>
                  {p.title}
                </h3>
                <p className={`font-body text-xs leading-relaxed mb-4 ${muted}`}>{p.desc}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {p.tags.map(t=>(
                    <span key={t} className="skill-badge" style={{fontSize:'0.62rem',padding:'2px 8px'}}>{t}</span>
                  ))}
                </div>
                {p.link
                  ? <a href={p.link} target="_blank" rel="noreferrer"
                       className={`flex items-center gap-1 font-body text-xs hover:underline ${accent}`}>
                      View Project
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                  : <span className={`font-body text-xs ${muted}`}>🔒 Internal System</span>
                }
              </div>

              {/* Inner glow on hover */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ boxShadow:`inset 0 0 28px rgba(${p.glow},0.07)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
