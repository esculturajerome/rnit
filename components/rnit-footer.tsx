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
                { text: "ant@tesda.gov.ph", url: "mailto:ant@tesda.gov.ph" },
                { text: "09985731845", url: "tel:09985731845" },
                { text: "09487705807", url: "tel:09487705807" },
                { text: "Facebook", url: "https://www.facebook.com/DiutuRNITyTechnicalExcellence/" },
            ],
        },
    ],
    copyright = "© 2026 rnit-tesda.org. All rights reserved.",
}: FooterProps) => {
    return (
        <footer className="wrapper__wide bg-primary text-white">
            <div className="wrapper pt-12 pb-4">
                {/* Top */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Seal + Tagline */}
                    <div>
                        <div className="relative h-20 w-20">
                            <Image
                                src={RNITLogo}
                                alt="Transparency Seal"
                                fill
                                className="object-contain"
                                sizes="96px"
                            />
                        </div>
                        <p className="mt-4 text-sm text-gray-200 max-w-xs">
                            Romblon National Institute of Technology
                        </p>
                    </div>

                    {/* Columns 2–4: Menus */}
                    {menuItems.map((menu) => (
                        <div key={menu.title}>
                            <h3 className="mb-4 text-lg font-semibold">
                                {menu.title}
                            </h3>

                            <ul className="space-y-2">
                                {menu.links.map((link) => (
                                    <li key={link.text}>
                                        <Button
                                            asChild
                                            variant="link"
                                            className="p-0 h-auto text-gray-300 hover:text-white justify-start"
                                        >
                                            <Link
                                                href={link.url}
                                                target={isExternal(link.url) ? "_blank" : undefined}
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
                {/* <div className="mt-12 flex flex-col md:items-center md:text-center">
                    <div className="relative h-20 w-20 ">
                        <Image
                            src={SealImage}
                            alt="Transparency Seal"
                            fill
                            className="object-contain"
                            sizes="96px"
                        />
                    </div>
                    <p className="mt-4 text-sm text-gray-200 max-w-2xl">
                        {tagline}
                    </p>
                </div> */}

                {/* Bottom */}
                <div className="mt-10 border-t border-white/20 pt-6  text-gray-300 flex justify-between">
                    <p className="text-sm">{copyright}</p>
                    <p className="text-sm">Developed and maintained by <span className="font-semibold underline">Escultura</span></p>
                </div>
            </div>
        </footer>
    )
}
