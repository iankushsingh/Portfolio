import SectionHeader from "@/components/section-header"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Code2 } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <SectionHeader title="Contact Me" subtitle="Let's connect and discuss how we can work together" centered />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:connectankush.07@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      connectankush.07@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+918960685577" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 89606 85577
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Kanpur, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Social Media</h3>

              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="https://linkedin.com/in/iankushsingh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <span>LinkedIn</span>
                </Link>

                <Link
                  href="https://github.com/iankushsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <Github className="h-5 w-5 mr-3 text-primary" />
                  <span>GitHub</span>
                </Link>

                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-3 text-primary" />
                  <span>Instagram</span>
                </Link>

                <Link
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <Code2 className="h-5 w-5 mr-3 text-primary" />
                  <span>LeetCode</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
