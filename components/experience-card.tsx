import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExperienceCardProps {
  title: string
  company: string
  duration: string
  description: string
  current?: boolean
}

export default function ExperienceCard({
  title,
  company,
  duration,
  description,
  current = false,
}: ExperienceCardProps) {
  return (
    <Card className={cn("card-hover", current && "border-primary/50")}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-base mt-1">{company}</CardDescription>
          </div>
          {current && (
            <Badge variant="default" className="bg-secondary text-secondary-foreground">
              Current
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>{duration}</span>
        </div>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
