import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/services'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function ServicesPreview() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Services"
            title="Everything you need to build and scale"
            description="One studio across the full lifecycle — from first prototype to production AI."
          />
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-card/80">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
