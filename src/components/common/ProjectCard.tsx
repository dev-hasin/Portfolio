import {ExternalLink, Github} from 'lucide-react'
import type {Project} from '../../lib/content/types'
import {cn} from '../../utils/classes'
import {ImageWithFallback} from './ImageWithFallback'
import {Tag} from './Tag'

const categoryColors: Record<Project['category'], string> = {
  'Full-Stack': 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  Frontend: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  Mobile: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
}

type ProjectCardProps = {
  project: Project
  compact?: boolean
}

export function ProjectCard({project, compact = false}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/20">
      <div className={cn('relative overflow-hidden', compact ? 'h-48' : 'h-52')}>
        <ImageWithFallback
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className={cn('rounded-full border px-2.5 py-1 text-xs', categoryColors[project.category])}>
            {project.category}
          </span>
        </div>
        <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={project.sourceUrl ?? '#'}
            aria-label={`${project.title} source code`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-teal-600"
          >
            <Github size={13} />
          </a>
          <a
            href={project.liveUrl ?? '#'}
            aria-label={`${project.title} live preview`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-teal-600"
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-sm text-white">{project.title}</h3>
        <p className={cn('mb-4 text-sm leading-relaxed text-gray-500', compact && 'line-clamp-2')}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  )
}
