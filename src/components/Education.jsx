const EDU = [
  { year: '2020', title: 'B.Sc. in Information Technology', sub: 'Graduated 2020', main: true },
  { year: '2017', title: 'HSC', sub: 'Nirmala Memorial Foundation College' },
  { year: '2015', title: 'SSC', sub: 'Saint Raghuvir Madhyamik School' },
]

export default function Education({ isDark }) {
  const bg     = isDark ? 'bg-ink'      : 'bg-day-bg'
  const card   = isDark ? 'bg-ink-2'    : 'bg-white'
  const muted  = isDark ? 'text-muted'  : 'text-gray-500'
  const head   = isDark ? 'text-light'  : 'text-day-text'
  const accent = isDark ? 'text-accent' : 'text-blue-600'

  return (
    <section id="education" className={`py-24 relative ${bg}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12" data-aos="fade-up">
          <p className={`font-body text-sm uppercase tracking-widest mb-3 ${accent}`}>— Foundation</p>
          <h2 className={`font-display font-extrabold leading-tight ${head}`}
              style={{ fontSize: 'clamp(2.2rem,4.5vw,3rem)' }}>
            <span className="grad-text">Education</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {EDU.map((e, i) => (
            <div key={e.title}
                 className={`glow-border rounded-2xl p-7 ${card}`}
                 data-aos="fade-up" data-aos-delay={i * 80}>
              <p className="font-display font-extrabold text-4xl grad-text mb-3">{e.year}</p>
              <h3 className={`font-display font-bold text-lg ${head}`}>{e.title}</h3>
              <p className={`font-body text-sm mt-1 ${muted}`}>{e.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
