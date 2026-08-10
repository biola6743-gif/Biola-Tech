import { Reveal } from '@/components/reveal'

const stats = [
  { value: '60+', label: 'Products shipped' },
  { value: '30+', label: 'Founders & teams' },
  { value: '4x', label: 'Avg. faster delivery' },
  { value: '99.9%', label: 'Uptime maintained' },
]

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="glass overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
                    {stat.value}
                  </dd>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
