import { cn } from '@/lib/utils'

/**
 * Decorative dark backdrop: subtle grid lines + electric-blue glow.
 * Purely decorative, hidden from assistive tech.
 */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden',
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />
      <div className="absolute left-1/2 top-[-10%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
    </div>
  )
}
