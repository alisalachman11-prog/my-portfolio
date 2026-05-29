import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects, ui, meta } from '../content/site.js'
import { caseStudies } from '../content/case-studies/index.js'
import LogoMark from '../components/LogoMark.jsx'
import CaseStudyBlock from '../components/CaseStudyBlock.jsx'
import CaseStudyNav from '../components/CaseStudyNav.jsx'
import { Button } from '@/components/ui/button'
import { asset, cn } from '@/lib/utils'
import { typography } from '@/lib/typography'

const prose = 'mx-auto w-full max-w-cs-text'

function BackToHomeButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      nativeButton={false}
      render={<Link to="/" />}
    >
      <ArrowLeft data-icon="inline-start" />
      {ui.caseStudyBack}
    </Button>
  )
}
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
      <main className="mx-auto flex min-h-screen max-w-[1680px] flex-col gap-4 bg-background px-6 pt-24 pb-24 max-[720px]:px-4 max-[720px]:pb-16">
        <p className={prose}>{ui.projectNotFound}</p>
        <div className={prose}>
          <BackToHomeButton />
        </div>
      </main>
    )
  }

  const others = projects.filter((p) => p.slug !== slug)

  return (
    <main className="mx-auto min-h-screen max-w-[1680px] bg-background px-6 pt-12 pb-24 max-[720px]:px-4 max-[720px]:pt-6 max-[720px]:pb-16">
      <div className="mx-auto mb-8 w-full max-w-cs-hero">
        <BackToHomeButton />
      </div>

      <header className="mx-auto mb-8 w-full max-w-cs-hero">
        <div className="flex flex-wrap items-baseline gap-3">
          {project.brand.mark && <LogoMark mark={project.brand.mark} />}
          {project.brand.word && (
            <span className={`${displayType} tracking-normal`}>
              {project.brand.word}
            </span>
          )}
        </div>
        <h1 className={cn('my-12', typography.h1)}>{project.title}</h1>
        <p className="max-w-[64ch] font-sans text-[0.9375rem] leading-[1.55]">
          {project.description}
        </p>
      </header>

      {/* Top hero image — one per case study (placeholder until a src is set). */}
      <figure className="mx-auto mb-10 w-full max-w-cs-hero max-[720px]:mb-6">
        {study?.hero?.src ? (
          <img
            className="block aspect-[2/1] w-full rounded-[4px] object-cover"
            src={asset(study.hero.src)}
            alt={study.hero.alt || ''}
          />
        ) : (
          <div className="flex aspect-[2/1] w-full items-center justify-center rounded-[4px] border border-dashed border-border bg-muted text-sm text-muted-foreground">
            Hero image placeholder
          </div>
        )}
      </figure>

      {study?.intro && (
        <div className={`${prose} my-[120px] flex flex-col gap-4`}>
          {study.intro.split(/\n{2,}/).map((para, i) => (
            <p key={i} className={typography.lead}>
              {para}
            </p>
          ))}
        </div>
      )}

      <article className="w-full">
        {study?.blocks?.length ? (
          study.blocks.map((block, i) => <CaseStudyBlock key={i} block={block} />)
        ) : (
          <p className={`${prose} italic`}>
            {ui.caseStudyComingSoon}
          </p>
        )}
      </article>

      <div className={prose}>
        <CaseStudyNav heading={ui.caseStudyOtherHeading} others={others} />
      </div>
    </main>
  )
}
