"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about-section")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 md:px-6 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="gradient-text">Ankush</span> Singh.
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-muted-foreground">Cloud Engineer & Full Stack Developer</p>
              <p className="mt-2 text-lg italic">"Success is Lonliness.🦁 "</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild className="rounded-full">
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" className="rounded-full" onClick={scrollToNextSection}>
                <ArrowDown className="mr-2 h-4 w-4" />
                Explore
              </Button>
            </div>

            <div className="flex space-x-4 mt-6">
              <Link
                href="https://linkedin.com/in/iankushsingh7"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "bg-background/80 p-3 rounded-full border border-border backdrop-blur-sm",
                  "hover:border-primary hover:text-primary transition-colors",
                )}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/iankushsingh"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "bg-background/80 p-3 rounded-full border border-border backdrop-blur-sm",
                  "hover:border-primary hover:text-primary transition-colors",
                )}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:connectankush.07@gmail.com"
                className={cn(
                  "bg-background/80 p-3 rounded-full border border-border backdrop-blur-sm",
                  "hover:border-primary hover:text-primary transition-colors",
                )}
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/profile photo portfolio sq.jpg?height=320&width=320"
                alt="Ankush Singh Bhadauriya"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
