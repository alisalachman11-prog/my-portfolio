import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import './CaseStudy.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="case-study case-study--missing">
        <p>Project not found.</p>
        <Link to="/" className="case-study__back">← Back to home</Link>
      </main>
    )
  }

  return (
    <main className={`case-study case-study--${project.theme}`}>
      <Link to="/" className="case-study__back">← Back to home</Link>
      <header className="case-study__header">
        <h1 className="case-study__title">{project.title}</h1>
        <p className="case-study__description">{project.description}</p>
      </header>
      <section className="case-study__body">
        <p className="case-study__placeholder">
          Case study content coming soon.
        </p>
      </section>
    </main>
  )
}
