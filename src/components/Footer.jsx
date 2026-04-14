export default function Footer({ isDark }) {
  const bg     = isDark ? 'bg-ink border-white/5'    : 'bg-day-bg border-black/5'
  const muted  = isDark ? 'text-muted' : 'text-gray-500'

  return (
    <footer className={`py-10 border-t ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
        <p className={`font-body text-sm ${muted}`}>© {new Date().getFullYear()} Shubham Singh. Built with passion.</p>
        <p className={`font-body text-sm ${muted}`}>Mumbai · India</p>
      </div>
    </footer>
  )
}
