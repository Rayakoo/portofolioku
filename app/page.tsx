'use client'

import { useEffect, useState } from 'react'
import LithosHero from '@/components/LithosHero'
import HeroSection from '@/components/HeroSection'
import MarqueeSection from '@/components/MarqueeSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import TechStackPicker from '@/components/TechStackPicker/TechStackPicker'
import ProjectsSection from '@/components/ProjectsSection'
import TimelineSection from '@/components/TimelineSection'
import ContactSection from '@/components/ContactSection'
import TerminalLoader from '@/components/TerminalLoader'
import Navbar from '@/components/Navbar'

const CRITICAL_IMAGES = [
  '/black.png',
  '/warna.png',
  '/icon_rafi.png',
]

const PRELOAD_IMAGES = [
  '/black.png',
  '/warna.png',
  '/icon_rafi.png',
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

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    let criticalLoaded = 0
    const critical = CRITICAL_IMAGES.length
    let bgLoaded = 0

    const checkDone = () => {
      if (cancelled) return
      if (criticalLoaded >= critical) {
        setTimeout(() => { setLoading(false) }, 5000)
      }
    }

    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image()
      img.onload = img.onerror = () => {
        criticalLoaded++
        checkDone()
      }
      img.src = src
    })

    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image()
      img.onload = img.onerror = () => {
        bgLoaded++
      }
      img.src = src
    })

    return () => { cancelled = true }
  }, [])

  return (
    <div className="main-wrapper">
      {loading && <TerminalLoader />}
      <Navbar />
    
      {/* <LithosHero /> */}
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <TechStackPicker />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
    </div>
  )
}
