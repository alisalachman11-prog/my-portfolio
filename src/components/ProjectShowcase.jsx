import ProjectInfo from './ProjectInfo.jsx'
import { ui } from '../content/site.js'

export default function ProjectShowcase({ project }) {
  const { title, description, slug, image } = project

  return (
    <section
      className="grid grid-cols-[minmax(0,1fr)_minmax(220px,280px)] items-start gap-8 max-[720px]:grid-cols-1 max-[720px]:gap-4"
      aria-label={`Project: ${title}`}
    >
      <div className="overflow-hidden rounded-md border border-black/10 bg-[#ece9e3] aspect-[16/10]">
        {image ? (
          <img
            className="h-full w-full object-cover"
            src={image}
            alt={`${title} preview`}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
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
