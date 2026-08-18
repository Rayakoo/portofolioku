'use client'

import { motion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  className?: string
  id?: string
  mode?: 'view' | 'mount'
  from?: 'top' | 'bottom'
  delay?: number
}

export default function Reveal({
  children,
  className,
  id,
  mode = 'view',
  from = 'bottom',
  delay = 0,
}: RevealProps) {
  const hidden = { opacity: 0, y: from === 'top' ? -100 : 20 }

  return (
    <motion.div
      id={id}
      className={className}
      initial={hidden}
      {...(mode === 'mount'
        ? { animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut', delay } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-80px' },
            transition: { duration: 0.6, ease: 'easeOut', delay },
          })}
    >
      {children}
    </motion.div>
  )
}