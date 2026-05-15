import { profile, experience, ui } from '../content/site.js'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        {profile.avatar ? (
          <img
            className="sidebar__avatar"
            src={profile.avatar}
            alt={profile.name}
          />
        ) : (
          <div className="sidebar__avatar sidebar__avatar--placeholder" aria-hidden="true" />
        )}
        <span className="sidebar__name">{profile.name}</span>
      </div>

      <p className="sidebar__intro">{profile.intro}</p>

      <section className="sidebar__experience">
        <h2 className="sidebar__experience-title">{ui.experienceHeading}</h2>

        {experience.map((job) => (
          <article key={job.company} className="job">
            <header className="job__header">
              <span className="job__company">{job.company}</span>
              <span className="job__years">{job.years}</span>
            </header>
            <ul className="job__bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </aside>
  )
}
