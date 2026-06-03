import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { asset, cn } from '@/lib/utils'
import { typography } from '@/lib/typography'
import { renderRich } from '@/lib/richText'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { ZoomableImage } from '@/components/Lightbox'
import { MediaImage } from '@/components/MediaImage'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

// Centered reading column (layout only; type styles come from `typography`).
const textCol = 'mx-auto w-full max-w-cs-text'
const figureMedia = 'block w-full rounded-[4px]'
const placeholder =
  'flex w-full aspect-video items-center justify-center rounded-[4px] border border-dashed border-border bg-muted text-sm text-muted-foreground'
const figcaption =
  'mt-2 text-[0.8125rem] italic text-muted-foreground'

export default function CaseStudyBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className={cn(textCol, 'mt-12 text-foreground', typography.h2)}>
          {block.text}
        </h2>
      )

    case 'h3':
      return (
        <h3 className={cn(textCol, 'mt-8 text-foreground', typography.h3)}>
          {block.text}
        </h3>
      )

    case 'p':
      return <p className={cn(textCol, typography.p)}>{renderRich(block.text)}</p>

    case 'blockquote':
      return (
        <blockquote className={cn(textCol, typography.blockquote)}>
          {renderRich(block.text)}
        </blockquote>
      )

    case 'lead':
      return <p className={cn(textCol, typography.lead)}>{renderRich(block.text)}</p>

    case 'img':
      return (
        <figure className="mx-auto my-12 w-full max-w-cs-media">
          {block.src ? (
            <ZoomableImage className={figureMedia} src={block.src} alt={block.alt || ''} />
          ) : (
            <div className={placeholder}>Image placeholder</div>
          )}
          {block.caption && <figcaption className={figcaption}>{block.caption}</figcaption>}
        </figure>
      )

    case 'img-row':
      return (
        <div className="mx-auto my-6 grid w-full max-w-cs-media grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {block.images.map((img, i) => (
            <figure key={i}>
              {img.src ? (
                <ZoomableImage className={figureMedia} src={img.src} alt={img.alt || ''} />
              ) : (
                <div className={placeholder}>Image</div>
              )}
              {img.caption && <figcaption className={figcaption}>{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )

    case 'carousel':
      return (
        <figure className="mx-auto my-12 w-full max-w-cs-media">
          <Carousel
            opts={{ loop: true, dragFree: true, align: 'start' }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 gap-6">
              {block.images.map((img, i) => (
                <CarouselItem key={i} className="basis-auto pl-4 ">
                  <figure className="flex flex-col w-min">
                    {img.src ? (
                      <MediaImage
                        src={img.src}
                        alt={img.alt || ''}
                        wrapperClassName="inline-block h-[600px] w-auto max-w-none rounded-[4px]"
                      />
                    ) : (
                      <div className={`${placeholder} h-[600px]`}>Image</div>
                    )}
                    {img.caption && (
                      <figcaption className={`${figcaption} w-full`}>
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {block.caption && <figcaption className={figcaption}>{block.caption}</figcaption>}
        </figure>
      )

    case 'video':
      return (
        <figure className="mx-auto my-12 w-full max-w-cs-media">
          {block.src ? (
            <video
              className={figureMedia}
              src={asset(block.src)}
              controls
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={block.alt || ''}
            />
          ) : (
            <div className={placeholder}>Video placeholder</div>
          )}
          {block.caption && <figcaption className={figcaption}>{block.caption}</figcaption>}
        </figure>
      )

    case 'collapsible':
      return block.items.some((item) => item.image) ? (
        <CollapsibleImage block={block} />
      ) : (
        <Card className="mx-auto my-8 w-full max-w-cs-text gap-4">
          <CardContent>
          {block.items.map((item, i) => (
            <Collapsible key={i} className="rounded-md data-open:bg-muted">
              <CollapsibleTrigger
                render={
                  <Button variant="ghost" className="group w-full" />
                }
              >
                {item.trigger}
                <ChevronDownIcon className="ml-auto transition-transform group-data-[open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                {item.description && (
                  <CardDescription>{item.description}</CardDescription>
                )}
                {item.bullets && (
                  <ul className="ml-6 list-disc text-muted-foreground [&>li]:mt-2">
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </CollapsibleContent>
            </Collapsible>
          ))}
          </CardContent>
        </Card>
      )

    case 'prompt':
      return <PromptCard block={block} />

    case 'list':
      // Centering lives on the wrapper; the `ml-6` indent in `typography.ul`
      // would otherwise override `mx-auto` and pin the list to the left.
      return (
        <div className={textCol}>
          <ul className={typography.ul}>
            {block.items.map((item, i) => (
              <li key={i}>{renderRich(item)}</li>
            ))}
          </ul>
        </div>
      )

    default:
      return null
  }
}

function PromptCard({ block }) {
  const cta = block.cta || 'Click to see full prompt'

  return (
    <Dialog>
      <Card className="mx-auto my-8 w-full max-w-cs-text gap-0">
        <CardContent className="relative max-h-56 overflow-hidden">
          {/* Faded preview of the prompt; the gradient + CTA sit over the fade. */}
          <p className="whitespace-pre-wrap text-sm text-muted-foreground">
            {block.text}
          </p>
          <div className="absolute inset-x-0 bottom-0 flex h-40 flex-col items-center justify-end gap-3 bg-gradient-to-t from-card via-card/90 to-transparent pb-4">
            <DialogTrigger render={<Button variant="outline" size="lg" />}>
              {cta}
            </DialogTrigger>
          </div>
        </CardContent>
      </Card>

      <DialogContent>
        {block.title && (
          <div className="border-b px-6 py-4 pr-12">
            <DialogTitle>{block.title}</DialogTitle>
          </div>
        )}
        <div className="overflow-y-auto px-6 py-6">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
            {block.text}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function CollapsibleImage({ block }) {
  // First item drives the image by default; clicking another item swaps it.
  const [activeIndex, setActiveIndex] = useState(0)
  const active = block.items[activeIndex]

  return (
    <div className="mx-auto my-8 grid w-full max-w-cs-media grid-cols-1 items-start gap-6 md:grid-cols-2">
      <Card>
        <CardContent>
          {block.items.map((item, i) => (
            <Collapsible
              key={i}
              open={activeIndex === i}
              onOpenChange={(open) => open && setActiveIndex(i)}
              className="rounded-md data-open:bg-muted"
            >
              <CollapsibleTrigger
                render={<Button variant="ghost" className="group w-full" />}
              >
                {item.trigger}
                <ChevronDownIcon className="ml-auto transition-transform group-data-[open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                {item.description && (
                  <CardDescription>{item.description}</CardDescription>
                )}
                {item.bullets && (
                  <ul className="ml-6 list-disc text-muted-foreground [&>li]:mt-2">
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </CardContent>
      </Card>
      <figure className="md:sticky md:top-24">
        {active?.image ? (
          <MediaImage
            src={active.image}
            alt={active.alt || ''}
            wrapperClassName={cn('w-full', figureMedia)}
          />
        ) : (
          <div className={placeholder}>Image placeholder</div>
        )}
        {active?.caption && <figcaption className={figcaption}>{active.caption}</figcaption>}
      </figure>
    </div>
  )
}
