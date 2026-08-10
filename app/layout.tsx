import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ChatWidget } from '@/components/chat-widget'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'BIOLA — Create Today. Own Tomorrow.',
    template: '%s — BIOLA',
  },
  description:
    'BIOLA is an AI and digital services studio helping founders and teams build, innovate, own, lead, and achieve. Custom software, AI automation, and digital products.',
  keywords: [
    'BIOLA',
    'AI services',
    'digital agency',
    'software development',
    'AI automation',
    'product design',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'BIOLA — Create Today. Own Tomorrow.',
    description:
      'AI and digital services studio. Build. Innovate. Own. Lead. Achieve.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <SiteNav />
        {children}
        <SiteFooter />
        <ChatWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
