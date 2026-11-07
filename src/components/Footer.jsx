export default function Footer({ isDark }) {
  const bg    = isDark ? 'bg-ink border-white/5' : 'bg-day-bg border-black/5'
  const muted = isDark ? 'text-muted' : 'text-gray-500'
  const hover = isDark ? 'hover:text-accent' : 'hover:text-blue-600'

  return (
    <footer className={`py-10 border-t ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
        <p className={`font-body text-sm ${muted}`}>© {new Date().getFullYear()} Shubham Singh · coredev.in</p>
        <div className={`flex items-center gap-6 font-body text-sm ${muted}`}>
          <a href="https://github.com/ShubhamSinghCD" target="_blank" rel="noreferrer" className={`transition-colors ${hover}`}>GitHub</a>
          <a href="mailto:shubhamsingh4954@gmail.com" className={`transition-colors ${hover}`}>Email</a>
          <span>Mumbai · India</span>
        </div>
      </div>
    </footer>
  )
}
