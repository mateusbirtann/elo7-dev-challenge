import { cn } from "@/lib/utils"

type SectionProps = {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("px-4 md:px-14 max-w-mobile md:max-w-desktop mx-auto", className)}>
      {children}
    </section>
  )
}