import { Card, CardContent, CardTitle } from "@/components/ui/card"

const ThreeColumn = () => {
  const columns = [
    {
      title: "Quality Education",
      description:
        "Practical, relevant, and industry-aligned learning. Designed to prepare students for real-world success.",
    },
    {
      title: "Rooted in Romblon",
      description:
        "Supporting local growth through education and skills. Building talent for a stronger Romblon community.",
    },
    {
      title: "Career-Focused Programs",
      description:
        "Hands-on training with real-world application. Preparing students for employment and advancement.",
    },
  ]

  return (
    <section className="wrapper__wide py-4 md:py-16">
      <div className="wrapper grid gap-2 md:gap-6 md:grid-cols-3">
        {columns.map((col) => (
          <Card key={col.title} className="border-none shadow-none">
            <CardContent className="px-0">
              <CardTitle className="text-xl md:text-3xl font-medium mb-2 text-primary">{col.title}</CardTitle>
              <p className="text-sm mr-4 md:max-w-xs md:text-base ">{col.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ThreeColumn
