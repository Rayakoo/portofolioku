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
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',

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
