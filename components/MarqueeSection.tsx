'use client'

import { useEffect, useRef, useState } from 'react'

const IMAGES = [
  '/projects/Teachup.png',
  '/projects/ngalam_tanggap.png',
  '/projects/sobat_bimbing.png',
  '/projects/qnectify.png',
  '/projects/neuroclash.png',
  '/projects/ayamkotamalang.png',
  '/projects/dearbaby.png',
  '/projects/epiccsafe.png',
  '/projects/omahgembira.png',
  '/projects/omahnalar.png',
  '/projects/riendysadv.png',
  '/projects/rps_generator_unsri.png',
  '/projects/sineda.png',
]

const ROW1_IMAGES = IMAGES.slice(0, 7)
const ROW2_IMAGES = IMAGES.slice(7)

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(200)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const scrollVal = (window.scrollY - rect.top + window.innerHeight) * 0.3
      setOffset(200 + scrollVal)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1 = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES]
  const row2 = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES]

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div
        className="flex gap-3 mb-4"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {row1.map((src, i) => (
          <img
            key={`r1-${i}`}
            src={src}
            alt=""
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 opacity-75"
            loading="lazy"
          />
        ))}
      </div>

      <div
        className="flex gap-3"
        style={{ transform: `translateX(-${offset - 200}px)`, willChange: 'transform' }}
      >
        {row2.map((src, i) => (
          <img
            key={`r2-${i}`}
            src={src}
            alt=""
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 opacity-75"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
