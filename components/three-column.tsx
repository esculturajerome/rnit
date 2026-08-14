import { Card, CardContent, CardTitle } from "@/components/ui/card"

const ThreeColumn = () => {
  const columns = [
    // {
    //   title: "Vision",
    //   description:
    //     "By 2028, RNIT will become a Polytechnic Institute providing professional education, skills training and lifelong learning for Romblon.",
    // },
    {
      title: "Mission",
      description:
        " To provide students with professional, practical, and positive learning experiences so they become competent, valuable individuals, maximizing their career opportunities and academic pathways.",
    },
    {
      title: "Values Statement",
      description:
        "At Romblon Polytechnic Institute (RPI), we value quality, integrity and sustainability in all that we do as a teaching and learning institution. We are committed to creating an environment of open communication and transparency for the attainment of our vision and mission.",
    },
  ]

  // <Card title="ORGANIZATIONAL CULTURE" items={['R-Responsive to the needs of the community', 'N-Nurturing changes towards quality', 'I-Integrity as public servants', 'T-Transparency, Teamwork, Timely']} />
  return (
    <section className="wrapper__wide py-4 md:py-16">
      <div className="wrapper grid gap-2 md:gap-6 md:grid-cols-2">
        {columns.map((col) => (
          <Card key={col.title} className="border-none shadow-none">
            <CardContent className="px-0">
              <CardTitle className="text-xl md:text-3xl font-medium mb-2 text-primary">{col.title}</CardTitle>
              <p className="text-sm mr-4 md:max-w-lg md:text-base ">{col.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ThreeColumn
