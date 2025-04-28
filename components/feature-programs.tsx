// components/feature-programs.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenCheck } from "lucide-react"; // Added an icon

import { PROGRAMS_DATA, Program } from "@/data/programs"; // Import data and type
import TitleRow from "./title-row"; // Reusable title component
import { Button } from "./ui/button"; // Use shadcn Button
import { cn } from "@/lib/utils"; // Import cn utility

// Helper function to create a URL-friendly slug from a title
const createSlug = (title: string): string => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};

// Define props for the component
interface FeatureProgramsProps {
    maxPrograms?: number; // How many programs to show
    showTitleRow?: boolean; // Whether to show the section title
    title?: string;
    subText?: string;
    badgeText?: string;
    showViewAllButton?: boolean; // Added prop to control button visibility
}

export const FeaturePrograms = ({
    maxPrograms = 3, // Default to showing 3 programs
    showTitleRow = true,
    title = "Featured Programs",
    subText = "Explore some of the key programs we offer.",
    badgeText = "Programs",
    showViewAllButton = true, // Default to showing the button
}: FeatureProgramsProps) => {
    // Select the programs to feature
    const featuredPrograms = PROGRAMS_DATA.slice(0, maxPrograms);

    if (featuredPrograms.length === 0) {
        return (
            <div className="w-full py-10 lg:py-20">
                <div className="wrapper mx-auto">
                    {showTitleRow && <TitleRow badge={badgeText} title={title} subText={subText} />}
                    <p className="text-muted-foreground text-center mt-10">No programs available to feature.</p>
                </div>
            </div>
        );
    }

    // Determine featured program (first one) and regular programs
    const featuredProgram = featuredPrograms.length > 0 ? featuredPrograms[0] : null;
    const regularPrograms = featuredPrograms.length > 1 ? featuredPrograms.slice(1) : [];

    return (
        <div className="w-full py-10 lg:py-20 bg-muted/40"> {/* Optional: Keep or remove background */}
            <div className="wrapper mx-auto">
                {/* Conditionally render TitleRow */}
                {showTitleRow && <TitleRow badge={badgeText} title={title} subText={subText} />}

                {/* Grid layout similar to FeatureBlogs */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* Featured Program */}
                    {featuredProgram && regularPrograms.length > 0 && (
                        <div className="relative h-full w-full rounded-md aspect-square overflow-hidden sm:col-span-2 lg:col-span-2 lg:row-span-2 group">
                            {/* Background Image */}
                            {featuredProgram.image1 && (
                                <Image
                                    src={featuredProgram.image1}
                                    alt={featuredProgram.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                    className="z-0 transition-transform duration-300 group-hover:scale-105"
                                    priority // Prioritize loading the largest image
                                />
                            )}
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>

                            {/* Content */}
                            <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                <BookOpenCheck className="w-8 h-8 stroke-1 text-gray-300" /> {/* Icon */}
                                <div className="flex flex-col">
                                    <Link href={`/programs#${createSlug(featuredProgram.title)}`} className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight hover:underline line-clamp-2">
                                            {featuredProgram.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-200 mt-1 line-clamp-3">
                                        {featuredProgram.subText}
                                    </p>
                                    <div className="mt-4">
                                        <Button href={`/programs#${createSlug(featuredProgram.title)}`} variant="link" className="p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                                            <div className="flex items-center">
                                                Learn more
                                                <ArrowRight className="ml-2 size-4" />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Render the first program as a regular card if it's the only one */}
                    {featuredProgram && regularPrograms.length === 0 && (
                        <div key={featuredProgram.id} className="relative h-full rounded-md aspect-square overflow-hidden group sm:col-span-2 lg:col-span-2 xl:col-span-2"> {/* Adjust span */}
                            {/* Background Image */}
                            {featuredProgram.image1 && (
                                <Image
                                    src={featuredProgram.image1}
                                    alt={featuredProgram.title}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    style={{ objectFit: "cover" }}
                                    className="z-0 transition-transform duration-300 group-hover:scale-105"
                                />
                            )}
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                            {/* Content */}
                            <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                <BookOpenCheck className="w-8 h-8 stroke-1 text-gray-300" />
                                <div className="flex flex-col">
                                    <Link href={`/programs#${createSlug(featuredProgram.title)}`} className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                                        <h3 className="text-lg font-semibold tracking-tight hover:underline line-clamp-2">
                                            {featuredProgram.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-200 max-w-xs text-sm mt-1 line-clamp-2">
                                        {featuredProgram.subText}
                                    </p>
                                    <div className="mt-3">
                                        <Button href={`/programs#${createSlug(featuredProgram.title)}`} variant="link" className="p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                                            <div className="flex items-center">
                                                Learn more
                                                <ArrowRight className="ml-2 size-4" />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Regular Programs */}
                    {regularPrograms.map((program) => (
                        <div key={program.id} className="relative h-full rounded-md aspect-square overflow-hidden group">
                            {/* Background Image */}
                            {program.image1 && (
                                <Image
                                    src={program.image1}
                                    alt={program.title}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    style={{ objectFit: "cover" }}
                                    className="z-0 transition-transform duration-300 group-hover:scale-105"
                                />
                            )}
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>

                            {/* Content */}
                            <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                <BookOpenCheck className="w-8 h-8 stroke-1 text-gray-300" /> {/* Icon */}
                                <div className="flex flex-col">
                                    <Link href={`/programs#${createSlug(program.title)}`} className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                                        <h3 className="text-lg font-semibold tracking-tight hover:underline line-clamp-2">
                                            {program.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-200 max-w-xs text-sm mt-1 line-clamp-2">
                                        {program.subText}
                                    </p>
                                    <div className="mt-3">
                                        <Button href={`/programs#${createSlug(program.title)}`} variant="link" className="p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                                            <div className="flex items-center">
                                                Learn more
                                                <ArrowRight className="ml-2 size-4" />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- View All Programs Button --- */}
                {showViewAllButton && (
                    <div className="mt-12 text-center">
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/programs" className="flex items-center group">
                                View All Programs
                                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                )}
                {/* --- End Button --- */}

            </div>
        </div>
    );
};
