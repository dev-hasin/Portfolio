import {seedContent} from '../../data/seed'
import type {
  ContactInfoItem,
  ProjectCategory,
  ServiceAccent,
  SiteContent,
  SocialLink,
} from '../content/types'
import {isSanityConfigured, sanityClient} from './client'
import {urlForImage} from './image'
import {siteContentQuery} from './queries'

type SanityImage = unknown

type RawSettings = {
  name?: string
  initials?: string
  role?: string
  location?: string
  email?: string
  phone?: string
  phoneHref?: string
  resumePath?: string
  resumeFilename?: string
  github?: string
  linkedin?: string
  twitter?: string
  heroImage?: SanityImage
  heroImageUrl?: string
  profileImage?: SanityImage
  profileImageUrl?: string
  availableForHire?: boolean
  heroHeadline?: string
  heroSubheadline?: string
  aboutIntro?: string[]
  aboutStatus?: string
  footerBlurb?: string
  skillsIntro?: string
  stats?: {value?: string; label?: string}[]
}

type RawPayload = {
  settings: RawSettings | null
  contact: {
    softSkills?: string[]
    faqs?: {question?: string; answer?: string}[]
    mapsQuery?: string
  } | null
  projects: {
    _id: string
    title?: string
    description?: string
    tags?: string[]
    category?: ProjectCategory
    image?: SanityImage
    imageUrl?: string
    featured?: boolean
    sourceUrl?: string
    liveUrl?: string
  }[]
  certifications: {
    _id: string
    title?: string
    issuer?: string
    date?: string
    credentialUrl?: string
    image?: SanityImage
    imageUrl?: string
  }[]
  volunteer: {
    _id: string
    role?: string
    organization?: string
    period?: string
    description?: string
    tags?: string[]
  }[]
  experience: {
    _id: string
    role?: string
    company?: string
    period?: string
    description?: string
    tags?: string[]
  }[]
  education: {
    _id: string
    degree?: string
    school?: string
    period?: string
    description?: string
  }[]
  skillProgress: {_id: string; name?: string; level?: number}[]
  techStack: {_id: string; category?: string; items?: string[]}[]
  services: {
    _id: string
    title?: string
    description?: string
    icon?: string
    accent?: ServiceAccent
  }[]
}

function resolveImage(image: SanityImage | undefined, fallbackUrl: string | undefined, seedUrl: string) {
  return urlForImage(image, 1200) || fallbackUrl || seedUrl
}

function buildContactInfo(profile: SiteContent['profile'], mapsQuery: string): ContactInfoItem[] {
  return [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      accent: 'teal',
      kind: 'email',
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: profile.phoneHref,
      accent: 'emerald',
      kind: 'phone',
    },
    {
      label: 'Location',
      value: profile.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery || profile.location)}`,
      accent: 'sky',
      kind: 'location',
    },
  ]
}

function buildSocialLinks(profile: SiteContent['profile']): SocialLink[] {
  return [
    {label: 'GitHub', href: profile.github, kind: 'github'},
    {label: 'LinkedIn', href: profile.linkedin, kind: 'linkedin'},
    {label: 'Twitter', href: profile.twitter, kind: 'twitter'},
  ]
}

function mapPayload(raw: RawPayload): SiteContent {
  const seed = seedContent
  const settings = raw.settings
  const contact = raw.contact

  const profile = {
    name: settings?.name || seed.profile.name,
    initials: settings?.initials || seed.profile.initials,
    role: settings?.role || seed.profile.role,
    location: settings?.location || seed.profile.location,
    email: settings?.email || seed.profile.email,
    phone: settings?.phone || seed.profile.phone,
    phoneHref: settings?.phoneHref || seed.profile.phoneHref,
    resumePath: settings?.resumePath || seed.profile.resumePath,
    resumeFilename: settings?.resumeFilename || seed.profile.resumeFilename,
    github: settings?.github || seed.profile.github,
    linkedin: settings?.linkedin || seed.profile.linkedin,
    twitter: settings?.twitter || seed.profile.twitter,
    heroImage: resolveImage(settings?.heroImage, settings?.heroImageUrl, seed.profile.heroImage),
    profileImage: resolveImage(
      settings?.profileImage,
      settings?.profileImageUrl,
      seed.profile.profileImage,
    ),
    availableForHire: settings?.availableForHire ?? seed.profile.availableForHire,
    heroHeadline: settings?.heroHeadline || seed.profile.heroHeadline,
    heroSubheadline: settings?.heroSubheadline || seed.profile.heroSubheadline,
    aboutIntro:
      settings?.aboutIntro?.filter(Boolean).length ? settings.aboutIntro.filter(Boolean) : seed.profile.aboutIntro,
    aboutStatus: settings?.aboutStatus || seed.profile.aboutStatus,
    footerBlurb: settings?.footerBlurb || seed.profile.footerBlurb,
    skillsIntro: settings?.skillsIntro || seed.profile.skillsIntro,
    stats:
      settings?.stats?.filter((s) => s.value && s.label).map((s) => ({value: s.value!, label: s.label!})) ||
      seed.profile.stats,
  }

  const mapsQuery = contact?.mapsQuery || seed.mapsQuery

  const projects =
    raw.projects?.length > 0
      ? raw.projects
          .filter((p) => p.title && p.description && p.category)
          .map((p) => ({
            id: p._id,
            title: p.title!,
            description: p.description!,
            tags: p.tags || [],
            category: p.category!,
            image: resolveImage(p.image, p.imageUrl, seed.projects[0]?.image || ''),
            featured: Boolean(p.featured),
            sourceUrl: p.sourceUrl,
            liveUrl: p.liveUrl,
          }))
      : seed.projects

  const certifications =
    raw.certifications?.length > 0
      ? raw.certifications
          .filter((c) => c.title && c.issuer)
          .map((c) => ({
            id: c._id,
            title: c.title!,
            issuer: c.issuer!,
            date: c.date || '',
            credentialUrl: c.credentialUrl,
            image: resolveImage(c.image, c.imageUrl, ''),
          }))
      : seed.certifications

  const volunteer =
    raw.volunteer?.length > 0
      ? raw.volunteer
          .filter((v) => v.role && v.organization)
          .map((v) => ({
            id: v._id,
            role: v.role!,
            organization: v.organization!,
            period: v.period || '',
            description: v.description || '',
            tags: v.tags || [],
          }))
      : seed.volunteer

  const experience =
    raw.experience?.length > 0
      ? raw.experience
          .filter((e) => e.role && e.company)
          .map((e) => ({
            id: e._id,
            role: e.role!,
            company: e.company!,
            period: e.period || '',
            description: e.description || '',
            tags: e.tags || [],
          }))
      : seed.experience

  const education =
    raw.education?.length > 0
      ? raw.education
          .filter((e) => e.degree && e.school)
          .map((e) => ({
            id: e._id,
            degree: e.degree!,
            school: e.school!,
            period: e.period || '',
            description: e.description || '',
          }))
      : seed.education

  const skillProgress =
    raw.skillProgress?.length > 0
      ? raw.skillProgress
          .filter((s) => s.name && typeof s.level === 'number')
          .map((s) => ({id: s._id, name: s.name!, level: s.level!}))
      : seed.skillProgress

  const techStack =
    raw.techStack?.length > 0
      ? raw.techStack
          .filter((t) => t.category)
          .map((t) => ({id: t._id, category: t.category!, items: t.items || []}))
      : seed.techStack

  const services =
    raw.services?.length > 0
      ? raw.services
          .filter((s) => s.title)
          .map((s) => ({
            id: s._id,
            title: s.title!,
            description: s.description || '',
            icon: s.icon || 'Layers',
            accent: (s.accent || 'teal') as ServiceAccent,
          }))
      : seed.services

  const softSkills = contact?.softSkills?.length ? contact.softSkills : seed.softSkills
  const faqs =
    contact?.faqs?.filter((f) => f.question && f.answer).map((f) => ({question: f.question!, answer: f.answer!})) ||
    seed.faqs

  return {
    profile,
    projects,
    certifications,
    volunteer,
    experience,
    education,
    skillProgress,
    techStack,
    services,
    softSkills,
    faqs,
    contactInfo: buildContactInfo(profile, mapsQuery),
    socialLinks: buildSocialLinks(profile),
    mapsQuery,
  }
}

export async function fetchSiteContent(): Promise<SiteContent> {
  if (!isSanityConfigured || !sanityClient) {
    return seedContent
  }

  try {
    const raw = await sanityClient.fetch<RawPayload>(siteContentQuery)
    return mapPayload(raw)
  } catch (error) {
    console.warn('Sanity content fetch failed; using seed fallback.', error)
    return seedContent
  }
}
