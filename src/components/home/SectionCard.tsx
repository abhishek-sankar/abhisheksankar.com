import type { ReactNode } from 'react'

const accentClassMap: Record<string, string> = {
  violet:
    'border-violet-400/30 from-violet-500/20 via-fuchsia-500/10 to-slate-950/80 shadow-[0_35px_120px_-45px_rgba(167,139,250,0.85)]',
  teal:
    'border-teal-300/30 from-teal-400/20 via-cyan-500/10 to-slate-950/80 shadow-[0_35px_120px_-45px_rgba(45,212,191,0.9)]',
  amber:
    'border-amber-200/30 from-amber-300/25 via-orange-500/10 to-slate-950/80 shadow-[0_35px_120px_-45px_rgba(252,211,77,0.85)]',
  rose:
    'border-rose-300/30 from-rose-400/20 via-pink-500/10 to-slate-950/80 shadow-[0_35px_120px_-45px_rgba(244,114,182,0.8)]',
  emerald:
    'border-emerald-300/30 from-emerald-400/25 via-teal-500/10 to-slate-950/80 shadow-[0_35px_120px_-45px_rgba(16,185,129,0.8)]',
  neutral: 'border-white/10 from-white/10 via-white/5 to-slate-950/80 shadow-[0_35px_120px_-45px_rgba(148,163,184,0.35)]',
}

export type SectionAccent = keyof typeof accentClassMap

export interface SectionCardProps {
  eyebrow?: string
  title: string
  description?: string
  tags?: string[]
  accent?: SectionAccent
  className?: string
  cta?: {
    label: string
    href?: string
  }
  children?: ReactNode
}

function classNames(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

export function SectionCard({
  eyebrow,
  title,
  description,
  tags,
  accent = 'neutral',
  className,
  cta,
  children,
}: SectionCardProps) {
  const accentClasses = accentClassMap[accent] ?? accentClassMap.neutral

  return (
    <section
      className={classNames(
        'relative flex h-full flex-col overflow-hidden rounded-3xl border bg-gradient-to-br p-6 text-left text-white/90 transition-transform duration-500 ease-out hover:-translate-y-1 hover:brightness-110 sm:p-8 backdrop-blur-xl',
        accentClasses,
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-3xl" aria-hidden />
      <div className="relative flex flex-col gap-4">
        {eyebrow && (
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/60">
            {eyebrow}
          </span>
        )}
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
          {description && <p className="mt-3 max-w-xl text-sm text-white/70 md:text-base">{description}</p>}
        </div>
        {children}
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {cta && (
        <div className="relative mt-8 flex items-center justify-between text-sm text-white/70">
          <span>{cta.label}</span>
          {cta.href ? (
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/40 hover:bg-white/20"
              href={cta.href}
            >
              Explore
              <span aria-hidden>↗</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Coming soon
            </span>
          )}
        </div>
      )}
    </section>
  )
}
