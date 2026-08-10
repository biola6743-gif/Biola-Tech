import {
  BrainCircuit,
  MonitorSmartphone,
  Workflow,
  Bot,
  LineChart,
  Palette,
} from 'lucide-react'

export type Service = {
  slug: string
  icon: typeof BrainCircuit
  title: string
  summary: string
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'ai-solutions',
    icon: BrainCircuit,
    title: 'AI Solutions',
    summary:
      'Custom models, RAG systems, and copilots trained on your data and wired into your product.',
    features: [
      'RAG & knowledge assistants',
      'LLM copilots & agents',
      'Model evaluation & guardrails',
    ],
  },
  {
    slug: 'web-product',
    icon: MonitorSmartphone,
    title: 'Web & Product',
    summary:
      'Full-stack web apps and digital products built on modern, scalable foundations.',
    features: [
      'Next.js web applications',
      'Design systems & UI',
      'Performance & SEO',
    ],
  },
  {
    slug: 'automation',
    icon: Workflow,
    title: 'Automation',
    summary:
      'We remove repetitive work with reliable, observable automation pipelines.',
    features: [
      'Workflow orchestration',
      'Data & document processing',
      'Integrations & APIs',
    ],
  },
  {
    slug: 'ai-agents',
    icon: Bot,
    title: 'AI Agents',
    summary:
      'Durable, tool-using agents that take real actions across your stack.',
    features: [
      'Tool-calling agents',
      'Human-in-the-loop review',
      'Long-running workflows',
    ],
  },
  {
    slug: 'data-analytics',
    icon: LineChart,
    title: 'Data & Analytics',
    summary:
      'Turn raw data into dashboards and decisions your whole team can trust.',
    features: [
      'Pipelines & warehousing',
      'Dashboards & reporting',
      'Predictive insights',
    ],
  },
  {
    slug: 'brand-design',
    icon: Palette,
    title: 'Brand & Design',
    summary:
      'Premium identity and interface design that makes your product feel inevitable.',
    features: ['Brand identity', 'Product design', 'Motion & prototyping'],
  },
]
