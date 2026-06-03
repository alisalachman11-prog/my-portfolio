import { Fragment } from 'react'

// Inline text markers usable inside any content string:
//
//   **bold**   → bold brand-red emphasis
//   ==mark==   → yellow highlighter background
//
//   'I collect **ink stamps**.'   →  I collect [ink stamps] (bold, brand red)
//   'This is ==important==.'        →  This is [important] (yellow highlight)
//
// Everything else passes through unchanged, so plain strings are unaffected.
//
// split() with a capturing group keeps the matched token; we then inspect each
// token to see which marker (if any) wrapped it.
export function renderRich(text) {
  if (typeof text !== 'string') return text
  return text.split(/(\*\*.+?\*\*|==.+?==)/g).map((segment, i) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-brand">
          {segment.slice(2, -2)}
        </strong>
      )
    }
    if (segment.startsWith('==') && segment.endsWith('==')) {
      return (
        <mark key={i} className="rounded-[2px] bg-lime-100 px-0.5 text-inherit">
          {segment.slice(2, -2)}
        </mark>
      )
    }
    return <Fragment key={i}>{segment}</Fragment>
  })
}
