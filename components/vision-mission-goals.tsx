'use client';

import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function VisionMissionGoals() {
  const goals = [
    {
      title: "Goal 1: Higher Qualifications & New Programs",
      objectives: [
        "Register higher level qualifications and emerging programs",
        "Register additional PQF Level V program",
        "Improve facilities, workshops, and upgrade tools and equipment",
        "Establish partnerships with industries and different sectors",
      ],
      actions: [
        "Conduct needs surveys on potential skills and industry demand",
        "Review curricula and strengthen programs for stakeholders",
        "Establish facilities, equipment, and maintenance support",
        "Upgrade training facilities and tools per industry standards",
      ],
    },
    {
      title: "Goal 2: Employment Growth & Job Facilitation",
      objectives: [
        "Strengthen social marketing and advocacy services",
        "Establish functional placement and support services",
        "Increase employment through skills development and job facilitation",
      ],
      actions: [
        "Develop online promotion and communication plans",
        "Promote programs through national skills competitions",
        "Coordinate placement support for graduates",
        "Implement career guidance and gender development programs",
      ],
    },
    {
      title: "Goal 3: Governance & Quality Management",
      objectives: [
        "Establish staff development needs assessment",
        "Sustain implementation of quality management systems",
        "Generate financial resources for growth",
        "Implement Green TVET framework",
      ],
      actions: [
        "Conduct training needs analysis and staff development plans",
        "Prepare succession planning and committee oversight",
        "Adopt Plan-Do-Check-Act for quality improvement",
        "Identify income-generating programs and campus greening initiatives",
      ],
    },
    {
      title: "Goal 4: Public Image & Accreditation",
      objectives: [
        "Conduct research, innovation, and extension services",
        "Acquire accreditation through APACC and STAR",
        "Obtain the TESDA Seal of Integrity as an Assessment Center",
      ],
      actions: [
        "Provide trainer training and promote on-the-job training",
        "Deliver extension services to the community and stakeholders",
        "Apply for STAR accreditation and TESDA Seal of Integrity",
        "Strengthen public image through quality service delivery",
      ],
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="wrapper">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Vision • Mission • Goals</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">RNIT’s Strategic Direction</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-600">
            Core information from the institute’s strategic goals, mission, and vision presented directly on the landing page in a modern, readable format.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent>
              <CardTitle className="text-xl font-semibold text-primary">Vision</CardTitle>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                By 2028, RNIT will become a Polytechnic Institute providing professional education, skills training and lifelong learning for Romblon.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent>
              <CardTitle className="text-xl font-semibold text-primary">Mission</CardTitle>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                To provide students with professional, practical, and positive learning experiences so they become competent, valuable individuals, maximizing their career opportunities and academic pathways.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent>
              <CardTitle className="text-xl font-semibold text-primary">Values & Culture</CardTitle>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>R – Responsive to the needs of the community</li>
                <li>N – Nurturing quality and positive change</li>
                <li>I – Integrity as public servants</li>
                <li>T – Transparency, teamwork, and timely delivery</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {goals.map((goal) => (
            <Card key={goal.title} className="bg-white border-slate-200 shadow-sm">
              <CardContent>
                <CardTitle className="text-lg font-semibold text-primary">{goal.title}</CardTitle>

                <div className="mt-5">
                  <p className="font-semibold text-slate-900">Objectives</p>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-700 list-disc list-inside">
                    {goal.objectives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <p className="font-semibold text-slate-900">Strategic Actions</p>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-700 list-disc list-inside">
                    {goal.actions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
