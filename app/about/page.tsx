'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TeamsProfile } from "@/components/teams-profile";
import FullWidth from "@/components/full-width";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Reusable wrapper for animated sections
const AnimatedSection = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={containerVariants}
    className={className}
  >
    {children}
  </motion.section>
);

export default function AboutPage() {
  return (
    <main className="wrapper__wide">
      <FullWidth
        title="About Romblon National Institute of Technology"
        subtext="A TESDA-accredited institution committed to quality technical education and skills development in Romblon."
      />

      {/* MEET OUR TEAM */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
        <TeamsProfile />
      </motion.div>

      {/* VISION & MISSION */}
      {/* <AnimatedSection id="vision-mission" className="bg-slate-50">
        <div className="wrapper py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <Card title="Vision" content="By 2028, RNIT will become a Polytechnic Institute providing professional education, skills training and lifelong learning for Romblon." />
            <Card title="Mission" content="To provide students with professional, practical, and, positive learning experiences so they become competent, valuable individuals, maximizing their career opportunities and academic pathways." />
            <Card title="ORGANIZATIONAL CULTURE" items={['R-Responsive to the needs of the community', 'N-Nurturing changes towards quality', 'I-Integrity as public servants', 'T-Transparency, Teamwork, Timely']} />
            <Card title="Values Statement" content="At Romblon Polytechnic Institute (RPI), we value quality, integrity and sustainability in all that we do as a teaching and learning institution. We are committed to creating an environment of open communication and transparency for the attainment of our vision and mission" />
          </div>
        </div>
      </AnimatedSection> */}

      {/* ORGANIZATIONAL STRUCTURE */}
      <AnimatedSection id="org-structure" className="bg-white">
        <div className="wrapper py-20 text-center">
          <motion.h2 variants={itemVariants} className="text-2xl font-medium">Organizational Structure</motion.h2>
          <motion.p variants={itemVariants} className="mx-auto mt-2 max-w-2xl text-slate-600">
            A visual overview of RNIT’s administrative and instructional framework.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 mx-auto max-w-4xl border border-slate-200 bg-slate-50 p-6 ">
            <div className="relative w-full aspect-video  overflow-hidden bg-slate-200">
              <Image
                src="/images/2026-org-chart.jpg"
                alt="Organizational Structure"
                fill
                className="transition-transform duration-500 hover:scale-105 object-cover"
              />
            </div>
            <div className="mt-6">
              <Button size='lg' asChild>
                <a href="/images/2026-org-chart.jpg" target="_blank">View Full Organizational Chart</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ASSESSMENT & QUALITY */}
      <AnimatedSection id="assessment" className="bg-slate-50">
        <div className="wrapper py-20">
          <motion.h2 variants={itemVariants} className="text-2xl font-medium mb-10">Accredited Assessment Center</motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={itemVariants} className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-medium">Assessment Fees</h3>
              <p className="mt-4 text-slate-600">Transparent and TESDA-approved assessment fees for all qualifications.</p>
              <Button size='lg' asChild className="mt-6">
                <a href="/documents/assessment-fee-2024.pdf" target="_blank">Download Assessment Fees</a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-medium">Assessment Services</h3>
              <p className="mt-4 text-slate-600">Dedicated to providing high-quality, reliable assessment services for our accredited programs.</p>
              <Button size='lg' asChild className="mt-6" variant="outline">
                <a href="/programs">View Programs</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CITIZEN'S CHARTER */}
      <AnimatedSection id="citizen-charter" className="bg-white">
        <div className="wrapper py-20">
          <motion.h2 variants={itemVariants} className="text-2xl font-medium mb-10">Citizen's Charter</motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={itemVariants} className="bg-slate-50 p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p className="text-slate-600 leading-relaxed">By 2028, RNIT will become a Polytechnic Institute providing professional education, skills training and lifelong learning for Romblon.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-slate-50 p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <p className="text-slate-600 leading-relaxed">To provide students with professional, practical, and positive learning experiences so they become competent, valuable individuals, maximizing their career opportunities and academic pathways.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-slate-50 p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold mb-4">Core Values (RNIT)</h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>R</strong> - Responsive to the needs of the community</li>
                <li><strong>N</strong> - Nurturing changes towards quality</li>
                <li><strong>I</strong> - Integrity as public servants</li>
                <li><strong>T</strong> - Transparency, Teamwork, Timely</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-3 bg-slate-50 p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold mb-4">Service Commitment</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                RNIT is committed to providing accessible, inclusive, and quality technical and vocational education training (TVET) that equips individuals with the skills and competencies needed to succeed in the job market and contribute to national development.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We pledge to maintain transparency, accountability, and excellence in all our operations, ensuring that every student and stakeholder receives the highest standard of service.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

// Internal Helper Component for Vision/Mission cards
function Card({ title, content, items }: { title: string; content?: string; items?: string[] }) {
  return (
    <motion.div variants={itemVariants} className="bg-white p-8 shadow-sm border border-slate-100">
      <h3 className="text-2xl font-medium">{title}</h3>
      {content && <p className="mt-4 text-slate-600 leading-relaxed">{content}</p>}
      {items && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          {items.map(item => <li key={item}>{item}</li>)}
        </ul>
      )}
    </motion.div>
  );
}