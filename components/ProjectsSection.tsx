'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './ProjectsSection.module.css'
import { PROJECTS } from '@/data/projects'

export default function ProjectsSection() {
  const [start, setStart] = useState(0)
  const len = PROJECTS.length

  const next = () => setStart((s) => (s + 1) % len)
  const prev = () => setStart((s) => (s - 1 + len) % len)

  const rotated = [...PROJECTS.slice(start), ...PROJECTS.slice(0, start)]

  return (
    <section id="projects" className={styles.section}>
      <h2
        className="hero-heading font-black uppercase text-center pt-16 sm:pt-20 md:pt-28 mb-10 sm:mb-14 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div className={styles.container}>
        <div className={styles.slide}>
          {rotated.map((project) => (
            <Link
              key={project.name}
              href={`/projects/${project.slug}`}
              className={styles.item}
              style={{ backgroundImage: `url('${project.image}')` }}
            >
              <div className={styles.content}>
                <div className={styles.name}>{project.name}</div>
                <div className={styles.des}>{project.description}</div>
                <span className={styles.seeMore}>
                  <button>See More</button>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.button}>
          <button className={styles.prev} onClick={prev}>
            ◁
          </button>
          <button className={styles.next} onClick={next}>
            ▷
          </button>
        </div>
      </div>
    </section>
  )
}
