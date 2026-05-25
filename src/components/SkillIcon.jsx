import { Apple, Code, Search, SmilePlus, SwatchBook, Wand } from 'lucide-react'

/**
 * Renders a Lucide icon by name from site.js.
 *
 * Static map → only these icons ship in the bundle (tree-shaken).
 * To use a different Lucide icon: add it to ICONS below and reference
 * the same key from `icon:` in site.js. Use kebab-case as on lucide.dev
 * (e.g. "smile-plus") or PascalCase ("SmilePlus") — both work.
 */
const ICONS = {
  apple: Apple,
  code: Code,
  search: Search,
  'smile-plus': SmilePlus,
  'swatch-book': SwatchBook,
  wand: Wand,
}

function normalize(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

export default function SkillIcon({ name, size = 18 }) {
  if (!name) return null

  const Icon = ICONS[normalize(name)]
  if (!Icon) {
    if (import.meta.env.DEV) {
      console.warn(
        `SkillIcon: no icon registered for "${name}". Add it to the ICONS map in SkillIcon.jsx.`
      )
    }
    return null
  }

  return <Icon size={size} strokeWidth={2} aria-hidden color="var(--color-brand)" />
}
