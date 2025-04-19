import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubUrl: string
  liveUrl: string
  technologies?: string[]
}

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  technologies = [],
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View Code
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
