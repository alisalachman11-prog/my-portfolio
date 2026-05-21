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
  name: 'Alisa Lachman',
  intro:
    'Product designer with 4 years of experience - the last two focused on developer tools, AI builders, and complex technical workflows. I work end-to-end: from discovery and research through to contributing in the codebase.',
  principles: {
    title: 'My principles as a product designer',
    bullets: [
      'Rapid iteration for faster user alignment',
      'Let evidence lead, not opinion',
      'Anticipate future use cases, but focus on present needs',
    ],
  },
  linkedin: 'https://www.linkedin.com/alisa-lachman',
  email: 'alisa.lachman11@gmail.com',
  // avatar: '/images/avatar.jpg', // ← uncomment after adding a square photo to public/images/
}

// ---------- Sidebar: experience list ----------
export const experience = [
  {
    company: 'Wix',
    years: '2023 - 2025',
    duration: '2 yrs 2 mos',
    summary:
      'At Wix, I designed two developer-focused products: a visual IDE for React that pivoted into an AI-powered builder. Owned product areas, defined KPIs with product, and shipped iteratively. Worked closely with engineers and occasionally contributed to the codebase. Ran interviews, usability tests, and analytics (Mixpanel, FullStory), and introduced an Opportunity Solution Tree framework to the team.',
  },
  {
    company: 'Paradox Security',
    years: '2020 - 2023',
    duration: '2 yrs 5 mos',
    summary:
      "At Paradox, I helped redesign a critical legacy mobile app and shaped the experience for the Doorbell, a new security device. Built and documented a design system, restructured the file architecture, refined the design-to-dev handoff, and created onboarding for new designers.",
  },
]

// ---------- Sidebar: skills & knowledge ----------
// `icon` names map to SVGs in src/components/SkillIcon.jsx — add a new
// case there before referencing a new name here.
export const skills = [
  {
    heading: 'Domain Expertise',
    icon: 'search',
    bullets: [
      'Complex workflows for enterprise / B2B SaaS products',
      'Worked on Developer tools and AI-powered builders',
    ],
  },
  {
    heading: 'Research & Discovery',
    icon: 'microscope',
    bullets: [
      'Facilitating user interviews & usability tests',
      'Behavioral & product analytics with Mixpanel and FullStory',
      'Translating insights into structured product opportunities using the Opportunity Solution Tree framework',
    ],
  },
  {
    heading: 'Technical Fluency',
    icon: 'code',
    bullets: [
      'Working knowledge of HTML, CSS, TS, JS, and React',
      'Direct contributions to the codebases on smaller features',
      'Git workflow: commits, pull requests, and opening tickets for bugs and UX improvements',
    ],
  },
  {
    heading: 'Building with AI',
    icon: 'sparkles',
    bullets: [
      'Using Claude Code, Cursor, Base44, and Lovable to prototype, iterate, and extend what I can build solo',
    ],
  },
  {
    heading: 'Design Systems & Team Process',
    icon: 'component',
    bullets: [
      'Co-created and documented a design system',
      'Improved the design-to-development handoff process',
      'Designed an onboarding experience for incoming designers',
    ],
  },
  {
    heading: 'Collaboration & Ownership',
    icon: 'handshake',
    bullets: [
      'Comfortable working under leadership, within cross-functional squads, and across multiple teams or alongside other designers',
      'Equally comfortable working independently and owning end-to-end design decisions',
    ],
  },
]

// ---------- Home: project cards ----------
// theme controls the card background — colors live in ProjectShowcase.css.
// Available themes: 'light', 'blue', 'painted', 'dark'.
export const projects = [
  {
    slug: 'dazl',
    brand: { mark: 'asterisk', word: 'Dazl' },
    title: 'AI-Builder',
    description:
      'Designing a dual-mode property panel for an AI builder - built for both developers and designers',
    theme: 'light',
    image: '/images/covers/Dazl_cover.jpg',
  },
  {
    slug: 'paradox',
    brand: { mark: 'triangle', word: 'Paradox' },
    title: 'B2B security hardware company',
    description: 'Redesigning a high-criticality legacy security app',
    theme: 'blue',
    // image: '/images/paradox-hero.png',
  },
  {
    slug: 'stamphunter',
    brand: { mark: 'triangle', word: '' },
    title: 'A passion project (WIP)',
    description:
      'Creating a mobile app that allows users to find and collect ink stamps across Taiwan',
    theme: 'painted',
    image: '/images/covers/StampHunter_Cover.jpg',
  },
  {
    slug: 'codux',
    brand: { mark: null, word: 'WIX' },
    title: 'Codux - visual IDE for react projects',
    description:
      'CSS Grid is powerful but hard to use. We designed the grid layout experience - letting designers build production layouts without writing code.',
    theme: 'dark',
    image: '/images/covers/Wix_Cover.jpg',
  },
]

// ---------- Shared UI labels ----------
export const ui = {
  caseStudyBack: '← Back to home',
  caseStudyOtherHeading: 'Check other case studies:',
  caseStudyComingSoon: 'Case study content coming soon.',
  projectNotFound: 'Project not found.',
  imagePlaceholder: 'Hero image placeholder',
  sidebarTabs: {
    about: 'About Me',
    experience: 'My Experience',
    skills: 'Skills & Knowledge',
  },
  contactLinkedInLabel: 'LinkedIn:',
  contactEmailLabel: 'Can be sent to:',
}
