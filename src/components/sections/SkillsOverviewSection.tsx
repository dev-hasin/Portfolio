import {motion, useReducedMotion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'
import {Link} from 'react-router'
import {useSiteContent} from '../../context/ContentContext'
import {SectionHeading} from '../common/SectionHeading'

export function SkillsOverviewSection() {
  const {profile, skillProgress} = useSiteContent()
  const reduceMotion = useReducedMotion()

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What I Do"
              title={
                <>
                  Turning ideas into <span className="text-teal-300">reality</span> with code
                </>
              }
            />
            <p className="mb-8 mt-6 leading-relaxed text-gray-400">{profile.skillsIntro}</p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-teal-300 transition-colors hover:text-teal-200"
            >
              More about me <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-5">
            {skillProgress.map((skill, index) => (
              <div key={skill.id}>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-300">{skill.name}</span>
                  <span className="text-sm text-teal-300">{skill.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-sky-400"
                    initial={reduceMotion ? false : {width: 0}}
                    whileInView={{width: `${skill.level}%`}}
                    viewport={{once: true, amount: 0.6}}
                    transition={{duration: 1.1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1]}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
