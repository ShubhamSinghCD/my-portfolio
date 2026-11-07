import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    const onMove = e => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.13
      ring.current.y += (mouse.current.y - ring.current.y) * 0.13
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }
    animate()

    const grow = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'translate(-50%,-50%) scale(2.2)'
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.6)'
    }
    const shrink = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
    }
    // Event delegation: works for elements rendered after mount too
    const SEL = 'a,button,.skill-badge,.exp-card,.project-card'
    const onOver = e => { if (e.target.closest && e.target.closest(SEL)) grow() }
    const onOut  = e => { if (e.target.closest && e.target.closest(SEL)) shrink() }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
