'use client'

import { useEffect, useRef } from 'react'

const NODE_COUNT = 24
const DOT_R = 2

export default function BackgroundNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const nodes: { x: number; y: number; phase: number }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      nodes.length = 0
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      const t = Date.now() * 0.0003
      const isDark = document.documentElement.classList.contains('dark')
      const color = isDark ? '255,255,255' : '0,0,0'

      nodes.forEach((node, i) => {
        const opacity = 0.12 + 0.08 * Math.sin(t + node.phase)
        ctx.beginPath()
        ctx.arc(node.x, node.y, DOT_R, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color},${opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
