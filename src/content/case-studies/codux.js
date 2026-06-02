/**
 * Codux (Wix visual IDE) case study content.
 * Block types: h2, h3, p, img, img-row, list.
 * Images live in /public/images/codux/.
 * Image blocks with no `src` render as a placeholder.
 */
export default {
  // Top hero image (1632px wide, shown as a 2:1 banner crop). Add: /images/codux/hero.png
  hero: { src: '/images/covers/Wix_Cover.jpg', alt: '' },
  intro:
    'Codux, a visual IDE headed by Wix co-founder Nadav Avrahami and a core group of Wix professionals.\n\nCreated to remove the ping-pong between developers and designers, Codux is designed to render a live React project on a visual canvas, letting designers change UI directly and modify the real code. Read more about it here.',
  // Intro CTA button. Omit `cta` entirely to hide the button on a study.
  cta: { label: 'Introducing Codux', href: 'https://dev.to/codux/introducing-codux-15j5' },
  blocks: [
    { type: 'h2', text: 'The blocker holding designers back' },
    {
      type: 'p',
      text: "The company's preliminary research revealed that one of the biggest hurdles blocking designers from working in a code-rich React environment is creating and editing a layout. My squad and I were chosen to target this issue.",
    },

    {
      type: 'h2',
      text: 'Usability Benchmark: Creating an end-to-end page layout in the visual editor',
    },
    {
      type: 'p',
      text: 'The PM and I set the bar up front: a tech-savvy designer should be able to build a full page layout end to end in the visual editor — grid, edits, components — without writing code.',
    },
    {
      type: 'p',
      text: 'We ran usability as a continuous loop rather than a single final test: 7–8 designers across several rounds (one twice), changing the design and re-testing each time. We tracked whether each friction point got resolved, and the experience improved round over round.',
    },

    { type: 'h2', text: 'The lighthouse at the edge of the code' },
    {
      type: 'p',
      text: "The company's complex system requires a robust set of principles to guide the team towards the best decisions on the route to developing the product.",
    },
    {
      type: 'img',
      src: '/images/codux/01-principles.jpg',
      alt: 'Three guiding principles: address the complexity of the code, enable effective work, simplify the non-trivial.',
      caption: 'Three guiding principles steering the squad’s decisions throughout the project.',
    },

    { type: 'h2', text: 'A visual tool requires a visual representation' },
    {
      type: 'p',
      text: "Using the old iteration of the grid controls, designers couldn't tell where the rows and columns of the grid were, so my first step was to render the grid structure directly on the canvas, making it visible while editing.",
    },
    {
      type: 'img',
      src: '/images/codux/09-visual-grid.jpg',
      alt: 'Grid visual representation on canvas',
      caption: 'Grid visual representation on canvas',
    },
    {
      type: 'img',
      src: '/images/codux/10-visual-grid.jpg',
      alt: 'Grid visual representation on canvas - focuse on a code snippet + style panel controllers',
      caption: 'Grid visual representation on canvas - focuse on a code snippet + style panel controllers',
    },

    { type: 'h2', text: 'Not everything can be an icon' },
    {
      type: 'p',
      text: 'Users found it difficult to differentiate the icons of the different grid setups.',
    },

    {
      type: 'p',
      text: 'Our solution addressed the true complexity of the code by including a textual element alongside the icon, creating a scalable solution that could include more CSS layouts as needed.',
    },

    {
      type: 'img',
      src: '/images/codux/03-grid-panel-states.jpg',
      alt: 'Before and after of the layout controlers in the syle panel - icons only vs. icons with text lables.',
      caption: 'Before and after of the layout controlers in the syle panel - icons only vs. icons with text lables ',
    },

    {
      type: 'img',
      src: '/images/codux/04-display-values.jpg',
      alt: 'Display dropdown alongside the full list of CSS display values shown as text.',
      caption: 'The Display dropdown surfacing the full set of CSS display values as labeled text.',
    },

    { type: 'h2', text: 'Faster and easier starts with grid presets' },
    {
      type: 'p',
      text: 'As there is no reason to do the complex work of starting a new grid from scratch each time, we added the option to use presets — and custom presets — so the user can get going with their project much faster.',
    },

    {
      type: 'img',
      src: '/images/codux/06-grid-presets.jpg',
      alt: 'Codux IDE with the Add Elements panel showing grid layout presets (2/2, 3/3, 4/4, 1/2, 1/3, 1/4).',
      caption: 'Codux IDE with the Add Elements panel showing grid layout presets (2/2, 3/3, 4/4, 1/2, 1/3, 1/4).',
    },
    {
      type: 'video',
      src: '/images/codux/06-grid-presets.mp4',
      alt: 'A video of how to use the grid presets',
      caption: 'A video of how to use the grid presets',
    },

    { type: 'h2', text: 'The right cell for the right element' },
    {
      type: 'p',
      text: 'Previously, it was a struggle for users to spread elements across multiple grid cells, preventing them from creating more intricate layouts that were required to achieve their design visions.',
    },
    {
      type: 'p',
      text: 'We added a clear visual representation to help them achieve these complex cell layouts with ease.',
    },
   
    {
      type: 'img',
      src: '/images/codux/02-visual-grid-mapping.jpg',
      alt: 'Visual representation of grid child properties',
      caption: 'Visual representation of grid child properties',
    },
    {
      type: 'video',
      src: '/images/codux/07-grid-child.mp4',
      alt: 'A video of how to use the grid child properties visual controlers',
      caption: 'A video of how to use the grid child properties visual controlers',
    },

    { type: 'h2', text: 'Mental model vs. System model' },
    {
      type: 'p',
      text: "Many users tried inputting the number of columns and rows they wanted to have on stage, but didn't achieve this — that habit eroded the size of the rows, mirroring what it does in the code.",
    },
    {
      type: 'p',
      text: 'The approach I proposed here was to simplify the non-trivial by allowing them to do this, and creating a distinct complex mode to customise the grid further.',
    },
    {
      type: 'img',
      src: '/images/codux/05-rows-input.jpg',
      alt: 'Rows and columns inputs are representing amount of rows instead of the sizes. Clicking on edit to enter complex grid editing mode',
      caption: 'Rows and columns inputs are representing amount of rows instead of the sizes. Clicking on edit to enter complex grid editing mode',
    },
    {
      type: 'img',
      src: '/images/codux/07-display-dropdown.jpg',
      alt: 'Complex grid editing mode with flexible inputs that surface suggestions',
      caption: 'Complex grid editing mode with flexible inputs that surface suggestions',
    },

    { type: 'h2', text: 'Outcomes' },

    {
      type: 'p',
      text: 'Two of the clearest wins:',
    },
    {
      type: 'list',
      items: [
        "Presets that landed because placement was researched, not guessed. 4 of 5 designers used the grid presets and all found them fast — because I'd mapped where designers expected them in earlier rounds, before they existed.",
        "An input redesigned to match instinct. Designers kept typing the number of rows/columns into a control that set their size — a known, recurring mismatch. After I redesigned it to represent count, their instinct finally produced what they expected.",
      ],
    },
    {
      type: 'p',
      text: 'I treated testing as an ongoing instrument, not a final gate — which is what caught these mismatches early.',
    },
  ],
}
