'use client';

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/images/hero-transparent.png";

const Hero = () => {
    // Animation Variants
    const textContainer = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { staggerChildren: 0.1, duration: 0.5, ease: "easeOut" }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="relative wrapper__wide flex flex-col lg:flex-row lg:pb-0 lg:h-[70vh] overflow-hidden">
            {/* Content Section */}
            <motion.div
                className="flex flex-col items-center z-10 w-full px-4 lg:px-8 order-2 lg:order-1 lg:w-1/2 lg:items-end lg:justify-center"
                initial="hidden"
                animate="visible"
                variants={textContainer}
            >
                <div className="mb-0 lg:max-w-lg bg-white py-12 lg:px-8 lg:border-b-4 border-secondary space-y-4 lg:space-y-8 lg:ml-0 lg:mt-0">
                    <motion.h2 variants={item} className="max-w-lg text-3xl font-medium tracking-tight text-primary sm:text-4xl sm:leading-none">
                        Undertake direct training activities for TESDA
                    </motion.h2>

                    <motion.p variants={item} className="max-w-sm text-lg text-muted-foreground">
                        Skilling Romblon thru quality TVET Delivery for Peoples Prosperity
                    </motion.p>

                    <motion.div variants={item} className="flex items-center gap-4">
                        <Button size='lg' asChild className="w-full sm:w-auto">
                            <a href="/enrolment">Enrol now</a>
                        </Button>

                        <Button variant="link" asChild className="w-auto text-primary p-0">
                            <Link href="/programs" className="flex items-center group">
                                <span className="relative z-10 transition-all duration-300 group-hover:text-primary/80">
                                    Learn more
                                </span>
                                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2 order-1 lg:order-2"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {HeroImage && (
                    <Image
                        src={HeroImage}
                        alt="Hero image"
                        fill
                        className="object-cover"
                        placeholder="blur"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                )}
            </motion.div>
        </div>
    );
};

export { Hero };