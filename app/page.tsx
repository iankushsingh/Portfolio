import HeroSection from "@/components/hero-section"
import SectionHeader from "@/components/section-header"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section id="about-section" className="py-16 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-darker opacity-25"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <SectionHeader title="About Me ❤️" subtitle="Cloud Engineer & Full Stack Developer" centered />

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              I'm Ankush Singh Bhadauriya, a 3rd-year B.Tech student at PSIT, Kanpur, passionate about cloud computing
              and full stack development. I enjoy solving complex problems and creating efficient, user-friendly
              applications.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <SkillBadge name="Cloud Computing" />
              <SkillBadge name="Python" />
              <SkillBadge name="C++" />
              <SkillBadge name="Java" />
              <SkillBadge name="DSA" />
              <SkillBadge name="Web Development" />
            </div>

            <Button asChild>
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <SectionHeader title="Featured Projects" subtitle="Some of my recent work" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <ProjectCard
              title="Weather Web App"
              description="A responsive web application that provides real-time weather information for any location. Built with React and OpenWeather API."
              image="/weather project.png?height=400&width=600"
              githubUrl="https://github.com/iankushsingh/weather-web2.0"
              liveUrl="https://iankushsingh.github.io/weather-web2.0/"
              technologies={["React", "JavaScript", "API Integration"]}
            />

            <ProjectCard
              title="Portfolio Website"
              description="A modern, responsive portfolio website built with Next.js and Tailwind CSS."
              image="/portfolio ss light.png?height=400&width=600"
              githubUrl="https://github.com/iankushsingh/portfolio-ankush"
              liveUrl="https://portfolio-ankush-phi.vercel.app/"
              technologies={["Python", "TensorFlow", "Data Science"]}
            />
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-darker opacity-25 dark:bg-dots-lighter"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <SectionHeader title="Skills" subtitle="My technical expertise" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm glass-card">
              <h3 className="text-xl font-semibold mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Python" />
                <SkillBadge name="C" />
                <SkillBadge name="C++" />
                <SkillBadge name="Java" />
                <SkillBadge name="JavaScript" />
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm glass-card">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="HTML" />
                <SkillBadge name="CSS" />
                <SkillBadge name="React" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="Tailwind" />
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm glass-card">
              <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Git" />
                <SkillBadge name="GitHub" />
                <SkillBadge name="VS Code" />
                <SkillBadge name="Figma" />
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm glass-card">
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Communication" />
                <SkillBadge name="Leadership" />
                <SkillBadge name="Problem Solving" />
                <SkillBadge name="Adaptability" />
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/about#skills">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="container px-4 md:px-6 text-center relative z-10">
          <SectionHeader title="Let's Connect" subtitle="Interested in working together? Let's talk!" centered />

          <div className="max-w-md mx-auto">
            <Button size="lg" className="w-full" asChild>
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
