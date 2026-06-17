import { useLanguage } from '../i18n/LanguageContext'
import { personalInfo, getLocalized } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Hero() {
  const { language, t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="animate-pulse-glow absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-pink/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-3xl" />
      </div>

      <div className="section-container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
        <div
          className={`animate-on-scroll text-center lg:text-left ${isVisible ? 'is-visible' : ''}`}
        >
          <p className="mb-4 text-lg text-text-muted">{t('hero.greeting')}</p>
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="mt-4 font-display text-xl font-medium text-accent-light sm:text-2xl">
            {getLocalized(personalInfo.role, language)}
          </p>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-text-muted lg:mx-0">
            {getLocalized(personalInfo.tagline, language)}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent-pink px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 hover:brightness-110 sm:w-auto"
            >
              {t('hero.cta.projects')}
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-bg-secondary px-8 py-3.5 text-sm font-semibold text-text transition-all hover:border-accent/50 hover:bg-bg-card sm:w-auto"
            >
              {t('hero.cta.contact')}
            </a>
          </div>
        </div>

        <div
          className={`animate-on-scroll delay-2 flex justify-center lg:justify-end ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="gradient-border relative animate-float">
            <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-2xl bg-bg-card sm:h-80 sm:w-80">
              {personalInfo.photo ? (
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 via-accent-pink/10 to-accent-cyan/20">
                  <span className="font-display text-8xl font-bold gradient-text sm:text-9xl">
                    {personalInfo.initials}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
