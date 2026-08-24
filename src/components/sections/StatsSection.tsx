import {motion, useReducedMotion} from 'framer-motion'
import {useSiteContent} from '../../context/ContentContext'

export function StatsSection() {
  const {profile} = useSiteContent()
  const reduceMotion = useReducedMotion()

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.dl
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{once: true, amount: 0.4}}
          variants={{
            hidden: {},
            show: {transition: {staggerChildren: reduceMotion ? 0 : 0.1}},
          }}
        >
          {profile.stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={{
                hidden: {opacity: 0, y: 24, scale: 0.92},
                show: {opacity: 1, y: 0, scale: 1},
              }}
              transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
            >
              <dd className="mb-1 text-gradient-brand font-display text-4xl md:text-5xl">{stat.value}</dd>
              <dt className="text-sm text-gray-500">{stat.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
