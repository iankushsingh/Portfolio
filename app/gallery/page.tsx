import SectionHeader from "@/components/section-header"
import GalleryGrid from "@/components/gallery-grid"

export default function GalleryPage() {
  const images = [
    {
      id: "1",
      src: "/allenhouse photo.jpg?height=600&width=600",
      alt: "Web Rachaiyata Contest",
      caption: "Participating in Web Rachaiyata contest at Allenhouse College",
    },
    {
      id: "2",
      src: "/allenhouse photo gp.jpg?height=600&width=600",
      alt: "Allenhouse Event",
      caption: "Group Photo: Web Rachaiyata, Allenhouse",
    },
    /*{
      id: "3",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Coding Workshop",
      caption: "Leading a coding workshop",
    },
    {
      id: "4",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Hackathon",
      caption: "Participating in a hackathon",
    },
    {
      id: "5",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Team Project",
      caption: "Working on a team project",
    },
    {
      id: "6",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Award Ceremony",
      caption: "Receiving an award at a college event",
    },
    {
      id: "7",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Conference",
      caption: "Attending a tech conference",
    },
    {
      id: "8",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Presentation",
      caption: "Giving a presentation on cloud computing",
    },
    {
      id: "9",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Networking Event",
      caption: "At a networking event with industry professionals",
    },*/
  ]

  return (
    <div className="container px-4 md:px-6 py-12">
      <SectionHeader
        title="Gallery"
        subtitle="A visual journey through my academic and professional experiences"
        centered
      />

      <div className="mt-10">
        <GalleryGrid images={images} />
      </div>
    </div>
  )
}
