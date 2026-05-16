/**
 * Dazl case study content.
 * Edit `intro` and the `blocks` array to update the page.
 * Block types: h2, h3, p, img, img-row, list.
 * Images live in /public/images/dazl/.
 */
export default {
  intro:
    'Dazl is a cutting-edge AI-Builder headed by Nadav Avrahami, the co-founder of Wix, together with a core group of Wix professionals.',
  blocks: [
    { type: 'h2', text: 'Bridging the gap between Designer and Developer' },
    {
      type: 'p',
      text: 'The challenge my squad and I were given was to recreate the properties panel — a key component of any IDE or design tool, but a very different thing in each of them. The designer expects a direct visual control, and the developer expects a true-to-code, power-user control for manipulating exact variables.',
    },
    {
      type: 'p',
      text: "The previous property panel that was implemented in Codux tried to be both, and because of that, it was neither — ending up being too complex for some and too weak for others.",
    },
    {
      type: 'img',
      src: '/images/dazl/01-before.jpg',
      alt: 'Initial state of the Codux property panel before redesign.',
      caption: 'Initial state of the property panel before redesign.',
    },

    { type: 'h2', text: 'Be the solution you want to see in the product' },
    {
      type: 'p',
      text: 'We addressed the designer-to-developer gap from the source — the solution was developed by the close cooperation of a developer and me, from prototyping the scope of this endeavor, assessing what worked and what didn’t in the old panel, to mapping out the tasks a user would expect to complete while working in an IDE, and building components with all possible property types.',
    },
    {
      type: 'img',
      src: '/images/dazl/02-focused-panel.jpg',
      alt: 'A focused property panel showing label, variants, value, and prefix, with an "advanced" option.',
      caption: 'A focused property panel — label, variants, value, and prefix, with advanced options tucked away.',
    },

    { type: 'h2', text: 'Separate squads, unified design language' },
    {
      type: 'p',
      text: 'In order to ensure Dazl felt like one highly polished product and not like a collection of high-complexity tools taped together, we worked hand in hand with the style panel team, keeping the development rooted in Dazl tools and functionality for these complex panels.',
    },
    {
      type: 'img',
      src: '/images/dazl/03-complexity.jpg',
      alt: 'Complex button property panel showing nested image URL and transform options.',
      caption: 'A complex button property panel built alongside the style-panel team to keep the design language unified.',
    },

    { type: 'h2', text: '[try] then [try again]' },
    {
      type: 'p',
      text: 'While developing the solution, we went through several iterations. Going through them, it was key for me to be humble and to work closely with the development team — successfully identifying personal biases (both mine and theirs) and fully comprehending the effect rejections and suggestions had.',
    },
    { type: 'p', text: 'Some of the key iterations we went through:' },
    {
      type: 'img',
      src: '/images/dazl/04-iteration.jpg',
      alt: 'AI chat panel showing the implementation plan during iteration.',
      caption: 'AI chat panel exposing the implementation plan during one of the iteration rounds.',
    },

    { type: 'h3', text: 'Option 1 — Debugging vs. Editing mode' },
    {
      type: 'p',
      text: 'Instead of showing an overwhelming amount of information in a single panel, create mode-specific panels for the user to cycle between as needed.',
    },
    {
      type: 'img',
      src: '/images/dazl/05-mode-toggle.jpg',
      alt: 'Two property panels showing Editing and Debugging modes side by side.',
      caption: 'Option 1 — mode-specific panels for Editing and Debugging, cycled between as needed.',
    },

    { type: 'h3', text: 'Option 2 — Computed values on demand' },
    {
      type: 'p',
      text: 'Keep the single-panel approach but resolve information overflow by hiding computed values until requested — exposed via hover or click. Fully scalable regardless of the size of the value.',
    },
    {
      type: 'img',
      src: '/images/dazl/06-computed.jpg',
      alt: 'Property panel revealing computed values via a hover popover.',
      caption: 'Option 2 — computed values exposed on hover so the default view stays calm.',
    },

    { type: 'h3', text: 'Option 3 — Side by side' },
    {
      type: 'p',
      text: 'Tackle the one-panel issue head-on by creating a larger panel that is organized well enough to still be usable.',
    },
    {
      type: 'img',
      src: '/images/dazl/07-side-by-side.jpg',
      alt: 'Two stacked property panels showing primary view and computed values side by side.',
      caption: 'Option 3 — a wider panel that organizes primary view and computed values together.',
    },

    { type: 'h2', text: 'A great panel has many properties' },
    {
      type: 'p',
      text: 'Our final implemented design combines the best insights from the entire journey, keeping the parts that worked and reimagining the parts that didn’t.',
    },
    {
      type: 'img',
      src: '/images/dazl/08-final-ui.jpg',
      alt: 'Final Codux UI with the redesigned property panel in place.',
      caption: 'The final Codux UI with the redesigned property panel shipped in place.',
    },

    { type: 'h2', text: 'If you need it, then you’ll see it' },
    {
      type: 'p',
      text: 'We start by only showing properties that are already passed to the component, while keeping the ability to add new properties via an "Add property" button — addressing the complexity of the code world in a visual way.',
    },
    {
      type: 'img',
      src: '/images/dazl/09-add-property.jpg',
      alt: 'Property panels showing how new properties are discovered and added on demand.',
      caption: 'New properties are added on demand via the “Add property” button, keeping the default view focused.',
    },

    { type: 'h2', text: 'No error left behind' },
    {
      type: 'p',
      text: 'Multiple levels of error handling cover all error scenarios — surfacing errors on the tab itself, showing the error on each property, and providing a path to resolve them from a summary view.',
    },
    {
      type: 'img',
      src: '/images/dazl/10-errors.jpg',
      alt: 'Property panel with three errors flagged and an inline "isDeveloper is possibly undefined" tooltip.',
      caption: 'Errors surface at the tab, per-property, and via a summary view with clear resolution paths.',
    },

    { type: 'h2', text: 'Keep it simple, keep it useful' },
    {
      type: 'p',
      text: 'A simple property panel opens on stage with the option to edit only specific primitive properties (boolean, string, number), with a defined set of characteristics per component, so a designer can produce value from directly editing them.',
    },
    {
      type: 'img',
      src: '/images/dazl/11-simple.jpg',
      alt: 'On-stage property panel paired with a project images modal for visual editing.',
      caption: 'A simple on-stage property panel paired with the project images modal for visual editing.',
    },

    { type: 'h2', text: 'Conclusions' },
    {
      type: 'p',
      text: 'Focus on abilities, not only happy flows. Listing the capabilities that exist in the code — and starting to understand what is important and what is not — helped characterize features better than only mapping ideal paths.',
    },

    { type: 'h2', text: 'Picking up speed' },
    {
      type: 'list',
      items: [
        'Aggregating the current available data from different sources and organizing it uniformly in a cloud-based database.',
        'Setting up OAuth and other prerequisites for a user-facing app.',
        'Designing and building an Alpha-stage iOS app.',
        'Testing it all with travelers.',
        'Populating the app and testing the quality of the database.',
      ],
    },
    {
      type: 'img',
      src: '/images/dazl/12-brand-teaser.jpg',
      alt: 'Dazl brand teaser: "But something Dazzling is coming next!"',
      caption: 'Dazl brand teaser — “But something Dazzling is coming next!”',
    },
  ],
}
