import { useLanguage } from '../i18n/LanguageContext'
import { personalInfo, getLocalized } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const { language, t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32">
      <div className="section-container">
        <div
          className={`animate-on-scroll mb-16 text-center ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="section-title gradient-text">{t('about.title')}</h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <div
            className={`animate-on-scroll delay-1 flex justify-center lg:col-span-2 ${isVisible ? 'is-visible' : ''}`}
          >
            <div className="gradient-border">
              <div className="flex h-56 w-56 items-center justify-center overflow-hidden rounded-2xl bg-bg-card sm:h-72 sm:w-72">
                {personalInfo.photo ? (
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 via-accent-pink/10 to-accent-cyan/20">
                    <span className="font-display text-7xl font-bold gradient-text">
                      {personalInfo.initials}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className={`animate-on-scroll delay-2 lg:col-span-3 ${isVisible ? 'is-visible' : ''}`}
          >
            <p className="text-lg leading-relaxed text-text-muted">
              {getLocalized(personalInfo.bio, language)}
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-bg-secondary px-5 py-4">
              <svg
                className="h-5 w-5 shrink-0 text-accent-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p className="text-xs font-medium text-text-muted">{t('about.location')}</p>
                <p className="text-sm font-medium">{getLocalized(personalInfo.location, language)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
