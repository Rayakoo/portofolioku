'use client'

import TimelineCard from './TimelineCard'
import { Award, Lightbulb, PenLine, Search } from 'lucide-react'

const timelineData = [
  {
    side: 'left' as const,
    image: '/experience&achievement/logo_ub.png',
    icon: <Lightbulb size={20} />,
    title: 'Education',
    content:
      'Bachelor of Informatics Engineering at Faculty of Computer Science, Universitas Brawijaya (2023 - Present, expected 2027). Actively involved in development and research projects related to web, mobile, and backend systems.',
    defaultOpen: true,
  },
  {
    side: 'right' as const,
    image: '/experience&achievement/raion.webp',
    icon: <Search size={20} />,
    title: 'Raion App Programmer',
    content:
      'March 2025 - March 2026. Contributed to building and maintaining multiple digital products within Raion App Programmer Division.',
    
  },
  {
    side: 'left' as const,
    image: '/experience&achievement/hology.svg',
    icon: <PenLine size={20} />,
    title: 'Hology',
    content:
      'Awarded 4th place in Software Development at Hology 8.0. Also coordinated and supported the execution of Hology 7.0, a national-scale IT event at Universitas Brawijaya (May 2024 - Feb 2025).',
    
  },
  {
    side: 'right' as const,
    image: '/experience&achievement/mgm.png',
    bg: '#ffffff',
    icon: <Award size={20} />,
    title: 'MGM Laboratory',
    content:
      'Mar 2026 - Present. Research, design, and develop mobile application solutions focusing on performance optimization, UI/UX implementation, and modern mobile technologies at MGM Laboratory, Faculty of Computer Science, Universitas Brawijaya.',
    
  },
  {
    side: 'left' as const,
    image: '/experience&achievement/pekan_it.webp',
    icon: <Award size={20} />,
    title: 'National IT Competition',
    content:
      'Awarded 2nd place in Software Development at National IT Competition 2026 by Universitas Singaperbangsa Karawang.',
    
  },
  {
    side: 'right' as const,
    image: '/experience&achievement/seal.png',
    bg: '#ffffff',
    icon: <Award size={20} />,
    title: 'Profile Image Studio',
    content:
      'Jan 2026 - July 2026. Internship building and refining user-facing features for mobile and web platforms, integrating front-end views with backend APIs, and assisting in code reviews, bug fixes, and performance tuning.',
    
  },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative w-full bg-[#0C0C0C]">
      <div className="py-8 px-4">
        <div
          className="my-5 h-px max-w-5xl mx-auto"
          style={{
            background: 'linear-gradient(90deg, transparent, #555, transparent)',
          }}
        />

        <p className="text-lg sm:text-xl font-bold text-center my-8 text-[#D7E2EA]/80">
          Experience &amp; Trophy
        </p>

        <div className="max-w-5xl mx-auto px-2">
          <div className="relative">
            {/* Mobile left line */}
            <div className="md:hidden absolute left-[10px] top-0 bottom-0 border-l border-dashed border-[#444]" />

            {timelineData.map((item, index) => (
              <div key={index} className="relative flex">
                {/* Desktop dot */}
                <div className="hidden md:block absolute top-[26px] z-10 w-[22px] h-[22px] rounded-full bg-[#555] border-[3px] border-[#0C0C0C] outline outline-1 outline-[#555] left-1/2 -translate-x-1/2" />
                {/* Mobile dot */}
                <div className="md:hidden absolute top-[26px] z-10 w-[22px] h-[22px] rounded-full bg-[#555] border-[3px] border-[#0C0C0C] outline outline-1 outline-[#555] left-[10px] -translate-x-1/2" />

                <TimelineCard
                  image={item.image}
                  bg={item.bg}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  side={item.side}
                  defaultOpen={item.defaultOpen}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
