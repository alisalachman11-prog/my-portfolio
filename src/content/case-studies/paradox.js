/**
 * Paradox (B2B security) case study content.
 * Block types: h2, h3, p, img, img-row,carousel, video, lost.list.
 * Images live in /public/images/paradox/.
 */
export default {
  // Top hero image (1632px wide, shown as a 2:1 banner crop). Add: /images/paradox/hero.png
  hero: { src: '', alt: '' },
  intro:
    'Paradox Security Systems is a B2B security hardware company. The app, used daily by end users to monitor and control their home or business security, was a legacy product that had drifted out of sync with modern mobile UX.',
  // Intro CTA button. Omit `cta` entirely to hide the button on a study.
  cta: { label: 'Blue Eye app', href: 'https://play.google.com/store/apps/details?id=com.paradox.insitegoldv2&hl=en' },
  blocks: [
    {
      type: 'p',
      text: 'The redesign also had to push for user-centric decisions in an organization where the app wasn’t the revenue driver - a constraint that shaped both the work and how I worked.',
    },

    { type: 'h2', text: 'Why such a critical app needed an overhaul redesign?' },
    {
      type: 'list',
      items: [
        'Introduction of a new key security product - Doorbell real time camera.',
        'The app crashed frequently and required a structural rebuild of the app’s foundation.',
        'Tap targets were small, text was hard to read, the layout fought the device.',
        'The visual language was dated, with no clear hierarchy.',
      ],
    },
    {
      type: 'img',
      src: '/images/paradox/02-areas-before-after.jpg',
      alt: 'After/before comparison of the home areas screen — redesigned tabs and area cards vs. the dark legacy version.',
      caption: 'Home areas screen — the redesigned tabs and area cards next to the dated legacy version.',
    },

    { type: 'h2', text: 'Creating a design system' },
    {
      type: 'p',
      text: 'We migrated from XD to Figma and we had to make some order.',
    },
    {
      type: 'p',
      text: 'I had the opportunity to mix a significant part in creating and documenting our new design system and in addition organizing a file structure system for our projects and creating a better handoff practice to ensure a clear and more precise communication between designers and developers in the team.',
    },
    {
      type: 'img',
      src: '/images/paradox/04-design-system-annotations.jpg',
      alt: 'Design system internals: Figma component annotations from the team alongside the library of system files (UI Library, Events, Doorbell, On Boarding, etc.).',
      caption: 'Design-system internals — Figma annotations alongside the new library of system files.',
    },
    {
      type: 'img',
      src: '/images/paradox/05-design-system-in-use.jpg',
      alt: 'Four production screens (Help Center, Installer Login, Invite Owner, Create Site) showing the design system applied across flows.',
      caption: 'The design system applied across Help Center, Installer Login, Invite Owner, and Create Site.',
    },

    { type: 'h2', text: 'Testing the new doorbell functionality with the real hardware' },
    {
      type: 'p',
      text: 'add here some textabout the testing with the real hardwer',
    },

    {
      type: 'carousel',
      images: [
        {
      type: 'img',
      src: '/images/paradox/01-carusel-testing.jpg',
      alt: 'Before/after comparison of the doorbell stream — dated legacy thumbnails vs. full-bleed redesigned call screens.',
      caption: 'Anatomy of the doorbell stream — header, video controls, and action buttons, called out.',
        },
        {
      type: 'img',
      src: '/images/paradox/02-carusel-testing.jpg',
      alt: 'Before/after comparison of the doorbell stream — dated legacy thumbnails vs. full-bleed redesigned call screens.',
      caption: 'Anatomy of the doorbell stream — header, video controls, and action buttons, called out.',
        },
        {
      type: 'img',
      src: '/images/paradox/03-carusel-testing.jpg',
      alt: 'Before/after comparison of the doorbell stream — dated legacy thumbnails vs. full-bleed redesigned call screens.',
      caption: 'Anatomy of the doorbell stream — header, video controls, and action buttons, called out.',
        },
        {
      type: 'img',
      src: '/images/paradox/04-carusel-testing.jpg',
      alt: 'Before/after comparison of the doorbell stream — dated legacy thumbnails vs. full-bleed redesigned call screens.',
      caption: 'Anatomy of the doorbell stream — header, video controls, and action buttons, called out.',
        },
        {
      type: 'img',
      src: '/images/paradox/05-carusel-testing.jpg',
      alt: 'Before/after comparison of the doorbell stream — dated legacy thumbnails vs. full-bleed redesigned call screens.',
      caption: 'Anatomy of the doorbell stream — header, video controls, and action buttons, called out.',
        },
        
      ]
    },

    { type: 'h2', text: 'Camera — horizontal → vertical' },
    {
      type: 'p',
      text: 'Creating a view that is suitable for the format. Vertical view to fit the phone screen.',
    },
    {
      type: 'p',
      text: 'In addition I have created a more focused view by granting darker UI when entering the doorbell view itself - and minimizing the elements on screen so the user can focus on what matters the most.',
    },
    {
      type: 'img',
      src: '/images/paradox/03-doorbell-before-after.jpg',
      alt: 'Before/after comparison of the doorbell stream — dated legacy thumbnails vs. full-bleed redesigned call screens.',
      caption: 'Doorbell stream — dated legacy thumbnails next to the full-bleed redesigned call screens.',
    },
    {
      type: 'img',
      src: '/images/paradox/06-doorbell-anatomy.jpg',
      alt: 'Annotated doorbell stream layout broken into three numbered regions: header, video controls, and action buttons.',
      caption: 'Anatomy of the doorbell stream — header, video controls, and action buttons, called out.',
    },

    { type: 'h2', text: 'Timeline view that didn’t ship' },
    {
      type: 'p',
      text: 'I designed a timeline sequence view for recorded footage as an alternative to the standard list — it didn’t ship due to development effort and cost,',
    },
    {
      type: 'p',
      text: 'but the exploration shaped how I scope design ambition against engineering reality.',
    },
    {
      type: 'img',
      src: '/images/paradox/08-video-timeline.jpg',
      alt: 'Video timeline experience: clip selection, calendar date picker, and scrubbable event timeline.',
      caption: 'Timeline exploration — clip selection, calendar date picker, and a scrubbable event timeline.',
    },

    { type: 'h2', text: 'New way to answer the door' },
    {
      type: 'p',
      text: 'When someone rings DoorBell, the phone rings, just like it would for a regular or messenger call.',
    },
    {
      type: 'p',
      text: 'Users can answer instantly, see who’s at the door, talk to the visitor directly via the app, and even unlock the door from the automation tab.',
    },
    {
      type: 'p',
      text: 'All this happens straight away, without having to manually open the app.',
    },
    {
      type: 'img',
      src: '/images/paradox/07-doorbell-call-flow.jpg',
      alt: 'Doorbell call flow: hardware unit alongside incoming-call, in-call with a package delivery, and missed-call countdown screens.',
      caption: 'Doorbell call flow — incoming call, in-call with a package delivery, and the missed-call countdown.',
    },

    { type: 'h2', text: 'All Notifications in one place' },
    {
      type: 'p',
      text: 'Combining all notifications in one place to create better management of all notifications. Combining security and recordings in one dedicated space.',
    },
    { type: 'img' },

    { type: 'h2', text: 'Some illustrations I had the opportunity to add to the app' },
    {
      type: 'p',
      text: 'While working on redesigning the app I had the pleasure on working on some illustrations that were integrated to the new look and feel of the app.',
    },
    { type: 'img' },

    { type: 'h2', text: 'Testing without research' },
    {
      type: 'p',
      text: 'Without access to formal user research, I built Figma prototypes and ran internal testing with peers across the company.',
    },
    {
      type: 'p',
      text: 'It wasn’t a substitute for end-user research, but it caught real problems before they reached development and gave us defensible reasoning when arguing for design decisions in a sales-led org.',
    },

    { type: 'h2', text: 'Impact' },
    {
      type: 'p',
      text: 'We didn’t have formal metrics — no analytics on the app, no PM tracking outcomes, no follow-up research. App-store reviews were mixed: visual and structural improvements landed, and many users praised the new look and the rebuild — but the underlying connectivity issues that drove crashes continued, and many reviews reflected that.',
    },
    {
      type: 'p',
      text: 'The redesign solved what design could solve — the connectivity layer was outside our scope.',
    },
  ],
}
