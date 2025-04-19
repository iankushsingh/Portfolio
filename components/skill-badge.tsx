import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  className?: string
}

export default function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        "bg-primary/10 text-primary dark:bg-primary/20",
        "transition-all duration-300 hover:bg-primary/20 dark:hover:bg-primary/30",
        className,
      )}
    >
      {name}
    </span>
  )
}
