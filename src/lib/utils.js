import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a public/ asset path with Vite's base URL so it resolves in dev and
 * under the GitHub Pages subpath (see `base` in vite.config.js). Absolute URLs
 * (http/https/protocol-relative/data) and falsy values pass through unchanged.
 */
export function asset(path) {
  if (!path || /^(https?:)?\/\/|^data:/.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}
