export default function AboutPage() {
  return (
    <main className="w-full">
      {/* ================= HERO / INTRO ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-medium text-slate-900">
            About Romblon National Institute of Technology
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600">
            A TESDA-accredited institution committed to quality technical
            education and skills development in Romblon.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#team" className="text-sm font-medium text-blue-700">
              Meet the Team
            </a>
            <a href="#vision-mission" className="text-sm font-medium text-blue-700">
              Vision & Mission
            </a>
            <a href="#org-structure" className="text-sm font-medium text-blue-700">
              Organizational Structure
            </a>
            <a href="#assessment" className="text-sm font-medium text-blue-700">
              Assessment & Fees
            </a>
          </div>
        </div>
      </section>

      {/* ================= MEET OUR TEAM ================= */}
      <section id="team" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-2xl font-semibold text-slate-900">
            Meet Our Team
          </h2>

          <p className="mt-2 max-w-2xl text-slate-600">
            Our instructors and staff are dedicated to delivering quality,
            industry-relevant training.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Team Card */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 p-4 text-center"
              >
                <div className="mx-auto h-32 w-32 rounded-md bg-slate-100" />
                <h3 className="mt-4 font-medium text-slate-900">
                  Full Name
                </h3>
                <p className="text-sm text-slate-600">
                  Position Title
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section id="vision-mission" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          {/* Row 1 */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
              <p className="mt-4 text-slate-600">
                By 2030, RNIT will become a polytechnic institution providing
                quality technical education and skills training.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
              <p className="mt-4 text-slate-600">
                To provide students with professional, ethical, and industry-
                relevant technical skills.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Core Values
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                <li>Integrity</li>
                <li>Excellence</li>
                <li>Service</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Organizational Culture
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                <li>Transparency</li>
                <li>Teamwork</li>
                <li>Accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ORGANIZATIONAL STRUCTURE ================= */}
      <section id="org-structure" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Organizational Structure
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            A visual overview of RNIT’s administrative and instructional
            framework.
          </p>

          <div className="mt-10 mx-auto max-w-4xl rounded-lg border border-slate-200 bg-slate-50 p-6">
            <div className="aspect-video w-full rounded bg-slate-200" />
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-blue-700 px-6 py-2 text-sm font-medium text-white"
            >
              View Full Organizational Chart
            </a>
          </div>
        </div>
      </section>

      {/* ================= ASSESSMENT & QUALITY ================= */}
      <section id="assessment" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-2xl font-semibold text-slate-900">
            Assessment & Quality Assurance
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Assessment Fees */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Assessment Fees
              </h3>
              <p className="mt-4 text-slate-600">
                Transparent and TESDA-approved assessment fees for all
                qualifications.
              </p>

              <div className="mt-6 flex gap-4">
                <a className="rounded-md bg-blue-700 px-4 py-2 text-sm text-white">
                  View Fees
                </a>
                <a className="rounded-md border border-slate-300 px-4 py-2 text-sm">
                  Download PDF
                </a>
              </div>
            </div>

            {/* Quality Assessment */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Quality Assessment
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                <li>Standardized assessment tools</li>
                <li>TESDA-compliant procedures</li>
                <li>Qualified assessors</li>
              </ul>

              <div className="mt-6">
                <a className="text-sm font-medium text-blue-700">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CITIZEN’S CHARTER ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Citizen’s Charter
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Learn about our service standards, processing times, and commitments
            to the public.
          </p>

          <div className="mt-6">
            <a className="inline-flex rounded-md bg-blue-700 px-6 py-2 text-sm font-medium text-white">
              Download Citizen’s Charter
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="h-12 w-12 rounded bg-white/20" />
              <p className="mt-4 text-sm text-white/80">
                Romblon National Institute of Technology
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Programs</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>Automotive Servicing</li>
                <li>Electrical Installation</li>
                <li>Welding</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">About RNIT</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>Meet Our Team</li>
                <li>Organizational Chart</li>
                <li>Assessment Center</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>Romblon, Philippines</li>
                <li>Phone: 09xx xxx xxxx</li>
                <li>Email: info@rnit.edu.ph</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-6 text-sm text-white/60">
            © 2025 RNIT. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
