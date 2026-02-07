'use client';

import { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Building from "@/public/images/building.png";
import ContactForm from "@/components/rnit-contact-form";

// Note: Metadata must be in a separate layout file or a server component 
// if you want to keep 'use client' here. For simplicity in this file:
// export const metadata = { ... } (This only works in Server Components)

export default function ContactPage() {
  return (
    <div className="wrapper__wide overflow-hidden">
      <div className="relative h-[600px] lg:h-[80vh] flex-col items-center lg:justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">

        {/* Left Side: Image with Slide-in from left */}
        <motion.div
          className="hidden lg:block relative h-full w-full bg-muted"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={Building}
              alt="Building Office"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Subtle Overlay to make it look premium */}
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </motion.div>

        {/* Right Side: Contact Form with Fade-up */}
        <motion.div
          className="wrapper"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
            <div className="flex flex-col space-y-2 text-center lg:text-left">
              <h1 className="text-3xl font-semibold tracking-tight">
                Get in touch
              </h1>
              <p className="text-sm text-muted-foreground">
                Have questions about our programs? Send us a message and we&apos;ll get back to you shortly.
              </p>
            </div>

            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}