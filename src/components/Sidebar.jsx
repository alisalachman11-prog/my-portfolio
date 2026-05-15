import './Sidebar.css'

const experience = [
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

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__avatar" aria-hidden="true" />
        <span className="sidebar__name">Alisa Lachman</span>
      </div>

      <p className="sidebar__intro">
        I&rsquo;m Alisa, a product designer.
        <br />
        Consistently looking to leverage my research finding and knowledge to
        drive outcomes,
        <br />
        not just outputs.
      </p>

      <section className="sidebar__experience">
        <h2 className="sidebar__experience-title">Experience</h2>

        {experience.map((job) => (
          <article key={job.company} className="job">
            <header className="job__header">
              <span className={`job__company job__company--${job.company.toLowerCase()}`}>
                {job.company === 'PARADOX' ? (
                  <span className="job__company-paradox">
                    <span aria-hidden="true" className="job__paradox-mark">⩕</span>
                    {' '}
                    P A R A D O X
                  </span>
                ) : (
                  job.company
                )}
              </span>
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
