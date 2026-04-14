const SKILLS = [
  { icon:'⚡', title:'Backend',          tags:['PHP','Laravel','MySQL','RESTful API','Ajax','Core PHP'] },
  { icon:'🎨', title:'Frontend',         tags:['React.js','Tailwind CSS','Alpine.js','jQuery','Bootstrap','HTML/CSS'] },
  { icon:'🛠',  title:'Infrastructure',   tags:['Linux','Apache','Nginx','Python','Git'] },
  { icon:'📈', title:'Marketing & SEO',  tags:['On-Page SEO','Off-Page SEO','Site Audits','CPaaS','Digital Marketing'] },
]

export default function Skills({ isDark }) {
  const bg     = isDark ? 'bg-ink'  : 'bg-day-bg'
  const card   = isDark ? 'bg-ink-2': 'bg-white'
  const muted  = isDark ? 'text-muted' : 'text-gray-500'
  const head   = isDark ? 'text-light' : 'text-day-text'
  const accent = isDark ? 'text-accent' : 'text-blue-600'

  return (
    <section id="skills" className={`py-32 relative ${bg} bg-grid-${isDark?'dark':'light'}`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20" data-aos="fade-up">
          <p className={`font-body text-sm uppercase tracking-widest mb-3 ${accent}`}>— What I Know</p>
          <h2 className={`font-display font-extrabold leading-tight ${head}`}
              style={{ fontSize:'clamp(2.4rem,5vw,3.5rem)' }}>
            Tech <span className="grad-text">Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((s, i) => (
            <div key={s.title}
                 className={`glow-border rounded-2xl p-8 ${card}`}
                 data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
                   style={{ background:'linear-gradient(135deg,rgba(0,229,255,0.12),rgba(123,97,255,0.12))' }}>
                <span className="text-2xl">{s.icon}</span>
              </div>
              <h3 className={`font-display font-bold text-xl mb-4 ${head}`}>{s.title}</h3>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => <span key={t} className="skill-badge">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className={`mt-8 glow-border rounded-2xl p-8 ${card}`} data-aos="fade-up">
          <p className={`font-body text-sm uppercase tracking-widest mb-4 ${muted}`}>Languages Spoken</p>
          <div className="flex flex-wrap gap-3">
            {['Hindi','Marathi','English'].map(l=><span key={l} className="skill-badge">{l}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
