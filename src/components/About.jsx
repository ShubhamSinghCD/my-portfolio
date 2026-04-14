export default function About({ isDark }) {
  const isDarkCard = isDark
    ? 'bg-ink-2 text-light'
    : 'bg-day-bg2 text-day-text'
  const muted = isDark ? 'text-muted' : 'text-gray-500'
  const accentTxt = isDark ? 'text-accent' : 'text-blue-600'
  const headTxt   = isDark ? 'text-light'  : 'text-day-text'
  const bg        = isDark ? 'bg-ink-2'    : 'bg-day-bg2'

  return (
    <section id="about" className={`py-32 relative overflow-hidden ${bg}`}>
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
           style={{ background:'radial-gradient(ellipse at right,#7b61ff,transparent 70%)', opacity: isDark?0.05:0.03 }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div data-aos="fade-right" data-aos-duration="800">
            <div className="section-line">
              <p className={`font-body text-sm uppercase tracking-widest mb-3 ${accentTxt}`}>— Who I Am</p>
            </div>
            <h2 className={`font-display font-extrabold leading-tight mb-8 ${headTxt}`}
                style={{ fontSize:'clamp(2.4rem,5vw,3.5rem)' }}>
              Building the<br /><span className="grad-text">digital web</span><br />since 2020.
            </h2>
            <p className={`font-body leading-relaxed mb-6 ${muted}`}>
              I'm a dedicated full-stack developer from Kandivali East, Mumbai with a B.Sc. in
              Information Technology. I specialise in turning complex ideas into clean,
              performant web experiences.
            </p>
            <p className={`font-body leading-relaxed mb-8 ${muted}`}>
              From managing film industry websites to building enterprise-grade applications
              deployed at the{' '}
              <strong className={headTxt}>National Stock Exchange of India</strong>, I bring
              both breadth and depth to every project.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ['Location','Mumbai, IN'],
                ['Education','BSc IT · 2020'],
                ['Status','● Available'],
              ].map(([lbl, val]) => (
                <div key={lbl} className={`glow-border rounded-xl px-5 py-4 text-center ${isDark?'bg-ink':'bg-white'}`}>
                  <p className={`font-body text-xs uppercase tracking-widest ${muted}`}>{lbl}</p>
                  <p className={`font-display font-bold mt-1 text-sm ${lbl==='Status'?accentTxt:headTxt}`}>{val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right decorative */}
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div className="relative">
              <div className={`font-display font-extrabold text-center select-none`}
                   style={{ fontSize:'clamp(100px,15vw,200px)', lineHeight:1, color:'transparent',
                            WebkitTextStroke:`1px rgba(${isDark?'0,229,255':'0,112,243'},0.06)` }}>
                SS
              </div>
              {/* Floating card 1 */}
              <div className={`absolute top-6 -left-2 glow-border rounded-2xl p-4 animate-float ${isDark?'bg-ink':'bg-white'}`}>
                <p className={`font-body text-xs ${muted}`}>Current Role</p>
                <p className={`font-display font-bold text-sm mt-1 ${headTxt}`}>Software Developer @ HSS</p>
                <p className={`font-body text-xs mt-1 ${accentTxt}`}>NSE of India · Jan 2025</p>
              </div>
              {/* Floating card 2 */}
              <div className={`absolute bottom-6 -right-2 glow-border rounded-2xl p-4 animate-float-delay ${isDark?'bg-ink':'bg-white'}`}>
                <p className={`font-body text-xs ${muted}`}>Core Stack</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {['Laravel','PHP','React'].map(s=>(
                    <span key={s} className="skill-badge" style={{fontSize:'0.7rem',padding:'2px 10px'}}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
