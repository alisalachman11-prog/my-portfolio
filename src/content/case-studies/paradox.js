/**
 * Paradox (B2B security) case study content.
 * Block types: h2, h3, p, img, img-row,carousel, video, lost.list.
 * Images live in /public/images/paradox/.
 */
export default {
  // Top hero image (1632px wide, shown as a 2:1 banner crop). Add: /images/paradox/hero.png
  hero: { src: '/images/covers/Paradox_Cover.jpg', alt: '' },
  intro:
    'Paradox Security Systems provides B2B security hardware solutions. Their flagship app (Blue Eye), used daily by end-users to monitor and control their home or business security, was a legacy product that had drifted out of sync with modern mobile UX.\n\nThe redesign also had to push for user-centric decisions in an organization where the app wasn’t the revenue driver - a constraint that shaped both the product and the work.',
  // Intro CTA button. Omit `cta` entirely to hide the button on a study.
  cta: { label: 'Blue Eye app', href: 'https://play.google.com/store/apps/details?id=com.paradox.insitegoldv2&hl=en' },
  blocks: [

    { type: 'h2', text: 'Why such a critical app needed an overhaul redesign?' },
    {
      type: 'list',
      items: [
        '==Introduction of a new key security product== - Doorbell real-time camera.',
        'The ==app was unstable,== crashing frequently and requiring a structural rebuild of its foundation.',
        'The ==app was difficult to use== — touch targets were small, text was hard to read, and the layout fought the device.',
        'The ==visual language was dated==, with no clear hierarchy.',
      ],
    },
    {
      type: 'img',
      src: '/images/paradox/02-areas-before-after.jpg',
      alt: 'After/before comparison of the home areas screen — redesigned tabs and area cards vs. the dark legacy version.',
      caption: 'Home areas screen - the redesigned tabs and area cards next to the dated legacy version.',
    },

    { type: 'h2', text: 'Creating a design system' },
    {
      type: 'p',
      text: 'As part of the redesign, we took the opportunity to improve our standards of work. We migrated from XD to Figma and reorganized the workflow and project libraries.',
    },
    {
      type: 'p',
      text: 'I had a significant part in ==creating and documenting our new design system, organizing a file structure system for our projects, and creating a better handoff practice== to ensure clear and precise communication between the designers and developers in the team.',
    },
    {
      type: 'img',
      src: '/images/paradox/04-design-system-annotations.jpg',
      alt: 'Design system internals: Figma component annotations from the team alongside the library of system files (UI Library, Events, Doorbell, On Boarding, etc.).',
      caption: 'Design system components preview and file structure overview.',
    },
    {
      type: 'img',
      src: '/images/paradox/01-legacy-app.jpg',
      alt: 'Old app screens before the redesign',
      caption: 'Old app screens before the redesign',
    },

    { type: 'h2', text: 'Testing the new doorbell functionality with the real hardware' },
    {
      type: 'p',
      text: 'Testing with real hardware is crucial because it reveal physical and environmental edge cases. During the whole design process I was validating network connectivity to the mobile app and  how precise were the sensors.',
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

    { type: 'h2', text: 'Changing directions - taking the Camera from horizontal to vertical' },
    {
      type: 'p',
      text: 'We created a view that is more suitable for the format, a vertical view to fit a phone screen in an ordinary use scenario. ',
    },
    {
      type: 'p',
      text: 'To maximize the benefits of this change, I have created a more focused view by granting darker UI when entering the doorbell view itself - and minimizing the elements on screen so the user can focus on what matters the most.',
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

    { type: 'h2', text: 'Timeline view for a more natural search experience' },
    {
      type: 'p',
      text: 'I designed a timeline sequence view for recorded footage as an alternative to the standard list- empowering users to search for recordings in a fashion that more closely fits the way we naturally think about previous events and is more similar to the way that consumer media apps display their recordings, leading to better ease of use. ',
    },
    {
      type: 'p',
      text: '==Unfortunately, it didn’t ship due to development effort and cost constraints. But this exploration helped shape the way I scope design ambition against engineering reality.==',
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
      text: 'We designed it in such a way that when someone interacts with the Doorbell, the phone rings, just like it would for a regular call. Enabling the User to first see who’s at the door and to answer instantly, talk to the visitor directly via the app, and even unlock the door from the automation tab.',
    },
    {
      type: 'p',
      text: 'Users can answer instantly, see who’s at the door, talk to the visitor directly via the app, and even unlock the door from the automation tab. All this happens straight away, without having to manually open the app.',
    },
    {
      type: 'img',
      src: '/images/paradox/07-doorbell-call-flow.jpg',
      alt: 'Doorbell call flow: hardware unit alongside incoming-call, in-call with a package delivery, and missed-call countdown screens.',
      caption: 'Doorbell call flow — incoming call, in-call with a package delivery, and the missed-call countdown.',
    },

    { type: 'h2', text: 'Having the ability to trigger a siren' },
    {
      type: 'p',
      text: 'Customers requested to have the ability to trigger the siren from the app, so if they spot a thief on the cameras, they can scare them by triggering the siren.',
    },
    {
      type: 'img',
      src: '/images/paradox/01-siren-trigger.jpg',
      alt: 'Flow of the siren manual trigger flow: ',
      caption: 'Illustration of a siren being triggered from the app',
    },

    { type: 'h2', text: 'Illustrations I had the opportunity to add to the app' },
    {
      type: 'p',
      text: 'While working on redesigning the app, I had the pleasure of working on some illustrations that were integrated into the new look and feel of the app.',
    },
    {
      type: 'img',
      src: '/images/paradox/05-design-system-in-use.jpg',
      alt: 'Various illustrations in different screens of the app',
      caption: 'Various illustrations in different screens of the app',
    },

    { type: 'h2', text: 'The challenge of testing without research' },
    {
      type: 'p',
      text: "Due to the project's constraints, I had to devise a way to design the app without access to formal user research. My solution was to design Figma prototypes and to run internal testing with peers across the company.",
    },
  ],
}
