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
              Backend that<br /><span className="grad-text">scales</span> &amp;<br />stays up.
            </h2>
            <p className={`font-body leading-relaxed mb-6 ${muted}`}>
              Backend developer from Kandivali East, Mumbai with 4+ years of experience building
              and maintaining scalable web applications and REST APIs across enterprise, fintech
              and digital marketing domains.
            </p>
            <p className={`font-body leading-relaxed mb-8 ${muted}`}>
              Currently deployed at the{' '}
              <strong className={headTxt}>National Stock Exchange of India (NSE)</strong>, managing
              critical enterprise platforms. Strong in backend architecture, database design and
              PHP/Laravel + MySQL — now applying that to Python with FastAPI, including
              AI/ML-integrated applications.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ['Location','Mumbai, IN'],
                ['Education','B.Sc. IT · 2020'],
                ['Status','● Open to work'],
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
                <p className={`font-display font-bold text-sm mt-1 ${headTxt}`}>Software Developer</p>
                <p className={`font-body text-xs mt-1 ${accentTxt}`}>Hridyaam Soft · NSE · Jan 2025</p>
              </div>
              {/* Floating card 2 */}
              <div className={`absolute bottom-6 -right-2 glow-border rounded-2xl p-4 animate-float-delay ${isDark?'bg-ink':'bg-white'}`}>
                <p className={`font-body text-xs ${muted}`}>Core Stack</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {['Python','FastAPI','Laravel'].map(s=>(
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
