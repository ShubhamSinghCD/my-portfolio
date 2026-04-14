import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    const body = document.body
    body.classList.remove('dark', 'light')
    body.classList.add(theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle, isDark: theme === 'dark' }
}
