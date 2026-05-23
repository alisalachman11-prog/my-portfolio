import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects, ui, meta } from '../content/site.js'
import { caseStudies } from '../content/case-studies/index.js'
import LogoMark from '../components/LogoMark.jsx'
import CaseStudyBlock from '../components/CaseStudyBlock.jsx'
import CaseStudyNav from '../components/CaseStudyNav.jsx'

const prose = 'mx-auto max-w-[1200px]'
const backLink =
  'inline-block text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-150 hover:text-foreground'
const displayType =
  'font-serif text-cs-display font-medium italic max-[720px]:text-lg'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const study = caseStudies[slug]

  useEffect(() => {
    document.title = project
      ? `${project.title} — ${meta.siteTitle}`
      : meta.siteTitle
    window.scrollTo(0, 0)
  }, [project, slug])

  if (!project) {
    return (
      <main className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-4 bg-background px-6 pt-24 pb-24 max-[720px]:px-4 max-[720px]:pb-16">
        <p className={prose}>{ui.projectNotFound}</p>
        <Link to="/" className={`${prose} ${backLink}`}>
          {ui.caseStudyBack}
        </Link>
      </main>
    )
  }

  const others = projects.filter((p) => p.slug !== slug)

  return (
    <main className="mx-auto min-h-screen max-w-[1600px] bg-background px-6 pt-12 pb-24 max-[720px]:px-4 max-[720px]:pt-6 max-[720px]:pb-16">
      <Link to="/" className={`${prose} mb-8 block ${backLink}`}>
        {ui.caseStudyBack}
      </Link>

      <header className={`${prose} mb-8`}>
        <div className="mb-2 flex flex-wrap items-baseline gap-3">
          {project.brand.mark && <LogoMark mark={project.brand.mark} />}
          {project.brand.word && (
            <span className={`${displayType} tracking-normal`}>
              {project.brand.word}
            </span>
          )}
          <span
            className="font-serif font-light text-cs-display opacity-35 max-[720px]:text-lg"
            aria-hidden="true"
          >
            |
          </span>
          <h1 className={`${displayType} leading-tight`}>{project.title}</h1>
        </div>
        <p className="mt-2 max-w-[64ch] font-sans text-[0.9375rem] leading-[1.55] text-muted-foreground">
          {project.description}
        </p>
      </header>

      {study?.intro && (
        <div className={`${prose} mb-6 flex flex-col gap-4`}>
          {study.intro.split(/\n{2,}/).map((para, i) => (
            <p
              key={i}
              className="font-sans text-base leading-[1.7] text-foreground"
            >
              {para}
            </p>
          ))}
        </div>
      )}

      <article className={prose}>
        {study?.blocks?.length ? (
          study.blocks.map((block, i) => <CaseStudyBlock key={i} block={block} />)
        ) : (
          <p className="italic text-muted-foreground">{ui.caseStudyComingSoon}</p>
        )}
      </article>

      <div className={prose}>
        <CaseStudyNav heading={ui.caseStudyOtherHeading} others={others} />
      </div>
    </main>
  )
}
