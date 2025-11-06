import { GITHUB_URL } from '../../constants'
import { SectionCard } from './SectionCard'

const spotlight = [
  'AI Product Builder',
  'Creative Technologist',
  'Designing joyful tools',
]

const nowPlaying = [
  { label: 'Currently exploring', value: 'Playful AI interfaces' },
  { label: 'Based in', value: 'Pittsburgh & Toronto' },
  { label: 'Next availability', value: 'Spring 2025' },
]

export function HomeHero() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-white/5 bg-gradient-to-br from-slate-900/40 via-slate-900/70 to-slate-950/90 p-8 text-left text-white shadow-[0_45px_140px_-60px_rgba(139,92,246,0.65)] backdrop-blur-2xl md:col-span-8 md:p-12">
        <div className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-violet-500/40 blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute -right-10 -top-10 h-80 w-80 rounded-full bg-emerald-400/30 blur-[120px]" aria-hidden />
        <div className="relative flex flex-col gap-8">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.9)]" aria-hidden />
            Portfolio refresh / 2024
          </div>
          <div>
            <h1 className="text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
              Abhishek Sankar crafts story-driven experiences across AI, product, and playful tech.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
              Product designer & engineer focused on human-centred AI, playful storytelling, and tools that help people feel more
              creative every day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/60">
            {spotlight.map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/70">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white/40 hover:bg-white/20"
            >
              View GitHub
              <span aria-hidden>↗</span>
            </a>
            <p className="max-w-sm text-left text-white/60">
              Available for collaborations that mix research, design, and code. Currently prototyping gentle AI companions.
            </p>
          </div>
        </div>
      </section>
      <SectionCard
        className="md:col-span-4"
        accent="emerald"
        eyebrow="Now"
        title="This season"
        description="Building intimate, expressive tools and documenting the process."
        cta={{ label: 'Detailed timeline', href: undefined }}
      >
        <dl className="grid gap-4 text-sm text-white/70">
          {nowPlaying.map((item) => (
            <div key={item.label}>
              <dt className="text-xs uppercase tracking-[0.3em] text-white/50">{item.label}</dt>
              <dd className="mt-1 text-base text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </SectionCard>
    </div>
  )
}
