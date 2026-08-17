'use client'

import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'

export default function AboutSection() {
  return (
    <section className="relative min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      <FadeIn x={-80} y={0} delay={0.1} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn x={-80} y={0} delay={0.25} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-[100px] sm:w-[140px] md:w-[180px]"
        />
      </FadeIn>

      <FadeIn x={80} y={0} delay={0.15} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn x={80} y={0} delay={0.3} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-[130px] sm:w-[170px] md:w-[220px]"
        />
      </FadeIn>

      <div className="flex flex-col items-center justify-center min-h-screen gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40} delay={0}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text="Mobile Developer with a focus on delivering impactful and user-centered digital experiences. Passionate about turning design concepts into responsive, high-performance web interfaces through clean and efficient code. Demonstrated proficiency in modern Android and mobile apps, project management, and seamless collaboration with cross-functional teams to create intuitive and visually appealing user experiences."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed w-full max-w-[560px] px-8 sm:px-10 md:px-0"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>
    </section>
  )
}
