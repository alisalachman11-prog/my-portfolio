import { DynamicIcon } from 'lucide-react/dynamic'

/** PascalCase or kebab-case → kebab-case (Lucide DynamicIcon expects kebab-case). */
function toKebabCase(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

/**
 * Renders a Lucide icon by name from site.js.
 * Use kebab-case as on lucide.dev (e.g. "smile-plus") or PascalCase ("SmilePlus").
 */
export default function SkillIcon({ name, size = 18 }) {
  if (!name) return null

  const iconName = toKebabCase(name)

  return (
    <DynamicIcon
      name={iconName}
      size={size}
      strokeWidth={2}
      aria-hidden
    />
  )
}
