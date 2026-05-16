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
  // avatar: '/images/avatar.jpg', // ← uncomment after adding a square photo to public/images/
}

// ---------- Sidebar: experience list ----------
export const experience = [
  {
    company: 'WIX',
    years: '2023 - 2025',
    bullets: [
      'Working on a visual IDE headed for React project lead by Wix co-founder Nadav Avrahami and a core group of Wix professionals.',
      'Pivoting to working on Dazl, an AI Builder',
    ],
  },
  {
    company: 'PARADOX',
    years: '2020 - 2023',
    bullets: [
      'Working on a visual IDE headed for React project lead by Wix co-founder Nadav Avrahami and a core group of Wix professionals.',
      'Pivoting to working on Dazl, an AI Builder',
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
    // image: '/images/dazl-hero.png',
  },
  {
    slug: 'paradox',
    brand: { mark: 'triangle', word: '' },
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
    // image: '/images/stamphunter-hero.png',
  },
  {
    slug: 'codux',
    brand: { mark: null, word: 'WIX' },
    title: 'Codux - visual IDE for react projects',
    description:
      'CSS Grid is powerful but hard to use. We designed the grid layout experience - letting designers build production layouts without writing code.',
    theme: 'dark',
    // image: '/images/codux-hero.png',
  },
]

// ---------- Shared UI labels ----------
export const ui = {
  caseStudyBack: '← Back to home',
  caseStudyOtherHeading: 'Check other case studies:',
  caseStudyComingSoon: 'Case study content coming soon.',
  projectNotFound: 'Project not found.',
  experienceHeading: 'Experience',
  imagePlaceholder: 'Hero image placeholder',
}
