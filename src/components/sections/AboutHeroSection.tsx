import {ArrowRight, Briefcase, Calendar, Download, Mail, MapPin} from 'lucide-react'
import {Link} from 'react-router'
import {useSiteContent} from '../../context/ContentContext'
import {ExternalButton} from '../common/ExternalButton'
import {ImageWithFallback} from '../common/ImageWithFallback'
import {SectionHeading} from '../common/SectionHeading'

export function AboutHeroSection() {
  const {profile} = useSiteContent()

  const meta = [
    {icon: MapPin, label: profile.location},
    {icon: Calendar, label: profile.aboutStatus},
    {icon: Mail, label: profile.email},
    {icon: Briefcase, label: 'Open to Opportunities'},
  ]

  const projectsStat = profile.stats.find((s) => s.label.toLowerCase().includes('project'))

  return (
    <section className="mb-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About Me"
              title={
                <>
                  I build things for the <span className="text-teal-300">web</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 leading-relaxed text-gray-400">
              {profile.aboutIntro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <dl className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {meta.map(({icon: Icon, label}) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon size={14} className="shrink-0 text-teal-300" />
                  <span>{label}</span>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-4">
              <ExternalButton href={profile.resumePath} download={profile.resumeFilename}>
                <Download size={15} /> Download CV
              </ExternalButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition-all hover:border-white/20 hover:bg-white/10"
              >
                Let's Work Together <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative h-80 w-72 overflow-hidden rounded-3xl border border-teal-500/20 shadow-2xl shadow-teal-500/10">
              <ImageWithFallback
                src={profile.profileImage}
                alt={`${profile.name} professional portrait`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
            </div>
            {projectsStat && (
              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-teal-500/20 bg-[#121c2e] px-5 py-3 shadow-lg md:-right-8">
                <p className="text-2xl text-teal-300">{projectsStat.value}</p>
                <p className="text-xs text-gray-500">{projectsStat.label}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
