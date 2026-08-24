import {motion, useReducedMotion} from 'framer-motion'
import {ArrowRight, Github, Linkedin, Twitter} from 'lucide-react'
import {useSiteContent} from '../../context/ContentContext'
import {ButtonLink} from '../common/ButtonLink'
import {ImageWithFallback} from '../common/ImageWithFallback'

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
} as const

export function HeroSection() {
  const {profile, socialLinks} = useSiteContent()
  const reduceMotion = useReducedMotion()

  const socials = socialLinks.map((link) => ({
    ...link,
    icon: socialIconMap[link.label as keyof typeof socialIconMap] || Github,
  }))

  const fadeUp = reduceMotion
    ? {hidden: {opacity: 1, y: 0}, show: {opacity: 1, y: 0}}
    : {hidden: {opacity: 0, y: 36}, show: {opacity: 1, y: 0}}

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={profile.heroImage}
          alt="Dark developer workspace with laptop and code editor"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/80 to-background dark:from-[#060a10]/55 dark:via-[#060a10]/78 dark:to-[#060a10]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          transition={{staggerChildren: reduceMotion ? 0 : 0.14}}
        >
          {profile.availableForHire && (
            <motion.div
              variants={fadeUp}
              transition={{duration: 0.55, ease: [0.22, 1, 0.36, 1]}}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/15 px-4 py-1.5 text-sm text-teal-200 shadow-[0_0_24px_rgba(45,212,191,0.25)]"
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-emerald-400"
                animate={reduceMotion ? undefined : {scale: [1, 1.35, 1], opacity: [1, 0.55, 1]}}
                transition={{duration: 1.6, repeat: Infinity, ease: 'easeInOut'}}
              />
              Available for hire
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp}
            transition={{duration: 0.65, ease: [0.22, 1, 0.36, 1]}}
            className="mb-6 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Hi, I'm{' '}
            <span className="text-gradient-brand">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
            className="mb-4 max-w-xl text-xl leading-relaxed text-gray-400"
          >
            {profile.heroHeadline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
            className="mb-10 max-w-xl leading-relaxed text-gray-500"
          >
            {profile.heroSubheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
            className="mb-12 flex flex-wrap gap-4"
          >
            <ButtonLink to="/projects">
              View My Work <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Let's Talk
            </ButtonLink>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
            className="flex items-center gap-4"
          >
            <span className="text-sm text-gray-600">Find me on:</span>
            {socials.map(({icon: Icon, href, label}, index) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="text-gray-500 transition-colors hover:text-teal-300"
                whileHover={reduceMotion ? undefined : {y: -3, scale: 1.12}}
                transition={{type: 'spring', stiffness: 400, damping: 18, delay: index * 0.02}}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
