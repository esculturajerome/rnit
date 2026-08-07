"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

const GOALS = [
  {
    id: "01",
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
    id: "02",
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
    id: "03",
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
    id: "04",
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

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % GOALS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + GOALS.length) % GOALS.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  // autoplay removed: user requested manual navigation only

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-10%" : "10%",
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "10%" : "-10%",
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <section className="w-full bg-background py-10 md:py-16 lg:py-24">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col justify-start order-2 lg:order-1 pt-4">
            <div className="space-y-1 mb-8">
              <h2 className="tracking-tight text-3xl font-medium md:text-4xl lg:text-5xl text-foreground">
                RNIT Strategic Goals
              </h2>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.3em] block ml-0.5">
                (STRATEGIC GOALS)
              </span>
            </div>

            <div className="flex flex-col rounded-2xl border border-border/80 bg-white/80 shadow-sm backdrop-blur-md overflow-hidden">
              {GOALS.map((goal, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={goal.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-300 border-t border-border/50 first:border-0 px-6",
                      isActive
                        ? "text-foreground bg-slate-50"
                        : "text-muted-foreground/70 hover:text-foreground"
                    )}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-muted">
                      {isActive && <div className="absolute left-0 top-0 h-full w-full bg-foreground" />}
                    </div>

                    <span className="text-[10px] font-medium mt-1 tabular-nums opacity-60">/{goal.id}</span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
                        {goal.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-start h-full order-1 lg:order-2">
            <div className="relative">
              <div className="relative rounded-2xl bg-white border border-border/50 p-8">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full h-full"
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{GOALS[activeIndex].title}</h3>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="font-semibold text-slate-900">Objectives</p>
                        <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-2">
                          {GOALS[activeIndex].objectives.map((o) => (
                            <li key={o}>{o}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">Strategic Actions</p>
                        <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-2">
                          {GOALS[activeIndex].actions.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-background/85 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-all active:scale-95"
                    aria-label="Previous"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-background/85 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-all active:scale-95"
                    aria-label="Next"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
