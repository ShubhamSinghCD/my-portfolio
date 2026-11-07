const JOBS = [
  {
    current: true,
    role: 'Software Developer',
    company: 'Hridyaam Soft Solutions Pvt. Ltd.',
    sub: '@ NSE of India (vendor)',
    period: 'Jan 2025 – Present',
    bullets: [
      'Manage and support 3 enterprise Laravel applications at NSE: DMS (Document Management System), PPMS (Project & Performance Management System) and CSR Management System.',
      'Drive backend development, bug resolution and feature enhancements to maintain near-zero downtime across all platforms.',
      'Coordinate directly with NSE stakeholders for requirement gathering, change management and production deployments.',
      'Optimize database queries and application performance across high-traffic internal systems.',
    ],
    tags: ['Laravel','MySQL','Query Optimization','Enterprise Systems'],
    dotColor: '#00e5ff',
    dotGlow: '0,229,255',
  },
  {
    role: 'Software Developer',
    company: 'Alot Digital Solutions India Pvt. Ltd.',
    period: 'Jul 2023 – Dec 2024',
    bullets: [
      'Built and maintained a CPaaS (Communications Platform as a Service) product using Laravel, Tailwind CSS and Alpine.js, serving digital marketing campaigns.',
      'Led full-cycle development of 4 production platforms: chatway.in, promo.chatway.in, ceptiv.io and smppgateway.in.',
      'Developed and integrated RESTful APIs to connect third-party communication services and internal dashboards.',
      'Managed MySQL databases, wrote optimized queries and ensured smooth application data flows.',
    ],
    tags: ['Laravel','Tailwind CSS','Alpine.js','RESTful API','MySQL'],
    dotColor: '#00e5ff',
    dotGlow: '0,229,255',
  },
  {
    role: 'Web Developer',
    company: 'IeveEra Films Pvt. Ltd.',
    period: 'Mar 2021 – Dec 2022',
    bullets: [
      'Created and owned ieveeranews.com — a high-traffic Core PHP news portal for the film industry.',
      'Managed 4 websites simultaneously (ieveera.com, ieveeranews.com, ieveeratimes.com, ieveeraseo.com), aligning each with digital marketing strategies.',
      'Implemented on-page and off-page SEO, resulting in measurable improvements in organic search rankings.',
      'Collaborated with marketing teams to integrate website features with campaign goals.',
    ],
    tags: ['Core PHP','MySQL','SEO'],
    dotColor: '#00e5ff',
    dotGlow: '0,229,255',
  },
  {
    intern: true,
    role: 'Software Development Intern',
    company: 'Early Career · 7-Month Internship',
    period: 'Sep 2020 – May 2021',
    bullets: [
      'Completed a 7-month internship focused on the core web development stack: HTML, CSS, JavaScript, PHP, MySQL and Bootstrap.',
      'Worked on production tech projects under senior mentorship in a collaborative team environment.',
    ],
    tags: ['HTML/CSS','JavaScript','PHP','MySQL','Bootstrap'],
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
