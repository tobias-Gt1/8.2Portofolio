import { useLanguage } from '../i18n/LanguageContext'
import { personalInfo } from '../data/content'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-secondary py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-muted">
          &copy; {year} {personalInfo.name}. {t('footer.rights')}
        </p>
        <p className="text-sm text-text-muted">
          {t('footer.builtWith')}
        </p>
      </div>
    </footer>
  )
}
