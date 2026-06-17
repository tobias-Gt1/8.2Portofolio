import { useLanguage } from '../i18n/LanguageContext'
import { projects, getLocalized } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const delayClasses = ['', 'delay-1', 'delay-2', 'delay-3', 'delay-4'] as const

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0]
  index: number
  isVisible: boolean
}) {
  const { language, t } = useLanguage()

  return (
    <article
      className={`animate-on-scroll ${delayClasses[Math.min(index + 1, 4)]} group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="relative aspect-video overflow-hidden bg-bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <span className="absolute top-3 left-3 rounded-lg bg-gradient-to-r from-accent to-accent-pink px-3 py-1 text-xs font-semibold text-white">
            {t('projects.featured')}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {getLocalized(project.description, language)}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-bg-secondary px-2.5 py-1 text-xs font-medium text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2 text-sm font-medium text-accent-light transition-colors hover:bg-accent/20"
            >
              <ExternalLinkIcon />
              {t('projects.liveDemo')}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-lg bg-bg-secondary px-4 py-2 text-sm text-text-muted">
              {t('projects.noDemo')}
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent/50 hover:text-text"
            >
              <GitHubIcon />
              {t('projects.viewCode')}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.195 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.665.24 2.895.12 3.195.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-32">
      <div className="section-container">
        <div
          className={`animate-on-scroll mb-16 text-center ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="section-title gradient-text">{t('projects.title')}</h2>
          <p className="mt-4 text-text-muted">{t('projects.subtitle')}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {sorted.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
