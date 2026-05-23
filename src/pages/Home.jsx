import { useEffect } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import ProjectShowcase from '../components/ProjectShowcase.jsx'
import { projects, meta } from '../content/site.js'

export default function Home() {
  useEffect(() => {
    document.title = meta.siteTitle
  }, [])

  return (
    <main className="grid h-screen grid-cols-[minmax(280px,430px)_1fr] gap-6 overflow-hidden bg-page p-6 max-[900px]:h-auto max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:overflow-visible max-[900px]:p-4">
      <Sidebar />
      <div className="flex h-full flex-col gap-12 overflow-y-auto pr-2 max-[900px]:h-auto max-[900px]:overflow-visible max-[900px]:pr-0">
        {projects.map((project) => (
          <ProjectShowcase key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}
