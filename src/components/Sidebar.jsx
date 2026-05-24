import { useState } from 'react'
import { Mail, File, ArrowUpRight, CircleUserIcon } from 'lucide-react'
import { profile, aboutMe, experience, skills, ui } from '../content/site.js'
import SkillIcon from './SkillIcon.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Item, ItemGroup, ItemMedia, ItemContent, ItemTitle, ItemActions } from "@/components/ui/item"

const TABS = [
  { id: 'about', label: ui.sidebarTabs.about, Panel: AboutPanel },
  { id: 'experience', label: ui.sidebarTabs.experience, Panel: ExperiencePanel },
  { id: 'skills', label: ui.sidebarTabs.skills, Panel: SkillsPanel },
]

// Sticky footer links. `external` adds target/rel; mailto opens the mail client.
const CONTACT_LINKS = [
  { label: 'Check my LinkedIn', href: profile.linkedin, external: true, Icon: CircleUserIcon },
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

      <ItemGroup className="shrink-0 border-t border-border p-3">
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
            <ItemMedia variant="icon" className="text-muted-foreground">
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
      <div className="flex items-center gap-3">
        {profile.avatar ? (
          <img
            className="h-7 w-7 shrink-0 rounded-full object-cover"
            src={profile.avatar}
            alt={profile.name}
          />
        ) : (
          <div
            className="h-7 w-7 shrink-0 rounded-full bg-[#5a5a5a]"
            aria-hidden="true"
          />
        )}
        <span className="text-[0.9375rem] font-medium text-foreground">
          {profile.name}
        </span>
      </div>

      <p className="whitespace-pre-line text-sm leading-[1.55] text-foreground">
        {profile.intro}
      </p>

      <section className="flex flex-col gap-2 rounded-md border border-border p-4">
        <h3 className="text-sm font-semibold text-foreground">
          {profile.principles.title}
        </h3>
        <ul className={bulletList}>
          {profile.principles.bullets.map((bullet, i) => (
            <li key={i} className={smallBody}>
              {bullet}
            </li>
          ))}
        </ul>
      </section>

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
      <HoverCardTrigger className="cursor-default underline underline-offset-2 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
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
    <div className={panel}>
      {experience.map((job) => (
        <article key={job.company}>
          <header className="mb-3 flex items-baseline justify-between gap-3">
            <span className="text-sm font-semibold text-foreground">
              {job.company}
            </span>
            <span className="whitespace-nowrap text-xs text-muted-foreground">
              {job.years} ({job.duration})
            </span>
          </header>
          <p className={smallBody}>{job.summary}</p>
        </article>
      ))}
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
