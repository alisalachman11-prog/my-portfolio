/**
 * Paradox (B2B security) case study content.
 * Block types: h2, h3, p, img, img-row, list.
 * Images live in /public/images/paradox/.
 */
export default {
  intro:
    'Paradox Security Systems is a B2B security hardware company. The app, used daily by end users to monitor and control their home or business security, was a legacy product that had drifted out of sync with modern mobile UX.',
  blocks: [
    {
      type: 'p',
      text: 'The redesign also had to push for user-centric decisions in an organization where the app wasn’t the revenue driver — a constraint that shaped both the work and how I worked.',
    },

    { type: 'h2', text: 'Why such a critical app needed an overhaul redesign?' },
    { type: 'p', text: 'Content coming soon — fill in from Figma.' },
    {
      type: 'img',
      src: '/images/paradox/01-legacy-app.jpg',
      alt: 'Three screens from the legacy Paradox Israel app: empty cameras state, PGM controls list, and the security/zones panel.',
    },
    {
      type: 'img-row',
      images: [
        {
          src: '/images/paradox/02-areas-before-after.jpg',
          alt: 'After/before comparison of the home areas screen — redesigned tabs and area cards vs. the dark legacy version.',
        },
        {
          src: '/images/paradox/03-doorbell-before-after.jpg',
          alt: 'Before/after comparison of the doorbell stream — dated legacy thumbnails vs. full-bleed redesigned call screens.',
        },
      ],
    },

    { type: 'h2', text: 'Creating a design system' },
    { type: 'p', text: 'Content coming soon.' },
    {
      type: 'img-row',
      images: [
        {
          src: '/images/paradox/04-design-system-annotations.jpg',
          alt: 'Design system internals: Figma component annotations from the team alongside the library of system files (UI Library, Events, Doorbell, On Boarding, etc.).',
        },
        {
          src: '/images/paradox/05-design-system-in-use.jpg',
          alt: 'Four production screens (Help Center, Installer Login, Invite Owner, Create Site) showing the design system applied across flows.',
        },
      ],
    },

    { type: 'h2', text: 'Camera — horizontal → vertical' },
    { type: 'p', text: 'Content coming soon.' },
    {
      type: 'img',
      src: '/images/paradox/06-doorbell-anatomy.jpg',
      alt: 'Annotated doorbell stream layout broken into three numbered regions: header, video controls, and action buttons.',
    },
    {
      type: 'img-row',
      images: [
        {
          src: '/images/paradox/07-doorbell-call-flow.jpg',
          alt: 'Doorbell call flow: hardware unit alongside incoming-call, in-call with a package delivery, and missed-call countdown screens.',
        },
        {
          src: '/images/paradox/08-video-timeline.jpg',
          alt: 'Video timeline experience: clip selection, calendar date picker, and scrubbable event timeline.',
        },
      ],
    },
  ],
}
