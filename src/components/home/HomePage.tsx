import './home.css'

const aboutImage =
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80'
const workspaceImage =
  'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80'

const workplaces = [
  { role: 'Software Engineer', company: 'Acme Labs', years: '2022 — present' },
  { role: 'Developer Advocate', company: 'Indie Projects', years: '2020 — 2022' },
  { role: 'Engineer in Residence', company: 'Hackathon Hub', years: '2019 — 2020' },
]

const socials = [
  { label: 'Email', href: 'mailto:hello@abhisheksankar.com' },
  { label: 'GitHub', href: 'https://github.com/abhisheksankar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhisheksankar' },
]

export function HomePage() {
  return (
    <div className="home">
      <header className="home__header">
        <div className="home__brand">Abhishek Sankar</div>
        <h1 className="home__tagline">Engineer trying to do things.</h1>
        <nav className="home__topics" aria-label="What I do">
          <span className="topic">Reading</span>
          <span className="topic">Writing</span>
          <span className="topic">Recommendations</span>
        </nav>
      </header>

      <main className="home__grid">
        <section className="panel panel--about">
          <div className="panel__media">
            <img src={aboutImage} alt="Abhishek Sankar reading beside a window" />
          </div>
          <div className="panel__body">
            <div className="panel__header">
              <p className="panel__eyebrow">About</p>
              <h2 className="panel__title">Curious technologist exploring humane software.</h2>
            </div>
            <p className="panel__copy">
              I build thoughtful products across emerging tech, learning in public and documenting the experiments along the way.
              Currently based in Bengaluru and always looking to collaborate on ideas that make tools feel more personal.
            </p>
            <div className="panel__socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} className="panel__social">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="panel panel--work">
          <div className="panel__header">
            <p className="panel__eyebrow">Work</p>
            <h3 className="panel__title">Where I&apos;ve been building</h3>
          </div>
          <ul className="list">
            {workplaces.map((item) => (
              <li key={`${item.role}-${item.company}`} className="list__item">
                <div className="list__meta">
                  <span className="list__role">{item.role}</span>
                  <span className="list__years">{item.years}</span>
                </div>
                <span className="list__company">{item.company}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel panel--workspace">
          <div className="panel__media panel__media--sm">
            <img src={workspaceImage} alt="A tidy developer workspace with a laptop and notebook" />
          </div>
          <div className="panel__body">
            <div className="panel__header">
              <p className="panel__eyebrow">Workspace</p>
              <h3 className="panel__title">Tools on the desk</h3>
            </div>
            <p className="panel__copy">
              Mechanical keyboard, mirrorless camera, weekly bullet journal, and a rotation of open-source side quests. Morning
              brews power deep work; evenings are for tinkering with new frameworks and sharing notes.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
