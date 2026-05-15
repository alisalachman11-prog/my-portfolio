import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects, ui, meta } from '../content/site.js'
import './CaseStudy.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    document.title = project
      ? `${project.title} — ${meta.siteTitle}`
      : meta.siteTitle
  }, [project])

  if (!project) {
    return (
      <main className="case-study case-study--missing">
        <p>{ui.projectNotFound}</p>
        <Link to="/" className="case-study__back">{ui.caseStudyBack}</Link>
      </main>
    )
  }

  return (
    <main className={`case-study case-study--${project.theme}`}>
      <Link to="/" className="case-study__back">{ui.caseStudyBack}</Link>
      <header className="case-study__header">
        <h1 className="case-study__title">{project.title}</h1>
        <p className="case-study__description">{project.description}</p>
      </header>
      <section className="case-study__body">
        <p className="case-study__placeholder">{ui.caseStudyComingSoon}</p>
      </section>
    </main>
  )
}
