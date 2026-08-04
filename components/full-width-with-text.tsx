'use client';

import Image from 'next/image'
import groupphoto from "@/public/images/training-group-2.png";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { Button } from './ui/button';

interface FullWidthWithTextProps {
  title?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function FullWidthWithText({
  title = "Behind Every Successful Student",
  subtext = "Dedicated instructors and staff guiding students to success",
  buttonText = "",
  buttonHref = "",
  imageSrc,
  imageAlt = "TESDA Training Group",
}: FullWidthWithTextProps) {
  const textContainer: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative wrapper__wide h-[200px] md:h-[500px] lg:h-[550px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc ? imageSrc : groupphoto}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 flex-col justify-start items-start px-6 md:px-16 lg:px-32 mt-20 hidden md:flex">
        <motion.div
          className='bg-white text-black w-2xl p-4 px-6'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textContainer}
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-medium mb-2">
            {title}
          </motion.h2>
          <motion.p variants={item} className="text-base md:text-lg max-w-xl">
            {subtext}
          </motion.p>

          {buttonText && (
            <motion.div variants={item}>
              <Button variant="link" className="p-0! h-auto text-black hover:text-black/80 focus:outline-none focus:ring-2 rounded group" asChild>
                <Link href={buttonHref} className="flex items-center font-semibold">
                  {buttonText}
                  <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
