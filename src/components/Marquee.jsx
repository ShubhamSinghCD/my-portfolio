const items = [
  'chatway.in','promo.chatway.in','ceptiv.io','smppgateway.in',
  'ieveeranews.com','ieveeratimes.com','ieveera.com','ieveeraseo.com',
  'NSE DMS','NSE PPMS','NSE CSR System',
]

export default function Marquee({ isDark }) {
  const borderColor = isDark ? 'border-white/5' : 'border-black/5'
  const stroke = isDark ? 'rgba(0,229,255,0.13)' : 'rgba(0,112,243,0.13)'

  const text = [...items, ...items].join('  ·  ')

  return (
    <section className={`py-14 overflow-hidden border-y ${borderColor}`}>
      <div
        className="whitespace-nowrap font-display font-extrabold"
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: 'transparent',
          WebkitTextStroke: `1px ${stroke}`,
          animation: 'marquee 28s linear infinite',
          display: 'inline-block',
        }}
      >
        {text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}
      </div>
    </section>
  )
}
