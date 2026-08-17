'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

function CharSpan({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

interface AnimatedTextProps {
  text: string
  className?: string
  style?: Record<string, string>
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(/(\s+)/)
  const totalChars = text.replace(/\s+/g, '').length
  let charIndex = 0

  return (
    <p ref={ref} className={`relative ${className}`} style={style}>
      {words.map((word, wi) => {
        if (/^\s+$/.test(word)) {
          return <span key={wi} className="inline-block" style={{ width: `${word.length * 0.3}em` }} />
        }
        const chars = word.split('')
        const start = charIndex
        charIndex += chars.length
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {chars.map((char, ci) => (
              <CharSpan
                key={ci}
                char={char}
                index={start + ci}
                total={totalChars}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </span>
        )
      })}
    </p>
  )
}
