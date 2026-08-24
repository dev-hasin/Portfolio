import {motion, useReducedMotion} from 'framer-motion'
import {useSiteContent} from '../../context/ContentContext'
import {accentStyles, serviceIcons} from '../../lib/content/icons'
import {SectionHeading} from '../common/SectionHeading'

export function ServicesSection() {
  const {services} = useSiteContent()
  const reduceMotion = useReducedMotion()

  return (
    <section className="border-y border-white/5 bg-white/[0.01] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Services" title="What I Offer" align="center" className="mb-14" />
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{once: true, amount: 0.2}}
          variants={{
            hidden: {},
            show: {transition: {staggerChildren: reduceMotion ? 0 : 0.1}},
          }}
        >
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] || serviceIcons.Layers
            const styles = accentStyles[service.accent]
            return (
              <motion.article
                key={service.id}
                className={`rounded-2xl border p-6 ${styles.background}`}
                variants={{
                  hidden: {opacity: 0, y: 28},
                  show: {opacity: 1, y: 0},
                }}
                transition={{duration: 0.45, ease: [0.22, 1, 0.36, 1]}}
                whileHover={reduceMotion ? undefined : {y: -6, scale: 1.02}}
              >
                <Icon size={24} className={`mb-4 ${styles.color}`} />
                <h3 className="mb-2 text-sm text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
