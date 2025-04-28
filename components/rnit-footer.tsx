// components/rnit-footer.tsx
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"; // Import Dialog components

import SealImage from "@/public/images/transparency_seal.webp"
import bg_pattern from "@/public/images/bg_pattern.png"
import { ArrowRight } from "lucide-react";

interface MenuItem {
    title: string;
    links: {
        text: string;
        url: string;
    }[];
}
interface footerCards {
    title: string;
    subText?: string;
    url?: string; // Keep url for now, but it won't be used for navigation here
}
interface FooterProps {
    tagline?: string;
    footerCards?: footerCards[];
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
        text: string;
        url: string;
    }[];
}

const Footer = ({
    tagline = "A Transparency Seal, prominently displayed on the main page of the website of a particular government agency, is a certificate that it has complied with the requirements of Section 93. This Seal links to a page within the agency’s website which contains an index of downloadable items of each of the above-mentioned documents.",
    menuItems = [
        {
            title: "Programs",
            links: [
                { text: "Automotive Servicing", url: "/programs#automotive-servicing-nc-ii" },
                { text: "Dressmaking", url: "/programs#dressmaking-nc-ii" },
                { text: "RAC Servicing", url: "/programs#rac-servicing-nc-ii" },
                { text: "Metal Arc Welding", url: "/programs#shielded-metal-arc-welding-nc-ii" },
                { text: "Food and Beverage Services", url: "/programs#food-and-beverage-services-nc-ii" },
                { text: "Bread and Pastry Production", url: "/programs#bread-and-pastry-production-nc-ii" },
                { text: "Driving", url: "/programs#driving-nc-ii" },
                { text: "Agricultural Crops Production", url: "/programs#agricultural-crops-production-nc-ii" },
            ],
        },
        {
            title: "About Us",
            links: [
                { text: "Meet our team", url: "/about#meetourteam" },
                { text: "Organizational Chart", url: "/about#orgchart" },
                { text: "Assessment Center", url: "/about#assessmentCenter" },
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
                { text: "Facebook", url: "https://www.facebook.com/DiutuRNITyTechnicalExcellence/" }, // Added FB link example
            ],
        },
    ],
    footerCards = [
        {
            title: "Vision",
            url: '/about',
            subText:
                "Skilling Romblon thru quality TVET Delivery for Peoples Prosperity.",
        },
        {
            title: "Mission",
            url: '/about',
            subText:
                "Equipping the province with competent, flexible, economically stable and dignified human resources for domestic and global demands.",
        },
        {
            title: "Philosophy",
            url: '/about',
            subText:
                "An institution that nurtures the total development of the Filipino youth, rich in knowledge, competent in their skills and imbued with positive attitude and work-values; whose program and services reflect the needs of its clientele and that of the greater community it servers; a school that is student centered enabling them to grow into producing, responsible, and loving individuals.",
        },
        {
            title: "Values Statement",
            url: '/about',
            subText:
                "We believe in competence, integrity, high level of commitment, transparency, 5S, strong desire for improvement, teamwork and cooperation.",
        },
    ],
    copyright = "© 2025 rnit-test.org. All rights reserved.",
    bottomLinks = [
        { text: "Developed by: Escultura", url: "https://jescultura.com/" },
    ],
}: FooterProps) => {
    return (
        <section className="wrapper__wide">
            <div className="relative w-full h-auto py-16 md:py-24"> {/* Adjusted height to auto + padding */}
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bg_pattern}
                        alt="Background"
                        fill // Use fill prop
                        // Removed style and objectPosition props
                        className="object-cover object-center" // Use Tailwind classes
                        priority // Add priority if above the fold
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex justify-center items-center h-full" id="mission">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:w-10/12">
                        {footerCards.map((card, index) => (
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col" key={index}> {/* Added flex flex-col */}
                                <h2 className="text-xl font-semibold">{card.title}</h2>
                                <p className="line-clamp-3 mt-2 mb-4 flex-grow">{card.subText}</p> {/* Added flex-grow */}

                                {/* --- Dialog Implementation --- */}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div>
                                            <Button variant="link" className="w-full sm:w-auto text-primary p-0">
                                                <div className="flex items-center group">
                                                    <span className="relative z-10 transition-all duration-300 group-hover:text-primary/80">
                                                        Read more
                                                    </span>
                                                    <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </div>
                                            </Button>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>{card.title}</DialogTitle>
                                        </DialogHeader>
                                        {/* Use DialogDescription or just a p tag for the content */}
                                        <div className="py-4">
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {card.subText}
                                            </p>
                                        </div>
                                        {/* Optional Footer for the Dialog */}
                                        {/* <DialogFooter>
                                            <Button type="button" onClick={() => {}}>Close</Button>
                                        </DialogFooter> */}
                                    </DialogContent>
                                </Dialog>
                                {/* --- End Dialog Implementation --- */}

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-6 lg:pt-32 lg:pb-12 bg-primary text-white">
                <footer className="wrapper">
                    <div className="grid grid-cols-2 gap-14 lg:grid-cols-5">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <div className="w-16 h-16 lg:w-24 lg:h-24 relative">
                                    <Image
                                        src={SealImage}
                                        alt="seal"
                                        fill // Use fill
                                        style={{ objectFit: "contain" }} // Use style
                                        sizes="(max-width: 1024px) 64px, 96px" // Provide sizes
                                    />
                                </div>
                            </div>
                            <p className="mt-4 md:w-10/12">{tagline}</p>
                        </div>
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-6 font-semibold text-xl">{section.title}</h3>
                                <ul className="space-y-2"> {/* Reduced spacing */}
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}> {/* Wrap in li */}
                                            {/* Use Link for internal navigation, a for external */}
                                            <Button asChild variant="link" className="p-0 h-auto text-gray-300 hover:text-white font-normal text-left justify-start">
                                                <Link href={link.url} target={link.url.startsWith('http') || link.url.startsWith('mailto:') || link.url.startsWith('tel:') ? '_blank' : '_self'}>
                                                    {link.text}
                                                </Link>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 lg:mt-24 flex flex-col justify-between gap-4 pt-8 text-sm font-medium text-muted-foreground border-t border-gray-200 md:flex-row md:items-center"> {/* Adjusted text color and added border */}
                        <p className="text-gray-200">{copyright}</p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white"> {/* Added target and rel */}
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export { Footer };
