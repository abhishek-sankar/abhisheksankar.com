import { EMAIL, GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../../constants'
import { HomeHero } from './HomeHero'
import { SectionCard } from './SectionCard'

const featuredProjects = [
  {
    title: 'Gumbo',
    meta: 'AI-native research studio for structured datasets',
    year: '2025',
  },
  {
    title: 'ShadowGram',
    meta: 'Social feed for AI agents · DeepMind Hackathon winner',
    year: '2025',
  },
  {
    title: 'Pittsburgh2Peers',
    meta: 'Community carpool platform for students in Pittsburgh',
    year: '2024',
  },
]

const hackathonMoments = [
  {
    title: 'AI Agents Hackathon',
    meta: 'Replicate.com prize · CMU',
  },
  {
    title: 'Hack a Startup',
    meta: 'Finalist · CMU Venture Studio',
  },
  {
    title: 'Hack the North',
    meta: 'Returning mentor & judge',
  },
]

const workspaceTools = [
  'MacBook Pro M3 · 14"',
  'Figma & Framer rituals',
  'Kodak Ektar H35',
  'Analog notebooks + GoodNotes',
]

const cameraRoll = [
  { label: 'Moodboard wall', location: 'Studio', gradient: 'from-rose-400/60 via-violet-500/40 to-indigo-500/30' },
  { label: 'Late night prototyping', location: 'Research lab', gradient: 'from-emerald-400/60 via-cyan-400/40 to-blue-500/30' },
  { label: 'Sunlit workspace', location: 'Pittsburgh', gradient: 'from-amber-300/60 via-orange-400/40 to-pink-400/30' },
  { label: 'Bingo testing', location: 'Friends & family', gradient: 'from-fuchsia-400/60 via-purple-400/40 to-sky-400/30' },
]

const sketchbookEntries = [
  { title: 'Whispering agents', medium: 'Procreate · Storyboard' },
  { title: 'Studio lighting studies', medium: '35mm film · Kodak Ultramax' },
  { title: 'Generative blooms', medium: 'TouchDesigner · Live visuals' },
]

const notes = [
  {
    title: 'Designing delight into agentic tools',
    summary: 'Insights from prototyping conversational companions that feel more like collaborators than chatbots.',
  },
  {
    title: 'What bingo taught me about multiplayer interfaces',
    summary: 'Observations on designing for play, anticipation, and liveness in lightweight web apps.',
  },
]

const githubHighlights = [
  {
    title: 'ai-shadow-social-feed',
    description: 'Realtime social feed where AI agents gossip, built with React, Supabase, and Claude.',
    url: 'https://github.com/abhishek-sankar/ai-shadow-social-feed',
  },
  {
    title: 'Pittsburgh2Peers',
    description: 'Community ride-sharing app for Pittsburgh students using Next.js, Supabase, and Mapbox.',
    url: 'https://github.com/abhishek-sankar/Pittsburgh2Peers',
  },
  {
    title: 'spotify-screenshot-to-playlist',
    description: 'Turns screenshots of playlists into real Spotify playlists using OCR and the Spotify API.',
    url: 'https://github.com/abhishek-sankar/spotify-screenshot-to-playlist',
  },
]

const readingList = [
  {
    title: 'You Have To Be In The Water',
    author: 'Chris Paik',
  },
  {
    title: 'Don\'t Get One Shotted',
    author: 'Nikunj Kothari',
  },
  {
    title: 'Software 2.0',
    author: 'Andrej Karpathy',
  },
]

const bingoWords = ['Muse', 'Story', 'Joy', 'Scope', 'Play', 'Spark', 'Loop', 'Glow', 'Mood', 'Flow', 'Idea', 'Care', 'Rest', 'Code', 'Dream', 'Note', 'Beam', 'Wave', 'Edge', 'Fold', 'Aim', 'Bloom', 'Hum', 'Glow', 'Snap']

function ProjectPreviewList() {
  return (
    <ul className="mt-6 space-y-4">
      {featuredProjects.map((project) => (
        <li key={project.title} className="group flex items-start justify-between gap-6">
          <div>
            <p className="text-lg font-medium text-white group-hover:text-white/90">{project.title}</p>
            <p className="text-sm text-white/60">{project.meta}</p>
          </div>
          <span className="mt-1 text-xs uppercase tracking-[0.3em] text-white/40">{project.year}</span>
        </li>
      ))}
    </ul>
  )
}

function HackathonPreviewList() {
  return (
    <ul className="mt-6 space-y-4 text-sm text-white/70">
      {hackathonMoments.map((hack) => (
        <li key={hack.title} className="flex flex-col">
          <span className="text-base font-medium text-white">{hack.title}</span>
          <span className="text-white/50">{hack.meta}</span>
        </li>
      ))}
    </ul>
  )
}

function WorkspacePreview() {
  return (
    <div className="mt-6 grid gap-3 text-sm text-white/70">
      {workspaceTools.map((tool) => (
        <div key={tool} className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
          <span>{tool}</span>
          <span aria-hidden className="text-white/30">✷</span>
        </div>
      ))}
    </div>
  )
}

function CameraRollPreview() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      {cameraRoll.map((shot) => (
        <div
          key={shot.label}
          className={`relative flex h-36 items-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${shot.gradient} p-4`}
        >
          <div>
            <p className="text-sm font-medium text-white">{shot.label}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{shot.location}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function SketchbookPreview() {
  return (
    <div className="mt-6 grid gap-3">
      {sketchbookEntries.map((entry) => (
        <div key={entry.title} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white/70">
          <p className="text-base font-medium text-white">{entry.title}</p>
          <p className="text-white/50">{entry.medium}</p>
        </div>
      ))}
    </div>
  )
}

function NotesPreview() {
  return (
    <div className="mt-6 grid gap-5">
      {notes.map((note) => (
        <article key={note.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          <h3 className="text-lg font-medium text-white">{note.title}</h3>
          <p className="mt-2 text-white/60">{note.summary}</p>
        </article>
      ))}
    </div>
  )
}

function GithubPreview() {
  return (
    <ul className="mt-6 space-y-4 text-sm text-white/70">
      {githubHighlights.map((repo) => (
        <li key={repo.title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
          <div className="flex flex-col gap-2">
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-white hover:text-white/80"
            >
              {repo.title} ↗
            </a>
            <p className="text-white/60">{repo.description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function ReadingPreview() {
  return (
    <ul className="mt-6 space-y-4 text-sm text-white/70">
      {readingList.map((item) => (
        <li key={item.title} className="flex items-baseline justify-between gap-4">
          <div>
            <span className="text-base font-medium text-white">{item.title}</span>
            <p className="text-white/50">{item.author}</p>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">On deck</span>
        </li>
      ))}
    </ul>
  )
}

function BingoPreview() {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
      <div className="grid grid-cols-5 gap-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
        {bingoWords.map((word) => (
          <span key={word} className="aspect-square rounded-2xl border border-white/10 bg-white/10 p-3 flex items-center justify-center text-[0.6rem]">
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}

function BackgroundAurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/30 blur-[180px]" aria-hidden />
      <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[160px]" aria-hidden />
      <div className="absolute bottom-0 right-[-20%] h-[520px] w-[520px] rounded-full bg-rose-400/25 blur-[200px]" aria-hidden />
    </div>
  )
}

const navItems = ['Home', 'Work', 'Play', 'Notes']
const socialLinks = [
  { label: 'Twitter', href: TWITTER_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'GitHub', href: GITHUB_URL },
]

export function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#05020d] text-white">
      <BackgroundAurora />
      <header className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pt-10 md:flex-row md:items-center md:justify-between md:px-12">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em] text-white/50">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.8)]" aria-hidden />
          Abhishek Sankar / Portfolio 2024
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/40">
          {navItems.map((item) => (
            <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-white/60">
              {item}
            </span>
          ))}
        </nav>
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14 md:px-12">
        <HomeHero />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          <SectionCard
            accent="violet"
            eyebrow="Work"
            title="Selected product projects"
            description="Shipping thoughtful experiences across health, community, and playful AI."
            className="md:col-span-7"
            cta={{ label: 'Full case studies', href: undefined }}
          >
            <ProjectPreviewList />
          </SectionCard>
          <SectionCard
            accent="rose"
            eyebrow="Hackathons"
            title="Moments of playful building"
            description="Weekend experiments where storytelling meets rapid prototyping."
            className="md:col-span-5"
            cta={{ label: 'Highlights', href: undefined }}
          >
            <HackathonPreviewList />
          </SectionCard>
          <SectionCard
            accent="amber"
            eyebrow="Workspace"
            title="Tools & rituals"
            description="The setup powering research, storytelling, and prototyping."
            className="md:col-span-5"
            cta={{ label: 'Studio tour soon', href: undefined }}
            tags={['Hybrid', 'Analog + Digital']}
          >
            <WorkspacePreview />
          </SectionCard>
          <SectionCard
            accent="teal"
            eyebrow="Camera Roll"
            title="Latest captures"
            description="Slices of life, studio energy, and playtest moments."
            className="md:col-span-7"
            cta={{ label: 'Film scans uploading', href: undefined }}
          >
            <CameraRollPreview />
          </SectionCard>
          <SectionCard
            accent="violet"
            eyebrow="Sketchbook"
            title="Process notes"
            description="Works-in-progress from illustration, film, and generative experiments."
            className="md:col-span-7"
            cta={{ label: 'Sketchbook archive', href: undefined }}
          >
            <SketchbookPreview />
          </SectionCard>
          <SectionCard
            accent="emerald"
            eyebrow="Digital Stamp Collection"
            title="Bingo Bloom"
            description="A React-powered bingo experience celebrating tiny wins and micro-adventures."
            className="md:col-span-5"
            cta={{ label: 'Playable soon', href: undefined }}
          >
            <BingoPreview />
          </SectionCard>
          <SectionCard
            accent="neutral"
            eyebrow="Notes"
            title="Long-form writing"
            description="Essays and memos documenting what I\'m learning about AI craft and community."
            className="md:col-span-6"
            cta={{ label: 'Essays underway', href: undefined }}
          >
            <NotesPreview />
          </SectionCard>
          <SectionCard
            accent="rose"
            eyebrow="GitHub"
            title="Repos worth peeking"
            description="Codebases that pair experimentation with production-ready polish."
            className="md:col-span-6"
            cta={{ label: 'More on GitHub', href: GITHUB_URL }}
          >
            <GithubPreview />
          </SectionCard>
          <SectionCard
            accent="violet"
            eyebrow="Reading"
            title="Currently annotating"
            description="Papers, essays, and posts shaping my thinking this month."
            className="md:col-span-6"
            cta={{ label: 'Reading log', href: undefined }}
          >
            <ReadingPreview />
          </SectionCard>
          <SectionCard
            accent="teal"
            eyebrow="Let\'s connect"
            title="Say hello"
            description="I love meeting collaborators working at the intersection of AI, design, and storytelling."
            className="md:col-span-6"
            cta={{ label: 'Email me', href: `mailto:${EMAIL}` }}
          >
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/70 transition hover:border-white/30 hover:bg-white/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SectionCard>
        </div>
      </main>
      <footer className="mx-auto w-full max-w-6xl px-6 pb-12 text-xs font-semibold uppercase tracking-[0.35em] text-white/40 md:px-12">
        © {new Date().getFullYear()} Abhishek Sankar · Built with care & curiosity
      </footer>
    </div>
  )
}
