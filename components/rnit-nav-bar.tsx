"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { NavigationMenu } from "@/components/ui/navigation-menu"
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

import RNITLogo from "@/public/RNIT-logo.webp"

export function RnitNavBar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  // Pages that have image backgrounds - should have transparent nav
  const pagesWithBackgroundImage = ["/"]

  // Check if current page has a background image
  const hasBackgroundImage = pagesWithBackgroundImage.includes(pathname)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <NavigationMenu
      className={cn(
        "fixed z-50 flex justify-between items-center px-4 py-3 transition-all duration-300 w-full",
        // For pages with background images, use transparent until scroll
        hasBackgroundImage
          ? "left-1/2 -translate-x-1/2"
          : "left-1/2 -translate-x-1/2",
        // Background styling based on scroll and page type
        hasBackgroundImage && !isScrolled
          ? "bg-transparent"
          : "bg-primary/95 backdrop-blur-md shadow-lg"
      )}
    >
      <div className="wrapper flex justify-between items-center w-full">
        {/* Left: Logo */}
        <Link href="/" className="inline-flex items-center cursor-pointer shrink-0">
          <Image
            src={RNITLogo}
            width={50}
            height={50}
            style={{ objectFit: "contain" }}
            alt="RNIT Logo"
            priority
          />
          <h2 className={cn(
            "ml-3 uppercase text-xs font-medium md:text-sm tracking-wider transition-colors duration-300 text-white"
          )}>
            Romblon National <br />
            Institute of Technology
          </h2>
        </Link>

        {/* Middle: Navigation Links - Desktop only */}
        <div className="hidden lg:flex gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant='ghost'
              asChild
              className={cn(
                "transition-colors duration-300 text-white",
                isScrolled
                  ? "hover:bg-white/20"
                  : "hover:bg-white/10"
              )}
            >
              <Link href={link.href}>
                {link.label}
              </Link>
            </Button>
          ))}
        </div>

        {/* Right: Enrollment & Assessment Buttons */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex gap-2">
            <Button
              size='sm'
              variant='ghost'
              asChild
              className={cn(
                "transition-colors duration-300 text-white",
                isScrolled
                  ? "hover:bg-white/20"
                  : "hover:bg-white/10"
              )}
            >
              <Link href="/enrollment">Enrollment</Link>
            </Button>
            <Button
              size='sm'
              asChild
              className="bg-secondary hover:bg-secondary/90 text-white transition-all duration-300"
            >
              <Link href="/assessment">Assessment</Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "transition-colors duration-300 text-white",
                    isScrolled
                      ? "hover:bg-white/20"
                      : "hover:bg-white/10"
                  )}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="w-full h-auto bg-primary text-white border-b border-white/20 p-6 flex flex-col"
              >
                <SheetHeader className="flex flex-row justify-between items-center mb-6">
                  <SheetTitle className="text-white hidden">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-3 py-3 text-base font-medium",
                          "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link
                      href="/enrollment"
                      className={cn(
                        "block px-3 py-3 text-base font-medium",
                        "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                      )}
                    >
                      Online Enrollment
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/assessment"
                      className={cn(
                        "block px-3 py-3 text-base font-medium",
                        "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                      )}
                    >
                      Online Assessment
                    </Link>
                  </SheetClose>
                </nav>
                <SheetFooter className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/70 text-center w-full">© {new Date().getFullYear()} RNIT</p>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </NavigationMenu>
  )
}
