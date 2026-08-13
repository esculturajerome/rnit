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
      {/* Image Section - Full Width at Top */}
      <motion.div
        className="relative w-full h-64 sm:h-96 lg:h-[30vh] bg-muted"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
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
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </motion.div>

      {/* Contact Form Section - Full Width at Bottom */}
      <motion.div
        className="wrapper py-16 lg:py-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <div className="mx-auto flex w-full flex-col max-w-2xl">
          <div className="flex flex-col space-y-2 mb-8">
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              Get in touch
            </h1>
            <p className="text-base text-muted-foreground max-w-lg">
              Have questions about our programs? Send us a message and we&apos;ll get back to you shortly.
            </p>
          </div>

          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
}