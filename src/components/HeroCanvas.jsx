import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCanvas({ isDark }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    } catch (err) {
      // WebGL unavailable (old device / blocked) — skip the 3D background instead of crashing the page
      console.warn('WebGL not available, hero canvas disabled.', err)
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000)
    camera.position.z = 5

    // Particles
    const count = 1400
    const pos   = new Float32Array(count * 3)
    const col   = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
      const t = Math.random()
      if (t < 0.5) { col[i*3]=0;    col[i*3+1]=0.9; col[i*3+2]=1 }   // cyan
      else          { col[i*3]=0.48; col[i*3+1]=0.38;col[i*3+2]=1 }   // purple
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(col, 3))
    const mat = new THREE.PointsMaterial({ size: 0.028, vertexColors: true, transparent: true, opacity: isDark ? 0.7 : 0.4 })
    const pts = new THREE.Points(geo, mat)
    scene.add(pts)

    // Icosahedron wireframe
    const sphereGeo = new THREE.IcosahedronGeometry(2.5, 2)
    const sphereMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x00e5ff : 0x0070f3,
      wireframe: true, transparent: true, opacity: 0.05
    })
    const sphere = new THREE.Mesh(sphereGeo, sphereMat)
    sphere.position.x = 3
    scene.add(sphere)

    let mouseX = 0, mouseY = 0
    const onMouse = e => {
      mouseX = (e.clientX / window.innerWidth  - 0.5)
      mouseY = (e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMouse)

    let raf
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = Date.now() * 0.0005
      pts.rotation.y = t * 0.04 + mouseX * 0.25
      pts.rotation.x = mouseY * 0.18
      sphere.rotation.y = t * 0.18
      sphere.rotation.x = t * 0.09
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight
      if (!w || !h) return
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
      sphereGeo.dispose()
      sphereMat.dispose()
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}
