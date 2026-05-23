const figureMedia = 'block w-full rounded-[4px]'
const placeholder =
  'flex w-full aspect-video items-center justify-center rounded-[4px] border border-dashed border-border bg-muted text-sm text-muted-foreground'
const figcaption =
  'mt-2 text-[0.8125rem] italic text-muted-foreground'

export default function CaseStudyBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-12 mb-3 font-serif font-medium italic leading-tight text-cs-h2 text-foreground max-[600px]:mt-8 max-[600px]:text-xl">
          {block.text}
        </h2>
      )

    case 'h3':
      return (
        <h3 className="mt-6 mb-2 font-serif font-medium italic leading-[1.3] text-cs-h3 text-foreground max-[600px]:text-[1.0625rem]">
          {block.text}
        </h3>
      )

    case 'p':
      return (
        <p className="mb-4 text-base leading-[1.7] text-foreground max-[600px]:text-[0.9375rem]">
          {block.text}
        </p>
      )

    case 'img':
      return (
        <figure className="my-12">
          {block.src ? (
            <img className={figureMedia} src={block.src} alt={block.alt || ''} />
          ) : (
            <div className={placeholder}>Image placeholder</div>
          )}
          {block.caption && <figcaption className={figcaption}>{block.caption}</figcaption>}
        </figure>
      )

    case 'img-row':
      return (
        <div className="my-6 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {block.images.map((img, i) => (
            <figure key={i}>
              {img.src ? (
                <img className={figureMedia} src={img.src} alt={img.alt || ''} />
              ) : (
                <div className={placeholder}>Image</div>
              )}
              {img.caption && <figcaption className={figcaption}>{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )

    case 'video':
      return (
        <figure className="my-12">
          {block.src ? (
            <video
              className={figureMedia}
              src={block.src}
              autoPlay
              muted
              loop
              playsInline
              aria-label={block.alt || ''}
            />
          ) : (
            <div className={placeholder}>Video placeholder</div>
          )}
          {block.caption && <figcaption className={figcaption}>{block.caption}</figcaption>}
        </figure>
      )

    case 'list':
      return (
        <ul className="mb-4 flex list-disc flex-col gap-2 pl-5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-base leading-relaxed max-[600px]:text-[0.9375rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      )

    default:
      return null
  }
}
