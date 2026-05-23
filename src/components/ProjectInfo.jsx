import { Link } from 'react-router-dom'

export default function ProjectInfo({
  title,
  text,
  ctaHref,
  ctaLabel = 'view case study',
}) {
  return (
    <div className="flex max-w-[280px] flex-col gap-3">
      <h2 className="text-sm font-semibold leading-[1.3] text-foreground">
        {title}
      </h2>
      <p className="text-[0.8125rem] leading-[1.55] text-foreground">{text}</p>
      <Link
        to={ctaHref}
        className="mt-3 self-start rounded bg-foreground px-4 py-3 text-[0.8125rem] text-background transition-colors duration-150 hover:bg-[#333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      >
        {ctaLabel}
      </Link>
    </div>
  )
}
