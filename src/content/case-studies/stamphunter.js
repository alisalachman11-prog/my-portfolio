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
    { type: 'h2', text: 'A whole lot of stamps, and a whole lot of information' },
    {
      type: 'p',
      text: "While the stamps are everywhere, the same can't be said about the information regarding their locations. There is no central authority about where the stamps are located, the information is scattered between Facebook groups, Google Maps lists, and old blog posts, and even that only covers a small fraction of the actual number of stamps that are out there.",
    },
    { type: 'img' },

    { type: 'h2', text: 'Some of the stamps are only available for specific time periods' },
    { type: 'p', text: 'Sometimes they even have time-limited challenges with little symbolic gifts like “collect the 5 unique stamps available across the city for a special event this week and receive a commemorative keychain” that the only way to know about them for a visitor is to see one of the stamping stations in person - or to check it in a facebook group (with 1.3k total members and avg 54 posts in a week)'},
    { type: 'p', text: 'While the treasure-hunt aspect is definitely part of the fun of it, I like a little more efficiency in my hobbies and the ability to plan ahead, to be intentional about it.'},
     
    { type: 'img' },

    { type: 'h2', text: 'Cluttered google map view with millions of blue pins' },
    { type: 'p', text: 'When opening maps that people have created, even just to browse it, there will be millions of blue pins on maps that clutter the view when it is not necessary. The only way to remove then is : Go to saved, then your lists, and then hide them on the map.' },
    {type: 'p', text: 'For me, as a tourist trying to navigate in Taiwan it was annoying seeing it there when I dont actually need or use it.' },
    { type: 'img' },

    { type: 'h2', text: 'Setting the ground - AI workflow.' },

    {
      type: 'collapsible',
      items: [
        {
          trigger: 'Prototyping in Lovable and Base44',
          description: 'Couple of the concepts I have tested',
          bullets: [
            'Testing the relationship between the map and the list.',
            'Time-limited stamps VS Available all the time.',
            'Receiving Badges for collected stamps',
          ],
          image: 'images/dazl/02-focused-panel.jpg',
          alt: 'Prototyping panel',
        },

        {
          trigger: 'Using only necessary skills',
          description: 'One of the important things was not to focus to much on every cool skill there is - but rather understanding what I need, and using only the relevant skill.',
          bullets: [
            'Grill me skill - interview me relentlessly about every aspect of this plan until we reach a shared understanding.',
            'Create a PRD - creating a PRD out of our interview.',
            'PRD to issue- breaking down to PRD into git tickets',
            'tdd: Red, Green, Refactor for Agentic Coding- guides an agent through test-driven development with a red, green, refactor loop.',
          ],
          image: 'images/dazl/02-focused-panel.jpg',
          alt: 'Prototyping panel',
        },
       
        {
          trigger: 'Some things you need to do alone.',
          description: 'One of the important things was not to focus to much on every cool skill there is - but rather understanding what I need, and using only the relevant skill.',
          bullets: [
            'Not putting API keys in the chat - In cases like connecting to a database and Google Auth, where I need to add keys, I only ask the LLM to give me clear and simple instructions on how to do it - and I configure it by myself - I never add it to the chat for security reasons.',
            "Asking humans for validation -  some time AI insists on certain things - and I don't always get why. One example was insisting on using Supabase as a database. My primary issue is that free projects automatically pause after one week of inactivity. After consulting with a developer I was advised to check Strapi for a possible option, or to use GitHub Actions to ping the Supabase API periodically",
          ],
          image: 'images/dazl/02-focused-panel.jpg',
          alt: 'Prototyping panel',
        },

      ],
    },
    
    { type: 'h2', text: 'Wearing the engineering hat' },
    {
      type: 'list',
      items: [
        'Aggregating the current available data from different sources and organizing it uniformly in a cloud-based database.',
        'Setting up OAuth and other prerequisites for a user-facing app.',
        'Designing and building an Alpha-stage iOS app.',
      ],
    },
    {type:'p',text:"# And… that's just about where I am when you are reading this :) # more to come shortly…"},
    {type:'p',text:"# more to come shortly…"},

  ],
}
