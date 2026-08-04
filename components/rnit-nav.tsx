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
        { href: "/events", label: "Events" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
        // Add the header links here for mobile consistency
        // { href: "/enrolment", label: "Online Enrolment" },
        // { href: "/assessment", label: "Online Assessment" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                <div className="text-xl font-bold tracking-tight text-blue-900">RNIT</div>
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <a href="/asessment" className="hidden text-sm font-semibold text-slate-600 transition-colors hover:text-primary md:block uppercase">
                        Online Assessment
                    </a>
                    <Button asChild size="sm" className="rounded-md bg-primary text-white hover:bg-primary/90">
                        <Link href='/enrolment'>Enroll in Program</Link>
                    </Button>
                </div>

            </div>
        </header>
    )
}
