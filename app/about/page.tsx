import DownloadSection from "@/components/download-section";
import FullWidth from "@/components/full-width";
import { TeamsProfile } from "@/components/teams-profile";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="wrapper__wide">
      <FullWidth />

      <section className="bg-slate-50">
        <div className="wrapper py-16">
          <h1 className="text-3xl font-medium text-slate-900">
            About Romblon National Institute of Technology
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600">
            A TESDA-accredited institution committed to quality technical
            education and skills development in Romblon.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#meettheteam" className="text-sm font-medium">
              Meet the Team
            </a>
            <a href="#vision-mission" className="text-sm font-medium">
              Vision & Mission
            </a>
            <a href="#org-structure" className="text-sm font-medium">
              Organizational Structure
            </a>
            <a href="#assessment" className="text-sm font-medium">
              Assessment & Fees
            </a>
          </div>
        </div>
      </section>

      {/* ================= MEET OUR TEAM ================= */}
      <TeamsProfile />
      {/* ================= VISION & MISSION ================= */}
      <section id="vision-mission" className="bg-slate-50">
        <div className="wrapper py-20">
          {/* Row 1 */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-medium">Vision</h3>
              <p className="mt-4 text-slate-600">
                By 2030, RNIT will become a polytechnic institution providing
                quality technical education and skills training.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-medium">Mission</h3>
              <p className="mt-4 text-slate-600">
                To provide students with professional, ethical, and industry-
                relevant technical skills.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-medium">
                Core Values
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                <li>Integrity</li>
                <li>Excellence</li>
                <li>Service</li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-medium">
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
        <div className="wrapper py-20 text-center">
          <h2 className="text-2xl font-medium">
            Organizational Structure
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            A visual overview of RNIT’s administrative and instructional
            framework.
          </p>

          <div className="mt-10 mx-auto max-w-4xl border border-slate-200 bg-slate-50 p-6">
            <div className="relative w-full aspect-video rounded overflow-hidden bg-slate-200">
              <Image
                src="/images/2025-org-chart.jpg" // replace with your image path
                alt="Organizational Structure"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-6">
            <Button size='lg' asChild className="w-full sm:w-auto">
              <a href="/images/2025-org-chart.jpg" target="_blank"
                rel="noopener noreferrer">View Full Organizational Chart</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= ASSESSMENT & QUALITY ================= */}
      <section id="assessment" className="bg-slate-50">
        <div className="wrapper py-20">
          <h2 className="text-2xl font-medium">
            Assessment & Quality Assurance
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Assessment Fees */}
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-medium">
                Assessment Fees
              </h3>
              <p className="mt-4 text-slate-600">
                Transparent and TESDA-approved assessment fees for all
                qualifications.
              </p>

              <div className="mt-6 flex gap-4">
                <Button size='lg' asChild className="w-full sm:w-auto">
                  <a href="/documents/assessment-fee-2024.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
                </Button>
              </div>
            </div>

            {/* Quality Assessment */}
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-medium">
                RNIT Assessment Center
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                Dedicated to providing high-quality, reliable assessment services that adhere to national standards and empower the workforce of Romblon.
              </p>

              <div className="mt-6">
                <Button size='lg' asChild className="w-full sm:w-auto">
                  <a href="/images/assessment-mission.jpg" target="_blank" rel="noopener noreferrer">View Assessment Programs</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CITIZEN’S CHARTER ================= */}
      <section className="bg-white" id="citizen-charter">
        <div className="wrapper py-20 text-center">
          <h2 className="text-2xl font-medium">
            Citizen’s Charter
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Learn about our service standards, processing times, and commitments
            to the public.
          </p>

          <div className="mt-6">
            <Button size='lg' asChild className="w-full sm:w-auto">
              <a href="/documents/citizens-charter.pdf" target="_blank" rel="noopener noreferrer">Download Citizen’s Charter</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
