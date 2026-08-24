import {motion, useReducedMotion} from 'framer-motion'
import {ArrowRight, Download} from 'lucide-react'
import {useSiteContent} from '../../context/ContentContext'
import {ButtonLink} from '../common/ButtonLink'
import {ExternalButton} from '../common/ExternalButton'

export function CtaSection() {
  const {profile} = useSiteContent()
  const reduceMotion = useReducedMotion()

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-teal-500/25 bg-gradient-to-br from-teal-600/25 via-sky-600/15 to-amber-500/10 p-12 text-center shadow-[0_0_60px_rgba(45,212,191,0.12)]"
          initial={reduceMotion ? false : {opacity: 0, y: 28}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.35}}
          transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-sky-500/10" />
          <div className="atmosphere-sweep opacity-60" />
          <div className="relative z-10">
            <h2 className="mb-4 font-display text-3xl text-white md:text-4xl">
              Ready to build something <span className="text-gradient-brand">amazing</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-gray-400">
              Let's collaborate and bring your vision to life. I'm currently available for freelance work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink to="/contact" className="px-8">
                Get In Touch <ArrowRight size={16} />
              </ButtonLink>
              <ExternalButton
                href={profile.resumePath}
                download={profile.resumeFilename}
                variant="secondary"
                className="px-8"
              >
                <Download size={16} /> Download CV
              </ExternalButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
