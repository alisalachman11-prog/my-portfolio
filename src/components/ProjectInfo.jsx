import { Link } from 'react-router-dom'
import { asset, cn } from '@/lib/utils'
import { typography } from '@/lib/typography'

export default function ProjectInfo({
  title,
  text,
  ctaHref,
  ctaLabel = 'view case study',
  brand,
  note,
}) {
  const showBrand = brand && (brand.logo || brand.word)

  return (
    <div className="flex max-w-[280px] flex-col gap-3">
      {showBrand && (
        <div className="flex flex-wrap items-center gap-2">
          {brand.logo ? (
            <img
              src={asset(brand.logo)}
              alt={brand.word ? `${brand.word} logo` : `${title} logo`}
              className="h-6 w-auto max-w-full object-contain"
              decoding="async"
            />
          ) : (
            brand.word && (
              <span className="font-serif text-base font-medium italic text-foreground">
                {brand.word}
              </span>
            )
          )}
        </div>
      )}
      <h2 className="text-sm font-semibold leading-[1.3] text-foreground">
        {title}
      </h2>
      <p className="text-[0.8125rem] leading-[1.55]">{text}</p>
      {note && (
        <blockquote className={cn(typography.blockquote, 'mt-1 text-[0.75rem] leading-[1.45] text-muted-foreground')}>
          {note}
        </blockquote>
      )}
      <Link
        to={ctaHref}
        className="confetti-link mt-3 self-start rounded bg-foreground px-4 py-3 text-[0.8125rem] text-background transition-colors duration-150 hover:bg-[#333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      >
        {ctaLabel}
      </Link>
    </div>
  )
}
