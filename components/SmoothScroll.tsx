'use client'

import { useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'framer-motion'

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
