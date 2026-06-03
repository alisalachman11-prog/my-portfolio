/**
 * shadcn/ui typography styles — the single source of truth for prose type.
 * Verbatim from https://ui.shadcn.com/docs/components/radix/typography
 *
 * These are TYPE styles only (size, weight, tracking, rhythm). Layout concerns
 * — centering and the reading-column width (`mx-auto w-full max-w-cs-text`) —
 * are composed alongside these at the call site, so the two stay decoupled.
 */
export const typography = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  blockquote: 'mt-6 border-l-4 border-foreground/20 pl-6 italic',
  ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
  lead: 'text-xl text-muted-foreground',
  large: 'text-lg font-semibold',
  small: 'text-sm font-medium leading-none',
  muted: 'text-sm text-muted-foreground',
  code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
}
