'use client'

import type { CSSProperties } from 'react'
import { Mail, Link2, AtSign } from 'lucide-react'
import styles from './ContactSection.module.css'

const WORDS = ['design.', 'prototype.', 'solve.', 'build.', 'develop.', 'ship.', 'grow.']

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <header
        className={`${styles.fluid} ${styles.header}`}
        style={{ '--count': WORDS.length } as CSSProperties}
      >
        <section className={styles.headerContent}>
          <h1>
            <span aria-hidden="true">let&apos;s&nbsp;</span>
            <span className={styles.srOnly}>let&apos;s ship things.</span>
          </h1>
          <ul aria-hidden="true">
            {WORDS.map((word, i) => (
              <li key={word} style={{ '--i': i } as CSSProperties}>
                {word}
              </li>
            ))}
          </ul>
        </section>
      </header>

      <main className={styles.main}>
        <section className={styles.mainAlign}>
          <p className={`${styles.fluid} ${styles.revealText}`}>
            and let&apos;s build something great together.
          </p>
          <div className={styles.links}>
            <a
              href="mailto:rafianantan@gmail.com"
              className={styles.contactLink}
            >
              <Mail size={20} />
              rafianantan@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/rafiananta"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.contactLink}
            >
              <Link2 size={20} />
              linkedin
            </a>
            <a
              href="https://www.instagram.com/_rayako?igsh=MXg5MnU0bDRocDd5Zg=="
              target="_blank"
              rel="noreferrer noopener"
              className={styles.contactLink}
            >
              <AtSign size={20} />
              instagram
            </a>
          </div>
        </section>
      </main>
    </section>
  )
}