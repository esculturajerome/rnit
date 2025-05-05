import { ArrowRight } from "lucide-react"; // Removed unused ArrowUpRight

import { Badge } from "@/components/ui/badge"; // Badge is unused, consider removing if not needed later
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Link is unused, consider removing if not needed later
import Image from "next/image";

import HeroImage from "@/public/images/hero-transparent.png";

const Hero = ({ }) => {
    return (
        <div className="relative wrapper__wide flex flex-col lg:flex-row lg:pb-0 lg:h-[70vh] overflow-hidden">
            {/* Content Section */}
            <div className="flex flex-col items-center z-10 w-full px-4 lg:px-8 order-2 lg:order-1 lg:w-1/2 lg:items-end lg:justify-center">
                {/* Adjusted padding/margins for better alignment */}
                <div className="mb-0 lg:max-w-lg bg-white py-12 lg:px-8 lg:border-b-4 border-secondary space-y-4 lg:space-y-8 lg:ml-0 lg:mt-0">
                    <h2 className="max-w-lg text-3xl font-bold tracking-tight text-primary sm:text-4xl sm:leading-none">
                        Undertake direct training activities for TESDA
                    </h2>
                    <p className="max-w-sm text-gray-700 text-lg">
                        Skilling Romblon thru quality TVET Delivery for Peoples Prosperity
                    </p>
                    <div className="flex items-center gap-4">
                        <div>
                            <Button variant="secondary" asChild className="w-full sm:w-auto">
                                <a href="/enrolment">Enrol now</a>
                            </Button>
                        </div>
                        {/* Changed Button to use Link component for internal navigation */}
                        <Button variant="link" asChild className="w-full sm:w-auto text-primary p-0">
                            <Link href="/programs" className="flex items-center group">
                                <span className="relative z-10 transition-all duration-300 group-hover:text-primary/80">
                                    Learn more
                                </span>
                                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Image Section - Adjusted for full height/width */}
            <div className="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2 order-1 lg:order-2">
                {/* Removed intermediate div and applied object-cover directly */}
                {HeroImage && (
                    <Image
                        src={HeroImage}
                        alt="Hero image"
                        fill // Use fill layout to cover the parent container
                        style={{ objectFit: "cover" }} // Use cover to fill space, cropping if needed
                        // objectFit="contain" // Use contain if you want to see the whole image without cropping
                        placeholder="blur"
                        priority
                        // Removed width/height props as they are not needed with layout="fill"
                        // Added sizes attribute for optimization
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                )}
            </div>
        </div>
    );
};

export { Hero };
