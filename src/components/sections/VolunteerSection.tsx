import {HeartHandshake} from 'lucide-react'
import {useSiteContent} from '../../context/ContentContext'
import {Tag} from '../common/Tag'
import {SectionHeading} from '../common/SectionHeading'

export function VolunteerSection() {
  const {volunteer} = useSiteContent()

  if (!volunteer.length) return null

  return (
    <section className="mb-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Community"
          title="Volunteer Experience"
          description="Roles where I contribute beyond coursework and professional work."
          className="mb-12"
        />
        <div className="space-y-5">
          {volunteer.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-sky-500/20"
            >
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-300">
                    <HeartHandshake size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm text-white">{item.role}</h3>
                    <p className="text-xs text-gray-500">{item.organization}</p>
                  </div>
                </div>
                {item.period && (
                  <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs text-sky-300">
                    {item.period}
                  </span>
                )}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
