import { Fragment } from 'react'

// Inline text marker. Wrap words in **double asterisks** inside any content
// string and they render as bold brand-red emphasis. Everything else passes
// through unchanged, so plain strings are unaffected.
//
//   'I collect **ink stamps**.'  →  I collect [ink stamps] (bold, brand red)
//
// split() with a capturing group alternates: even indices are plain text,
// odd indices are the text that was between a pair of ** markers.
export function renderRich(text) {
  if (typeof text !== 'string') return text
  return text.split(/\*\*(.+?)\*\*/g).map((segment, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-brand">
        {segment}
      </strong>
    ) : (
      <Fragment key={i}>{segment}</Fragment>
    ),
  )
}
