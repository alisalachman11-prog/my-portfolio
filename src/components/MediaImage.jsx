import { useState } from 'react'
import { asset, cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import dimensions from '@/lib/imageDimensions.json'

// Fallback ratio for any image missing from the manifest (most media is 16:9).
const DEFAULT_RATIO = '16 / 9'

/**
 * An `<img>` that reserves its real box up front (from the build-time
 * `imageDimensions` manifest) and shows a pulsing skeleton inside that box
 * until the image has loaded, then fades the image in. Reserving the true
 * aspect ratio keeps the skeleton fully visible and avoids layout shift.
 *
 *  - `wrapperClassName` sets the constraining dimension of the box, e.g.
 *    `w-full` (height follows from the ratio) or `h-[600px]` (width follows).
 *  - `className` is applied to the inner `<img>` for extras like cursor styles.
 */
export function MediaImage({
  src,
  alt = '',
  className,
  wrapperClassName,
  onLoad,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false)
  const dim = dimensions[src]
  const aspectRatio = dim ? `${dim.w} / ${dim.h}` : DEFAULT_RATIO

  return (
    <span
      className={cn('relative block overflow-hidden', wrapperClassName)}
      style={{ aspectRatio }}
    >
      {!loaded && <Skeleton className="absolute inset-0 z-0 h-full w-full" />}
      <img
        {...rest}
        src={asset(src)}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          setLoaded(true)
          onLoad?.(e)
        }}
        className={cn(
          'relative z-10 block h-full w-full object-cover transition-opacity duration-500 ease-out',
          loaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
      />
    </span>
  )
}
