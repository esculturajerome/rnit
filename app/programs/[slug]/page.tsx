// app/programs/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TitleRow from "@/components/title-row";
import { cn } from "@/lib/utils";
import { PROGRAMS_DATA, Program } from "@/data/programs"; // Ensure Program type is exported from your data file
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpenCheck, ArrowRight } from "lucide-react";
import { notFound } from 'next/navigation';

// Helper function to get valid image URLs from a program or qualification
// Consider moving this to a shared utils file if used elsewhere
const getValidImages = (item: { image1?: string, image2?: string, image3?: string }): string[] => {
    return [item.image1, item.image2, item.image3].filter((img): img is string => !!img);
};

// Helper function to create a URL-friendly slug from a title
// Consider moving this to a shared utils file if used elsewhere
const createSlug = (title: string): string => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};

// Function to generate static paths for all programs (good for SSG)
export async function generateStaticParams() {
    return PROGRAMS_DATA.map((program) => ({
        slug: createSlug(program.title),
    }));
}

// The props for a Next.js page component with a dynamic route [slug]
// will have a `params` object containing the slug.
export default function ProgramDetailPage({
    params,
}: {
    // Changed to 'any' to bypass the problematic 'PageProps' constraint.
    // The ideal fix is to correct the 'PageProps' definition project-wide.
    // This component correctly expects params to be { slug: string }.
    params: any;
}) {
    const { slug } = params;
    const program = PROGRAMS_DATA.find(p => createSlug(p.title) === slug);

    if (!program) {
        notFound(); // Use Next.js notFound for a 404 page
    }

    return (
        <div className="wrapper__wide mx-auto py-10 lg:py-16">
            <div className="wrapper">
                {/* Main Program Information */}
                <section className="mb-12 lg:mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Image Section with Title Overlay */}
                        <div className={cn(
                            "relative w-full aspect-[4/3] lg:min-h-[500px] rounded-lg overflow-hidden group shadow-xl",
                            "lg:top-24" // Sticky behavior for the image column
                        )}>
                            {program.image1 && (
                                <Image
                                    src={program.image1}
                                    alt={program.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                    className="z-0 transition-transform duration-300 group-hover:scale-105"
                                    priority // Prioritize main image for LCP
                                />
                            )}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                        <div className="relative z-20 p-6 md:p-8 flex flex-col justify-between h-full text-white">
                            <BookOpenCheck className="w-10 h-10 md:w-12 md:h-12 stroke-1 text-gray-200 mb-4" />
                            <div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                    {program.title}
                                </h1>
                            </div>
                        </div>*/}
                        </div>

                        {/* Text Content Section */}
                        <div className="py-2 lg:py-4 items">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-primary mr-12">
                                {program.title}
                            </h1>
                            <p className="text-xl lg:text-xl text-muted-foreground my-6 leading-relaxed">
                                {program.subText}
                            </p>
                            <div className="prose prose-lg max-w-none dark:prose-invert text-foreground/90 space-y-4">
                                {program.desc1 && <p>{program.desc1}</p>}
                                {program.desc2 && <p>{program.desc2}</p>}
                                {program.desc3 && <p>{program.desc3}</p>}
                                {program.desc4 && <p>{program.desc4}</p>}
                            </div>
                            <div className="mt-10">
                                <Button size="lg" className="px-8 py-4 text-lg" asChild>
                                    <Link href="/enrolment">Enrol Now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nested Qualifications Section */}
                {program.qualifications && program.qualifications.length > 0 && (
                    <section className="mt-16 pt-12">
                        <TitleRow
                            // badge="Qualifications"
                            title="Related Trainings & Activities"
                            // subText={`Explore specific trainings and activities offered under the ${program.title} program.`}
                            className="mb-10 lg:mb-12 text-center items-center"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {program.qualifications.map((qual, qualIndex) => {
                                const qualImages = getValidImages(qual);
                                return (
                                    <div key={qualIndex} className="flex flex-col bg-card border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                                        <div className="w-full">
                                            {qualImages.length > 0 ? (
                                                <Carousel
                                                    opts={{ loop: qualImages.length > 1 }}
                                                    className="w-full group/carousel" // Added group for hover effects on nav
                                                >
                                                    <CarouselContent>
                                                        {qualImages.map((imgSrc, imgIndex) => (
                                                            <CarouselItem key={imgIndex}>
                                                                <div className="relative aspect-video w-full">
                                                                    <Image
                                                                        src={imgSrc}
                                                                        alt={`${qual.qualification} - Image ${imgIndex + 1}`}
                                                                        fill
                                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                                        style={{ objectFit: "cover" }}
                                                                        className="transition-transform duration-300 group-hover/carousel:scale-105"
                                                                    />
                                                                </div>
                                                            </CarouselItem>
                                                        ))}
                                                    </CarouselContent>
                                                    {qualImages.length > 1 && (
                                                        <>
                                                            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-background/70 hover:bg-background/90 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                                                            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-background/70 hover:bg-background/90 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                                                        </>
                                                    )}
                                                </Carousel>
                                            ) : (
                                                <div className="aspect-video w-full bg-muted flex items-center justify-center text-muted-foreground">
                                                    No images available
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4 md:p-6">
                                            <h4 className="text-lg md:text-xl font-semibold mb-2 text-primary">{qual.qualification}</h4>
                                            <p className="text-sm text-muted-foreground"><strong>Venue:</strong> {qual.venue}</p>
                                            <p className="text-sm text-muted-foreground"><strong>Date:</strong> {qual.date}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Other Programs Section */}
                {(() => {
                    const otherPrograms = PROGRAMS_DATA
                        .filter(p => createSlug(p.title) !== slug) // Exclude current program
                        .sort(() => 0.5 - Math.random()) // Shuffle for variety, remove if specific order is needed
                        .slice(0, 3); // Take up to 3

                    if (otherPrograms.length === 0) return null;

                    return (
                        <section className="mt-16 lg:mt-24 lg:pt-16">
                            <TitleRow
                                title="Explore Other Programs"
                                subText="Discover more opportunities at RNIT."
                                className="mb-10 lg:mb-12 text-center items-center"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                                {otherPrograms.map((otherProg) => (
                                    <Link
                                        key={otherProg.id}
                                        href={`/programs/${createSlug(otherProg.title)}`}
                                        className="relative block h-full rounded-md aspect-square overflow-hidden group"
                                    >
                                        {otherProg.image1 && (
                                            <Image
                                                src={otherProg.image1}
                                                alt={otherProg.title}
                                                fill
                                                // Adjusted sizes for a 3-column max grid (sm: 2-col, md: 3-col)
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                                style={{ objectFit: "cover" }}
                                                className="z-0 transition-transform duration-300 group-hover:scale-105"
                                            />
                                        )}
                                        {/* Fallback background if no image, visible under the transparent part of the gradient */}
                                        {!otherProg.image1 && (
                                            <div className="absolute inset-0 bg-muted z-0"></div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                                        <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                            <BookOpenCheck className="w-8 h-8 stroke-1 text-gray-300" />
                                            <div className="flex flex-col">
                                                <h3 className="text-lg font-semibold tracking-tight group-hover:underline line-clamp-2">
                                                    {otherProg.title}
                                                </h3>
                                                {otherProg.subText && (
                                                    <p className="text-gray-200 max-w-xs text-sm mt-1 line-clamp-2">
                                                        {otherProg.subText}
                                                    </p>
                                                )}
                                                <div className="mt-3">
                                                    <p className="text-sm text-white group-hover:text-gray-100 flex items-center">
                                                        Learn more
                                                        <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    );
                })()}
            </div>
        </div>
    );
}