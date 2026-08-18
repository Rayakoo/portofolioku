'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface TimelineCardProps {
  image?: string
  gradient?: string
  label?: string
  icon: React.ReactNode
  title: string
  content: string
  side: 'left' | 'right'
  defaultOpen?: boolean
  bg?: string
}

export default function TimelineCard({
  image,
  gradient = 'from-gray-700 to-gray-900',
  label,
  icon,
  title,
  content,
  side,
  defaultOpen = true,
  bg,
}: TimelineCardProps) {
  const [open, setOpen] = useState(defaultOpen)

  const originClass =
    side === 'left' ? '[transform-origin:100%_0%]' : '[transform-origin:0%_0%]'

  return (
    <div
      className={`relative w-full md:w-1/2 py-5 md:py-4 ${
        side === 'left'
          ? 'md:pr-10 pl-10 pr-6 md:pl-0'
          : 'md:pl-10 pl-10 pr-6 md:pr-0 md:ml-auto'
      }`}
    >
      {/* Arrow */}
      <div
        className={`tl-arrow-anim hidden md:block absolute top-[26px] z-10 w-0 h-0 ${originClass} ${
          side === 'left'
            ? 'right-[32px] border-t-[10px] border-b-[10px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#1a1a1a]'
            : 'left-[32px] border-t-[10px] border-b-[10px] border-r-[12px] border-t-transparent border-b-transparent border-r-[#1a1a1a]'
        }`}
      />

      {/* Card */}
      <div
        className={`tl-card-anim ${originClass} bg-[#1a1a1a] shadow-lg shadow-black/30 overflow-hidden rounded-lg border border-[#222]`}
      >
        {/* Image container with hover effect */}
        <div className="group w-full h-48 overflow-hidden">
          <div
            className={`w-full h-full bg-center bg-contain bg-no-repeat transition-all duration-500 group-hover:scale-110 group-hover:[filter:saturate(100%)] ${
              image ? '' : 'bg-gradient-to-br'
            } ${!image ? gradient : ''}`}
            style={{
              ...(image ? { backgroundImage: `url(${image})` } : {}),
              ...(bg ? { backgroundColor: bg } : {}),
              filter: 'saturate(60%)',
            }}
          >
            {!image && (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/20 font-black text-7xl select-none">
                  {title[0]}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Accordion header */}
        <button
          onClick={() => setOpen(!open)}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold transition-colors duration-300 outline-none cursor-pointer ${
            open ? 'bg-[#1E90FF] text-white' : 'bg-[#222] text-[#D7E2EA]'
          }`}
        >
          {icon}
          <span>{title}</span>
          <ChevronDown
            size={18}
            className={`ml-1 transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            } ${open ? 'text-white' : 'text-[#888]'}`}
          />
        </button>

        {/* Accordion body */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: open ? '300px' : '0px' }}
        >
          {label && (
            <div className="px-5 pt-3 pb-1">
              <span className="text-[#888] text-[11px] uppercase tracking-widest">
                {label}
              </span>
            </div>
          )}
          <p className="px-5 py-4 text-sm font-light text-[#D7E2EA]/60 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}
