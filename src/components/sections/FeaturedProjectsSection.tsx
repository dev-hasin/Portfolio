import {motion, useReducedMotion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'
import {Link} from 'react-router'
import {useSiteContent} from '../../context/ContentContext'
import {ProjectCard} from '../common/ProjectCard'
import {SectionHeading} from '../common/SectionHeading'

export function FeaturedProjectsSection() {
  const {projects} = useSiteContent()
  const reduceMotion = useReducedMotion()
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Portfolio" title="Featured Projects" />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-teal-300"
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{once: true, amount: 0.15}}
          variants={{
            hidden: {},
            show: {transition: {staggerChildren: reduceMotion ? 0 : 0.14}},
          }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: {opacity: 0, y: reduceMotion ? 0 : 36, rotateX: reduceMotion ? 0 : 8},
                show: {opacity: 1, y: 0, rotateX: 0},
              }}
              transition={{duration: 0.55, ease: [0.22, 1, 0.36, 1]}}
              whileHover={reduceMotion ? undefined : {y: -8, transition: {duration: 0.25}}}
              style={{transformPerspective: 900}}
            >
              <ProjectCard project={project} compact />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
