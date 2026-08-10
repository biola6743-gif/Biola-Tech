import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    step: '01',
    title: 'Discover',
    text: 'We map your goals, users, and constraints to define what winning looks like.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'Rapid prototypes and architecture that de-risk the build before we write production code.',
  },
  {
    step: '03',
    title: 'Build',
    text: 'Focused sprints with weekly demos so you always see momentum, never a black box.',
  },
  {
    step: '04',
    title: 'Launch & scale',
    text: 'We ship, measure, and iterate — then hand you clean ownership of everything.',
  },
]

export function Process() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="How we work"
          title="A process built for momentum"
          description="Transparent, fast, and outcome-driven at every stage."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.07}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                <span className="font-mono text-sm font-medium text-primary">
                  {s.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
