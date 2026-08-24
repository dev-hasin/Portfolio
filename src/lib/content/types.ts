export type ProjectCategory = 'Full-Stack' | 'Mobile' | 'Frontend'

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  category: ProjectCategory
  image: string
  featured: boolean
  sourceUrl?: string
  liveUrl?: string
}

export type Certification = {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  image?: string
}

export type VolunteerExperience = {
  id: string
  role: string
  organization: string
  period: string
  description: string
  tags: string[]
}

export type Experience = {
  id: string
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export type Education = {
  id: string
  degree: string
  school: string
  period: string
  description: string
}

export type SkillProgress = {
  id: string
  name: string
  level: number
}

export type TechStackGroup = {
  id: string
  category: string
  items: string[]
}

export type ServiceAccent = 'teal' | 'amber' | 'emerald' | 'sky'

export type ServiceItem = {
  id: string
  title: string
  description: string
  icon: string
  accent: ServiceAccent
}

export type Stat = {
  value: string
  label: string
}

export type Faq = {
  question: string
  answer: string
}

export type Profile = {
  name: string
  initials: string
  role: string
  location: string
  email: string
  phone: string
  phoneHref: string
  resumePath: string
  resumeFilename: string
  github: string
  linkedin: string
  twitter: string
  heroImage: string
  profileImage: string
  availableForHire: boolean
  heroHeadline: string
  heroSubheadline: string
  aboutIntro: string[]
  aboutStatus: string
  footerBlurb: string
  skillsIntro: string
  stats: Stat[]
}

export type ContactInfoItem = {
  label: string
  value: string
  href: string
  accent: ServiceAccent
  kind: 'email' | 'phone' | 'location'
}

export type SocialLink = {
  label: string
  href: string
  kind: 'github' | 'linkedin' | 'twitter' | 'email'
}

export type SiteContent = {
  profile: Profile
  projects: Project[]
  certifications: Certification[]
  volunteer: VolunteerExperience[]
  experience: Experience[]
  education: Education[]
  skillProgress: SkillProgress[]
  techStack: TechStackGroup[]
  services: ServiceItem[]
  softSkills: string[]
  faqs: Faq[]
  contactInfo: ContactInfoItem[]
  socialLinks: SocialLink[]
  mapsQuery: string
}

export const projectCategories = ['All', 'Full-Stack', 'Mobile', 'Frontend'] as const
