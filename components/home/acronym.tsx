import { Hammer, Lightbulb, KeyRound, Compass, Trophy } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    letter: 'B',
    title: 'Build',
    icon: Hammer,
    text: 'Production-grade software, engineered to scale from day one.',
  },
  {
    letter: 'I',
    title: 'Innovate',
    icon: Lightbulb,
    text: 'AI-first thinking applied to real, revenue-driving problems.',
  },
  {
    letter: 'O',
    title: 'Own',
    icon: KeyRound,
    text: 'You keep the code, the data, and the IP. Always.',
  },
  {
    letter: 'L',
    title: 'Lead',
    icon: Compass,
    text: 'Strategy and design that puts you ahead of the category.',
  },
  {
    letter: 'A',
    title: 'Achieve',
    icon: Trophy,
    text: 'We measure success by outcomes shipped, not hours billed.',
  },
]

export function Acronym() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What BIOLA means"
          title="Five principles behind everything we ship"
          description="BIOLA isn't just a name — it's the operating system for how we partner with the teams we work with."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="pointer-events-none absolute -right-6 -top-6 text-7xl font-bold text-primary/5 transition-colors group-hover:text-primary/10">
                  {pillar.letter}
                </div>
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold">
                  {pillar.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
