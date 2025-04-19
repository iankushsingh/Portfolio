import SectionHeader from "@/components/section-header"
import ExperienceCard from "@/components/experience-card"

export default function ExperiencePage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <SectionHeader title="My Experience" subtitle="Professional journey and work experience" centered />

      <div className="space-y-8 mt-10 max-w-3xl mx-auto">
        <ExperienceCard
          title="Campus Ambassador"
          company="Underrated Coder"
          duration="October 2024 - Present"
          description="Working as a Campus Ambassador, representing Underrated Coder at PSIT, Kanpur. Responsible for organizing coding events, workshops, and promoting coding culture among students."
          current={true}
        />

        <ExperienceCard
          title="Social Media Marketing Intern"
          company="Cannibals Media"
          duration="August 2024"
          description="Worked as a Social Media Marketing Intern at Cannibals Media. Responsible for creating and managing social media content, analyzing engagement metrics, and implementing marketing strategies."
        />
      </div>
    </div>
  )
}
