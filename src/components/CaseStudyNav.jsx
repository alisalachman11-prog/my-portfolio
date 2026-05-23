import { Link } from 'react-router-dom'
import LogoMark from './LogoMark.jsx'

export default function CaseStudyNav({ heading, others }) {
  if (!others?.length) return null

  return (
    <nav
      className="mt-16 border-t border-border pt-6"
      aria-label="Other case studies"
    >
      <h2 className="mb-4 font-serif text-lg font-medium italic text-foreground">
        {heading}
      </h2>
      <ul className="flex list-none flex-col gap-4">
        {others.map((project) => (
          <li key={project.slug}>
            <Link
              to={`/work/${project.slug}`}
              className="grid grid-cols-[minmax(120px,max-content)_1fr] items-baseline gap-4 transition-opacity duration-150 hover:opacity-65 max-[600px]:grid-cols-1 max-[600px]:gap-1"
            >
              <span className="inline-flex items-baseline gap-2 font-serif text-base font-medium italic text-foreground">
                {project.brand.mark && (
                  <LogoMark
                    mark={project.brand.mark}
                    className="relative top-[2px]"
                  />
                )}
                {project.brand.word && <span>{project.brand.word}</span>}
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-serif text-base font-medium italic text-foreground">
                  {project.title}
                </span>
                <span className="text-sm leading-[1.5] text-muted-foreground">
                  {project.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
