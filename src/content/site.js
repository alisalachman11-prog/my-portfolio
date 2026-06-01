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
  "Hey, I'm Alisa 👋 \n I’m a product designer for complex systems.\n\n My most recent work was for Wix, where I collaborated on creating a **Visual IDE** and an **AI builder**, both projects involving highly complex technical workflows. For both, I have contributed across the full product lifecycle, from discovery through to codebase contributions. Previously, I worked on a high-criticality IoT mobile app.\n\n Currently, I am traveling the world, and I have been to 17 countries so far. In my free time, I enjoy folding origami and watching scientific videos.",
  // avatar: '/images/avatar.jpg', // ← uncomment after adding a square photo to public/images/
}

export const aboutMe = {
  // Fanned photo stack shown at the top of the About panel. Hovering shuffles
  // through them. Reuses the about images — reorder, add, or swap freely.
  gallery: [
    '/images/about/1_countries.jpg',
    '/images/about/1_origami.jpg',
    '/images/about/1_youtube.jpg',
    '/images/about/2_countries.jpg',
    '/images/about/3_countries.jpg',
  ],
  // Plain About blurb. Was previously a template with hover-card facts; now just text.
};
// ---------- Sidebar: experience list ----------
export const experience = [
  {
    company: 'Wix',
    years: '2023 - 2025',
    summary:
      'At Wix, I designed two developer-focused products: a visual IDE for React that pivoted into an AI-powered builder. Owned product areas, defined KPIs with product, and shipped iteratively. Worked closely with engineers and occasionally contributed to the codebase. Ran interviews, usability tests, and analytics (Mixpanel, FullStory), and introduced an Opportunity Solution Tree framework to the team.',
  },
  {
    company: 'Paradox Security',
    years: '2020 - 2023',
    summary:
      "At Paradox, I helped redesign a critical legacy mobile app and shaped the experience for the Doorbell, a new security device. Built and documented a design system, restructured the file architecture, refined the design-to-dev handoff, and created onboarding for new designers.",
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
      'Complex workflows for enterprise B2B SaaS',
      'Worked on Developer tool and AI-powered builder',
      'IoT security products - designed app integrations tested against real security hardware'
    ],
  },
  {
    heading: 'Research & Discovery',
    icon: 'search',
    bullets: [
      'User interviews and usability testing',
      'Behavioral analytics in Mixpanel and FullStory - build reports to surface product opportunities and catch event-tracking issues',
      'Translating insights into structured product opportunities using the Opportunity Solution Tree framework',
    ],
  },
  {
    heading: 'Technical Fluency',
    icon: 'code',
    bullets: [
      'HTML, CSS, TS, JS, and React',
      'Ship small ui changes directly to the codebase',
      'Familiar with Git workflow: commits, PRs, and bug/UX tickets',
    ],
  },
  {
    heading: 'Building with AI',
    icon: 'Wand',
    bullets: [
      'Prototype and iterate design concepts using Claude Code, Cursor, Base44, and Lovable',
      'Evaluate LLM design outputs as part of shipping AI features',
      'Build personal projects end-to-end using AI-assisted planning, design, and code',
    ],
  },
  {
    heading: 'Design Systems & Team Process',
    icon: 'swatch-book',
    bullets: [
      'Co-created and documented a design system',
      'Improved the design-to-development handoff process',
      'Designed an onboarding experience for new designers',
    ],
  },
  {
    heading: 'Collaboration & Ownership',
    icon: 'smile-plus',
    bullets: [
      'Comfortable working under leadership, operate inside squads, across teams, and alongside other designers',
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
    brand: { mark: 'asterisk', word: 'Dazl' },
    title: 'AI-Builder',
    description:
      'Designing a dual-mode property panel for an AI builder - built for both developers and designers',
    theme: 'light',
    image: '/images/covers/Dazl_cover.jpg',
    cta: { label: 'View Dazzl', href: 'https://dazl.dev/' },
  },
  {
    slug: 'codux',
    brand: { mark: null, word: 'WIX' },
    title: 'Codux - visual IDE for react projects',
    description:
      'CSS Grid is powerful but hard to use. We designed the grid layout experience - letting designers build production layouts without writing code.',
    theme: 'dark',
    image: '/images/covers/Wix_Cover.jpg',
    cta: {
      label: 'Introducing Codux',
      href: 'https://dev.to/codux/introducing-codux-15j5',
    },
  },
  {
    slug: 'stamphunter',
    brand: { mark: 'triangle', word: 'stamphunter' },
    title: 'A passion project (WIP)',
    description:
      'Creating a mobile app that allows users to find and collect ink stamps across Taiwan',
    theme: 'painted',
    image: '/images/covers/StampHunter_Cover.jpg',
    // No live link yet — button is hidden until an href is added.
    cta: { label: 'View Stamphunter' },
  },
  {
    slug: 'paradox',
    brand: { mark: 'triangle', word: 'Paradox' },
    title: 'B2B security hardware company',
    description: 'Redesigning a high-criticality legacy security app',
    theme: 'blue',
    image: '/images/Paradox_Cover.jpg',
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
