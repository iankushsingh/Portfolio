import SectionHeader from "@/components/section-header"
import CertificateCard from "@/components/certificate-card"

export default function CertificationsPage() {
  const certificates = [
    {
      id: "9",
      title: "Cannibals Internship",
      issuer: "Cannibals Media",
      date: "Sep 2024",
      image: "/cannibals certificate.png?height=600&width=800",
    },
    {
      id: "8",
      title: "HTML5",
      issuer: "Infosys",
      date: "Nov 2024",
      image: "/html5 certificate.png?height=600&width=800",
    },
    {
      id: "7",
      title: "Python Part 1",
      issuer: "Infosys",
      date: "Nov 2024",
      image: "/python 1 certificate.png?height=600&width=800",
    },
    {
      id: "6",
      title: "Python Part 2",
      issuer: "Infosys",
      date: "Jan 2025",
      image: "/python 2 certificate.png?height=600&width=800",
    },
    {
      id: "5",
      title: "CSS3",
      issuer: "Infosys",
      date: "Jan 2025",
      image: "/css certificate.png?height=600&width=800",
    },
    {
      id: "2",
      title: "JavaScript",
      issuer: "Infosys",
      date: "Mar 2025",
      image: "/js certificate.png?height=600&width=800",
    },
    {
      id: "3",
      title: "Python for Data Science",
      issuer: "Infosys",
      date: "Jan 2025",
      image: "/Python for ds certificate.png?height=600&width=800",
    },
    {
      id: "4",
      title: "Twitter Bootstrap",
      issuer: "Infosys",
      date: "Jan 2025",
      image: "/bootstrap certificate.png?height=600&width=800",
    },
    {
      id: "10",
      title: "Quantum Quest Ignita 2K24",
      issuer: "College",
      date: "Apr 2024",
      image: "/ignitia24 certificate.png?height=600&width=800",
    },
    {
      id: "1",
      title: "Web Rachaiyata",
      issuer: "Allenhouse College",
      date: "May 2025",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12">
      <SectionHeader title="My Certifications" subtitle="Professional certifications and achievements" centered />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            title={certificate.title}
            issuer={certificate.issuer}
            date={certificate.date}
            image={certificate.image}
          />
        ))}
      </div>
    </div>
  )
}
