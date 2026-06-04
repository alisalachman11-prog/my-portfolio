import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects, ui, meta } from '../content/site.js'
import { caseStudies } from '../content/case-studies/index.js'
import CaseStudyBlock from '../components/CaseStudyBlock.jsx'
import CaseStudyNav from '../components/CaseStudyNav.jsx'
import { LightboxProvider } from '../components/Lightbox.jsx'
import { Button } from '@/components/ui/button'
import { asset, cn } from '@/lib/utils'
import { track } from '@/lib/analytics'
import { typography } from '@/lib/typography'
import { renderRich } from '@/lib/richText'

const prose = 'mx-auto w-full max-w-cs-text'

// Scroll-depth milestones to report per case study (once each).
const SCROLL_MILESTONES = [25, 50, 75, 100]

// Flat, in-render-order list of the zoomable images in a study (single images
// and image-rows only). Drives the shared lightbox so a reader can scroll
// through every image once one is opened.
function collectGalleryImages(study) {
  const out = []
  for (const block of study?.blocks ?? []) {
    if (block.type === 'img' && block.src) {
      out.push({ src: block.src, alt: block.alt || '', caption: block.caption })
    } else if (block.type === 'img-row' && Array.isArray(block.images)) {
      for (const img of block.images) {
        if (img.src) out.push({ src: img.src, alt: img.alt || '', caption: img.caption })
      }
    }
  }
  return out
}

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

  // Fire one `case_study_view` per study, and `scroll_depth` as the reader
  // passes 25/50/75/100% — the signal for how deeply a study actually gets read.
  useEffect(() => {
    if (!project) return
    track('case_study_view', { slug, title: project.title })

    const reached = new Set()
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const pct = max > 0 ? (window.scrollY / max) * 100 : 100
      for (const m of SCROLL_MILESTONES) {
        if (pct >= m && !reached.has(m)) {
          reached.add(m)
          track('scroll_depth', { slug, depth: m })
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
  const galleryImages = useMemo(() => collectGalleryImages(study), [study])



  return (
    <main className="mx-auto min-h-screen max-w-[800px] bg-background px-6 pt-12 pb-24 max-[720px]:px-4 max-[720px]:pt-6 max-[720px]:pb-16">
      <div className="mx-auto mb-8 w-full max-w-cs-hero">
        <BackToHomeButton />
      </div>

        {/* Top hero image — one per case study (placeholder until a src is set). */}
        <figure className="mx-auto my-12 w-full max-w-cs-media">
        {study?.hero?.src ? (
          <img
            className="block w-full rounded-[4px]"
            src={asset(study.hero.src)}
            alt={study.hero.alt || ''}
            decoding="async"
            fetchpriority="high"
          />
        ) : (
          <div className="flex aspect-[2/1] w-full items-center justify-center rounded-[4px] border border-dashed border-border bg-muted text-sm text-muted-foreground">
            Hero image placeholder
          </div>
        )}
      </figure>

<header className="mx-auto mb-8 w-full max-w-cs-hero">
        {/* Override text-4xl's font-size with an arbitrary value so its paired
            line-height is dropped; the heading inherits line-height instead. */}
        <h1 className={cn('my-2', typography.h1, 'text-[length:var(--text-4xl)]')}>
          {project.description}
        </h1>
        {project.note && (
          <blockquote className={cn(typography.blockquote, 'mt-3 text-sm text-muted-foreground')}>
            {project.note}
          </blockquote>
        )}
      </header>



      {study?.intro && (
        <div className={`${prose} mb-[80px] flex flex-col gap-4`}>
          {study.intro.split(/\n{2,}/).map((para, i) => (
            <p key={i} className={typography.lead}>
              {renderRich(para)}
            </p>
          ))}
          {study.cta?.href && (
            <Button
              className="w-min"
              variant="secondary"
              nativeButton={false}
              render={
                <a
                  href={study.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    track('external_cta_click', {
                      slug,
                      label: study.cta.label,
                      href: study.cta.href,
                    })
                  }
                />
              }
            >
              {study.cta.label}
            </Button>
          )}
        </div>
      )}

      <LightboxProvider images={galleryImages}>
        <article className="w-full">
          {study?.blocks?.length ? (
            study.blocks.map((block, i) => <CaseStudyBlock key={i} block={block} />)
          ) : (
            <p className={`${prose} italic`}>
              {ui.caseStudyComingSoon}
            </p>
          )}
        </article>
      </LightboxProvider>

      <div className={prose}>
        <CaseStudyNav heading={ui.caseStudyOtherHeading} others={others} />
      </div>
    </main>
  )
}
