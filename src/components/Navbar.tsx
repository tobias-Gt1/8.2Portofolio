import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { personalInfo } from '../data/content'

const navLinks = [
  { href: '#home', key: 'nav.home' as const },
  { href: '#about', key: 'nav.about' as const },
  { href: '#skills', key: 'nav.skills' as const },
  { href: '#projects', key: 'nav.projects' as const },
  { href: '#experience', key: 'nav.experience' as const },
  { href: '#contact', key: 'nav.contact' as const },
]

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-border bg-bg/80 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight"
          onClick={handleNavClick}
        >
          <span className="gradient-text">{personalInfo.initials}</span>
          <span className="text-text">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:text-text"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="flex rounded-lg border border-border bg-bg-secondary p-0.5">
            <button
              onClick={() => setLanguage('nl')}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                language === 'nl'
                  ? 'bg-accent text-white'
                  : 'text-text-muted hover:text-text'
              }`}
              aria-label="Nederlands"
            >
              NL
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                language === 'en'
                  ? 'bg-accent text-white'
                  : 'text-text-muted hover:text-text'
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full bg-text transition-all duration-300 ${
                  menuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-text transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-text transition-all duration-300 ${
                  menuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-1 p-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-text-muted transition-colors hover:bg-bg-secondary hover:text-text"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
