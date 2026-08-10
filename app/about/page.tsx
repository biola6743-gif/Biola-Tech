import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Heart, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About',
  description:
    'BIOLA is an AI and digital services studio on a mission to help ambitious teams build, innovate, own, lead, and achieve.',
}

const values = [
  {
    icon: Sparkles,
    title: 'Craft over shortcuts',
    text: 'We sweat the details others skip — because quality is what compounds.',
  },
  {
    icon: Heart,
    title: 'Radical ownership',
    text: 'We treat your product like our own, from first commit to launch day.',
  },
  {
    icon: Target,
    title: 'Outcomes, not output',
    text: 'Shipping is the baseline. Moving your metrics is the point.',
  },
  {
    icon: Eye,
    title: 'Transparent always',
    text: 'Clear communication, honest timelines, and no black boxes.',
  },
]

const timeline = [
  {
    year: '2021',
    title: 'The idea',
    text: 'BIOLA started as a two-person studio building tools for founders who move fast.',
  },
  {
    year: '2022',
    title: 'First scale-ups',
    text: 'We shipped our first production AI features and grew into a full-stack team.',
  },
  {
    year: '2023',
    title: 'AI-first',
    text: 'We doubled down on AI, building agents and copilots for teams across industries.',
  },
  {
    year: 'Today',
    title: 'A trusted partner',
    text: 'Dozens of products later, we help teams create today and own tomorrow.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About BIOLA"
        title="We build the future teams want to own"
        description="BIOLA is a studio at the intersection of AI, engineering, and design — helping ambitious people turn bold ideas into products that last."
      />

      {/* Mission & Vision */}
      <section className="relative py-8">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <Target className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Our mission</h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  To make world-class AI and software accessible to the teams
                  building what&apos;s next — removing friction so great ideas
                  reach the world faster.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Our vision</h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  A world where any team — regardless of size — can wield the
                  same intelligent technology as the giants, and own it outright.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Our values"
            title="What we stand for"
            description="The principles that shape every decision, every project, every relationship."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="relative py-8">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="grid items-center gap-8 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl">
                <Image
                  src="/founder.png"
                  alt="Portrait of BIOLA's founder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Founder
                </span>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Alex Rivera
                </h2>
                <p className="text-muted-foreground">
                  Founder &amp; Principal Engineer
                </p>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                  &ldquo;I started BIOLA because I kept seeing brilliant teams
                  held back by technology that should have been an accelerator.
                  We exist to flip that — to give founders the tools, the
                  intelligence, and the ownership to build things that
                  outlast the hype cycle.&rdquo;
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  With over a decade shipping software and AI systems, Alex
                  leads a team obsessed with craft, speed, and long-term
                  outcomes for the people we partner with.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Our journey"
            title="How we got here"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-mono text-sm font-medium text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
