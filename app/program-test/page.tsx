import ProgramTestPage from "@/components/program-test"

const heroImage = "/images/bg_pattern.png"

const overviewImages = [
  "/images/programs/agricultural/agricultural.jpg",
  "/images/programs/agricultural/agricultural1.jpg",
]

export default function ProgramTestRoute() {
  return (
    <ProgramTestPage
      title="Agricultural Crops Production NC II"
      subtitle="Master the foundations of modern agriculture through sustainable planting, intensive crop care, and professional harvesting techniques."
      heroImage={heroImage}
      overviewDescription="The Agricultural Crops Production NC II qualification consists of competencies that a person must achieve to produce various agricultural crops which include performing nursery operations, planting, caring and maintaining of crops and carrying out harvest and post-harvest operations."
      overviewHighlights={[
        {
          icon: "🌍",
          title: "Sustainable Techniques",
          description: "Focus on organic methods and climate-resilient farming practices.",
        },
        {
          icon: "⚙️",
          title: "Modern Tooling",
          description: "Hands-on training with contemporary farm machinery and irrigation systems.",
        },
      ]}
      overviewGridImages={overviewImages}
      competencyDescription="This program follows the strict TESDA curriculum, dividing mastery into three essential pillars of agricultural proficiency."
      competencyCards={[
        {
          title: "Basic Competencies",
          icon: "psychology",
          accent: "primary",
          items: [
            "Workplace Communication",
            "Working in Teams",
            "Solving Problems & Decisions",
            "Occupational Health & Safety",
          ],
        },
        {
          title: "Common Competencies",
          icon: "engineering",
          accent: "secondary",
          items: [
            "Safety Measures in Farm Ops",
            "Tools & Equipment Maintenance",
            "Estimation & Calculation",
            "Processing Farm Records",
          ],
        },
        {
          title: "Core Competencies",
          icon: "agriculture",
          accent: "tertiary",
          items: [
            "Nursery Operations",
            "Planting of Crops",
            "Caring & Maintaining Crops",
            "Harvesting & Post-Harvest Ops",
          ],
        },
      ]}
      careerDescription="Graduates of this program are equipped for immediate employment in the agricultural sector, both locally and internationally."
      careerCards={[
        {
          title: "Crop Farmer",
          subtitle: "Lead Producer",
          image: "/images/programs/agricultural/agricultural.jpg",
        },
        {
          title: "Farm Technician",
          subtitle: "Technical Support",
          image: "/images/programs/agricultural/agricultural1.jpg",
        },
        {
          title: "Agricultural Worker",
          subtitle: "Operational Staff",
          image: "/images/programs/agricultural/agricultural.jpg",
        },
      ]}
    />
  )
}
