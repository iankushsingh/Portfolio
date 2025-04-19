import Image from "next/image"
import SectionHeader from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <SectionHeader title="My Resume" subtitle="Professional background and qualifications" centered />

      <div className="flex justify-center mb-8">
        <Button className="rounded-full">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="relative w-32 h-32 mx-auto md:mx-0 rounded-full overflow-hidden">
              <Image
                src="/profile photo portfolio sq.jpg?height=128&width=128"
                alt="Ankush Singh Bhadauriya"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">Ankush Singh Bhadauriya</h2>
              <p className="text-xl text-muted-foreground mb-4">Cloud Engineer & Full Stack Developer</p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">connectankush.07@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">+91 89606 85577</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Kanpur, UP, India</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                <a
                  href="https://linkedin.com/in/iankushsingh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/iankushsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://leetcode.com/u/iankushsingh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Leetcode</span>
                </a>
                <a
                  href="https://www.hackerrank.com/profile/iankushsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Hackerrank</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold border-b pb-2 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold">B.Tech - Information Technology</h4>
                    <span className="text-sm text-muted-foreground">2023 - Present</span>
                  </div>
                  <p className="text-muted-foreground">PSIT, Kanpur</p>
                </div>

                <div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Higher Secondary</h4>
                    <span className="text-sm text-muted-foreground">2022 - 2023</span>
                  </div>
                  <p className="text-muted-foreground">S.R. Education Centre</p>
                </div>

                <div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Secondary</h4>
                    <span className="text-sm text-muted-foreground">2020 - 2021</span>
                  </div>
                  <p className="text-muted-foreground">S.R. Education Centre</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold border-b pb-2 mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Campus Ambassador</h4>
                    <span className="text-sm text-muted-foreground">October 2024 - Present</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Underrated Coder</p>
                  <p className="text-sm">
                    Representing Underrated Coder at PSIT, Kanpur. Organizing coding events and workshops.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Social Media Marketing Intern</h4>
                    <span className="text-sm text-muted-foreground">August 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Cannibals Media</p>
                  <p className="text-sm">
                    Created and managed social media content, analyzed engagement metrics, and implemented marketing
                    strategies.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold border-b pb-2 mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Technical Skills</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Web Development (HTML, CSS, JavaScript)</li>
                    <li>React, Next.js</li>
                    <li>Python, C, C++, Java</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Git, GitHub</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Soft Skills</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Communication</li>
                    <li>Team Collaboration</li>
                    <li>Problem Solving</li>
                    <li>Time Management</li>
                    <li>Adaptability</li>
                    <li>Leadership</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold border-b pb-2 mb-4">Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Weather Web App</h4>
                  <p className="text-sm mb-1">
                    A responsive web application that provides real-time weather information for any location.
                  </p>
                  <p className="text-sm text-muted-foreground">Technologies: React, JavaScript, API Integration</p>
                </div>

                <div>
                  <h4 className="font-semibold">Machine Learning Project</h4>
                  <p className="text-sm mb-1">A machine learning project focused on predictive analytics.</p>
                  <p className="text-sm text-muted-foreground">Technologies: Python, TensorFlow, Data Science</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold border-b pb-2 mb-4">Languages</h3>
              <div className="flex gap-4">
                <div>
                  <p className="font-medium">English</p>
                  <p className="text-sm text-muted-foreground">Fluent</p>
                </div>
                <div>
                  <p className="font-medium">Hindi</p>
                  <p className="text-sm text-muted-foreground">Native</p>
                </div>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
