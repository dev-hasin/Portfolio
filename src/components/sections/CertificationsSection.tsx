import {Award, ExternalLink} from 'lucide-react'
import {useSiteContent} from '../../context/ContentContext'
import {ImageWithFallback} from '../common/ImageWithFallback'
import {SectionHeading} from '../common/SectionHeading'

export function CertificationsSection() {
  const {certifications} = useSiteContent()

  if (!certifications.length) return null

  return (
    <section className="mb-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Verified courses and credentials that support my engineering practice."
          className="mb-12"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-teal-500/20"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-teal-500/20 bg-teal-500/10">
                {cert.image ? (
                  <ImageWithFallback src={cert.image} alt="" className="h-full w-full object-cover" />
                ) : (
                  <Award size={22} className="text-teal-300" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-sm text-white">{cert.title}</h3>
                  {cert.date && (
                    <span className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs text-teal-300">
                      {cert.date}
                    </span>
                  )}
                </div>
                <p className="mb-3 text-xs text-gray-500">{cert.issuer}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-teal-300 transition-colors hover:text-teal-200"
                  >
                    View credential <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
