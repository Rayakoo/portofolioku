'use client'

import FadeIn from './FadeIn'

const SERVICES = [
  {
    num: '01',
    name: 'Mobile Development',
    desc: 'Building cross-platform mobile applications using Flutter and modern Android development practices for responsive, scalable, and user-friendly experiences.',
  },
  {
    num: '02',
    name: 'Front-End Development',
    desc: 'Crafting modern web interfaces with React.js and Next.js, clean TypeScript code, and responsive design that balance performance, accessibility, and visual polish.',
  },
  {
    num: '03',
    name: 'UI/UX Design & Interaction',
    desc: 'Designing intuitive interfaces and seamless user experiences through prototyping tools, thoughtful interaction design, and accessibility-first thinking.',
  },
  {
    num: '04',
    name: 'API Integration',
    desc: 'Connecting front-end views with backend APIs, managing application state and ensuring smooth data flow across client applications.',
  },
  {
    num: '05',
    name: 'Software Engineering & Version Control',
    desc: 'Applying engineering principles and version control to build maintainable systems, collaborate across teams, and deliver reliable software across web and mobile platforms.',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Expertise
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((item, i) => (
          <FadeIn key={item.num} delay={i * 0.1} y={20}>
            <div className="flex items-start gap-4 sm:gap-6 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0">
              <span
                className="text-[#0C0C0C] font-black flex-shrink-0 leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.num}
              </span>
              <div className="flex flex-col pt-1 sm:pt-2 md:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
