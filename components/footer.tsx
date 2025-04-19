import Link from "next/link"
import { Github, Linkedin, Mail, Instagram, Code2 } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Ankush Singh Bhadauriya</h3>
            <p className="text-muted-foreground">Cloud Engineer & Full Stack Developer</p>
            <p className="text-muted-foreground mt-2">"Success is Lonliness.🦁"</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/iankushsingh7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/iankushsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:connectankush.07@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://instagram.com/iankushsingh7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://leetcode.com/u/iankushsingh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Code2 className="h-5 w-5" />
                <span className="sr-only">LeetCode</span>
              </Link>
            </div>
            <p className="text-muted-foreground mt-4">Email: connectankush.07@gmail.com</p>
            <p className="text-muted-foreground">Phone: +91 89606 85577</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} Ankush Singh Bhadauriya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
