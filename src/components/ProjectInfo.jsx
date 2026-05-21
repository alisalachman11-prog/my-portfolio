import { Link } from 'react-router-dom'
import './ProjectInfo.css'

export default function ProjectInfo({
  title,
  text,
  ctaHref,
  ctaLabel = 'view case study',
}) {
  return (
    <div className="project-info">
      <h2 className="project-info__title">{title}</h2>
      <p className="project-info__text">{text}</p>
      <Link className="project-info__cta" to={ctaHref}>
        {ctaLabel}
      </Link>
    </div>
  )
}
