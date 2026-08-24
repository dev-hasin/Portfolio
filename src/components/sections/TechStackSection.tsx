import {useSiteContent} from '../../context/ContentContext'
import {SectionHeading} from '../common/SectionHeading'

export function TechStackSection() {
  const {techStack} = useSiteContent()

  return (
    <section className="mb-24 border-y border-white/5 bg-white/[0.02] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Tools & Tech" title="My Tech Stack" align="center" className="mb-12" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <article key={group.id} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <h3 className="mb-4 text-xs uppercase tracking-widest text-teal-300">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
