import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { services } from '@/lib/services'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI solutions, web & product engineering, automation, AI agents, data analytics, and premium design — everything BIOLA offers to help you build and scale.',
}

const engagements = [
  {
    name: 'Sprint',
    price: 'From $6k',
    tagline: 'Validate an idea fast',
    features: [
      'Focused 2-week engagement',
      'Working prototype or POC',
      'Architecture recommendations',
      'Async updates + demo',
    ],
    featured: false,
  },
  {
    name: 'Build',
    price: 'From $18k',
    tagline: 'Ship a production product',
    features: [
      'End-to-end product delivery',
      'AI + full-stack engineering',
      'Weekly demos & roadmap',
      'Launch support & handover',
    ],
    featured: true,
  },
  {
    name: 'Partner',
    price: 'Custom',
    tagline: 'An embedded team',
    features: [
      'Dedicated ongoing squad',
      'Continuous delivery',
      'Priority strategy access',
      'SLA & scaling support',
    ],
    featured: false,
  },
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Capabilities that compound"
        description="From a single AI feature to a full product, we plug in wherever you need the most leverage."
      />

      <section className="relative pb-8">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-foreground/90"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Engagements"
            title="Ways to work with us"
            description="Flexible engagement models that scale with your ambition and stage."
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {engagements.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={
                    tier.featured
                      ? 'relative h-full overflow-hidden rounded-2xl border border-primary/40 bg-card p-7 shadow-[0_0_60px_-20px_oklch(0.62_0.2_256_/_60%)]'
                      : 'relative h-full rounded-2xl border border-border bg-card p-7'
                  }
                >
                  {tier.featured && (
                    <span className="absolute right-5 top-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tier.tagline}
                  </p>
                  <p className="mt-5 text-3xl font-semibold tracking-tight">
                    {tier.price}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-foreground/90"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
