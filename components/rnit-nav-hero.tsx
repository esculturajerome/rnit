"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

import { Button } from "./ui/button"
import TrainingGroupImage from "@/public/images/training-group-2.png"

export function RnitNavHero() {
  // Animation Variants for hero content
  const textContainer: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="relative w-full">
      {/* Hero Section - Full Width with Background Image */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={TrainingGroupImage}
            alt="Training Group"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content - Mission & Vision */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={textContainer}
        >
          {/* Vision Section */}
          <motion.div variants={item} className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-tight md:leading-relaxed">
              By 2028, RNIT will become a Polytechnic Institute providing professional education, skills training and lifelong learning for Romblon.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={item}
            className="w-20 h-1 bg-secondary mb-12"
          />

          {/* Mission Section */}
          <motion.div variants={item} className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-tight md:leading-relaxed">
              To provide students with professional, practical, and positive learning experiences so they become competent, valuable individuals, maximizing their career opportunities and academic pathways.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size='lg' asChild className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/enrollment">Enroll Now</Link>
            </Button>
          </motion.div>
        </motion.div>

      </section>
    </div>
  )
}
