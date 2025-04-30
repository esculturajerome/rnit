// components/rnit-nav.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

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
    ];

    return (
        <NavigationMenu className="wrapper__wide bg-primary p-3 lg:px-8 flex justify-between items-center">
            <Link href="/" className="inline-flex items-center cursor-pointer shrink-0 mr-4">
                <Image
                    src={RNITLogo}
                    width={50}
                    height={50}
                    style={{ objectFit: "contain" }}
                    alt="logo"
                />
                <h2 className="ml-3 uppercase text-xs font-medium md:text-sm text-white tracking-wider">
                    Romblon National <br />
                    Institute of Technology
                </h2>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8">
                {navLinks.map((link) => (
                    // Use Link as the child of Button when asChild is true
                    <Button key={link.href} variant="link" className="p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
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
