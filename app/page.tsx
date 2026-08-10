import { Hero } from '@/components/home/hero'
import { Acronym } from '@/components/home/acronym'
import { ServicesPreview } from '@/components/home/services-preview'
import { Stats } from '@/components/home/stats'
import { Process } from '@/components/home/process'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Acronym />
      <ServicesPreview />
      <Process />
      <CtaBand />
    </main>
  )
}
