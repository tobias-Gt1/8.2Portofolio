export type LocalizedString = {
  nl: string
  en: string
}

export type SkillLevel = 'basic' | 'intermediate' | 'advanced' | 'expert'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  id: 'frontend' | 'backend' | 'tools' | 'other'
  skills: Skill[]
}

export interface Project {
  id: string
  title: string
  description: LocalizedString
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  image: string
  featured?: boolean
}

export interface ExperienceEntry {
  id: string
  title: LocalizedString
  company: string
  period: LocalizedString
  description: LocalizedString[]
  companyUrl?: string
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram'
  url: string
  label: string
}

export interface PersonalInfo {
  name: string
  initials: string
  role: LocalizedString
  tagline: LocalizedString
  bio: LocalizedString
  location: LocalizedString
  email: string
  photo?: string
  socials: SocialLink[]
}

export const personalInfo: PersonalInfo = {
  name: 'Tobias',
  initials: 'T',
  role: {
    nl: 'Web Developer',
    en: 'Web Developer',
  },
  tagline: {
    nl: 'Ik bouw moderne, responsive webapplicaties met oog voor detail en gebruikerservaring.',
    en: 'I build modern, responsive web applications with attention to detail and user experience.',
  },
  bio: {
    nl: 'Ik ben een gepassioneerde web developer met een focus op frontend development. Tijdens mijn opleiding en stages heb ik ervaring opgedaan met het bouwen van volledige webapplicaties — van concept tot deployment. Ik houd ervan om complexe problemen op te lossen met schone, onderhoudbare code en intuïtieve interfaces. Op zoek naar een uitdagende rol waarin ik kan blijven groeien.',
    en: 'I am a passionate web developer focused on frontend development. During my education and internships, I gained experience building full web applications — from concept to deployment. I love solving complex problems with clean, maintainable code and intuitive interfaces. Looking for a challenging role where I can keep growing.',
  },
  location: {
    nl: 'Nederland',
    en: 'The Netherlands',
  },
  email: 'tobias@example.com',
  socials: [
    {
      platform: 'github',
      url: 'https://github.com/tobias',
      label: 'GitHub',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/tobias',
      label: 'LinkedIn',
    },
  ],
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    skills: [
      { name: 'HTML5', level: 'advanced' },
      { name: 'CSS3', level: 'advanced' },
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'React', level: 'intermediate' },
      { name: 'Tailwind CSS', level: 'intermediate' },
    ],
  },
  {
    id: 'backend',
    skills: [
      { name: 'PHP', level: 'intermediate' },
      { name: 'Laravel', level: 'intermediate' },
      { name: 'Node.js', level: 'basic' },
      { name: 'MySQL', level: 'intermediate' },
      { name: 'REST API', level: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    skills: [
      { name: 'Git', level: 'intermediate' },
      { name: 'GitHub', level: 'intermediate' },
      { name: 'VS Code', level: 'advanced' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'Vite', level: 'intermediate' },
    ],
  },
  {
    id: 'other',
    skills: [
      { name: 'Responsive Design', level: 'advanced' },
      { name: 'SEO Basics', level: 'intermediate' },
      { name: 'Agile/Scrum', level: 'basic' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: {
      nl: 'Een volledig responsive webshop gebouwd met Laravel en Blade. Bevat productcatalogus, winkelwagen, checkout-flow en een admin dashboard voor productbeheer.',
      en: 'A fully responsive webshop built with Laravel and Blade. Features product catalog, shopping cart, checkout flow, and an admin dashboard for product management.',
    },
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/tobias/ecommerce',
    image: '/projects/ecommerce.svg',
    featured: true,
  },
  {
    id: 'dashboard',
    title: 'Analytics Dashboard',
    description: {
      nl: 'Interactief dashboard voor datavisualisatie met real-time grafieken en filters. Gebouwd als SPA met React en een REST API backend.',
      en: 'Interactive dashboard for data visualization with real-time charts and filters. Built as an SPA with React and a REST API backend.',
    },
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    liveUrl: 'https://dashboard-demo.example.com',
    githubUrl: 'https://github.com/tobias/dashboard',
    image: '/projects/dashboard.svg',
    featured: true,
  },
  {
    id: 'taskmanager',
    title: 'Task Manager App',
    description: {
      nl: 'Een Kanban-style takenbeheer applicatie met drag-and-drop functionaliteit, teamcollaboratie en deadline tracking.',
      en: 'A Kanban-style task management application with drag-and-drop functionality, team collaboration, and deadline tracking.',
    },
    techStack: ['React', 'JavaScript', 'CSS Modules', 'LocalStorage'],
    githubUrl: 'https://github.com/tobias/taskmanager',
    image: '/projects/taskmanager.svg',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: {
      nl: 'Deze portfolio website zelf — responsive, tweetalig, met scroll animaties en een data-driven architectuur voor eenvoudig onderhoud.',
      en: 'This portfolio website itself — responsive, bilingual, with scroll animations and a data-driven architecture for easy maintenance.',
    },
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/tobias/portfolio',
    image: '/projects/portfolio.svg',
  },
]

export const experience: ExperienceEntry[] = [
  {
    id: 'internship-1',
    title: {
      nl: 'Web Developer (stage)',
      en: 'Web Developer (internship)',
    },
    company: 'Digital Agency BV',
    period: {
      nl: 'feb 2025 – jun 2025',
      en: 'Feb 2025 – Jun 2025',
    },
    description: [
      {
        nl: 'Ontwikkeling van responsive websites voor diverse klanten met React en WordPress.',
        en: 'Development of responsive websites for various clients using React and WordPress.',
      },
      {
        nl: 'Samenwerking in een Agile team met wekelijkse sprints en code reviews.',
        en: 'Collaboration in an Agile team with weekly sprints and code reviews.',
      },
      {
        nl: 'Optimalisatie van website performance en SEO scores.',
        en: 'Optimization of website performance and SEO scores.',
      },
    ],
    companyUrl: 'https://example.com',
  },
  {
    id: 'freelance',
    title: {
      nl: 'Freelance Web Developer',
      en: 'Freelance Web Developer',
    },
    company: 'Zelfstandig',
    period: {
      nl: '2024 – heden',
      en: '2024 – present',
    },
    description: [
      {
        nl: 'Ontwerp en ontwikkeling van websites voor kleine ondernemers en lokale bedrijven.',
        en: 'Design and development of websites for small entrepreneurs and local businesses.',
      },
      {
        nl: 'Beheer van hosting, domeinen en doorlopend onderhoud.',
        en: 'Management of hosting, domains, and ongoing maintenance.',
      },
    ],
  },
]

export function getLocalized(value: LocalizedString, lang: 'nl' | 'en'): string {
  return value[lang]
}
