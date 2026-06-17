import { useLanguage } from '../i18n/LanguageContext'
import { experience, getLocalized } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const delayClasses = ['', 'delay-1', 'delay-2', 'delay-3', 'delay-4'] as const

export default function Experience() {
  const { language, t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="experience" ref={ref} className="bg-bg-secondary py-24 sm:py-32">
      <div className="section-container">
        <div
          className={`animate-on-scroll mb-16 text-center ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="section-title gradient-text">{t('experience.title')}</h2>
          <p className="mt-4 text-text-muted">{t('experience.subtitle')}</p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-accent via-accent-pink to-accent-cyan md:left-1/2 md:-translate-x-px" />

          {experience.map((entry, index) => (
            <div
              key={entry.id}
              className={`animate-on-scroll ${delayClasses[Math.min(index + 1, 4)]} relative mb-12 last:mb-0 ${isVisible ? 'is-visible' : ''}`}
            >
              <div
                className={`flex flex-col gap-6 md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="ml-12 rounded-2xl border border-border bg-bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 md:ml-0">
                    <span className="text-sm font-medium text-accent-light">
                      {getLocalized(entry.period, language)}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold">
                      {getLocalized(entry.title, language)}
                    </h3>
                    {entry.companyUrl ? (
                      <a
                        href={entry.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm text-text-muted transition-colors hover:text-accent-light"
                      >
                        {entry.company} ↗
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-text-muted">{entry.company}</p>
                    )}
                    <ul
                      className={`mt-4 space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}
                    >
                      {entry.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm leading-relaxed text-text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                          {getLocalized(item, language)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 left-6 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                <div className="h-3 w-3 rounded-full border-2 border-accent bg-bg ring-4 ring-bg-secondary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
