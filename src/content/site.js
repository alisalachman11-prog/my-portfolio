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
  // Multi-line intro paragraph. Line breaks here are preserved on screen.
  intro: `I'm Alisa, a product designer.
Consistently looking to leverage my research finding and knowledge to drive outcomes,
not just outputs.`,
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
      'At Wix, I designed across two developer-focused products: a visual IDE for React projects that later pivoted into an AI-powered builder. Owned specific product areas end-to-end within an agile squad, defining goals and KPIs with the product manager and shipping iteratively. Designed complex developer workflows in close partnership with engineers, occasionally contributing directly to the codebase. Led user interviews and usability tests, and used Mixpanel and FullStory to surface insights, combining findings into an Opportunity Solution Tree framework I introduced to the team to articulate more product opportunities together.',
  },
  {
    company: 'Paradox Security',
    years: '2020 - 2023',
    duration: '2 yrs 5 mos',
    summary:
      "At Paradox, I collaborated with a cross-functional team of designers and developers to redesign a critical legacy mobile app. Shaped the end-to-end experience for the Doorbell, a newly launched security device. Established and documented a new design system, restructured the team's project file architecture, and refined the design-to-development handoff process to enable clearer, more precise communication. Also curated an onboarding experience for incoming designers.",
  },
]

// ---------- Sidebar: skills & knowledge ----------
export const skills = [
  {
    heading: 'Domain Expertise',
    bullets: [
      'Complex workflows for enterprise / B2B SaaS products',
      'Worked on Developer tools and AI-powered builders',
      'Designing in fast-evolving product spaces, with attention to where capabilities are heading',
    ],
  },
  {
    heading: 'Research & Discovery',
    bullets: [
      'Facilitating user interviews and usability tests',
      'Behavioral and product analytics with Mixpanel and FullStory',
      'Translating insights into structured product opportunities using the Opportunity Solution Tree framework',
    ],
  },
  {
    heading: 'Technical Fluency',
    bullets: [
      'Working knowledge of HTML, CSS, TypeScript, JavaScript, and React',
      'Direct contributions to the codebases on smaller features',
      'Git workflow: commits, pull requests, and opening tickets for bugs and UX improvements',
    ],
  },
  {
    heading: 'Building with AI',
    bullets: [
      'Using Claude Code, Cursor, Base44, and Lovable to prototype, iterate, and extend what I can build solo',
    ],
  },
  {
    heading: 'Design Systems & Team Process',
    bullets: [
      'Co-created and documented a design system used across the team',
      'Improved the design-to-development handoff process for clearer, more precise collaboration',
      'Designed an onboarding experience for incoming designers',
    ],
  },
  {
    heading: 'Collaboration & Ownership',
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
