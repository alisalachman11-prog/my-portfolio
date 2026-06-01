import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react'
import { asset, cn } from '@/lib/utils'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

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
        showCloseButton={false}
        className="top-0 left-0 h-screen w-screen max-h-none max-w-none translate-x-0 translate-y-0 rounded-none border-0 bg-black/90 p-0 shadow-none ring-0"
      >
        <DialogTitle className="sr-only">Image viewer</DialogTitle>
        {isOpen && (
          <LightboxView
            key={openIndex}
            images={images}
            startIndex={openIndex}
            onClose={onClose}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

// Edge control: a circular, translucent button that reads on the dark overlay.
const edgeBtn =
  'absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:ring-3 focus-visible:ring-white/40 focus-visible:outline-none'

function LightboxView({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const hasMany = images.length > 1

  const go = useCallback(
    (delta) => setIndex((i) => (i + delta + images.length) % images.length),
    [images.length],
  )

  // Arrow-key navigation (Escape close is handled by the Dialog).
  useEffect(() => {
    if (!hasMany) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, hasMany])

  const img = images[index]

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Backdrop click closes; the image/controls stop propagation. */}
      <button
        type="button"
        aria-label="Close image viewer"
        className="absolute inset-0 cursor-zoom-out"
        onClick={onClose}
      />

      <button
        type="button"
        aria-label="Close image viewer"
        onClick={onClose}
        className={cn(edgeBtn, 'top-4 right-4 size-9 translate-y-0')}
      >
        <XIcon className="size-5" />
      </button>

      <figure className="relative z-0 flex flex-col items-center">
        <img
          className="max-h-[82vh] max-w-[92vw] rounded-[4px] object-contain"
          src={asset(img.src)}
          alt={img.alt || ''}
        />
      </figure>

      {hasMany && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className={cn(edgeBtn, 'left-4')}
          >
            <ChevronLeftIcon className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className={cn(edgeBtn, 'right-4')}
          >
            <ChevronRightIcon className="size-6" />
          </button>
        </>
      )}

      {/* Caption + counter sit in a readable bottom bar over a soft gradient. */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 bg-gradient-to-t from-black/80 to-transparent px-6 pt-12 pb-5 text-center">
        {img.caption && (
          <figcaption className="max-w-cs-text text-sm leading-snug text-white">
            {img.caption}
          </figcaption>
        )}
        {hasMany && (
          <div className="rounded-full bg-white/15 px-3 py-1 text-xs text-white tabular-nums backdrop-blur">
            {index + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  )
}
