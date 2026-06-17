import { useLanguage } from '../i18n/LanguageContext'
import { skillCategories, type SkillLevel } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import type { TranslationKey } from '../i18n/translations'

const levelColors: Record<SkillLevel, string> = {
  basic: 'bg-text-muted/20 text-text-muted border-text-muted/30',
  intermediate: 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30',
  advanced: 'bg-accent/15 text-accent-light border-accent/30',
  expert: 'bg-accent-pink/15 text-accent-pink border-accent-pink/30',
}

const levelKeys: Record<SkillLevel, TranslationKey> = {
  basic: 'skills.level.basic',
  intermediate: 'skills.level.intermediate',
  advanced: 'skills.level.advanced',
  expert: 'skills.level.expert',
}

const delayClasses = ['', 'delay-1', 'delay-2', 'delay-3', 'delay-4'] as const

const categoryKeys: Record<string, TranslationKey> = {
  frontend: 'skills.category.frontend',
  backend: 'skills.category.backend',
  tools: 'skills.category.tools',
  other: 'skills.category.other',
}

export default function Skills() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="skills" ref={ref} className="bg-bg-secondary py-24 sm:py-32">
      <div className="section-container">
        <div
          className={`animate-on-scroll mb-16 text-center ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="section-title gradient-text">{t('skills.title')}</h2>
          <p className="mt-4 text-text-muted">{t('skills.subtitle')}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.id}
              className={`animate-on-scroll ${delayClasses[Math.min(catIndex + 1, 4)]} rounded-2xl border border-border bg-bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 ${isVisible ? 'is-visible' : ''}`}
            >
              <h3 className="mb-5 font-display text-lg font-semibold">
                {t(categoryKeys[category.id])}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-transform hover:scale-105 ${levelColors[skill.level]}`}
                    title={t(levelKeys[skill.level])}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
