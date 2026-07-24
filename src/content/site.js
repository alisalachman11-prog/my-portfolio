/**
 * Single source of truth for every piece of text on the site.
 * Edit values here to change what shows up in the UI.
 *
 * Image paths point to files under /public/images/. Drop a file in
 * that folder and reference it as "/images/your-file.png".
 */

// ---------- Browser tab + meta ----------
export const meta = {
  siteTitle: 'Alisa Lachman — Product Designer',
}

// ---------- Sidebar: profile ----------
export const profile = {
  intro:
  "Hey, I'm Alisa 👋 \n\nI'm a product designer for complex systems - most recently **Codux, a visual IDE for React**, and **Dazl, an AI builder**, at Wix. I contributed across the full product lifecycle, from discovery to codebase contributions. Before that, I redesigned a high-criticality IoT security app.\n\nI'm on a sabbatical traveling the world (8 countries so far) - and still building: **Stamp Hunter**, a mobile app for collecting ink stamps across Taiwan, with Claude Code as my pair. Now looking for my next role.\n\nIn my free time I enjoy folding origami and watching science videos.",
  // avatar: '/images/avatar.jpg', // ← uncomment after adding a square photo to public/images/
}

export const aboutMe = {
  // Fanned photo stack shown at the top of the About panel. Hovering shuffles
  // through them. Reuses the about images — reorder, add, or swap freely.
  gallery: [
    '/images/about/4_youtube.jpg',
    '/images/about/1_origami.jpg',
    '/images/about/2_origami.jpg',
    '/images/about/3_origami.jpg',
    '/images/about/2_countries.jpg',
    '/images/about/4_origami.jpg',
    '/images/about/3_countries.jpg',
    '/images/about/1_youtube.jpg',
  ],
  // Plain About blurb. Was previously a template with hover-card facts; now just text.
};
// ---------- Sidebar: experience list ----------
export const experience = [
  {
    company: 'Wix',
    years: '2023–2025',
    summary:
      'At Wix, I designed two developer-focused products: a visual IDE for React that pivoted into an AI-powered builder. Owned product areas, defined KPIs with product, and shipped iteratively. Worked closely with engineers and shipped UI changes directly to the codebase. Ran interviews, usability tests, and analytics (Mixpanel, FullStory), and introduced an Opportunity Solution Tree framework to the team.',
  },
  {
    company: 'Paradox Security',
    years: '2020 - 2023',
    summary:
      "At Paradox, I helped redesign a critical legacy mobile app and shaped the experience for the Doorbell, a new security device. Co-created and documented a design system, restructured the file architecture, refined the design-to-dev handoff, and created onboarding for new designers.",
  },
]

// ---------- Sidebar: education & credentials ----------
// Rendered as a collapsible accordion under the "Education" heading.
// `summary` is placeholder copy — replace with real content.
export const education = [
  {
    title: 'Product Management Course',
    years: '2024',
    summary: 'Product Experts.',
  },
  {
    title: 'B.Ed.Des - Design & Visual Communication',
    years: '2016 - 2020',
    summary: 'Design & Visual Communication',
  },
]

// ---------- Sidebar: skills & knowledge ----------
// `icon` — Lucide name from https://lucide.dev/icons (kebab-case: "smile-plus", or PascalCase: "SmilePlus")
export const skills = [
  {
    heading: 'Domain Expertise',
    icon: 'apple',
    bullets: [
      'Design complex workflows for enterprise B2B SaaS',
      'Design developer tools and AI-powered builders (Codux, Dazl)',
      'Design app integrations for IoT security products, tested against real hardware',
    ],
  },
  {
    heading: 'Research & Discovery',
    icon: 'search',
    bullets: [
     'Run user interviews and usability testing',
    'Analyze product behavior with Mixpanel and FullStory',
     'Translate insights into structured product opportunities using the Opportunity Solution Tree (OST) framework',
    ],
  },
  {
    heading: 'Technical Fluency',
    icon: 'code',
    bullets: [
      'Comfortable with HTML, CSS, TS, JS, and React \n(still deepening)',
      'Ship UI changes directly to the codebase',
      'Navigate the Git workflow comfortably: commits, PRs, and bug/UX tickets',
    ],
  },
  {
    heading: 'Building with AI',
    icon: 'Wand',
    bullets: [
      'Prototype and iterate on design concepts using Claude Code, Cursor, Base44, and Lovable',
      'Evaluate LLM design outputs as part of shipping AI features',
      'Build personal projects end-to-end using AI-assisted planning, design, and code',
    ],
  },
  {
    heading: 'Design Systems & Team Process',
    icon: 'swatch-book',
    bullets: [
      'Co-created and documented design systems',
      'Improve design-to-development handoff processes',
      'Design onboarding experiences for new team members',
    ],
  },
  {
    heading: 'Collaboration & Ownership',
    icon: 'smile-plus',
    bullets: [
      'Operate inside squads, across teams, and alongside other designers',
      'Own end-to-end decisions independently when needed',
    ],
  },
]

// ---------- Home: project cards ----------
// theme controls the card background — colors live in ProjectShowcase.css.
// Available themes: 'light', 'blue', 'painted', 'dark'.
export const projects = [
  {
    slug: 'dazl',
    brand: { logo: '/images/Logos/Logo-Dazl.svg', word: 'Dazl' },
    title: 'Dazl - AI-Builder',
    description:
      'Designing a dual-mode property panel experience for an AI builder - built for both developers and designers',
    theme: 'light',
    image: '/images/covers/Dazl_cover.jpg',
    cta: { label: 'View Dazl', href: 'https://dazl.dev/' },
  },
  {
    slug: 'codux',
    brand: { logo: '/images/Logos/Logo-Wix.svg', word: 'Codux' },
    title: 'Codux by Wix - a visual IDE for react projects',
    description:
      'CSS Grid is powerful but hard to use. We designed the grid layout experience - letting designers build production layouts without writing code.',
    note: 'Codux is deprecated. The product has since evolved into Dazl.',
    theme: 'dark',
    image: '/images/covers/Wix_Cover.jpg',
    cta: {
      label: 'Introducing Codux',
      href: 'https://dev.to/codux/introducing-codux-15j5',
    },
  },
  {
    slug: 'wix-more',
    brand: { logo: '/images/Logos/Logo-Wix.svg', word: 'Wix' },
    title: 'More projects that I worked on in Wix',
    description: 'Some more work from Wix.',
    theme: 'light',
    image: '/images/covers/Wix_more_cover.jpg',
    cta: { label: 'View more Wix work' },
  },
  {
    slug: 'stamphunter',
    // No logo file yet — word-only until you add e.g. /images/Logos/Logo-StampHunter.svg
    brand: { word: 'Stamp Hunter' },
    title: 'Stamp Hunter -A passion project (WIP)',
    description:
      'Creating a mobile app that allows users to find and collect ink stamps across Taiwan',
    theme: 'painted',
    image: '/images/covers/StampHunter_Cover.jpg',
    // No live link yet — button is hidden until an href is added.
    cta: { label: 'View Stamp Hunter' },
  },
  {
    slug: 'paradox',
    brand: { logo: '/images/Logos/Logo-Paradox.png', word: 'Paradox' },
    title: 'Paradox - B2B security hardware company',
    description: 'Redesigning a high-criticality legacy security app while integrating a new security hardware product',
    theme: 'blue',
    image: '/images/covers/Paradox_Cover.jpg',
    cta: {
      label: 'View Blue eye app',
      href: 'https://play.google.com/store/apps/details?id=com.paradox.insitegoldv2&hl=en',
    },
  },
]

// ---------- Shared UI labels ----------
export const ui = {
  caseStudyBack: 'Back to home',
  caseStudyOtherHeading: 'Check other case studies:',
  caseStudyComingSoon: 'Case study content coming soon.',
  projectNotFound: 'Project not found.',
  imagePlaceholder: 'Hero image placeholder',
  sidebarTabs: {
    about: 'About Me',
    experience: 'My Experience',
    skills: 'Skills',
  },
  contactLinkedInLabel: 'LinkedIn:',
  contactEmailLabel: 'Can be sent to:',
}
