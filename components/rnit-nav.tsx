// components/rnit-nav.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react" // Import X for the close button

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet"

import RNITLogo from "@/public/RNIT-logo.webp";

export function RnitNav() {
    const navLinks = [
        { href: "/programs", label: "Programs" },
        { href: "/blogs", label: "Blogs" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
        // Add the header links here for mobile consistency
        { href: "/enrolment", label: "Online Enrolment" },
        { href: "/assessment", label: "Online Assessment" },
    ];

    return (
        // Keep existing wrapper and background for the main nav bar
        <NavigationMenu className="wrapper__wide bg-primary !px-0 py-3 sticky top-0 z-50"> {/* Added sticky, top-0, z-50, shadow */}
            <div className="wrapper flex justify-between items-center ">
                <Link href="/" className="inline-flex items-center cursor-pointer shrink-0 mr-4">
                    <Image
                        src={RNITLogo}
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                        alt="logo"
                        priority // Prioritize logo loading
                    />
                    <h2 className="ml-3 uppercase text-xs font-medium md:text-sm text-white tracking-wider">
                        Romblon National <br />
                        Institute of Technology
                    </h2>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-2">
                    {/* Filter out the enrolment/assessment links for desktop view */}
                    {navLinks.filter(link => !["/enrolment", "/assessment"].includes(link.href)).map((link) => (
                        <Button variant='ghost' key={link.href} asChild>
                            <Link href={link.href}>
                                {link.label}
                            </Link>
                        </Button>
                        //     <Button key={link.href} variant="link" className="p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded" asChild>
                        //     <Link href={link.href}>
                        //         {link.label}
                        //     </Link>
                        // </Button>
                    ))}
                </div>

            </div>


            {/* Mobile Navigation Trigger */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    {/* --- Mobile Drawer Content --- */}
                    <SheetContent
                        side="top"
                        className="w-full h-auto bg-primary text-white border-b border-white/20 p-6 flex flex-col" // Change background, text, border, padding, make full width, auto height
                    >
                        <SheetHeader className="flex flex-row justify-between items-center mb-6">
                            <SheetTitle className="text-white hidden">Romblon National Institute of Technology</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col space-y-3"> {/* Adjusted spacing */}
                            {navLinks.map((link) => (
                                <SheetClose key={link.href} asChild>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "block px-3 py-3 rounded-md text-base font-medium", // Adjusted padding
                                            "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary" // Adjusted hover/focus
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </SheetClose>
                            ))}
                        </nav>
                        <SheetFooter className="mt-8 pt-6 border-t border-white/20"> {/* Adjusted margin, added border */}
                            <p className="text-sm text-white/70 text-center w-full">© {new Date().getFullYear()} RNIT</p> {/* Adjusted text color and centering */}
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </NavigationMenu>
    )
}
