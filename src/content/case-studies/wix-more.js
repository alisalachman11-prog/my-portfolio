/**
 * "More projects from Wix" — a lightweight roundup case study.
 * Block types used: h2, p, img-row.
 * Images live in /public/images/wix-more/.
 * Image blocks with no `src` render as a placeholder.
 *
 * Pattern per project: one h2 (title), one short p (paragraph), one
 * img-row of 3 images. Duplicate the three blocks below for each
 * additional project, and fill in real titles/copy/images.
 */
export default {
  hero: { src: '/images/covers/Wix_more_cover.jpg', alt:''},
  intro:
    'A few additional projects I worked on during my time at Wix.',
  blocks: [
    { type: 'h2', text: 'Adding properties to components + visualizations for each property type' },
    {
      type: 'p',
      text: 'I worked on the ability to add properties to a component, along with distinct visualizations for each property type ==bound properties, arrays, numbers, booleans, and strings== so each type was easy to recognize and edit at a glance.',
    },
    {
      type: 'img',
      src: '/images/more/2_property.jpg',
    },
    {
      type: 'img',
      src: '/images/more/3_property.jpg',
    },

    {
      type: 'img',
      src: '/images/more/4_property.jpg',
    },

    { type: 'h2', text: 'From isolated components to a publishable website' },
    {
      type: 'p',
      text: 'As a design team, we moved Codux from showcasing components in isolation to rendering a full React website, and we worked on the dashboard layout that came with it. ==One piece I owned end to end was the publishing flow== once building a full website became possible, users needed a way to actually publish it.',
    },
    {
      type: 'img',
      src: '/images/more/1_publish.jpg',
    },
    {
      type: 'img',
      src: '/images/more/2_publish.jpg',
    },
    {
      type: 'img',
      src: '/images/more/3_publish.jpg',
    },

    {
      type: 'img',
      src: '/images/more/4_publish.jpg',
    },
    { type: 'h2', text: 'Ability to add fonts though the UI, not just the codebase' },
    {
      type: 'p',
      text: 'Adding a font previously meant editing code by hand, which was difficult for less technical users. ==My first goal was Google Fonts== giving users a simple way to browse and apply a font without touching the codebase.',
    },
    {
      type: 'img',
      src: '/images/more/1_font.jpg',
    },
    {
      type: 'img',
      src: '/images/more/2_font.jpg',
    },
    {
      type: 'img',
      src: '/images/more/3_font.jpg',
    },
    {
      type: 'img',
      src: '/images/more/4_font.jpg',
    },
  ],
}
