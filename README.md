# Shubham Singh — Portfolio

A production-grade portfolio built with **React + Vite + Tailwind CSS + Three.js + GSAP + AOS**.

## ✨ Features
- 🌙 Day / Night theme toggle (persisted in localStorage)
- 🌌 Three.js animated particle hero canvas
- ✨ GSAP staggered hero animations + ScrollTrigger
- 📜 AOS scroll-reveal throughout
- 🖱️ Custom cursor with ring lag
- 📱 Fully responsive + mobile menu
- 💚 WhatsApp floating button (bottom-right corner)
- 🔄 Infinite marquee of project names
- 🖥 Terminal-style contact card (email / WhatsApp / résumé download, copy-email button)

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

Open http://localhost:5173 in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── Cursor.jsx          # Custom cursor + ring
│   ├── Navbar.jsx          # Sticky nav + theme toggle + mobile menu
│   ├── HeroCanvas.jsx      # Three.js particle field
│   ├── Hero.jsx            # Hero section with GSAP animations
│   ├── About.jsx           # About + floating cards
│   ├── Skills.jsx          # Tech stack grid
│   ├── Projects.jsx        # 4-col × 2-row project grid
│   ├── Marquee.jsx         # Infinite scrolling text
│   ├── Experience.jsx      # Timeline work history
│   ├── Education.jsx       # Education cards
│   ├── Contact.jsx         # Terminal-style contact section (no form)
│   ├── Footer.jsx
│   └── WhatsAppButton.jsx  # Fixed WhatsApp CTA
├── hooks/
│   └── useTheme.js         # Dark/light theme hook
├── App.jsx
├── main.jsx
└── index.css               # All global styles
```

## 🛠 Tech Stack
- **React 18** + **Vite 5**
- **Tailwind CSS 3** (with dark-mode class strategy)
- **Three.js** — particle hero canvas
- **GSAP 3** + ScrollTrigger
- **AOS 2.3** — scroll animations
- **Syne** + **DM Sans** — typography

## 🌐 Deploying to coredev.in (GitHub Pages)

`public/CNAME` keeps the custom domain across deployments, and
`.github/workflows/deploy.yml` builds the site and publishes `dist/`.

1. Push to `main`.
2. GitHub → **Settings → Pages → Source: GitHub Actions**.
3. DNS: 4 × A records (`185.199.108-111.153`) for `@` and a CNAME `www` → `<username>.github.io`.

> The old `server/` folder (Express + MySQL contact API) is no longer used by the site and can be deleted.
> Never commit `server/.env` — it is now in `.gitignore`.
