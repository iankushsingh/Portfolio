import SectionHeader from "@/components/section-header"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      title: "Weather Web App",
      description:
        "A responsive web application that provides real-time weather information for any location. Built with React and OpenWeather API.",
      image: "/weather project.png?height=400&width=600",
      githubUrl: "https://github.com/iankushsingh/weather-web2.0",
      liveUrl: "https://iankushsingh.github.io/weather-web2.0/",
      technologies: ["React", "JavaScript", "API Integration", "Responsive Design"],
    },
    {
      id: "2",
      title: "Machine Learning Project",
      description: "A machine learning project focused on predictive analytics. Currently a work in progress.",
      image: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com/iankushsingh",
      liveUrl: "https://example.com",
      technologies: ["Python", "TensorFlow", "Data Science", "Machine Learning"],
    },
    {
      id: "3",
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com/iankushsingh",
      liveUrl: "https://example.com",
      technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    },
    /*{
      id: "4",
      title: "E-commerce Dashboard",
      description: "An admin dashboard for an e-commerce platform with analytics and product management features.",
      image: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com/iankushsingh",
      liveUrl: "https://example.com",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },*/
  ]

  return (
    <div className="container px-4 md:px-6 py-12">
      <SectionHeader title="My Projects" subtitle="A showcase of my technical work and applications" centered />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}
