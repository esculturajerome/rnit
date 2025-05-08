// components/feature-programs.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenCheck } from "lucide-react";

import { PROGRAMS_DATA, Program } from "@/data/programs"; // Assuming Program type is exported from here
import TitleRow from "./title-row";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

import bg_pattern from "@/public/images/bg_pattern.png";

const createSlug = (title: string): string => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};

interface FeatureProgramsProps {
    maxPrograms?: number;
    showTitleRow?: boolean;
    title?: string;
    subText?: string;
    badgeText?: string;
    showViewAllButton?: boolean;
    displayMode?: 'featured' | 'uniformTwoColumn'; // New prop for layout control
}

export const FeaturePrograms = ({
    maxPrograms = 3,
    showTitleRow = true,
    title = "Featured Programs",
    subText = "Explore some of the key programs we offer.",
    badgeText = "Programs",
    showViewAllButton = true,
    displayMode = 'featured', // Default to 'featured' layout
}: FeatureProgramsProps) => {
    const programsToDisplay = PROGRAMS_DATA.slice(0, maxPrograms);

    if (programsToDisplay.length === 0) {
        return (
            <div className="w-full py-10 lg:py-20">
                <div className="wrapper mx-auto">
                    {showTitleRow && <TitleRow badge={badgeText} title={title} subText={subText} />}
                    <p className="text-muted-foreground text-center mt-10">No programs available to feature.</p>
                </div>
            </div>
        );
    }

    const featuredProgram = displayMode === 'featured' && programsToDisplay.length > 0 ? programsToDisplay[0] : null;
    const regularPrograms = displayMode === 'featured' && programsToDisplay.length > 1 ? programsToDisplay.slice(1) : [];

    return (
        <div className="wrapper__wide relative w-full py-10 lg:py-20 bg-muted/40">
            {/* Background Pattern Div */}
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src={bg_pattern}
                    alt="Background Pattern"
                    fill
                    className="object-cover object-center opacity-10" // Adjust opacity as needed
                    priority // Consider if this section is high priority for LCP
                />
            </div>
            {/* Content Wrapper - Add relative positioning and z-index */}
            <div className="relative z-10 wrapper mx-auto">
                {showTitleRow && <TitleRow badge={badgeText} title={title} subText={subText} />}
                <div
                    className={cn(
                        "mt-10 grid gap-8",
                        displayMode === 'uniformTwoColumn'
                            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    )}
                >
                    {displayMode === 'featured' ? (
                        <>
                            {/* Featured Program (large card) */}
                            {featuredProgram && regularPrograms.length > 0 && (
                                <div id={createSlug(featuredProgram.title)} className="relative h-full w-full rounded-md aspect-square overflow-hidden sm:col-span-2 lg:col-span-2 lg:row-span-2 group">
                                    {featuredProgram.image1 && (
                                        <Image
                                            src={featuredProgram.image1}
                                            alt={featuredProgram.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                            style={{ objectFit: "cover" }}
                                            className="z-0 transition-transform duration-300 group-hover:scale-105"
                                            priority
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                                    <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                        <BookOpenCheck className="w-8 h-8 stroke-1 text-gray-300" />
                                        <div className="flex flex-col">
                                            <Link href={`/programs/${createSlug(featuredProgram.title)}`} className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                                                <h3 className="text-xl md:text-2xl font-semibold tracking-tight hover:underline line-clamp-2">
                                                    {featuredProgram.title}
                                                </h3>
                                            </Link>
                                            <p className="text-gray-200 mt-1 line-clamp-3">
                                                {featuredProgram.subText}
                                            </p>
                                            <div className="mt-4">
                                                <Button variant="link" className="p-0 !pl-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                                                    <Link href={`/programs/${createSlug(featuredProgram.title)}`} className="flex items-center group">
                                                        Learn more
                                                        <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Render the first program as a large card if it's the only one */}
                            {featuredProgram && regularPrograms.length === 0 && (
                                <div key={featuredProgram.id} id={createSlug(featuredProgram.title)} className="relative h-full rounded-md aspect-square overflow-hidden group sm:col-span-2 lg:col-span-2 xl:col-span-2">
                                    {/* Content identical to the regular card, but it takes more grid space */}
                                    {/* ... (image and text content as below in regularPrograms.map) ... */}
                                    {featuredProgram.image1 && (
                                        <Image
                                            src={featuredProgram.image1}
                                            alt={featuredProgram.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw" // Adjusted for potentially larger span
                                            style={{ objectFit: "cover" }}
                                            className="z-0 transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                                    <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                        <BookOpenCheck className="w-8 h-8 stroke-1 text-gray-300" />
                                        <div className="flex flex-col">
                                            <Link href={`/programs/${createSlug(featuredProgram.title)}`} className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                                                <h3 className="text-lg font-semibold tracking-tight hover:underline line-clamp-2">
                                                    {featuredProgram.title}
                                                </h3>
                                            </Link>
                                            <p className="text-gray-200 max-w-xs text-sm mt-1 line-clamp-2">
                                                {featuredProgram.subText}
                                            </p>
                                            <div className="mt-3">
                                                <Button variant="link" className="!p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                                                    <Link href={`/programs/${createSlug(featuredProgram.title)}`} className="flex items-center group">
                                                        Learn more
                                                        <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Regular Programs (smaller cards in featured mode) */}
                            {regularPrograms.map((program) => (
                                <div key={program.id} id={createSlug(program.title)} className="relative h-full rounded-md aspect-square overflow-hidden group">
                                    {program.image1 && (
                                        <Image
                                            src={program.image1}
                                            alt={program.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            style={{ objectFit: "cover" }}
                                            className="z-0 transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                    {/* ... (rest of the card content is the same as below) ... */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                                    <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                        <BookOpenCheck className="w-8 h-8 stroke-1 text-gray-300" />
                                        <div className="flex flex-col">
                                            <Link href={`/programs/${createSlug(program.title)}`} className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                                                <h3 className="text-lg font-semibold tracking-tight hover:underline line-clamp-2">
                                                    {program.title}
                                                </h3>
                                            </Link>
                                            <p className="text-gray-200 max-w-xs text-sm mt-1 line-clamp-2">
                                                {program.subText}
                                            </p>
                                            <div className="mt-3">
                                                <Button variant="link" className="!p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                                                    <Link href={`/programs/${createSlug(program.title)}`} className="flex items-center group">
                                                        Learn more
                                                        <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        /* Uniform Two Column Grid Mode */
                        programsToDisplay.map((program) => (
                            <div key={program.id} id={createSlug(program.title)} className="relative h-full rounded-md aspect-square overflow-hidden group">
                                {program.image1 && (
                                    <Image
                                        src={program.image1}
                                        alt={program.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw" // Adjusted for 2-column layout
                                        style={{ objectFit: "cover" }}
                                        className="z-0 transition-transform duration-300 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                                <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                    <BookOpenCheck className="w-8 h-8 stroke-1 text-gray-300" />
                                    <div className="flex flex-col">
                                        <Link href={`/programs/${createSlug(program.title)}`} className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                                            <h3 className="text-lg font-semibold tracking-tight hover:underline line-clamp-2">
                                                {program.title}
                                            </h3>
                                        </Link>
                                        <p className="text-gray-200 max-w-xs text-sm mt-1 line-clamp-2">
                                            {program.subText}
                                        </p>
                                        <div className="mt-3">
                                            <Button variant="link" className="!p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                                                <Link href={`/programs/${createSlug(program.title)}`} className="flex items-center group">
                                                    Learn more
                                                    <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )))}
                </div>
                {showViewAllButton && (
                    <div className="mt-12 text-center">
                        <Button size="lg" asChild>
                            <Link href="/programs" className="flex items-center group">
                                View All Programs
                                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
