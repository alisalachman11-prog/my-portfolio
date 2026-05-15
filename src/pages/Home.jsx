import { useEffect } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import ProjectShowcase from '../components/ProjectShowcase.jsx'
import { projects, meta } from '../content/site.js'
import './Home.css'

export default function Home() {
  useEffect(() => {
    document.title = meta.siteTitle
  }, [])

  return (
    <main className="home">
      <Sidebar />
      <div className="home__stack">
        {projects.map((project) => (
          <ProjectShowcase key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}
