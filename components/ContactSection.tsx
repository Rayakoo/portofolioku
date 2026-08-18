'use client'

import { useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import { Mail, Link2, AtSign, Send } from 'lucide-react'
import styles from './ContactSection.module.css'

const WORDS = ['design.', 'prototype.', 'solve.', 'build.', 'develop.', 'ship.', 'grow.']

export default function ContactSection() {
  const [contact, setContact] = useState('')
  const [channel, setChannel] = useState('email')
  const [customChannel, setCustomChannel] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!contact.trim() || status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: 'New colaboration contact',
          contact_value: contact.trim(),
          contact_channel:
            channel === 'others' ? customChannel.trim() || 'others' : channel,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('ok')
        setContact('')
        setCustomChannel('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }
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
              href="https://www.linkedin.com/in/rafi-ananta-nugrahaa"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.contactLink}
            >
              <Link2 size={20} />
              linkedin
            </a>
            <a
              href="https://www.instagram.com/_rayako"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.contactLink}
            >
              <AtSign size={20} />
              instagram
            </a>
          </div>

          <p className={styles.formIntro}>
            Wanna collaborate with me? Drop your contact and let&apos;s build
            something great together.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.formInput}
              placeholder="ur contact here"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            {channel === 'others' ? (
              <input
                type="text"
                className={styles.formCustom}
                placeholder="type ur contact…"
                value={customChannel}
                onChange={(e) => setCustomChannel(e.target.value)}
              />
            ) : (
              <select
                className={styles.formSelect}
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
              >
                <option value="email">email</option>
                <option value="whatsapp">whatsapp</option>
                <option value="others">others</option>
              </select>
            )}
            <button
              type="submit"
              className={styles.formBtn}
              disabled={status === 'sending'}
              aria-label="Send"
            >
              <Send size={18} />
            </button>
          </form>
          {status === 'ok' && (
            <p className={styles.formStatus}>thanks, noted! see u soon</p>
          )}
          {status === 'error' && (
            <p className={styles.formStatus}>something went wrong, try again</p>
          )}
        </section>
      </main>
    </section>
  )
}