import { useState } from 'react'
import { profile, experience, skills, ui } from '../content/site.js'
import './Sidebar.css'

const TABS = [
  { id: 'about', label: ui.sidebarTabs.about },
  { id: 'experience', label: ui.sidebarTabs.experience },
  { id: 'skills', label: ui.sidebarTabs.skills },
]

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <aside className="sidebar">
      <div className="sidebar__tabs" role="tablist">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`sidebar-panel-${tab.id}`}
              className={`sidebar__tab${isActive ? ' sidebar__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        className="sidebar__content"
        role="tabpanel"
        id={`sidebar-panel-${activeTab}`}
      >
        {activeTab === 'about' && <AboutPanel />}
        {activeTab === 'experience' && <ExperiencePanel />}
        {activeTab === 'skills' && <SkillsPanel />}
      </div>
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
          <h3 className="skill-group__heading">{group.heading}</h3>
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
