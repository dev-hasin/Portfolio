import type {SiteContent} from '../lib/content/types'

export const seedContent: SiteContent = {
  profile: {
    name: 'Hasin Falak Kiyani',
    initials: 'HFK',
    role: 'Software Engineering Student & MERN Stack Developer',
    location: 'Township, Lahore',
    email: 'hasinkiyani1@gmail.com',
    phone: '+92 318-1560482',
    phoneHref: 'tel:+923181560482',
    resumePath: '/assets/Hasin_Falak_Kiyani_Resume.pdf',
    resumeFilename: 'Hasin_Falak_Kiyani_Resume.pdf',
    github: 'https://github.com/dev-hasin',
    linkedin: 'https://www.linkedin.com/in/hasinfalakkiyani/',
    twitter: '#',
    heroImage:
      'https://images.unsplash.com/photo-1650661926447-9efb2610f64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwZGVza3xlbnwxfHx8fDE3NzYxODgxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    profileImage:
      'https://images.unsplash.com/photo-1563237023-b1e970526dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NjE4ODE1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    availableForHire: true,
    heroHeadline:
      'An ambitious Software Engineering Student & MERN Stack Developer who builds exceptional digital experiences and AI-driven solutions.',
    heroSubheadline:
      'I specialize in scalable applications with MongoDB, Express.js, React, and Node.js, with a passion for AI-based systems.',
    aboutIntro: [
      "Hey! I'm Hasin Falak Kiyani, a Software Engineering student based in Lahore, Pakistan. I'm passionate about building scalable applications and AI-driven technologies.",
      "Currently pursuing my Bachelor's in Software Engineering at University of Central Punjab, I have strong expertise in MERN stack development and am actively working on AI-based systems.",
      'I possess solid problem-solving abilities, effective communication skills, and a passion for creating innovative software solutions that make a real impact.',
    ],
    aboutStatus: 'Student (2022 - Present)',
    footerBlurb:
      'An ambitious Software Engineering student with strong expertise in MERN stack development and AI-based systems.',
    skillsIntro:
      'As a Software Engineering student with strong expertise in MERN stack development and AI-based systems, I bring solid problem-solving abilities and a passion for building scalable applications to every project.',
    stats: [
      {value: '10+', label: 'Projects Done'},
      {value: '4+', label: 'Years of Study'},
      {value: '2+', label: 'Major Projects'},
      {value: '1', label: 'Internship'},
    ],
  },
  projects: [
    {
      id: '1',
      title: 'CharmChime - AI Journaling Platform (FYP)',
      description:
        'Developing an AI-driven journaling system with mood detection, story generation, and avatar interaction. Implementing NLP-based sentiment analysis using BERT for emotion detection and personalized responses.',
      tags: ['React', 'Firebase', 'NLP', 'BERT', 'Speech-to-Text'],
      category: 'Full-Stack',
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaW5nJTIwYXBwJTIwZW1vdGlvbmFsfGVufDF8fHx8MTc3NjE4ODE1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: '2',
      title: 'FitBuddy - Fitness & Wellness App',
      description:
        'Built a cross-platform mobile application using React Native with activity tracking and progress visualization. Implemented local storage and analytics dashboards to improve user engagement.',
      tags: ['React Native', 'Local Storage', 'Analytics'],
      category: 'Mobile',
      image:
        'https://images.unsplash.com/photo-1767449181027-dbca7575f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzc2MTUzODcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: '3',
      title: 'MERN Stack Applications',
      description:
        'Developing and maintaining full-stack applications at 10Pearls using MongoDB, Express.js, React, and Node.js. Building RESTful APIs and integrating frontend with backend systems.',
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'Full-Stack',
      image:
        'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZW50JTIwcHJvamVjdCUyMGNvZGUlMjBsYXB0b3B8ZW58MXx8fHwxNzc2MTg4MTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description:
        'A modern, responsive personal portfolio website showcasing projects, skills, and experience with smooth animations and a polished dark theme.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'Frontend',
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3NjE4ODE1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
  ],
  certifications: [
    {
      id: 'c1',
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2024',
      credentialUrl: 'https://www.freecodecamp.org/',
    },
    {
      id: 'c2',
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2023',
      credentialUrl: 'https://www.freecodecamp.org/',
    },
  ],
  volunteer: [
    {
      id: 'v1',
      role: 'Management Team Member',
      organization: 'ACM UCP',
      period: 'Feb 2025 - Feb 2026',
      description:
        'Organized and coordinated technical events, workshops, and student activities. Managed event logistics, registrations, and collaborated with cross-functional teams to drive participant engagement.',
      tags: ['Leadership', 'Event Management', 'Teamwork'],
    },
  ],
  experience: [
    {
      id: 'e1',
      role: 'Intern - MERN Stack Developer',
      company: '10Pearls, Pakistan',
      period: 'April 2026 - Present',
      description:
        'Developing and maintaining full-stack applications using MongoDB, Express.js, React, and Node.js. Building RESTful APIs, integrating frontend with backend systems, and collaborating in Agile environments.',
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Git'],
    },
  ],
  education: [
    {
      id: 'ed1',
      degree: 'Bachelor of Science in Software Engineering',
      school: 'University of Central Punjab, Lahore',
      period: 'Oct 2022 - Present',
      description:
        'Major in Software Engineering with minors in DevOps and Quality Assurance. Building strong foundations in software development, AI systems, and modern development practices.',
    },
    {
      id: 'ed2',
      degree: 'FSc Pre-Engineering',
      school: 'APSACS, Sarai Alamgir',
      period: 'June 2020 - April 2022',
      description:
        'Completed intermediate education in Pre-Engineering, establishing strong fundamentals in mathematics and sciences.',
    },
  ],
  skillProgress: [
    {id: 's1', name: 'React / React Native', level: 90},
    {id: 's2', name: 'Node.js / Express.js', level: 85},
    {id: 's3', name: 'MongoDB / Firebase', level: 80},
    {id: 's4', name: 'JavaScript / C++', level: 88},
  ],
  techStack: [
    {id: 't1', category: 'Frontend', items: ['React.js', 'React Native', 'JavaScript', 'Tailwind CSS']},
    {id: 't2', category: 'Backend', items: ['Node.js', 'Express.js', 'C++', 'REST APIs']},
    {id: 't3', category: 'Database', items: ['MongoDB', 'MySQL', 'Firebase']},
    {id: 't4', category: 'DevOps & Tools', items: ['Git', 'Postman', 'Agile/Scrum']},
  ],
  services: [
    {
      id: 'sv1',
      title: 'Full-Stack Development',
      description: 'End-to-end web applications with modern frameworks and robust backends.',
      icon: 'Layers',
      accent: 'teal',
    },
    {
      id: 'sv2',
      title: 'Performance Optimization',
      description: 'Speed up apps with focused loading, rendering, and delivery improvements.',
      icon: 'Zap',
      accent: 'amber',
    },
    {
      id: 'sv3',
      title: 'Secure Architecture',
      description: 'Building systems with practical best practices for auth, data, and APIs.',
      icon: 'Shield',
      accent: 'emerald',
    },
    {
      id: 'sv4',
      title: 'UI/UX Design',
      description: 'Clean interfaces that feel intuitive, polished, and easy to use.',
      icon: 'Star',
      accent: 'sky',
    },
  ],
  softSkills: [
    'Leadership',
    'Teamwork',
    'Communication',
    'Time Management',
    'Critical Thinking',
    'Problem Solving',
    'Agile / Scrum',
    'Event Management',
  ],
  faqs: [
    {
      question: 'What is your typical response time?',
      answer: 'I usually respond within 24 hours on weekdays.',
    },
    {
      question: 'Are you open to opportunities?',
      answer: 'Yes, I am currently open to internships, freelance projects, and full-time opportunities.',
    },
    {
      question: 'What are your areas of expertise?',
      answer: 'MERN stack development, React Native, and AI-based systems with NLP.',
    },
  ],
  contactInfo: [
    {
      label: 'Email',
      value: 'hasinkiyani1@gmail.com',
      href: 'mailto:hasinkiyani1@gmail.com',
      accent: 'teal',
      kind: 'email',
    },
    {
      label: 'Phone',
      value: '+92 318-1560482',
      href: 'tel:+923181560482',
      accent: 'emerald',
      kind: 'phone',
    },
    {
      label: 'Location',
      value: 'Township, Lahore',
      href: 'https://www.google.com/maps/search/?api=1&query=Township%2C%20Lahore',
      accent: 'sky',
      kind: 'location',
    },
  ],
  socialLinks: [
    {label: 'GitHub', href: 'https://github.com/dev-hasin', kind: 'github'},
    {label: 'LinkedIn', href: 'https://www.linkedin.com/in/hasinfalakkiyani/', kind: 'linkedin'},
    {label: 'Twitter', href: '#', kind: 'twitter'},
  ],
  mapsQuery: 'Township, Lahore',
}

export const navLinks = [
  {to: '/', label: 'Home'},
  {to: '/projects', label: 'Projects'},
  {to: '/about', label: 'About'},
  {to: '/contact', label: 'Contact'},
]
