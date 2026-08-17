'use client'

import { motion } from 'framer-motion'
import { ReactNode, ElementType } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: ElementType
  className?: string
  style?: Record<string, string | number>
}

const MotionDiv = motion.create('div')
const MotionSpan = motion.create('span')
const MotionSection = motion.create('section')

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as: Tag = 'div',
  className = '',
  style,
}: FadeInProps) {
  const MotionTag =
    Tag === 'div'
      ? MotionDiv
      : Tag === 'span'
        ? MotionSpan
        : Tag === 'section'
          ? MotionSection
          : motion.create(Tag as any)

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
