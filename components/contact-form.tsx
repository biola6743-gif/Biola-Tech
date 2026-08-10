'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const budgets = ['< $10k', '$10k – $25k', '$25k – $50k', '$50k+']

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [budget, setBudget] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [serverMessage, setServerMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrors({})
    setServerMessage('')

    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      company: String(data.get('company') ?? ''),
      budget,
      message: String(data.get('message') ?? ''),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()

      if (!res.ok) {
        if (json.errors) setErrors(json.errors)
        setStatus('error')
        setServerMessage(
          json.error ?? 'Please fix the highlighted fields and try again.',
        )
        return
      }

      setStatus('success')
      if (json.delivered === false && json.note) setServerMessage(json.note)
      form.reset()
      setBudget('')
    } catch {
      setStatus('error')
      setServerMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-primary/30 bg-card p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold">Message sent</h3>
        <p className="mt-2 max-w-sm text-pretty text-muted-foreground">
          {serverMessage ||
            "Thanks for reaching out — we'll get back to you within one business day."}
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" htmlFor="name" error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </Field>
          <Field label="Email" htmlFor="email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </Field>
        </div>

        <Field label="Company" htmlFor="company" optional>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or project name"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </Field>

        <div>
          <span className="mb-2 block text-sm font-medium">
            Budget <span className="text-muted-foreground">(optional)</span>
          </span>
          <div className="flex flex-wrap gap-2">
            {budgets.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBudget((cur) => (cur === b ? '' : b))}
                aria-pressed={budget === b}
                className={
                  budget === b
                    ? 'rounded-full border border-primary bg-primary/15 px-4 py-2 text-sm font-medium text-foreground'
                    : 'rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground'
                }
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <Field label="Message" htmlFor="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your project, goals, and timeline..."
            className="w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </Field>

        {status === 'error' && serverMessage && (
          <p className="text-sm text-destructive" role="alert">
            {serverMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.2_256_/_70%)] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
        {label}{' '}
        {optional && <span className="text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
