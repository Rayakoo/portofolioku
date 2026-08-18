'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectGalleryProps {
  images: string[]
  name: string
}

export default function ProjectGallery({ images, name }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0)
  const src = images[index] ?? images[0]
  const showControls = images.length > 1

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className="space-y-6 w-full">
      <div className="relative group w-full">
        {showControls && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 bg-zinc-800/90 border-zinc-700 text-zinc-200 hover:bg-zinc-700 left-4 md:left-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className="absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 bg-zinc-800/90 border-zinc-700 text-zinc-200 hover:bg-zinc-700 right-4 md:right-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="aspect-video w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 relative shadow-2xl shadow-black/50 select-none">
          <Image
            src={src}
            alt={name}
            fill
            sizes="100vw"
            quality={75}
            priority
            className="object-cover object-top"
          />
        </div>
      </div>

      {showControls && (
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 sm:pb-4 pt-2 px-2 sm:px-4 lg:px-0 justify-center [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
          {images.map((img, i) => (
            <button
              key={`${img}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${name} screenshot ${i + 1}`}
              className={`relative w-16 h-12 md:w-24 md:h-16 flex-shrink-0 rounded-lg overflow-hidden border transition-all duration-300 ${
                i === index
                  ? 'border-zinc-100 ring-2 ring-white/10 opacity-100 scale-105'
                  : 'border-zinc-800 opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
              }`}
            >
              <Image src={img} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}