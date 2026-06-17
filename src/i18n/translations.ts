export type Language = 'nl' | 'en'

export type TranslationKey =
  | 'nav.home'
  | 'nav.about'
  | 'nav.skills'
  | 'nav.projects'
  | 'nav.experience'
  | 'nav.contact'
  | 'hero.greeting'
  | 'hero.cta.projects'
  | 'hero.cta.contact'
  | 'about.title'
  | 'about.location'
  | 'skills.title'
  | 'skills.subtitle'
  | 'skills.level.basic'
  | 'skills.level.intermediate'
  | 'skills.level.advanced'
  | 'skills.level.expert'
  | 'skills.category.frontend'
  | 'skills.category.backend'
  | 'skills.category.tools'
  | 'skills.category.other'
  | 'projects.title'
  | 'projects.subtitle'
  | 'projects.featured'
  | 'projects.liveDemo'
  | 'projects.viewCode'
  | 'projects.noDemo'
  | 'experience.title'
  | 'experience.subtitle'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.cta'
  | 'contact.or'
  | 'footer.rights'
  | 'footer.builtWith'

export const translations: Record<Language, Record<TranslationKey, string>> = {
  nl: {
    'nav.home': 'Home',
    'nav.about': 'Over mij',
    'nav.skills': 'Skills',
    'nav.projects': 'Projecten',
    'nav.experience': 'Ervaring',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hoi, ik ben',
    'hero.cta.projects': 'Bekijk projecten',
    'hero.cta.contact': 'Neem contact op',
    'about.title': 'Over mij',
    'about.location': 'Locatie',
    'skills.title': 'Skills & Tech Stack',
    'skills.subtitle': 'Technologieën waarmee ik werk',
    'skills.level.basic': 'Basis',
    'skills.level.intermediate': 'Gevorderd',
    'skills.level.advanced': 'Expert',
    'skills.level.expert': 'Expert',
    'skills.category.frontend': 'Frontend',
    'skills.category.backend': 'Backend',
    'skills.category.tools': 'Tools',
    'skills.category.other': 'Overig',
    'projects.title': 'Projecten',
    'projects.subtitle': 'Een selectie van mijn recente werk',
    'projects.featured': 'Uitgelicht',
    'projects.liveDemo': 'Live demo',
    'projects.viewCode': 'Bekijk code',
    'projects.noDemo': 'Geen demo',
    'experience.title': 'Ervaring',
    'experience.subtitle': 'Mijn professionele reis',
    'contact.title': 'Contact',
    'contact.subtitle': 'Interesse in samenwerking? Stuur me een bericht!',
    'contact.cta': 'Stuur een e-mail',
    'contact.or': 'Of vind me op',
    'footer.rights': 'Alle rechten voorbehouden.',
    'footer.builtWith': 'Gebouwd met React & Vite',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.greeting': "Hi, I'm",
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'about.title': 'About me',
    'about.location': 'Location',
    'skills.title': 'Skills & Tech Stack',
    'skills.subtitle': 'Technologies I work with',
    'skills.level.basic': 'Basic',
    'skills.level.intermediate': 'Intermediate',
    'skills.level.advanced': 'Advanced',
    'skills.level.expert': 'Expert',
    'skills.category.frontend': 'Frontend',
    'skills.category.backend': 'Backend',
    'skills.category.tools': 'Tools',
    'skills.category.other': 'Other',
    'projects.title': 'Projects',
    'projects.subtitle': 'A selection of my recent work',
    'projects.featured': 'Featured',
    'projects.liveDemo': 'Live demo',
    'projects.viewCode': 'View code',
    'projects.noDemo': 'No demo',
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey',
    'contact.title': 'Contact',
    'contact.subtitle': 'Interested in working together? Send me a message!',
    'contact.cta': 'Send an email',
    'contact.or': 'Or find me on',
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with React & Vite',
  },
}
