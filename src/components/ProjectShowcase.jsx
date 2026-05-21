import ProjectInfo from './ProjectInfo.jsx'
import { ui } from '../content/site.js'
import './ProjectShowcase.css'

export default function ProjectShowcase({ project }) {
  const { title, description, slug, image } = project

  return (
    <section className="showcase" aria-label={`Project: ${title}`}>
      <div className="showcase__image-wrap">
        {image ? (
          <img
            className="showcase__image"
            src={image}
            alt={`${title} preview`}
          />
        ) : (
          <div
            className="showcase__placeholder"
            role="img"
            aria-label={`${title} preview`}
          >
            <span>{ui.imagePlaceholder}</span>
          </div>
        )}
      </div>

      <ProjectInfo
        title={title}
        text={description}
        ctaHref={`/work/${slug}`}
      />
    </section>
  )
}
