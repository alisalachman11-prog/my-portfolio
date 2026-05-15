import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects, ui, meta } from '../content/site.js'
import { caseStudies } from '../content/case-studies/index.js'
import LogoMark from '../components/LogoMark.jsx'
import CaseStudyBlock from '../components/CaseStudyBlock.jsx'
import CaseStudyNav from '../components/CaseStudyNav.jsx'
import './CaseStudy.css'

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
      <main className="case-study case-study--missing">
        <p>{ui.projectNotFound}</p>
        <Link to="/" className="case-study__back">{ui.caseStudyBack}</Link>
      </main>
    )
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null
  const next =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null

  return (
    <main className="case-study">
      <Link to="/" className="case-study__back">{ui.caseStudyBack}</Link>

      <header className="case-study__header">
        <div className="case-study__brand">
          {project.brand.mark && <LogoMark mark={project.brand.mark} />}
          {project.brand.word && (
            <span className="case-study__brand-word">{project.brand.word}</span>
          )}
          <span className="case-study__divider" aria-hidden="true">|</span>
          <h1 className="case-study__title">{project.title}</h1>
        </div>
        <p className="case-study__tagline">{project.description}</p>
      </header>

      {study?.intro && <p className="case-study__intro">{study.intro}</p>}

      <article className="case-study__body">
        {study?.blocks?.length ? (
          study.blocks.map((block, i) => <CaseStudyBlock key={i} block={block} />)
        ) : (
          <p className="case-study__placeholder">{ui.caseStudyComingSoon}</p>
        )}
      </article>

      <CaseStudyNav prev={prev} next={next} />
    </main>
  )
}
