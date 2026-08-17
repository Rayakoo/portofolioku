'use client'

import { useState } from 'react'
import styles from './ProjectsSection.module.css'

const PROJECTS = [
  {
    name: 'TeachUp',
    description: 'Platform edukasi digital dengan AI learning, berita pendidikan, webinar, dan komunitas pembelajaran.',
    image: '/projects/Teachup.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'Ngalam Tanggap',
    description: 'Aplikasi pelaporan dan layanan tanggap darurat berbasis lokasi untuk meningkatkan keamanan masyarakat.',
    image: '/projects/ngalam_tanggap.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'Sobat Bimbing',
    description: 'Aplikasi pendampingan Islami bagi remaja untuk pembinaan karakter dan edukasi digital.',
    image: '/projects/sobat_bimbing.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'Qnectify',
    description: 'Platform AI-powered learning dengan kuis otomatis, gamifikasi, dan fitur kolaboratif.',
    image: '/projects/qnectify.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'Neuroclash',
    description: 'Game battle royale edukatif yang mengubah proses belajar menjadi pengalaman kompetitif dan menyenangkan.',
    image: '/projects/neuroclash.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'Ayam Kota Malang',
    description: 'Aplikasi kuliner dan layanan pemesanan ayam khas Kota Malang.',
    image: '/projects/ayamkotamalang.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'Dear Baby',
    description: 'Platform pendukung untuk kebutuhan parenting dan tumbuh kembang anak.',
    image: '/projects/dearbaby.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'EpicCSafe',
    description: 'Aplikasi keamanan digital yang membantu pengguna menjaga data dan privasi.',
    image: '/projects/epiccsafe.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'Omah Gembira',
    description: 'Platform digital untuk kegiatan komunitas dan layanan kebersamaan.',
    image: '/projects/omahgembira.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'Omah Nalar',
    description: 'Platform pembelajaran dan pengembangan diri berbasis digital.',
    image: '/projects/omahnalar.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'Riendys Adv',
    description: 'Platform manajemen iklan dan promosi untuk bisnis.',
    image: '/projects/riendysadv.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'RPS Generator Unsri',
    description: 'Alat bantu penyusunan Rencana Pembelajaran Semester (RPS) untuk civitas akademika Unsri.',
    image: '/projects/rps_generator_unsri.png',
    link: 'https://github.com/MDJAmin',
  },
  {
    name: 'Sineda',
    description: 'Aplikasi layanan digital untuk mempermudah akses informasi dan kebutuhan sehari-hari.',
    image: '/projects/sineda.png',
    link: 'https://github.com/MDJAmin',
  },
]

export default function ProjectsSection() {
  const [start, setStart] = useState(0)
  const len = PROJECTS.length

  const next = () => setStart((s) => (s + 1) % len)
  const prev = () => setStart((s) => (s - 1 + len) % len)

  const rotated = [...PROJECTS.slice(start), ...PROJECTS.slice(0, start)]

  return (
    <section className={styles.section}>
      <h2
        className="hero-heading font-black uppercase text-center pt-16 sm:pt-20 md:pt-28 mb-10 sm:mb-14 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div className={styles.container}>
        <div className={styles.slide}>
          {rotated.map((project) => (
            <div
              key={project.name}
              className={styles.item}
              style={{ backgroundImage: `url('${project.image}')` }}
            >
              <div className={styles.content}>
                <div className={styles.name}>{project.name}</div>
                <div className={styles.des}>{project.description}</div>
                <a className={styles.seeMore} target="_blank" rel="noopener noreferrer" href={project.link}>
                  <button>See More</button>
                </a>
              </div>
            </div>
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
