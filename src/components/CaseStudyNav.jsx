import { Link } from 'react-router-dom'
import LogoMark from './LogoMark.jsx'
import './CaseStudyNav.css'

/**
 * "Check other case studies" list at the bottom of a case study.
 * `others` is an array of project objects from site.js (excluding the current one).
 */
export default function CaseStudyNav({ heading, others }) {
  if (!others?.length) return null

  return (
    <nav className="cs-nav" aria-label="Other case studies">
      <h2 className="cs-nav__heading">{heading}</h2>
      <ul className="cs-nav__list">
        {others.map((project) => (
          <li key={project.slug} className="cs-nav__item">
            <Link to={`/work/${project.slug}`} className="cs-nav__link">
              <span className="cs-nav__mark">
                {project.brand.mark && <LogoMark mark={project.brand.mark} />}
                {project.brand.word && (
                  <span className="cs-nav__word">{project.brand.word}</span>
                )}
              </span>
              <span className="cs-nav__text">
                <span className="cs-nav__title">{project.title}</span>
                <span className="cs-nav__desc">{project.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
