import './home.css'

const aboutImage =
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
const workImage =
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80'
const workspaceImage =
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'

const workplaces = [
  { role: 'Senior Product Designer', company: 'Infinum', years: '2022 — present' },
  { role: 'Design Technologist', company: 'Independent', years: '2020 — 2022' },
  { role: 'Product Design Intern', company: 'Figma', years: 'Summer 2019' },
]

export function HomePage() {
  return (
    <div className="home">
      <main className="home__grid">
        <section className="card card--about">
          <div className="card__image">
            <img src={aboutImage} alt="Portrait of Abhishek Sankar reading by a window" />
          </div>
          <div className="card__body">
            <p className="card__eyebrow">About</p>
            <h1 className="card__title">Abhishek Sankar crafts digital experiences rooted in warmth, clarity, and curiosity.</h1>
            <p className="card__description">
              I&apos;m a designer and technologist exploring where storytelling meets human-centred AI. My practice moves between
              product strategy, research, and visual systems that help people feel at ease with new technology.
            </p>
            <a className="card__link" href="mailto:hello@abhisheksankar.com">
              Let&apos;s talk
            </a>
          </div>
        </section>

        <section className="card card--work">
          <div className="card__image card__image--sm">
            <img src={workImage} alt="Team collaborating around a desk" />
          </div>
          <div className="card__body">
            <p className="card__eyebrow">Work</p>
            <h2 className="card__subtitle">Where you can find me</h2>
            <ul className="work-list">
              {workplaces.map((item) => (
                <li key={item.role} className="work-list__item">
                  <span className="work-list__role">{item.role}</span>
                  <span className="work-list__company">{item.company}</span>
                  <span className="work-list__years">{item.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card card--workspace">
          <div className="card__image card__image--sm">
            <img src={workspaceImage} alt="Creative workspace with notebooks and camera" />
          </div>
          <div className="card__body">
            <p className="card__eyebrow">Workspace</p>
            <h2 className="card__subtitle">Tools &amp; rituals</h2>
            <p className="card__description">
              A mix of analog notebooks, a trusty mirrorless camera, and quiet late-night sessions give shape to each project. I
              collect textures, colour palettes, and small observations that eventually find their way into product decisions.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
