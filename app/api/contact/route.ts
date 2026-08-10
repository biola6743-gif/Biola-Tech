import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

type Payload = {
  name?: string
  email?: string
  company?: string
  budget?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  let body: Payload
  try {
    body = (await request.json()) as Payload
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const company = body.company?.trim() ?? ''
  const budget = body.budget?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email.'
  if (message.length < 10)
    errors.message = 'Please share a little more detail (10+ characters).'

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL

  // Gracefully degrade if email isn't configured yet.
  if (!apiKey || !to) {
    console.log('[v0] Contact form submission (email not configured):', {
      name,
      email,
      company,
      budget,
    })
    return NextResponse.json({
      ok: true,
      delivered: false,
      note: 'Message received. Email delivery is not configured yet.',
    })
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'BIOLA Website <onboarding@resend.dev>',
      to: [to],
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <h2>New project inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company) || '—'}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget) || '—'}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      `,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return NextResponse.json(
        { error: 'Could not send your message. Please try again.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true, delivered: true })
  } catch (err) {
    console.log('[v0] Contact route exception:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
