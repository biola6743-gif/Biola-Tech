import Link from 'next/link'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services', label: 'AI Solutions' },
      { href: '/services', label: 'Web & Product' },
      { href: '/services', label: 'Automation' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="text-lg font-semibold tracking-tight">
                BIOLA
              </span>
            </Link>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Build. Innovate. Own. Lead. Achieve. We craft AI and digital
              products that help ambitious teams create today and own tomorrow.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BIOLA. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Create Today. Own Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  )
}
