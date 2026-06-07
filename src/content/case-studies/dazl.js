/**
 * Dazl case study content.
 * Edit `intro` and the `blocks` array to update the page.
 * Block types: h2, h3, p, img, img-row, list.
 * Images live in /public/images/dazl/.
 */
export default {
  // Top hero image (1632px wide, shown as a 2:1 banner crop). Add: /images/dazl/hero.png
  hero: {  type: 'img',
    src: '/images/dazl/12-brand-teaser.jpg',
    alt: 'Dazl brand teaser announcement on the old Codux website: “But something Dazzling is coming next!”',
    caption: 'Dazl brand teaser announcement on the old Codux website: “But something Dazzling is coming next!”', },
  intro:
    'The Codux journey came to an end and we pivoted to working on Dazl.\n\nDazl is a cutting-edge AI Builder headed by Nadav Avrahami, the co-founder of WIX, together with a core group of Wix professionals.',

  // Intro CTA button. Omit `cta` entirely to hide the button on a study.
  cta: { label: 'Dazl Website', href: 'https://dazl.dev/' },

  blocks: [
    { type: 'h2', text: 'Too complex for some, too weak for others' },
    {
      type: 'p',
      text: 'The challenge my squad and I were given was to recreate the properties panel, a key component of any IDE or design tool, but a very different thing in each of them. ==The designer expects a direct visual control, and the developer expects a true-to-code, power-user control for manipulating exact variables.==',
    },
    {
      type: 'p',
      text: "The previous property panel that was implemented in Codux tried to be both, and because of that, it ended up being neither: too complex for some, too weak for others.",
    },
    {
      type: 'img',
      src: '/images/dazl/03-complexity.jpg',
      alt: 'The property panel that was implemented in Codux - showcasing visually one of the issues in this implementation, had an endless drill in pattern to reveal more info when clicking on objects.',
      caption: 'The property panel that was implemented in Codux - showcasing visually one of the issues in this implementation, had an endless drill in pattern to reveal more info when clicking on objects.',
    },

    { type: 'h2', text: 'Be the solution you want to see in the product' },
    {
      type: 'p',
      text: 'We addressed the designer-to-developer gap from the source. ==The solution was developed by the close cooperation between me and the development team,== from prototyping the scope of this endeavor, assessing what worked and what didn’t in the old panel, to mapping out the tasks a user would expect to complete while working in an IDE, and building components with all possible property types.',
    },
    {
      type: 'img',
      src: '/images/dazl/02-focused-panel.jpg',
      alt: 'A focused and simple property panel for designers , with advanced options tucked away and opened on demand.',
      caption: 'A focused and simple property panel for designers , with advanced options tucked away and opened on demand.',
    },

    { type: 'h2', text: 'Separate squads, unified design language' },
    {
      type: 'p',
      text: 'In order to ensure Dazl felt like one highly polished product and not like a collection of high-complexity tools taped together, we worked hand in hand with the style panel team, keeping the development rooted in Dazl tools and functionality for these complex panels.',
    },
    {
      type: 'img',
      src: '/images/dazl/01-before.jpg',
      alt: 'property panel and style panel side by side, showing the similarity of the design language between the two.',
      caption: 'property panel and style panel side by side, showing the similarity of the design language between the two.',
    },

    { type: 'h2', text: 'Try, then try Again' },
    {
      type: 'p',
      text: 'While developing the solution, we went through several iterations. Going through them, it was key for me to be humble and to work closely with the development team, successfully identifying personal biases (both mine and theirs) and fully comprehending the effect rejections and suggestions had.',
    },
    { type: 'p', text: 'Some of the key iterations we went through:' },

    { type: 'h3', text: 'Option 1: Debugging vs. Editing mode' },
    {
      type: 'p',
      text: 'Instead of showing an overwhelming amount of information in a single panel, create mode-specific panels for the user to cycle between as needed.',
    },

    {
      type: 'img',
      src: '/images/dazl/05-mode-toggle.jpg',
      alt: 'Two property panels showing Editing and Debugging modes side by side.',
      caption: 'Option 1: mode-specific panels for Editing and Debugging, cycled between as needed.',
    },

    { type: 'h3', text: 'Option 2: Computed values on demand' },
    {
      type: 'p',
      text: 'Keep the single-panel approach, but resolve information overflow by hiding computed values until requested and exposed via hover or click. Fully scalable regardless of the size of the value.',
    },

    
    {
      type: 'img',
      src: '/images/dazl/06-computed.jpg',
      alt: 'Property panel revealing computed values via a hover popover.',
      caption: 'Option 2 — computed values exposed on hover so the default view stays calm.',
    },
    { type: 'h3', text: 'Option 3: Side by side' },
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
      text: 'We start by ==only showing properties that are already passed to the component,== while keeping the ability to add values to new properties via an "Add property" button - addressing the complexity of the code world visually.',
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
      text: '==Multiple levels of error handling cover all error scenarios,== surfacing errors on the tab itself, showing the error on each property, and providing a path to resolve them from a summary view.',
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
      text: '==A simple property panel opens on stage with the option to edit only specific primitive properties (boolean, string, number),== with a defined set of characteristics per component, so a designer can produce value from directly editing them.',
    },
    {
      type: 'img',
      src: '/images/dazl/11-simple.jpg',
      alt: 'On-stage property panel paired with a project images modal for visual editing.',
      caption: 'A simple on-stage property panel paired with the project images modal for visual editing.',
    },

    {
      type: 'img',
      src: '/images/dazl/13-simple panel.jpg',
      alt: 'A simple on-stage property panel with context menu open with the following options: Ask AI, View Code, Clear Value.',
      caption: 'A simple on-stage property panel with context menu open with the following options: Ask AI, View Code, Clear Value.',
    },

    { type: 'h2', text: 'Conclusions' },
    {
      type: 'p',
      text: "I had the pleasure of working with great people on an intense but insightful 90-day sprint, in which we pivoted from working on Codux (Visual IDE)  to Dazl, a dazzling new AI builder.",
    },
    {
      type: 'p',
     text: "In the early stages, I partnered with a PM to evaluate one potential product direction, including market and competitor research that we ultimately recommended against pursuing, a call that helped the team focus its energy elsewhere. ",
    },
    {
      type: 'p',
     text: "Throughout the project, I collaborated with brilliant developers - together we built components using every React property, watched how each one was reflected in Codux, and let that hands-on testing tell us what worked and what didn't.",
    },
    {
      type: 'p',
     text: "This was my final project before leaving the team.\n I crafted a detailed handoff for the team to carry it forward, and the panel shipped after I left.",
    },
  ],
}
