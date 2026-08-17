'use client'

import { useRef, ReactNode, MouseEvent } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY

    if (Math.abs(distX) > rect.width / 2 + padding || Math.abs(distY) > rect.height / 2 + padding) {
      el.style.transform = 'translate3d(0, 0, 0)'
      el.style.transition = 'transform 0.6s ease-in-out'
      return
    }

    el.style.transition = 'transform 0.3s ease-out'
    el.style.transform = `translate3d(${distX / strength}px, ${distY / strength}px, 0)`
    el.style.willChange = 'transform'
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0, 0, 0)'
    el.style.transition = 'transform 0.6s ease-in-out'
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
