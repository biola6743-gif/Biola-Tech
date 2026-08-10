import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center rounded-[0.6em] bg-primary text-primary-foreground',
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-[62%] w-[62%]">
        <path
          d="M5 4h8.2A4.8 4.8 0 0 1 18 8.8c0 1.6-.9 3-2.3 3.7A4.9 4.9 0 0 1 18.6 17 4.8 4.8 0 0 1 13.8 21H5V4Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  )
}
