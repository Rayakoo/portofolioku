'use client'

import { useRef } from 'react'
import styles from './TiltCard.module.css'

export default function TiltCard({ children }: { children?: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const boundsRef = useRef<DOMRect | null>(null)

  const handleEnter = () => {
    if (cardRef.current) {
      boundsRef.current = cardRef.current.getBoundingClientRect()
    }
  }

  const handleMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    const glow = glowRef.current
    const bounds = boundsRef.current
    if (!card || !glow || !bounds) return

    const mouseX = e.clientX
    const mouseY = e.clientY
    const leftX = mouseX - bounds.x
    const topY = mouseY - bounds.y
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

    card.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `

    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `
  }

  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
    if (glowRef.current) glowRef.current.style.backgroundImage = ''
  }

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
      <div ref={glowRef} className={styles.glow} />
    </div>
  )
}