import './CaseStudyBlock.css'

/**
 * Renders a single content block inside a case study.
 * Supported types: h2, h3, p, img, img-row, list.
 */
export default function CaseStudyBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="cs-block cs-h2">{block.text}</h2>

    case 'h3':
      return <h3 className="cs-block cs-h3">{block.text}</h3>

    case 'p':
      return <p className="cs-block cs-p">{block.text}</p>

    case 'img':
      return (
        <figure className="cs-block cs-figure">
          {block.src ? (
            <img src={block.src} alt={block.alt || ''} />
          ) : (
            <div className="cs-figure__placeholder">Image placeholder</div>
          )}
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )

    case 'img-row':
      return (
        <div className="cs-block cs-img-row">
          {block.images.map((img, i) => (
            <figure key={i} className="cs-figure">
              {img.src ? (
                <img src={img.src} alt={img.alt || ''} />
              ) : (
                <div className="cs-figure__placeholder">Image</div>
              )}
              {img.caption && <figcaption>{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )

    case 'list':
      return (
        <ul className="cs-block cs-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )

    default:
      return null
  }
}
