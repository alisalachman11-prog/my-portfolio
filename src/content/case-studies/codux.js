/**
 * Codux (Wix visual IDE) case study content.
 * Block types: h2, h3, p, img, img-row, list.
 * Images live in /public/images/codux/.
 * Image blocks with no `src` render as a placeholder.
 */
export default {
  intro:
    'Codux, a visual IDE headed by Wix co-founder Nadav Avrahami and a core group of Wix professionals.\n\nCreated to remove the ping-pong between developers and designers, Codux is designed to render a live React project on a visual canvas, letting designers change UI directly and modify the real code. Read more about it here.',
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
      text: 'Before conducting usabilities, the PM and I set this bar: a tech-savvy designer can complete a full page layout end to end in the visual editor — add a grid, edit it, and place components — all without writing code, making sure we could answer:',
    },
    {
      type: 'list',
      items: [
        'Did the changes indeed remove blockers?',
        'Did it improve the efficiency of creating a page layout from the previous usability?',
        'What other improvements can we make?',
        'How discoverable are the grid layouts?',
      ],
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
    },

    { type: 'h2', text: 'A visual tool requires a visual representation' },
    {
      type: 'p',
      text: "Using the old iteration of the grid controls, designers couldn't tell where the rows and columns of the grid were, so my first step was to render the grid structure directly on the canvas, making it visible while editing.",
    },
    {
      type: 'img',
      src: '/images/codux/02-visual-grid-mapping.jpg',
      alt: 'Grid Child panels mapped via arrows to a customer-testimonials layout on the canvas.',
    },
    {
      type: 'img',
      src: '/images/codux/03-grid-panel-states.jpg',
      alt: 'Collapsed layout panel state next to the expanded Grid configuration popover.',
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
      src: '/images/codux/04-display-values.jpg',
      alt: 'Display dropdown alongside the full list of CSS display values shown as text.',
    },
    {
      type: 'img',
      src: '/images/codux/05-rows-input.jpg',
      alt: 'Rows input progressing from empty, to autocomplete suggestions, to a filled repeat() value.',
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
    },
    {
      type: 'img',
      caption: 'Video placeholder — short capture of using a grid preset to scaffold a layout.',
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
      caption: 'Video placeholder — short capture of spreading an element across multiple grid cells.',
    },
    {
      type: 'img',
      src: '/images/codux/07-display-dropdown.jpg',
      alt: 'Display icon row revealing a "Grid" tooltip, next to the same control as a labeled dropdown.',
    },

    { type: 'h2', text: 'It should likely do what you think it does' },
    {
      type: 'p',
      text: "Many users tried inputting the number of columns and rows they wanted to have on stage, but didn't achieve this — that habit eroded the size of the rows, mirroring what it does in the code.",
    },
    {
      type: 'p',
      text: 'The approach I proposed here was to simplify the non-trivial by allowing them to do this, and creating a distinct complex mode to customise the grid further.',
    },
    { type: 'img', alt: 'Iteration screen placeholder' },
    { type: 'img', alt: 'Iteration screen placeholder' },
    { type: 'img', alt: 'Iteration screen placeholder' },
    { type: 'img', alt: 'Iteration screen placeholder' },
    { type: 'img', alt: 'Iteration screen placeholder' },

    { type: 'h2', text: 'Lesson learned' },
    { type: 'h3', text: 'Focus on abilities — not only happy flows' },
    {
      type: 'p',
      text: 'A happy flow is nice, but what really helped me characterize other features better was mapping the capabilities that exist in the code — and only from there, starting on the worth and a happier flow. Before we even got into grid solutions, we had to research what the capabilities and the entire set of options of the Grid are.',
    },
    { type: 'h3', text: 'Benchmarking for better KPIs' },
    {
      type: 'p',
      text: "We noticed that we often assume users will use a specific feature more, rather than work together with the product owner to establish quantifiable benchmarks. If you don't define the metric you want the user to hit — how do you measure whether it is in your product? Adding color? Adding an image? Is there even an expectation that it will be used a lot, or is this a task that is done once in a while, or rarely?",
    },

    { type: 'h2', text: 'Post-changes usability findings' },
    {
      type: 'list',
      items: [
        'In all the usability testing, when instructed to use the grid, the users discovered the layout starters in the add panel quickly — it felt very natural for them, and they were pleasantly surprised to find them there.',
        'The grid indicators on stage were a positive change and especially helped the users when they were doing rough child-related properties.',
        'It became intuitive to spread elements across columns and rows — the users were saved from needing to estimate arbitrary numbers.',
      ],
    },
  ],
}
