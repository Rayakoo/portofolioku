import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink, Layers } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import Navbar from '@/components/Navbar'
import ProjectGallery from '@/components/ProjectGallery'
import Reveal from '@/components/Reveal'
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

  const images = project.images?.length ? project.images : [project.image]

  return (
    <main className="relative min-h-screen bg-[#0C0C0C] text-zinc-100 overflow-hidden selection:bg-blue-900/30">
      {/* Background: dot grid + vignette */}
      <div className="fixed inset-0 z-0 pointer-events-auto opacity-40">
        <div className="relative h-full w-full bg-[#0C0C0C] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute inset-0 bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_100%)] pointer-events-none" />
        </div>
      </div>

      {/* Main-page navbar */}
      <Navbar />

      {/* Page body */}
      <article className="relative z-10 pt-28 sm:pt-32 pb-20 sm:pb-24" id="overview">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
          {/* Back button */}
          <Reveal mode="mount" from="top" delay={0.1}>
            <Link
              href="/#projects"
              className="group inline-flex items-center justify-center rounded-2xl bg-black/25 backdrop-blur-[28px] backdrop-saturate-150 border border-white/12 shadow-[0_20px_40px_rgba(0,0,0,0.5)] px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-white/80 transition hover:text-white hover:bg-white/10"
            >
              Back to Projects
            </Link>
          </Reveal>

          {/* Hero */}
          <Reveal className="space-y-6 sm:space-y-8 pb-8 sm:pb-12 border-b border-zinc-800">
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="space-y-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 leading-tight">
                {project.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-4xl">
                {project.description}
              </p>
            </div>

            {(project.demo || project.source) && (
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-zinc-50 text-zinc-900 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-zinc-900/20"
                  >
                    Live Demo
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                )}
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-zinc-700 rounded-full font-bold text-sm text-zinc-300 hover:bg-zinc-900 transition-colors"
                  >
                    Source Code
                    <SiGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                )}
              </div>
            )}
          </Reveal>

          {/* Screenshot gallery */}
          <Reveal>
            <ProjectGallery images={images} name={project.name} />
          </Reveal>

          {/* Technology Stack */}
          {project.stack && project.stack.length > 0 && (
            <Reveal id="tech" className="scroll-mt-32 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-2 sm:gap-3 pb-2 border-b border-zinc-800">
                <Layers className="w-5 sm:w-6 h-5 sm:h-6 text-zinc-100" />
                <h2 className="text-lg sm:text-2xl font-bold text-zinc-100">Technology Stack</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {project.stack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group p-4 sm:p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-800 shadow-sm group-hover:scale-110 transition-transform">
                        <Layers className="w-5 sm:w-6 h-5 sm:h-6 text-zinc-100" />
                      </div>
                    </div>
                    <h3 className="font-bold text-zinc-100 mb-2 text-sm sm:text-base">{tech.name}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
</div>
          </Reveal>
          )}
        </div>
      </article>
    </main>
  )
}