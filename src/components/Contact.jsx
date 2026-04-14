import { useRef, useState } from 'react'
import $ from 'jquery'

function FieldError({ msg }) {
  if (!msg) return null
  return (
    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
      <span>⚠</span> {msg}
    </p>
  )
}

function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4 inline-block mr-2" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  )
}

const INIT_FIELDS = { name: '', email: '', subject: '', message: '' }
const INIT_ERRORS = { name: '', email: '', subject: '', message: '' }

export default function Contact({ isDark }) {
  const [fields, setFields] = useState(INIT_FIELDS)
  const [errors, setErrors] = useState(INIT_ERRORS)
  const [status, setStatus] = useState('idle')
  const [apiMsg, setApiMsg] = useState('')
  const formRef = useRef(null)

  const bg     = isDark ? 'bg-ink-2'   : 'bg-day-bg2'
  const muted  = isDark ? 'text-muted'  : 'text-gray-500'
  const head   = isDark ? 'text-light'  : 'text-day-text'
  const accent = isDark ? 'text-accent' : 'text-blue-600'
  const iconBg = isDark ? 'bg-ink'     : 'bg-white'

  const validate = () => {
    const e = { ...INIT_ERRORS }
    let ok = true
    if (!fields.name.trim())        { e.name    = 'Name is required.';             ok = false }
    else if (fields.name.length>120){ e.name    = 'Max 120 characters.';           ok = false }
    if (!fields.email.trim())       { e.email   = 'Email is required.';            ok = false }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                    { e.email   = 'Enter a valid email.';          ok = false }
    if (!fields.subject.trim())     { e.subject = 'Subject is required.';          ok = false }
    if (!fields.message.trim())     { e.message = 'Message is required.';          ok = false }
    else if (fields.message.trim().length < 10)
                                    { e.message = 'At least 10 characters.';       ok = false }
    setErrors(e)
    return ok
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setApiMsg('')

    $.ajax({
      url:         '/api/contact',
      method:      'POST',
      contentType: 'application/json',
      data:        JSON.stringify(fields),
      success(res) {
        if (res.success) {
          setStatus('success')
          setApiMsg(res.message)
          setFields(INIT_FIELDS)
          setErrors(INIT_ERRORS)
          setTimeout(() => { setStatus('idle'); setApiMsg('') }, 5000)
        } else {
          setStatus('error')
          setApiMsg((res.errors || ['Something went wrong.']).join(' '))
        }
      },
      error(xhr) {
        const res = xhr.responseJSON
        setStatus('error')
        setApiMsg(res?.errors?.join(' ') || 'Server error. Please try again later.')
      },
    })
  }

  const onChange = e => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const inputCls = hasErr =>
    `w-full rounded-xl px-5 py-4 text-sm outline-none transition-all duration-300 ${hasErr ? 'border-red-400/60 bg-red-500/5' : ''}`.trim()

  const BtnContent = () => {
    if (status === 'loading') return <><Spinner /><span>Sending…</span></>
    if (status === 'success') return <span>✓ Message Sent!</span>
    return <span>Send Message →</span>
  }

  return (
    <section id="contact" className={`py-32 relative overflow-hidden ${bg}`}>
      <div className="absolute inset-0 pointer-events-none"
           style={{ background:'radial-gradient(ellipse at center,#00e5ff,transparent 70%)', opacity:isDark?0.04:0.02 }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left info */}
          <div data-aos="fade-right">
            <div className="section-line">
              <p className={`font-body text-sm uppercase tracking-widest mb-3 ${accent}`}>— Let's Talk</p>
            </div>
            <h2 className={`font-display font-extrabold leading-tight mb-8 ${head}`}
                style={{ fontSize:'clamp(2.4rem,5vw,3.5rem)' }}>
              Got a project<br />in <span className="grad-text">mind?</span>
            </h2>
            <p className={`font-body leading-relaxed mb-10 ${muted}`}>
              Always open to discussing new projects, creative ideas, or opportunities.
              Let's build something great together!
            </p>
            <div className="space-y-5">
              {[
                { icon:'📧', label:'Email',    val:'shubhamsingh4954@gmail.com', href:'mailto:shubhamsingh4954@gmail.com' },
                { icon:'📱', label:'Phone',    val:'+91 7738684954',             href:'tel:+917738684954' },
                { icon:'📍', label:'Location', val:'Kandivali East, Mumbai',     href:null },
              ].map(({ icon, label, val, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl glow-border flex items-center justify-center flex-shrink-0 text-lg ${iconBg}`}>
                    {icon}
                  </div>
                  <div>
                    <p className={`font-body text-xs uppercase tracking-wider ${muted}`}>{label}</p>
                    {href
                      ? <a href={href} className={`font-body text-sm hover:underline ${head}`}>{val}</a>
                      : <p className={`font-body text-sm ${head}`}>{val}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              <span className={`font-body text-xs ${muted}`}>
                Messages stored in MySQL · <code className="opacity-60">portfolio.contacts</code>
              </span>
            </div>
          </div>

          {/* Right form */}
          <div data-aos="fade-left" data-aos-delay="200">
            {apiMsg && (
              <div className={`mb-6 px-5 py-4 rounded-xl text-sm font-body flex items-start gap-3 ${
                status === 'success'
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}>
                <span className="flex-shrink-0">{status === 'success' ? '✅' : '❌'}</span>
                <span>{apiMsg}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input type="text" name="name" placeholder="Your Name"
                         value={fields.name} onChange={onChange} className={inputCls(!!errors.name)} />
                  <FieldError msg={errors.name} />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email Address"
                         value={fields.email} onChange={onChange} className={inputCls(!!errors.email)} />
                  <FieldError msg={errors.email} />
                </div>
              </div>

              <div>
                <input type="text" name="subject" placeholder="Subject"
                       value={fields.subject} onChange={onChange} className={inputCls(!!errors.subject)} />
                <FieldError msg={errors.subject} />
              </div>

              <div>
                <textarea name="message" rows={6} placeholder="Tell me about your project…"
                          value={fields.message} onChange={onChange} className={inputCls(!!errors.message)} />
                <FieldError msg={errors.message} />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`btn-primary w-full py-4 rounded-xl text-sm font-display font-bold uppercase tracking-wider flex items-center justify-center gap-1 disabled:opacity-70 disabled:pointer-events-none ${status === 'success' ? 'opacity-80' : ''}`}
              >
                <BtnContent />
              </button>

              <p className={`text-center font-body text-xs ${muted}`}>
                jQuery Ajax → Express API → MySQL
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
