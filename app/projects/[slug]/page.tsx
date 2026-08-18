import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { PROJECTS } from '@/data/projects'
import type { Metadata } from 'next'

interface Params {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.name} — Rafi Ananta Nugraha`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-28 sm:pt-32 pb-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base text-[#D7E2EA] transition hover:border-white/40 hover:bg-white/10 hover:text-white mb-10"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <div className="rounded-2xl overflow-hidden border border-[#222] bg-[#141414] shadow-2xl shadow-black/40">
          <div
            className="w-full aspect-video bg-cover bg-center"
            style={{ backgroundImage: `url('${project.image}')` }}
          />

          <div className="p-6 sm:p-10">
            <h1
              className="font-black uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
            >
              {project.name}
            </h1>

            <p className="text-base sm:text-lg font-light leading-relaxed text-[#D7E2EA]/75">
              {project.detail}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#38BDF8] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                <ExternalLink size={16} />
                View Source
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
