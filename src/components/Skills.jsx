const SKILLS = [
  { icon:'🐍', title:'Languages',       tags:['Python','PHP','JavaScript (ES6+)','SQL','HTML5','CSS3'] },
  { icon:'⚡', title:'Frameworks',      tags:['FastAPI','Laravel','React.js','Node.js','Express.js','Alpine.js','Tailwind CSS'] },
  { icon:'🗄',  title:'Databases',       tags:['MySQL','Database Design','Query Optimization'] },
  { icon:'🛠',  title:'Tools & Infra',   tags:['Git','GitHub','Linux','Apache','Nginx','REST APIs','Postman','Composer','npm'] },
  { icon:'📈', title:'Other',           tags:['SEO (On-page & Off-page)','Agile/Scrum','Cross-functional Collaboration'] },
]

export default function Skills({ isDark }) {
  const bg     = isDark ? 'bg-ink'  : 'bg-day-bg'
  const card   = isDark ? 'bg-ink-2': 'bg-white'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* Spoken languages */}
          <div className={`glow-border rounded-2xl p-8 ${card}`}
               data-aos="fade-up" data-aos-delay={SKILLS.length * 80}>
            <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
                 style={{ background:'linear-gradient(135deg,rgba(0,229,255,0.12),rgba(123,97,255,0.12))' }}>
              <span className="text-2xl">🗣</span>
            </div>
            <h3 className={`font-display font-bold text-xl mb-4 ${head}`}>Languages Spoken</h3>
            <div className="flex flex-wrap gap-2">
              {['Hindi','Marathi','English'].map(l => <span key={l} className="skill-badge">{l}</span>)}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
