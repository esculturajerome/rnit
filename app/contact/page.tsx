import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"

import Building from "@/public/images/building.png";
import ContactForm from "@/components/rnit-contact-form"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <div className="wrapper__wide">
      <div className="relative h-[600px] lg:h-[80vh] flex-col items-center lg:justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="hidden lg:block relative h-full w-full">
          <div className="absolute inset-0 z-0">
            <Image
              src={Building}
              alt="Background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
