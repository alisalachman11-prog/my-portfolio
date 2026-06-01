import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import { createPortal } from 'react-dom'
import { asset, cn } from '@/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const HOVER_LABEL = 'Click to see image in larger scale'

const LightboxContext = createContext(null)

export function useLightbox() {
  return useContext(LightboxContext)
}

/**
 * Provides a single, shared lightbox for a case study. `images` is the ordered
 * gallery (built once from the study content); clicking any `ZoomableImage`
 * opens the lightbox at that image and lets the reader scroll through the set.
 */
export function LightboxProvider({ images = [], children }) {
  const [openIndex, setOpenIndex] = useState(null)

  const open = useCallback(
    (src) => {
      const idx = images.findIndex((img) => img.src === src)
      setOpenIndex(idx >= 0 ? idx : 0)
    },
    [images],
  )

  const value = useMemo(() => ({ open }), [open])

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <LightboxDialog
        images={images}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
      />
    </LightboxContext.Provider>
  )
}

/**
 * An `<img>` that opens the case-study lightbox on click. On hover it shows a
 * zoom-in cursor plus a small label that follows the pointer. Outside a
 * `LightboxProvider` it degrades to a plain image.
 */
export function ZoomableImage({ src, alt = '', className }) {
  const ctx = useLightbox()
  const [labelPos, setLabelPos] = useState(null)
  const open = ctx?.open

  if (!open) {
    return <img className={className} src={asset(src)} alt={alt} />
  }

  return (
    <>
      <img
        className={cn(className, 'cursor-zoom-in')}
        src={asset(src)}
        alt={alt}
        onClick={() => open(src)}
        onMouseEnter={(e) => setLabelPos({ x: e.clientX, y: e.clientY })}
        onMouseMove={(e) => setLabelPos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setLabelPos(null)}
      />
      {labelPos &&
        createPortal(
          <span
            className="pointer-events-none fixed z-[60] -translate-y-1/2 translate-x-5 rounded-full bg-foreground/90 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-background shadow-md"
            style={{ left: labelPos.x, top: labelPos.y }}
          >
            {HOVER_LABEL}
          </span>,
          document.body,
        )}
    </>
  )
}

function LightboxDialog({ images, openIndex, onClose }) {
  const isOpen = openIndex !== null

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="flex w-auto max-w-[96vw] max-h-[96vh] items-center justify-center border-0 bg-transparent p-0 shadow-none ring-0 [&_[data-slot=dialog-close]]:text-white/90 [&_[data-slot=dialog-close]]:hover:text-white"
      >
        <DialogTitle className="sr-only">Image viewer</DialogTitle>
        {isOpen && <LightboxCarousel images={images} startIndex={openIndex} />}
      </DialogContent>
    </Dialog>
  )
}

function LightboxCarousel({ images, startIndex }) {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on('select', onSelect)
    return () => api.off('select', onSelect)
  }, [api])

  const hasMany = images.length > 1

  return (
    <div className="flex max-h-[96vh] flex-col items-center gap-4">
      <Carousel
        setApi={setApi}
        opts={{ startIndex, loop: true }}
        className="flex w-[90vw] max-w-[1500px] min-h-0 items-center"
      >
        <CarouselContent className="items-center">
          {images.map((img, i) => (
            <CarouselItem key={i} className="flex flex-col items-center justify-center">
              {/* Sized to the image's own ratio, bounded by the viewport so the
                  whole image is visible without cropping. */}
              <img
                className="mx-auto h-auto max-h-[80vh] w-auto max-w-[88vw] rounded-[4px] object-contain"
                src={asset(img.src)}
                alt={img.alt || ''}
              />
              {img.caption && (
                <figcaption className="mt-3 max-w-cs-text text-center text-sm text-white/80 italic">
                  {img.caption}
                </figcaption>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        {hasMany && <CarouselPrevious />}
        {hasMany && <CarouselNext />}
      </Carousel>

      {hasMany && (
        <Pagination className="w-auto">
          <PaginationContent className="rounded-full bg-background/90 px-1.5 py-1 shadow-md ring-1 ring-foreground/10 backdrop-blur">
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => api?.scrollPrev()}
              />
            </PaginationItem>
            {images.map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  className="cursor-pointer"
                  isActive={i === current}
                  onClick={() => api?.scrollTo(i)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                className="cursor-pointer"
                onClick={() => api?.scrollNext()}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
