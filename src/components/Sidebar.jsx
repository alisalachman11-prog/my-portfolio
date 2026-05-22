import { useState } from 'react'
import { profile, aboutMe, experience, skills, ui } from '../content/site.js'
import SkillIcon from './SkillIcon.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import './Sidebar.css'

const TABS = [
  { id: 'about', label: ui.sidebarTabs.about, Panel: AboutPanel },
  { id: 'experience', label: ui.sidebarTabs.experience, Panel: ExperiencePanel },
  { id: 'skills', label: ui.sidebarTabs.skills, Panel: SkillsPanel },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Tabs defaultValue="about" className="flex-1 min-h-0">
        <TabsList className="tablist_size_large">
          {TABS.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS.map(({ id, Panel }) => (
          <TabsContent key={id} value={id} className="sidebar__content">
            <Panel />
          </TabsContent>
        ))}
      </Tabs>
    </aside>
  )
}

function AboutPanel() {
  return (
    <div className="sidebar__panel">
      <div className="sidebar__profile">
        {profile.avatar ? (
          <img
            className="sidebar__avatar"
            src={profile.avatar}
            alt={profile.name}
          />
        ) : (
          <div
            className="sidebar__avatar sidebar__avatar--placeholder"
            aria-hidden="true"
          />
        )}
        <span className="sidebar__name">{profile.name}</span>
      </div>

      <p className="sidebar__intro">{profile.intro}</p>

      <section className="principles-card">
        <h3 className="principles-card__title">{profile.principles.title}</h3>
        <ul className="principles-card__bullets">
          {profile.principles.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </section>

      <p className="sidebar__about-blurb">
        {renderAboutBlurb(aboutMe)}
      </p>

      <div className="sidebar__contact">
        <p className="sidebar__contact-row">
          <span className="sidebar__contact-label">{ui.contactLinkedInLabel}</span>{' '}
          <a
            className="sidebar__contact-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {profile.linkedin}
          </a>
        </p>
        <p className="sidebar__contact-row">
          <span className="sidebar__contact-label">{ui.contactEmailLabel}</span>{' '}
          <a className="sidebar__contact-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </p>
      </div>
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
      <HoverCardTrigger className="sidebar__about-fact">
        {fact.label}
      </HoverCardTrigger>
      <HoverCardContent className="sidebar__about-popover">
        <img
          className="sidebar__about-image"
          src={images[index]}
          alt={fact.label}
        />
      </HoverCardContent>
    </HoverCard>
  )
}

function ExperiencePanel() {
  return (
    <div className="sidebar__panel">
      {experience.map((job) => (
        <article key={job.company} className="job">
          <header className="job__header">
            <span className="job__company">{job.company}</span>
            <span className="job__years">
              {job.years} ({job.duration})
            </span>
          </header>
          <p className="job__summary">{job.summary}</p>
        </article>
      ))}
    </div>
  )
}

function SkillsPanel() {
  return (
    <div className="sidebar__panel">
      {skills.map((group) => (
        <section key={group.heading} className="skill-group">
          <h3 className="skill-group__heading">
            {group.icon && (
              <span className="skill-group__icon">
                <SkillIcon name={group.icon} />
              </span>
            )}
            <span>{group.heading}</span>
          </h3>
          <ul className="skill-group__bullets">
            {group.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
