import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  )
}
