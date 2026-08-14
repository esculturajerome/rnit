import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

import SealImage from "@/public/images/transparency_seal.webp"
import RNITLogo from "@/public/RNIT-logo.webp";

interface MenuItem {
    title: string
    links: {
        text: string
        url: string
    }[]
}

interface FooterProps {
    tagline?: string
    menuItems?: MenuItem[]
    copyright?: string
}

const isExternal = (url: string) =>
    url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:")

export const Footer = ({
    tagline = "A Transparency Seal, prominently displayed on the main page of the website of a particular government agency, is a certificate that it has complied with the requirements of Section 93.",
    menuItems = [
        {
            title: "Programs",
            links: [
                { text: "Automotive Servicing", url: "/programs/automotive-servicing-nc-ii" },
                { text: "Dressmaking", url: "/programs/dressmaking-nc-ii" },
                { text: "RAC Servicing", url: "/programs/rac-servicing-nc-ii" },
                { text: "Metal Arc Welding", url: "/programs/shielded-metal-arc-welding-nc-ii" },
                { text: "Food and Beverage Services", url: "/programs/food-and-beverage-services-nc-ii" },
                { text: "Bread and Pastry Production", url: "/programs/bread-and-pastry-production-nc-ii" },
                { text: "Driving", url: "/programs/driving-nc-ii" },
                { text: "Agricultural Crops Production", url: "/programs/agricultural-crops-production-nc-ii" },
                { text: "Accredited Programs", url: "/programs#accredited-programs" },
            ],
        },
        {
            title: "About Us",
            links: [
                { text: "Meet the team", url: "/about#meettheteam" },
                { text: "Organizational Chart", url: "/about#org-structure" },
                { text: "Assessment Center", url: "/about#assessment" },
                { text: "Citizen's Charter", url: "/about/#citizen-charter" },
            ],
        },
        {
            title: "Contact Us",
            links: [
                { text: "Poblacion, Alcantara, Romblon", url: "https://goo.gl/maps/nxYjrUPPdfPnVgx88" },
                { text: "rmit@tesda.gov.ph", url: "mailto:rmit@tesda.gov.ph" },
                { text: "09985731845", url: "tel:09985731845" },
                { text: "09487705807", url: "tel:09487705807" },
                { text: "Facebook", url: "https://www.facebook.com/DiutuRNITyTechnicalExcellence/" },
            ],
        },
    ],
    copyright = "© 2026 rnit-tesda.org. All rights reserved.",
}: FooterProps) => {
    return (
        <footer className="bg-gradient-to-b from-primary to-primary/95 text-white">
            {/* Top Section - Brand & Tagline */}
            <div className="wrapper__wide border-b border-white/10">
                <div className="wrapper py-16 lg:py-20">
                    <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
                        {/* Left: Logo & Description */}
                        <div className="flex flex-col space-y-4">
                            <div className="relative h-16 w-16">
                                <Image
                                    src={RNITLogo}
                                    alt="RNIT Logo"
                                    fill
                                    className="object-contain"
                                    sizes="64px"
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold tracking-wide">Romblon National Institute of Technology</h3>
                                <p className="text-sm text-white/80 leading-relaxed max-w-md">
                                    Skilling Romblon thru quality TVET Delivery for People's Prosperity
                                </p>
                            </div>
                        </div>

                        {/* Right: Seal & Transparency Info */}
                        <div className="flex flex-col space-y-3 lg:border-l lg:border-white/10 lg:pl-8">
                            <div className="relative h-20 w-20">
                                <Image
                                    src={SealImage}
                                    alt="Transparency Seal"
                                    fill
                                    className="object-contain"
                                    sizes="80px"
                                />
                            </div>
                            <p className="text-xs text-white/80 leading-relaxed max-w-md">
                                {tagline}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section - Links Grid */}
            <div className="wrapper__wide border-b border-white/10">
                <div className="wrapper py-16 lg:py-20">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {menuItems.map((menu) => (
                            <div key={menu.title} className="space-y-4">
                                <h3 className="text-lg font-semibold tracking-wider uppercase text-white">
                                    {menu.title}
                                </h3>
                                <ul className="space-y-3">
                                    {menu.links.map((link) => (
                                        <li key={link.text}>
                                            <Button
                                                asChild
                                                variant="link"
                                                className="p-0 h-auto text-white/80 hover:text-white transition-colors duration-200 justify-start text-sm font-normal"
                                            >
                                                <Link
                                                    href={link.url}
                                                    target={isExternal(link.url) ? "_blank" : undefined}
                                                    rel={isExternal(link.url) ? "noopener noreferrer" : undefined}
                                                >
                                                    {link.text}
                                                </Link>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section - Copyright & Credits */}
            <div className="wrapper__wide">
                <div className="wrapper py-8 lg:py-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <p className="text-sm text-white/80">
                            {copyright}
                        </p>
                        <p className="text-sm text-white/80">
                            Designed by{" "}
                            <Link
                                href="https://jeromeeeee.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-white hover text-white/80 transition-colors duration-200"
                            >
                                Jerome
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
