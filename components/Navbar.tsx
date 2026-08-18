'use client'

import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { useLenis } from 'lenis/react'
import { X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

// All page sections in DOM order (also includes non-nav sections so the
// light/dark background detection is correct).
const SECTIONS = [
  'home',
  'about',
  'services',
  'tech-stack',
  'projects',
  'timeline',
  'contact',
]

const SCROLL_FOLD_MS = 500

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [hover, setHover] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const timeoutRef = useRef<number | undefined>(undefined)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true)
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => setScrolled(false), SCROLL_FOLD_MS)

      const about = document.getElementById('about')
      setVisible(window.scrollY >= (about ? about.offsetTop : window.innerHeight))
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      observer.disconnect()
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const onLight = active === 'services'
  const expanded = hover || scrolled

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    if (lenis) {
      lenis.scrollTo(href, { offset: -80 })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`site-nav ${visible ? 'visible' : ''} ${onLight ? 'on-light' : ''}`}
      aria-label="Primary"
    >
      <div
        className={`site-nav-pill ${expanded ? 'expanded' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={`site-nav-links ${expanded ? 'shown' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.slice(1) ? 'active' : ''}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
        {!expanded && <span className="site-nav-bar" />}
      </div>

      <div className="site-nav-mobile">
        <button
          type="button"
          className={`site-nav-toggle ${menuOpen ? 'open' : ''}`}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {!menuOpen && <span className="site-nav-bar" />}
          <span className={`site-nav-toggle-label ${menuOpen ? 'shown' : ''}`}>
            <span className="site-nav-toggle-text">Menu</span>
            <X size={16} />
          </span>
        </button>
        <div className={`site-nav-dropdown ${menuOpen ? 'shown' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.slice(1) ? 'active' : ''}
              onClick={(e) => handleClick(e, item.href)}
            >
              <span className="site-nav-dot" />
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}