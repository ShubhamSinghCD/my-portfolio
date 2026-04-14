const JOBS = [
  {
    current: true,
    role: 'Software Developer',
    company: 'HSS — Hridyaam Soft Solutions Pvt. Ltd.',
    sub: '@ NSE of India',
    period: 'Jan 2025 – Present',
    bullets: [
      'Deployed at NSE as a vendor, managing enterprise-level web applications.',
      'Handling three major platforms: DMS (Document Management System), PPMS, and CSR Management System built on Laravel.',
      'Backend development, bug fixing, feature enhancements, and performance optimisation.',
      'Coordinating with client stakeholders for requirement gathering, issue resolution, and deployment support.',
      'Ensuring system stability, database management, and smooth production operations.',
    ],
    tags: ['Laravel','MySQL','Enterprise Systems'],
    dotColor: '#00e5ff',
    dotGlow: '0,229,255',
  },
  {
    role: 'Software Developer',
    company: 'Alot Digital Solutions India Pvt. Ltd.',
    period: 'Jul 2023 – Dec 2024',
    bullets: [
      'Worked on a CPaaS (Communications Platform as a Service) project with Laravel, Tailwind CSS, and Alpine.js.',
      'Led projects: chatway.in, promo.chatway.in, ceptiv.io, smppgateway.in from conception to execution.',
      'Developed and integrated RESTful APIs for enhanced application functionality.',
      'Maintained dashboards with Core PHP and handled database management tasks.',
    ],
    tags: ['Laravel','Tailwind CSS','Alpine.js','Core PHP','RESTful API'],
    dotColor: '#00e5ff',
    dotGlow: '0,229,255',
  },
  {
    role: 'Web Developer',
    company: 'IeveEra Films Pvt. Ltd.',
    period: 'Mar 2021 – Dec 2022',
    bullets: [
      'Created and managed websites for a film industry-focused digital marketing company.',
      'Handled Core PHP sites: ieveeranews.com, ieveeratimes.com, ieveera.com, ieveeraseo.com.',
      'Implemented on-page and off-page SEO strategies, significantly enhancing search engine rankings.',
    ],
    tags: ['Core PHP','MySQL','SEO'],
    dotColor: '#00e5ff',
    dotGlow: '0,229,255',
  },
  {
    intern: true,
    role: 'Software Development Intern',
    company: 'Early Career · 7-Month Program',
    period: 'Sep 2020 – May 2021',
    bullets: [
      'Completed a 7-month internship focused on full-stack software development.',
      'Gained expertise in HTML, CSS, PHP, MySQL, JavaScript, and Bootstrap.',
      'Worked on tech projects under expert mentorship in a collaborative environment.',
    ],
    tags: ['HTML/CSS','PHP','MySQL','JavaScript','Bootstrap'],
    dotColor: '#7b61ff',
    dotGlow: '123,97,255',
  },
]

export default function Experience({ isDark }) {
  const bg    = isDark ? 'bg-ink-2' : 'bg-day-bg2'
  const card  = isDark ? 'bg-ink-2 border-white/[0.06]' : 'bg-white border-black/[0.06]'
  const muted = isDark ? 'text-muted' : 'text-gray-500'
  const head  = isDark ? 'text-light' : 'text-day-text'
  const accent= isDark ? 'text-accent' : 'text-blue-600'

  return (
    <section id="experience" className={`py-32 relative overflow-hidden ${bg}`}>
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 pointer-events-none"
           style={{ background:'radial-gradient(ellipse at left bottom,#00e5ff,transparent 70%)', opacity:isDark?0.05:0.02 }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16" data-aos="fade-up">
          <p className={`font-body text-sm uppercase tracking-widest mb-3 ${accent}`}>— My Journey</p>
          <h2 className={`font-display font-extrabold leading-tight ${head}`}
              style={{ fontSize:'clamp(2.4rem,5vw,3.5rem)' }}>
            Work <span className="grad-text">Experience</span>
          </h2>
        </div>

        <div className="relative pl-10">
          <div className="timeline-line" />

          {JOBS.map((job, i) => (
            <div key={i}
                 className={`relative mb-10 last:mb-0 exp-card rounded-2xl p-8 border ${card}`}
                 data-aos="fade-up" data-aos-delay={i * 80}>
              {/* Dot */}
              <div className="timeline-dot"
                   style={{
                     background: job.dotColor,
                     boxShadow: `0 0 ${job.current?'0px':'8px'} rgba(${job.dotGlow},0.7)`,
                     ...(job.current ? { animation:'pulseGlow 2s infinite' } : {}),
                   }} />

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  {job.current && (
                    <span className={`inline-block font-body text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${accent} bg-accent/10`}>
                      Current
                    </span>
                  )}
                  {job.intern && (
                    <span className="inline-block font-body text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3 text-accent-2 bg-accent-2/10">
                      Internship
                    </span>
                  )}
                  <h3 className={`font-display font-bold text-xl ${head}`}>{job.role}</h3>
                  <p className={`font-body mt-1 text-sm ${muted}`}>
                    {job.company}{job.sub && <span className={` ${accent}`}> {job.sub}</span>}
                  </p>
                </div>
                <span className={`font-body text-sm ${muted}`}>{job.period}</span>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-5">
                {job.bullets.map((b, j) => (
                  <li key={j} className={`flex gap-2 font-body text-sm leading-relaxed ${muted}`}>
                    <span className={`mt-1 flex-shrink-0 ${accent}`}>›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map(t=><span key={t} className="skill-badge">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
