'use client'

import { useEffect, useRef } from 'react'

const COLORS = ['#6c5ce7', '#e84393', '#00b4d8', '#f9a03f', '#3dca7e']

function hexToRgb(hex: string) {
  return `${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)}`
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = Math.max(document.body.scrollHeight, window.innerHeight)
    }
    resize()

    const pts = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas!.width,
      y: Math.random() * canvas!.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }))

    let rafId: number

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas!.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas!.height) p.vy *= -1
        p.pulse += 0.012
        const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse))

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(${hexToRgb(p.color)},${(1 - d / 120) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${hexToRgb(p.color)},${a})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      resize()
      pts.forEach((p) => {
        p.x = Math.min(p.x, canvas!.width)
        p.y = Math.min(p.y, canvas!.height)
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} id="canvas-bg" />
}
