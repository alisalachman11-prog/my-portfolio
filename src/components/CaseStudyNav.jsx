import { Link } from 'react-router-dom'
import './CaseStudyNav.css'

/**
 * Prev / next project navigation at the bottom of a case study.
 * `prev` and `next` are project objects from site.js, or null at the ends.
 */
export default function CaseStudyNav({ prev, next }) {
  return (
    <nav className="cs-nav" aria-label="Case study navigation">
      <div className="cs-nav__slot cs-nav__slot--prev">
        {prev && (
          <Link to={`/work/${prev.slug}`} className="cs-nav__link">
            <span className="cs-nav__label">← Previous</span>
            <span className="cs-nav__title">{prev.title}</span>
          </Link>
        )}
      </div>
      <div className="cs-nav__slot cs-nav__slot--next">
        {next && (
          <Link to={`/work/${next.slug}`} className="cs-nav__link cs-nav__link--right">
            <span className="cs-nav__label">Next →</span>
            <span className="cs-nav__title">{next.title}</span>
          </Link>
        )}
      </div>
    </nav>
  )
}
