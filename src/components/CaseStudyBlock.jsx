const figureMedia = 'block w-full rounded-[4px]'
const placeholder =
  'flex w-full aspect-video items-center justify-center rounded-[4px] border border-dashed border-border bg-muted text-sm text-muted-foreground'
const figcaption =
  'mt-2 text-[0.8125rem] italic text-muted-foreground'

export default function CaseStudyBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mx-auto mt-20 mb-10 w-full max-w-cs-text font-sans font-bold leading-[initial] tracking-[-0.08rem] text-[4rem] text-foreground max-[600px]:mt-12 max-[600px]:text-[2.5rem]">
          {block.text}
        </h2>
      )

    case 'h3':
      return (
        <h3 className="mx-auto mt-6 mb-2 w-full max-w-cs-text font-serif font-medium italic leading-[1.3] text-cs-h3 text-foreground max-[600px]:text-[1.0625rem]">
          {block.text}
        </h3>
      )

    case 'p':
      return (
        <p className="mx-auto mb-4 w-full max-w-cs-text text-[1.125rem] leading-[1.7] max-[600px]:text-base">
          {block.text}
        </p>
      )

    case 'img':
      return (
        <figure className="mx-auto my-12 w-full max-w-cs-media">
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
        <div className="mx-auto my-6 grid w-full max-w-cs-media grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
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
        <figure className="mx-auto my-12 w-full max-w-cs-media">
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
        <ul className="mx-auto mb-4 flex w-full max-w-cs-text list-disc flex-col gap-2 pl-5">
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
