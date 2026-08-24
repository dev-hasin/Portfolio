export const siteContentQuery = `{
  "settings": *[_type == "siteSettings"][0]{
    name,
    initials,
    role,
    location,
    email,
    phone,
    phoneHref,
    resumePath,
    resumeFilename,
    github,
    linkedin,
    twitter,
    heroImage,
    heroImageUrl,
    profileImage,
    profileImageUrl,
    availableForHire,
    heroHeadline,
    heroSubheadline,
    aboutIntro,
    aboutStatus,
    footerBlurb,
    skillsIntro,
    stats
  },
  "contact": *[_type == "contactSettings"][0]{
    softSkills,
    faqs,
    mapsQuery
  },
  "projects": *[_type == "project"] | order(order asc, _createdAt desc){
    _id,
    title,
    description,
    tags,
    category,
    image,
    imageUrl,
    featured,
    sourceUrl,
    liveUrl
  },
  "certifications": *[_type == "certification"] | order(order asc, _createdAt desc){
    _id,
    title,
    issuer,
    date,
    credentialUrl,
    image,
    imageUrl
  },
  "volunteer": *[_type == "volunteerExperience"] | order(order asc, _createdAt desc){
    _id,
    role,
    organization,
    period,
    description,
    tags
  },
  "experience": *[_type == "experience"] | order(order asc, _createdAt desc){
    _id,
    role,
    company,
    period,
    description,
    tags
  },
  "education": *[_type == "education"] | order(order asc, _createdAt desc){
    _id,
    degree,
    school,
    period,
    description
  },
  "skillProgress": *[_type == "skillProgress"] | order(order asc){
    _id,
    name,
    level
  },
  "techStack": *[_type == "techStack"] | order(order asc){
    _id,
    category,
    items
  },
  "services": *[_type == "service"] | order(order asc){
    _id,
    title,
    description,
    icon,
    accent
  }
}`
