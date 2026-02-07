'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface FullWidthProps {
  title: string;
  subtext: string;
}

export default function FullWidth({ title, subtext }: FullWidthProps) {
  return (
    <section className="relative wrapper__wide h-[300px] lg:h-[400px] overflow-hidden">
      {/* Background Image with professional fade-in/scale */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src='/images/training-group.png'
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 md:bg-black/25" />
      </motion.div>

      {/* Text Container - Same position as original */}
      <div className="absolute inset-0 flex flex-col justify-start items-start px-6 md:px-16 lg:px-32 text-white mt-12 hidden md:flex">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg max-w-xl">
            {subtext}
          </p>
        </motion.div>
      </div>
    </section>
  );
}