import Image from "next/image"
import SectionHeader from "@/components/section-header"
import SkillBadge from "@/components/skill-badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Code, Lightbulb, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <SectionHeader title="About Me ❤️" subtitle="Get to know me better" centered />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative mx-auto w-full max-w-md aspect-square rounded-lg overflow-hidden">
          <Image
            src="/profile photo portfolio sq.jpg?height=400&width=400"
            alt="Ankush Singh Bhadauriya"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Ankush Singh Bhadauriya</span>
          </h3>

          <p className="text-muted-foreground mb-4">
            I'm a 3rd-year B.Tech student at PSIT, Kanpur, specializing in Information Technology. I'm passionate about
            cloud computing, full stack development, and solving complex problems through technology.
          </p>

          <p className="text-muted-foreground mb-4">
            My journey in tech started with a curiosity about how things work, which led me to explore various
            programming languages and frameworks. I enjoy building applications that are not only functional but also
            provide a great user experience.
          </p>

          <p className="text-muted-foreground">
            When I'm not coding, you can find me reading books, solving algorithmic problems, or exploring new
            technologies to enhance my skills.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <SkillBadge name="Cloud Computing" />
            <SkillBadge name="Python" />
            <SkillBadge name="C++" />
            <SkillBadge name="Java" />
            <SkillBadge name="DSA" />
            <SkillBadge name="Web Development" />
          </div>
        </div>
      </div>

      <section id="education" className="mb-16">
        <SectionHeader title="Education" />

        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <GraduationCap className="h-6 w-6 text-primary mt-1" />
              <div>
                <CardTitle>B.Tech - Information Technology</CardTitle>
                <p className="text-muted-foreground">PSIT, Kanpur</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm font-medium">2023 - Present</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Currently pursuing my Bachelor's degree in Information Technology, focusing on cloud computing and web
                development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <GraduationCap className="h-6 w-6 text-primary mt-1" />
              <div>
                <CardTitle>Higher Secondary</CardTitle>
                <p className="text-muted-foreground">S.R. Education Centre</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm font-medium">2022 - 2023</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>Completed my higher secondary education with a focus on science and mathematics.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <GraduationCap className="h-6 w-6 text-primary mt-1" />
              <div>
                <CardTitle>Secondary</CardTitle>
                <p className="text-muted-foreground">S.R. Education Centre</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm font-medium">2020 - 2021</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>Completed my secondary education with distinction.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="skills" className="mb-16">
        <SectionHeader title="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <CardTitle>Technical Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Web Development</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="HTML" />
                  <SkillBadge name="CSS" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="React" />
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="Responsive Design" />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Python" />
                  <SkillBadge name="C" />
                  <SkillBadge name="C++" />
                  <SkillBadge name="Java" />
                  <SkillBadge name="TypeScript" />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="React" />
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="Bootstrap" />
                  <SkillBadge name="Tailwind CSS" />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Git" />
                  <SkillBadge name="GitHub" />
                  <SkillBadge name="VS Code" />
                  <SkillBadge name="Figma" />
                  <SkillBadge name="AI" />
                  <SkillBadge name="Machine Learning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle>Soft Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Communication & Collaboration</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Communication" />
                  <SkillBadge name="Team Collaboration" />
                  <SkillBadge name="Leadership" />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Problem Solving</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Critical Thinking" />
                  <SkillBadge name="Analytical Skills" />
                  <SkillBadge name="Attention to Detail" />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Work Ethic</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Time Management" />
                  <SkillBadge name="Adaptability" />
                  <SkillBadge name="Self-motivation" />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Creative Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Reading Books" />
                  <SkillBadge name="Problem Solving" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="interests" className="mb-16">
        <SectionHeader title="Interests & Hobbies" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <BookOpen className="h-6 w-6 text-primary mt-1" />
              <CardTitle>Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I enjoy reading books on technology, personal development, and fiction.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <Code className="h-6 w-6 text-primary mt-1" />
              <CardTitle>Coding Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Solving algorithmic problems and participating in coding competitions.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <Lightbulb className="h-6 w-6 text-primary mt-1" />
              <CardTitle>Learning New Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Exploring new programming languages, frameworks, and tools to expand my skill set.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
