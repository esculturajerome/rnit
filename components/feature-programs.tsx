'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { PROGRAMS_DATA } from "@/data/programs";
import TitleRow from "./title-row";
import { Button } from "./ui/button";
import bg_pattern from "@/public/images/bg_pattern.png";

const createSlug = (title: string): string =>
    title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface FeatureProgramsProps {
    title?: string;
    subText?: string;
    showTitleRow?: boolean;
    showViewAllButton?: boolean;
    maxItems?: number;
}

export const FeaturePrograms = ({
    title = "Programs Offered",
    subText = "TESDA-accredited programs designed for practical skills and employment readiness.",
    showTitleRow = true,
    showViewAllButton = true,
    maxItems = 8,
}: FeatureProgramsProps) => {
    const programs = PROGRAMS_DATA.slice(0, maxItems);

    if (!programs.length) return null;

    return (
        <section className="relative w-full py-12 lg:py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={bg_pattern}
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-5"
                />
            </div>

            <div className="wrapper relative z-10 mx-auto">
                {showTitleRow && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <TitleRow title={title} subText={subText} />
                    </motion.div>
                )}

                {/* Programs Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    {programs.map((program) => (
                        <motion.div
                            key={program.id}
                            variants={itemVariants}
                            className="group relative aspect-square overflow-hidden bg-slate-900"
                        >
                            {/* Image with subtle zoom on hover */}
                            {program.image1 && (
                                <Image
                                    src={program.image1}
                                    alt={program.title}
                                    fill
                                    className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            )}

                            {/* Refined Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                            {/* Content */}
                            <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                                <div className="flex justify-between items-start">
                                    <BookOpenCheck className="h-8 w-8 stroke-1 text-secondary transition-transform duration-300 group-hover:-translate-y-1" />
                                    <div className="h-6 w-6  border border-white/20 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                        <ArrowRight className="h-3 w-3" />
                                    </div>
                                </div>

                                <div>
                                    <Link href={`/programs/${createSlug(program.title)}`} className="focus:outline-none">
                                        <h3 className="line-clamp-2 text-xl font-bold tracking-tight mb-2 group-hover:text-secondary transition-colors">
                                            {program.title}
                                        </h3>
                                    </Link>

                                    <Link
                                        href={`/programs/${createSlug(program.title)}`}
                                        className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                    >
                                        Explore details
                                        <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                {showViewAllButton && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 text-center"
                    >
                        <Button size="lg" className=" px-8 shadow-lg hover:shadow-secondary/20" asChild>
                            <Link href="/programs">
                                View All Programs
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};