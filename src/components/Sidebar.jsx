import { useState } from 'react'
import { Mail, File, ArrowUpRight } from 'lucide-react'
import { profile, aboutMe, experience, education, skills, ui } from '../content/site.js'
import SkillIcon from './SkillIcon.jsx'
import PhotoStack from './PhotoStack.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Item, ItemGroup, ItemMedia, ItemContent, ItemTitle, ItemActions } from "@/components/ui/item"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

const TABS = [
  { id: 'about', label: ui.sidebarTabs.about, Panel: AboutPanel },
  { id: 'experience', label: ui.sidebarTabs.experience, Panel: ExperiencePanel },
  { id: 'skills', label: ui.sidebarTabs.skills, Panel: SkillsPanel },
]

// LinkedIn brand glyph — lucide dropped its logo icons, so we inline it.
// No own size class, so ItemMedia's `variant="icon"` sizes it to size-4.
function LinkedInGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  )
}

// Sticky footer links. `external` adds target/rel; mailto opens the mail client.
const CONTACT_LINKS = [
  { label: 'Check my LinkedIn', href: profile.linkedin, external: true, Icon: LinkedInGlyph },
  { label: 'Send me an Email', href: `mailto:${profile.email}`, external: false, Icon: Mail },
  { label: 'Check my CV', href: '/cv.pdf', external: true, Icon: File },
]

const panel = 'flex flex-col gap-6'
const bulletList = 'flex list-disc flex-col gap-1 pl-[1.1rem]'
const smallBody = 'text-[0.8125rem] leading-[1.5] text-foreground'

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-white max-[900px]:h-auto">
      <Tabs defaultValue="about" className="flex-1 min-h-0">
        <TabsList className="tablist_size_large">
          {TABS.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS.map(({ id, Panel }) => (
          <TabsContent
            key={id}
            value={id}
            className="min-h-0 flex-1 overflow-y-auto p-6 max-[900px]:overflow-y-visible"
          >
            <Panel />
          </TabsContent>
        ))}
      </Tabs>

      <ItemGroup className="shrink-0 border-t border-border p-4">
        {CONTACT_LINKS.map(({ label, href, external, Icon }) => (
          <Item
            key={label}
            size="xs"
            render={
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              />
            }
          >
            <ItemMedia variant="icon">
              <Icon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{label}</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ArrowUpRight className="size-4 text-muted-foreground" />
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>
    </aside>
  )
}

function AboutPanel() {
  return (
    <div className={panel}>
      <PhotoStack images={aboutMe.gallery} />

      <p className="whitespace-pre-line text-sm leading-[1.55] text-foreground">
        {profile.intro}
      </p>

      <p className="text-sm leading-[1.55] text-foreground">
        {renderAboutBlurb(aboutMe)}
      </p>
    </div>
  )
}

function renderAboutBlurb({ template, facts }) {
  return template.split(/(\{[a-z]+\})/g).map((segment, i) => {
    const match = segment.match(/^\{([a-z]+)\}$/)
    if (!match) return segment
    const fact = facts[match[1]]
    if (!fact) return segment
    return <AboutFact key={i} fact={fact} />
  })
}

function AboutFact({ fact }) {
  const images = fact.images ?? []
  const [index, setIndex] = useState(0)
  return (
    <HoverCard
      onOpenChange={(open) => {
        if (!open && images.length > 1) {
          setIndex((i) => (i + 1) % images.length)
        }
      }}
    >
      <HoverCardTrigger className="cursor-default text-brand underline underline-offset-2 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
        {fact.label}
      </HoverCardTrigger>
      <HoverCardContent className="h-[220px] w-[220px] overflow-hidden rounded-xl p-0">
        <img
          className="block h-full w-full object-cover"
          src={images[index]}
          alt={fact.label}
        />
      </HoverCardContent>
    </HoverCard>
  )
}

function ExperiencePanel() {
  return (
    <div className="flex flex-col gap-5">
      <section className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-foreground">Roles</h3>
        <Accordion defaultValue={[experience[0]?.company]}>
          {experience.map((job) => (
            <AccordionItem key={job.company} value={job.company}>
              <AccordionTrigger>
                <span className="flex flex-1 items-baseline justify-between gap-3 pr-2">
                  <span className="text-sm font-semibold text-foreground">
                    {job.company}
                  </span>
                  <span className="whitespace-nowrap text-xs font-normal text-muted-foreground">
                    {job.years} ({job.duration})
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className={smallBody}>
                {job.summary}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Separator />

      <section className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-foreground">Education</h3>
        <Accordion>
          {education.map((item) => (
            <AccordionItem key={item.title} value={item.title}>
              <AccordionTrigger>
                <span className="flex flex-1 items-start justify-between gap-3 pr-2">
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-foreground">
                      {item.title}
                    </span>
                    <span className="text-[0.8125rem] font-normal leading-[1.4] text-muted-foreground">
                      {item.subtitle}
                    </span>
                  </span>
                  <span className="whitespace-nowrap text-xs font-normal text-muted-foreground">
                    {item.years}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className={smallBody}>
                {item.summary}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

function SkillsPanel() {
  return (
    <div className={panel}>
      {skills.map((group) => (
        <section key={group.heading} className="flex flex-col gap-2">
          <h3 className="m-0 flex items-center gap-2 text-sm font-semibold text-foreground">
            {group.icon && (
              <span className="inline-flex shrink-0 items-center justify-center text-muted-foreground">
                <SkillIcon name={group.icon} />
              </span>
            )}
            <span>{group.heading}</span>
          </h3>
          <ul className={bulletList}>
            {group.bullets.map((bullet, i) => (
              <li key={i} className={smallBody}>
                {bullet}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
