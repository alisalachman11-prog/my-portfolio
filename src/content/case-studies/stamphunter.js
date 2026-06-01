import { Accordion } from "radix-ui";

/**
 * StampHunter (passion project) case study content.
 * Replace placeholders with real copy from the Figma when ready.
 */
export default {
  // Top hero image (1632px wide, shown as a 2:1 banner crop). Add: /images/stamphunter/hero.png
  hero: { src: '', alt: '' },
  intro:
    'I fell in love with a popular local hobby - collecting ink stamps. Many locals and visitors alike carry a notebook with them to collect beautifully designed ink stamps everywhere they go - train stations, parks, museums, shops, festivals, and more. This lets you create a free yet incredibly memorable and personal souvenir from your travels, so its popularity is well justified.',

    blocks: [
    { type: 'h2', text: 'A whole lot of stamps, not a whole lot of information' },
    {
      type: 'p',
      text: "While the stamps are everywhere, the same can't be said about the information regarding their locations. There is no central authority about where the stamps are located, the information is scattered between Facebook groups, Google Maps lists, and old blog posts, and even that only covers a small fraction of the actual number of stamps that are out there.",
    },

    { type: 'h2', text: 'Some of the stamps are only available for specific time periods' },
    { type: 'p', text: 'Sometimes they even have time-limited challenges with little symbolic gifts like “collect the 5 unique stamps available across the city for a special event this week and receive a commemorative keychain” that the only way to know about them for a visitor is to see one of the stamping stations in person, or to dig through a Facebook group (1.3k members, ~54 posts a week).'},
    { type: 'p', text: 'While the treasure-hunt aspect is definitely part of the fun of it, I like a little more efficiency in my hobbies and the ability to plan ahead, to be intentional about it.'},
    {
      type: 'carousel',
      images: [
        {
      type: 'img',
      src: '/images/stamphunter/01-carusel.jpg',
      alt: 'Facebook post about a time-limited stamp',
        },
        {
      type: 'img',
      src: '/images/stamphunter/02-carusel.jpg',
      alt: 'Facebook post about a time-limited stamp',
        },
        {
      type: 'img',
      src: '/images/stamphunter/03-carusel.jpg',
      alt: 'Facebook post about a time-limited stamp',
    },
    {
      type: 'img',
      src: '/images/stamphunter/04-carusel.jpg',
      alt: 'Facebook post about a time-limited stamp',
        },
        {
      type: 'img',
      src: '/images/stamphunter/05-carusel.jpg',
      alt: 'Facebook post about a time-limited stamp',
        },
        
      ],
    },
    {
      type: 'img',
      src: '/images/stamphunter/02-supabase.jpg',
      alt: 'Four production screens (Help Center, Installer Login, Invite Owner, Create Site) showing the design system applied across flows.',
      caption: 'Users can suggest new time-limited stamps to the app by adding them to the database',
    },


    { type: 'h2', text: 'Cluttered google map view with millions of blue pins' },
    { type: 'p', text: 'Most community maps people share are packed with pins — so many that the map becomes hard to actually read. And the only way to clear them is buried: Saved → your lists → hide on map.' },
    {type: 'p', text: "As a tourist trying to get around Taiwan, having all of that on screen when I didn't need it just got in the way." },
     {
      type: 'img',
      src: '/images/stamphunter/03-google-maps.jpg',
      alt: 'Four production screens (Help Center, Installer Login, Invite Owner, Create Site) showing the design system applied across flows.',
      caption: 'Google map view with million of blue pines - and a flow of removing them from the map',
    },
    {
      type: 'img',
      src: '/images/stamphunter/04-app-flow.jpg',
      alt: 'Four production screens (Help Center, Installer Login, Invite Owner, Create Site) showing the design system applied across flows.',
      caption: 'screenshots from StampHunter app - a map dedicated to collecting stamps without the clutter of other pins',
    },

    { type: 'h2', text: 'AI workflow ' },
    {type: 'h3', text: '⋆✴︎˚｡⋆ Using only necessary skills'},
    { type: 'p', text: 'One of the most important things was not getting distracted by every cool skill out there — but figuring out what I actually needed, and using only those.' },
    {type: 'p', text: 'I have focused on finding and creating skills that will help me uncover opportunities, and plan my work with the LLM to be faster and more precise.' },
    {
      type: 'img',
      src: '/images/stamphunter/05-skills.jpg',
      alt: 'Four production screens (Help Center, Installer Login, Invite Owner, Create Site) showing the design system applied across flows.',
      caption: '5 skills that I used to create StampHunter',
    },

    { type: 'h3', text: "⋆✴︎˚｡⋆ Prototyping to test what works and what doesn't - quickly"},
    { type: 'p', text: 'A couple of the concepts I tested:' },
    {
      type: 'list',
      items: [
        'The relationship between the map and the list',
        'Time-limited stamps vs. always-available ones',
        'Earning badges for collected stamps',
      ],
    },
    {type: 'p', text: 'I have curated a prompt that explains my motivation, goals and  abilities that the app provides:' },

    {
      type: 'prompt',
      cta: 'Click to see full prompt',
      text: `You are a product manager and you are working on an app that helps travelers find and collect station, sightseeing, and national park stamps across Taiwan.

There is a strong community of people who collect stamps across Taiwan. Some of them are local, and some are tourists who came to visit Taiwan. There is a lot of information online about how and where to collect these stamps - but the information is scattered in a lot of places (stamp events, stamp location, etc).

Because there are a lot of stamps - people might get confused on what they already collected and what not. There are 2-3 different google maps that have the location of stamps - but the primary issue when using them is that they appear on the google map all the time and it creates chaos when trying to use the map for other things.

The goal of the app is having a dedicated space for stamp hunters in Taiwan to:
1. Identify where each stamp is located
2. Being informed on events related to the stamp hunters community
3. Having information on what they already collected
4. Feeling part of the community

Abilities that the app provides:
1. User will be able to see stamp location on a map
2. User will be able to search for a specific location
3. User will be able to see a list of stamps
4. User will be able to filter the list by distance
5. User will be able to filter the list by category (Airport, MRT, TRA, HSR, tourist information center, temple)
6. User will be able to mark stamps they collected
7. User will be able to see how many stamps they collected already
8. User will be able to get a notification when a stamp that was not collected by him is close by (relevant for users that gave the app permission for location)

1. Pls check the Document that was added for additional information on how to build the product`,
    },

    {
      type: 'img',
      src: '/images/stamphunter/06-prototype.jpg',
      alt: 'Four production screens (Help Center, Installer Login, Invite Owner, Create Site) showing the design system applied across flows.',
      caption: 'Sceenshots from my iterations with Lovable & Base44',
    },

    { type: 'h3', text: "⋆✴︎˚｡⋆ AI helps - but some things you just have to do yourself"},
    { type: 'p', text: 'AI sped a lot of this up, but a few things I deliberately kept in my own hands:' },
    {
      type: 'list',
      items: [
        'Not putting API keys in the chat -  For things like database and Google Auth setup, I just ask the LLM for clear, simple step-by-step instructions and configure the keys myself — they never go into the chat, for security reasons.',
        "Asking humans for a sanity check -  Sometimes the AI insists on something and I don't fully get why. For example, it pushed hard for Supabase — but free Supabase projects auto-pause after a week of inactivity. After talking to a developer, I looked into Strapi as an alternative, and into using GitHub Actions to ping the Supabase API periodically to keep it alive.",
      ],
    },

    { type: 'h3', text: "⋆✴︎˚｡⋆ Learning to code with AI"},
    { type: 'p', text: 'I used the build as a way to actually learn the code, not just generate it. My habit throughout:' },
    {
      type: 'list',
      items: [
        'Asked why it made specific decisions, instead of accepting the output as-is',
        'Asked where particular snippets and styles lived in the codebase',
        "Used those answers to build a real mental map of the project",
        'This let me make UI changes manually when I needed more control, rather than relying on prompts for every small tweak',
      ],
    },
    {
      type: 'video',
      src: '/images/stamphunter/01-video-design-changes.mov',
      alt: 'A video of manual changes to the app design.',
      caption: 'A video of manual changes to the app design.',
    },
    
    { type: 'h2', text: 'Wearing three hats in one project' },
    {type:'p', text:'Working solo meant switching between three roles, often in the same hour.'},
   

  {type:'h3', text:'As the developer,'},
  {type:'p', text:' I built the app itself, using Claude Code as my pair. This is where most of the hands-on work happened — turning decisions into a working iOS app.'},
    {
      type: 'list',
      items: [
        'Aggregating the current available data from different sources and organizing it uniformly in a cloud-based database.',
        'Setting up OAuth and other prerequisites for a user-facing app.',
        'Designing and building an Alpha-stage iOS / Android app.',
      ],
    },

    {type:'h3', text:'As the product owner, '},
    {
      type: 'list',
      items: [
        "Set the vision — defined what the app is for and who it's for (travelers and collectors who want to find and plan stamp hunts, not just stumble onto them).",
        'Set the product goals and success criteria for Phase 1.',
        'Stayed focused on the core experience, consciously pushing "nice to have" ideas to later phases',
      ],
    },

    {type:'h3', text:'As the designer,'},
    {
      type: 'list',
      items: [
        'Worked with a basic React component library, focused on making the app functional and usable rather than pixel-perfect.',
        'Kept Phase 1 unpolished by design — the priority was proving the flows work, not the visual finish.',
        'Set the foundations in design.md files so the whole look can be swapped out more easily later',
        "Spotted UX/UI issues and described them to Claude the way I'd point out a visual problem to a developer — it helped me phrase each one clearly and turn it into a Git ticket with the full steps to fix it",
      ],
    },


  ],

  

}

