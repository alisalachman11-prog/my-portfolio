import Sidebar from '../components/Sidebar.jsx'
import ProjectShowcase from '../components/ProjectShowcase.jsx'
import { projects } from '../data/projects.js'
import './Home.css'

export default function Home() {
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
