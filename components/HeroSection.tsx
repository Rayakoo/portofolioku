'use client'

import { motion } from 'framer-motion'
import Magnet from './Magnet'
import TiltCard from './TiltCard'

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen flex flex-col overflow-x-clip bg-[#0C0C0C]">


      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        <div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
          <motion.h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Hi, i&apos;m rafi
          </motion.h1>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 w-full">
          <motion.p
            className="hero-heading font-black uppercase tracking-tight leading-none max-w-[320px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[660px] text-[6vw] sm:text-[3.8vw] md:text-[3.2vw] lg:text-[2.6vw] relative z-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Mobile Developer &amp; Front End Developer crafting striking digital experiences
          </motion.p>


        </div>
      </div>

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-10 top-[40%] -translate-y-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Magnet padding={150} strength={3}>
            <TiltCard />
          </Magnet>
        </motion.div>
      </motion.div>
    </section>
  )
}
