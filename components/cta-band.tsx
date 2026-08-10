import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaBand() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card px-6 py-16 text-center sm:px-10 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
            />
            <h2 className="relative mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Ready to create today and own tomorrow?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tell us what you&apos;re building. We&apos;ll bring the AI,
              engineering, and design to make it real.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.2_256_/_70%)] transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:w-auto"
              >
                See what we do
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
