import { Link } from 'react-router-dom'
import LogoMark from './LogoMark.jsx'
import './ProjectShowcase.css'

export default function ProjectShowcase({ project }) {
  const { brand, title, description, theme, slug } = project

  return (
    <section
      className={`showcase showcase--${theme}`}
      aria-label={`Project: ${title}`}
    >
      <header className="showcase__header">
        <div className="showcase__brand">
          {brand.mark && <LogoMark mark={brand.mark} />}
          {brand.word && (
            <span className="showcase__brand-word">{brand.word}</span>
          )}
          <span className="showcase__divider" aria-hidden="true">|</span>
          <h2 className="showcase__title">{title}</h2>
        </div>

        <Link
          className="showcase__next"
          to={`/work/${slug}`}
          aria-label={`Open ${title} case study`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </header>

      <p className="showcase__description">{description}</p>

      <div className="showcase__media" role="img" aria-label={`${title} preview`}>
        <span className="showcase__media-label">Hero image placeholder</span>
      </div>
    </section>
  )
}
