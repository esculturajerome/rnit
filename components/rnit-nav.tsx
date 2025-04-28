// components/rnit-nav.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react" // Import Menu icon

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    // Removed unused imports like NavigationMenuContent, etc.
    // Keep NavigationMenuLink if ListItem is used, otherwise remove
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import {
    Sheet,
    SheetContent,
    SheetClose, // Import SheetClose
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet" // Import Sheet components

import RNITLogo from "@/public/RNIT-logo.webp";

// Removed unused 'components' array and 'ListItem' component

export function RnitNav() {
    const navLinks = [
        { href: "/programs", label: "Programs" },
        { href: "/blogs", label: "Blogs" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        // Use NavigationMenu primarily as a container for layout consistency
        <NavigationMenu className="wrapper__wide bg-primary p-3 lg:px-8 flex justify-between items-center">
            {/* Logo and Title */}
            <Link href="/" className="inline-flex items-center cursor-pointer shrink-0 mr-4"> {/* Added shrink-0 and mr-4 */}
                <Image
                    src={RNITLogo}
                    width={50}
                    height={50}
                    style={{ objectFit: "contain" }} // Use style for objectFit
                    alt="logo"
                />
                <h2 className="ml-3 uppercase text-xs font-medium md:text-sm text-white tracking-wider">
                    Romblon National <br />
                    Institute of Technology
                </h2>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-2 items-center"> {/* Reduced gap */}
                {navLinks.map((link) => (
                    <Button key={link.href} href={link.href} variant="link" className="font-medium text-white hover:text-gray-200 px-3"> {/* Use link variant */}
                        {link.label}
                    </Button>
                ))}
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[280px] bg-white text-primary border-l-gray-700 pt-10">
                        <SheetHeader className="text-left mb-6">
                            <SheetTitle className="text-white hidden">Menu</SheetTitle>
                            {/* Optional: <SheetDescription>Navigate the site</SheetDescription> */}
                        </SheetHeader>
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <SheetClose key={link.href} asChild>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </SheetClose>
                            ))}
                        </nav>
                        <SheetFooter className="mt-auto pt-6">
                            <p className="text-sm text-gray-400">© 2025 RNIT</p>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </NavigationMenu>
    )
}
