
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";


import SealImage from "@/public/images/transparency_seal.webp"


interface MenuItem {
    title: string;
    links: {
        text: string;
        url: string;
    }[];
}


interface FooterProps {
    tagline?: string;

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
                { text: "Facebook", url: "https://www.facebook.com/DiutuRNITyTechnicalExcellence/" },
            ],
        },
    ],

    copyright = "© 2025 rnit-test.org. All rights reserved.",
    bottomLinks = [
        { text: "Developed by: Escultura", url: "https://jescultura.com/" },
    ],
}: FooterProps) => {
    return (
        <section className="wrapper__wide">
            <div className="py-6 lg:pt-16 lg:pb-12 bg-primary text-white">
                <footer className="wrapper">
                    <div className="grid grid-cols-2 gap-14 lg:grid-cols-5">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <div className="w-16 h-16 lg:w-24 lg:h-24 relative">
                                    <Image
                                        src={SealImage}
                                        alt="seal"
                                        fill
                                        style={{ objectFit: "contain" }}
                                        sizes="(max-width: 1024px) 64px, 96px"
                                    />
                                </div>
                            </div>
                            <p className="mt-4 md:w-10/12">{tagline}</p>
                        </div>
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-6 font-semibold text-xl">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
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
                    <div className="mt-12 lg:mt-24 flex flex-col justify-between gap-4 pt-8 text-sm font-medium text-muted-foreground border-t border-gray-200 md:flex-row md:items-center">
                        <p className="text-gray-200">{copyright}</p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
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
