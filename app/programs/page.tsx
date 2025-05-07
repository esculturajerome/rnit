// app/programs/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TitleRow from "@/components/title-row";
import { cn } from "@/lib/utils";
import { PROGRAMS_DATA } from "@/data/programs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpenCheck } from "lucide-react"; // Import an icon

// Helper function to get valid image URLs from a program or qualification
const getValidImages = (item: { image1?: string, image2?: string, image3?: string }): string[] => {
    return [item.image1, item.image2, item.image3].filter((img): img is string => !!img);
};

// Helper function to create a URL-friendly slug from a title
const createSlug = (title: string): string => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};


export default function ProgramsPage() {
    return (
        <div className="wrapper mx-auto py-10 lg:py-16">
            <TitleRow
                title="Our Programs"
                subText="Explore the diverse range of technical and vocational programs offered at RNIT."
            />

            <div className="space-y-16 lg:space-y-24 mt-12">
                {PROGRAMS_DATA.map((program, index) => {
                    // No need for programImages here as we'll use the first image for the main display
                    const programSlug = createSlug(program.title);
                    const isImageLeft = index % 2 === 0; // Determine layout based on index

                    return (
                        <section key={program.id} className="" id={programSlug}>
                            {/* --- Main Program Section (Alternating Layout) --- */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                                {/* Image Section (Styled like Feature Card) */}
                                <div className={cn(
                                    "relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-md overflow-hidden group",
                                    isImageLeft ? "lg:order-1" : "lg:order-2" // Control order on large screens
                                )}>
                                    {/* Background Image */}
                                    {program.image1 && (
                                        <Image
                                            src={program.image1}
                                            alt={program.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            style={{ objectFit: "cover" }}
                                            className="z-0 transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>

                                    {/* Content on Image */}
                                    <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                        <BookOpenCheck className="w-8 h-8 stroke-1 text-gray-300" /> {/* Icon Top Left */}
                                        <div className="flex flex-col">
                                            {/* Title Bottom Left */}
                                            <h3 className="text-xl md:text-2xl font-semibold tracking-tight line-clamp-2">
                                                {program.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content Section */}
                                <div className={cn(
                                    "py-2 lg:py-16 lg:sticky lg:top-24", // Keep sticky behavior
                                    isImageLeft ? "lg:order-2" : "lg:order-1" // Control order on large screens
                                )}>
                                    {/* Re-display Title for clarity */}
                                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-primary">
                                        {program.title}
                                    </h2>
                                    <p className=" mb-6 leading-relaxed">
                                        {program.subText}
                                    </p>
                                    <ul className="space-y-3 list-disc list-inside ">
                                        {program.desc1 && <li>{program.desc1}</li>}
                                        {program.desc2 && <li>{program.desc2}</li>}
                                        {program.desc3 && <li>{program.desc3}</li>}
                                        {program.desc4 && <li>{program.desc4}</li>}
                                    </ul>
                                    <ul className="mt-8">
                                        <Link href="/enrolment"><Button size="lg">Enrol Now</Button></Link>
                                    </ul>
                                </div>

                            </div>

                            {/* --- Nested Qualifications Section (Remains the same) --- */}
                            {program.qualifications && program.qualifications.length > 0 && (
                                <div className="mt-4 lg:mt-8 border-b pb-12 lg:pb-16">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-secondary-foreground">
                                        Related Trainings & Activities
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {program.qualifications.map((qual, qualIndex) => {
                                            const qualImages = getValidImages(qual);

                                            return (
                                                <div key={qualIndex} className="flex flex-col">
                                                    {/* Qualification Image Carousel (Top) */}
                                                    <div className="w-full mb-4">
                                                        {qualImages.length > 0 ? (
                                                            <Carousel className="w-full">
                                                                <CarouselContent>
                                                                    {qualImages.map((imgSrc, imgIndex) => (
                                                                        <CarouselItem key={imgIndex}>
                                                                            <div className="relative aspect-video w-full overflow-hidden rounded-md shadow-md">
                                                                                <Image
                                                                                    src={imgSrc}
                                                                                    alt={`${qual.qualification} - Image ${imgIndex + 1}`}
                                                                                    fill
                                                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                                                    style={{ objectFit: "cover" }}
                                                                                    className="transition-transform duration-300"
                                                                                />
                                                                            </div>
                                                                        </CarouselItem>
                                                                    ))}
                                                                </CarouselContent>
                                                                {qualImages.length > 1 && (
                                                                    <>
                                                                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
                                                                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
                                                                    </>
                                                                )}
                                                            </Carousel>
                                                        ) : (
                                                            <div className="aspect-video w-full bg-muted rounded-md flex items-center justify-center ">
                                                                No images available
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Qualification Text (Bottom) */}
                                                    <div>
                                                        <h4 className="text-lg font-medium mb-1">{qual.qualification}</h4>
                                                        <p className="text-sm "><strong>Venue:</strong> {qual.venue}</p>
                                                        <p className="text-sm "><strong>Date:</strong> {qual.date}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
