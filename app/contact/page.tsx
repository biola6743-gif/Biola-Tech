import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Tell BIOLA about your project. We'll get back to you within one business day.",
}

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abiolaajani1109@gmail.com',
    href: 'abiolaajani1109@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+234 7070449718',
    href: 'tel:+234 7070449718',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote-first · Worldwide',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within 1 business day',
  },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's build something"
        description="Share a bit about what you're working on and we'll come back with next steps."
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="flex flex-col gap-4">
                {details.map((detail) => {
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                        <detail.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {detail.label}
                        </p>
                        <p className="mt-0.5 font-medium">{detail.value}</p>
                      </div>
                    </div>
                  )
                  return detail.href ? (
                    <a key={detail.label} href={detail.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>{content}</div>
                  )
                })}

                <div className="rounded-2xl border border-primary/25 bg-card p-6">
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    Prefer a quick call? Drop your details in the form and note
                    a good time — we&apos;ll send a calendar invite.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
