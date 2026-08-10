'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { Bot, MessageCircle, Send, X } from 'lucide-react'

type Message = {
  id: number
  text: string
  sender: 'assistant' | 'visitor'
}

const quickReplies = [
  'What do you do?',
  'How much does a project cost?',
  'Start a project',
]

function getReply(message: string) {
  const input = message.toLowerCase()

  if (/(price|pricing|cost|budget|quote)/.test(input)) {
    return 'Every project is scoped around your goals. Share your idea and budget range with us, and we will prepare a tailored proposal.'
  }
  if (/(service|offer|build|software|website|app|ai|automation)/.test(input)) {
    return 'BIOLA helps teams with custom software, AI automation, digital products, and product design. What are you hoping to build?'
  }
  if (/(time|timeline|long|when|duration)/.test(input)) {
    return 'Timelines depend on the scope, but we will map out clear milestones before work begins. Tell us a little about your project and desired launch date.'
  }
  if (/(human|person|contact|project|call|start)/.test(input)) {
    return 'Great — our team would love to hear about it. Use the Start a project link below to send your brief, and we will get back to you within one business day.'
  }
  return 'Thanks for reaching out. I can help with our services, project costs, timelines, or getting your project started.'
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'assistant',
      text: 'Hi! I’m the BIOLA assistant. How can I help with your next project?',
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function sendMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return

    const id = Date.now()
    setMessages((current) => [
      ...current,
      { id, sender: 'visitor', text: trimmed },
      { id: id + 1, sender: 'assistant', text: getReply(trimmed) },
    ])
    setInput('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label="BIOLA customer chat"
          className="mb-3 flex h-[min(32rem,calc(100dvh-7.5rem))] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/35"
        >
          <header className="flex items-center justify-between border-b border-border bg-secondary/70 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">BIOLA Assistant</h2>
                <p className="text-xs text-muted-foreground">Usually replies instantly</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.sender === 'visitor' ? 'flex justify-end' : 'flex justify-start'}
              >
                <p
                  className={
                    message.sender === 'visitor'
                      ? 'max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-sm text-primary-foreground'
                      : 'max-w-[85%] rounded-2xl rounded-bl-md bg-secondary px-3.5 py-2.5 text-sm leading-relaxed text-foreground'
                  }
                >
                  {message.text}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-border p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-0.5">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendMessage(reply)}
                  className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {reply}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <label className="sr-only" htmlFor="chat-message">
                Your message
              </label>
              <input
                id="chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Write a message..."
                className="min-w-0 flex-1 rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <Link href="/contact" className="mt-3 block text-center text-xs font-medium text-primary hover:underline">
              Start a project with BIOLA
            </Link>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-label={isOpen ? 'Close chat' : 'Open customer chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
