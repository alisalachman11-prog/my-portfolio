import { Fragment } from 'react'

// Inline text markers usable inside any content string:
//
//   **bold**   → bold brand-red emphasis
//   ==mark==   → yellow highlighter background
//   \n         → line break (rendered as <br />)
//
//   'I collect **ink stamps**.'   →  I collect [ink stamps] (bold, brand red)
//   'This is ==important==.'        →  This is [important] (yellow highlight)
//   'Line one\nLine two'            →  Line one ⏎ Line two
//
// Everything else passes through unchanged, so plain strings are unaffected.
//
// split() with a capturing group keeps the matched token; we then inspect each
// token to see which marker (if any) wrapped it.
function renderInline(text, keyPrefix) {
  return text.split(/(\*\*.+?\*\*|==.+?==)/g).map((segment, i) => {
    const key = `${keyPrefix}-${i}`
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return (
        <strong key={key} className="font-semibold text-brand">
          {segment.slice(2, -2)}
        </strong>
      )
    }
    if (segment.startsWith('==') && segment.endsWith('==')) {
      return (
        <mark key={key} className="rounded-[2px] bg-lime-100 px-0.5 text-inherit">
          {segment.slice(2, -2)}
        </mark>
      )
    }
    return <Fragment key={key}>{segment}</Fragment>
  })
}

export function renderRich(text) {
  if (typeof text !== 'string') return text
  // Split on newlines first, then apply inline markers within each line,
  // interleaving a <br /> between lines so \n produces a real line break.
  return text.split('\n').map((line, lineIdx) => (
    <Fragment key={lineIdx}>
      {lineIdx > 0 && <br />}
      {renderInline(line, lineIdx)}
    </Fragment>
  ))
}
