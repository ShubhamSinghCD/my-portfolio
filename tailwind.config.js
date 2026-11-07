/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        ink: '#0a0a0f',
        'ink-2': '#12121a',
        accent: '#00e5ff',
        'accent-2': '#7b61ff',
        muted: '#6b6b80',
        light: '#e8e8f0',
        'day-bg': '#f5f4f0',
        'day-bg2': '#eceae3',
        'day-text': '#1a1a2e',
        'day-muted': '#6b6b80',
        'day-accent': '#0070f3',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 8px rgba(0,229,255,0.4)' },
          '50%': { boxShadow: '0 0 24px rgba(0,229,255,0.9), 0 0 48px rgba(0,229,255,0.3)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
