import { GridBackdrop } from '@/components/grid-backdrop'
import { Reveal } from '@/components/reveal'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44 sm:pb-20">
      <GridBackdrop />
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
