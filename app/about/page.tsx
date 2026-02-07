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
      <AnimatedSection id="vision-mission" className="bg-slate-50">
        <div className="wrapper py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <Card title="Vision" content="By 2030, RNIT will become a polytechnic institution providing quality technical education and skills training." />
            <Card title="Mission" content="To provide students with professional, ethical, and industry-relevant technical skills." />
            <Card title="Core Values" items={['Integrity', 'Excellence', 'Service']} />
            <Card title="Organizational Culture" items={['Transparency', 'Teamwork', 'Accountability']} />
          </div>
        </div>
      </AnimatedSection>

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
                src="/images/2025-org-chart.jpg"
                alt="Organizational Structure"
                fill
                className="transition-transform duration-500 hover:scale-105 object-cover"
              />
            </div>
            <div className="mt-6">
              <Button size='lg' asChild>
                <a href="/images/2025-org-chart.jpg" target="_blank">View Full Organizational Chart</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ASSESSMENT & QUALITY */}
      <AnimatedSection id="assessment" className="bg-slate-50">
        <div className="wrapper py-20">
          <motion.h2 variants={itemVariants} className="text-2xl font-medium mb-10">Assessment & Quality Assurance</motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={itemVariants} className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-medium">Assessment Fees</h3>
              <p className="mt-4 text-slate-600">Transparent and TESDA-approved assessment fees for all qualifications.</p>
              <Button size='lg' asChild className="mt-6">
                <a href="/documents/assessment-fee-2024.pdf" target="_blank">Download PDF</a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-medium">RNIT Assessment Center</h3>
              <p className="mt-4 text-slate-600">Dedicated to providing high-quality, reliable assessment services.</p>
              <Button size='lg' asChild className="mt-6" variant="outline">
                <a href="/images/assessment-mission.jpg" target="_blank">View Programs</a>
              </Button>
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