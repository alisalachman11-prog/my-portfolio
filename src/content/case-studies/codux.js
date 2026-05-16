/**
 * Codux (Wix visual IDE) case study content.
 * Block types: h2, h3, p, img, img-row, list.
 * Images live in /public/images/codux/.
 */
export default {
  intro:
    'Codux is a visual IDE headed by Wix co-founder Nadav Avrahami and a core group of Wix professionals. Created to remove the ping-pong between developers and designers, Codux renders a live React project on a visual canvas, letting designers change UI directly and modify the real code.',
  blocks: [
    { type: 'h2', text: 'The blocker holding designers back' },
    { type: 'p', text: 'Content coming soon — fill in from Figma.' },

    { type: 'h2', text: 'Usability Benchmark: Creating an end-to-end page layout in the visual editor' },
    { type: 'p', text: 'Content coming soon.' },

    { type: 'h2', text: 'The lighthouse at the edge of the code' },
    { type: 'p', text: 'Content coming soon.' },
    {
      type: 'img',
      src: '/images/codux/01-principles.jpg',
      alt: 'Three guiding principles: address the complexity of the code, enable effective work, simplify the non-trivial.',
    },

    { type: 'h2', text: 'A visual tool requires a visual representation' },
    { type: 'p', text: 'Content coming soon.' },
    {
      type: 'img-row',
      images: [
        {
          src: '/images/codux/02-visual-grid-mapping.jpg',
          alt: 'Grid Child panels mapped via arrows to a customer-testimonials layout on the canvas.',
        },
        {
          src: '/images/codux/03-grid-panel-states.jpg',
          alt: 'Collapsed layout panel state next to the expanded Grid configuration popover.',
        },
      ],
    },

    { type: 'h2', text: 'Not everything can be an icon' },
    { type: 'p', text: 'Content coming soon.' },
    {
      type: 'img-row',
      images: [
        {
          src: '/images/codux/04-display-values.jpg',
          alt: 'Display dropdown alongside the full list of CSS display values shown as text.',
        },
        {
          src: '/images/codux/05-rows-input.jpg',
          alt: 'Rows input progressing from empty, to autocomplete suggestions, to a filled repeat() value.',
        },
      ],
    },

    { type: 'h2', text: 'Faster and easier starts with grid presets' },
    { type: 'p', text: 'Content coming soon.' },
    {
      type: 'img',
      src: '/images/codux/06-grid-presets.jpg',
      alt: 'Codux IDE with the Add Elements panel showing grid layout presets (2/2, 3/3, 4/4, 1/2, 1/3, 1/4).',
    },

    { type: 'h2', text: 'It should likely do what you think it does' },
    { type: 'p', text: 'Content coming soon.' },
    {
      type: 'img',
      src: '/images/codux/07-display-dropdown.jpg',
      alt: 'Display icon row revealing a "Grid" tooltip, next to the same control as a labeled dropdown.',
    },

    { type: 'h2', text: 'Lesson learned' },
    { type: 'p', text: 'Content coming soon.' },

    { type: 'h2', text: 'Post-changes usability findings' },
    { type: 'p', text: 'Content coming soon.' },
  ],
}
