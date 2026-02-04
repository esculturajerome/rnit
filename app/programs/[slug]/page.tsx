'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import TitleRow from "@/components/title-row"
import { cn } from "@/lib/utils"
import { PROGRAMS_DATA } from "@/data/programs"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { BookOpenCheck, ArrowRight } from "lucide-react"
import { useParams } from 'next/navigation'

// Helper functions
const getValidImages = (item: { image1?: string, image2?: string, image3?: string }) =>
    [item.image1, item.image2, item.image3].filter((img): img is string => !!img)

const createSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

export default function ProgramDetailPage() {
    const params = useParams()
    const slug = params?.slug

    if (!slug) return <p>Loading...</p>

    const program = PROGRAMS_DATA.find(p => createSlug(p.title) === slug)
    if (!program) return <p>Program not found</p>

    return (
        <div className="wrapper__wide mx-auto py-10 lg:py-16">
            <div className="wrapper">
                {/* Main Program */}
                <section className="mb-12 lg:mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className={cn("relative w-full aspect-[4/3] lg:min-h-[500px] rounded-lg overflow-hidden group ")}>
                            {program.image1 && (
                                <Image
                                    src={program.image1}
                                    alt={program.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                    className="z-0 transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                            )}
                        </div>

                        <div className="py-2 lg:py-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-primary mr-12">
                                {program.title}
                            </h1>
                            <p className="text-xl lg:text-xl  my-6 leading-relaxed">{program.subText}</p>
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

                {/* Qualifications */}
                {program.qualifications && program.qualifications.length > 0 && (
                    <section className="mt-16 pt-12">
                        <TitleRow title="Related Trainings & Activities" className="mb-10 lg:mb-12 text-center items-center" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {program.qualifications.map((qual, i) => {
                                const images = getValidImages(qual)
                                return (
                                    <div key={i} className="flex flex-col bg-card border rounded-lg overflow-hidden">
                                        <div className="w-full">
                                            {images.length > 0 ? (
                                                <Carousel opts={{ loop: images.length > 1 }} className="w-full group/carousel">
                                                    <CarouselContent>
                                                        {images.map((img, j) => (
                                                            <CarouselItem key={j}>
                                                                <div className="relative aspect-video w-full">
                                                                    <Image
                                                                        src={img}
                                                                        alt={`${qual.qualification} - Image ${j + 1}`}
                                                                        fill
                                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                                        style={{ objectFit: "cover" }}
                                                                        className="transition-transform duration-300 group-hover/carousel:scale-105"
                                                                    />
                                                                </div>
                                                            </CarouselItem>
                                                        ))}
                                                    </CarouselContent>
                                                    {images.length > 1 && (
                                                        <>
                                                            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-background/70 hover:bg-background/90 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                                                            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-background/70 hover:bg-background/90 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                                                        </>
                                                    )}
                                                </Carousel>
                                            ) : (
                                                <div className="aspect-video w-full bg-muted flex items-center justify-center  ">No images</div>
                                            )}
                                        </div>
                                        <div className="p-4 md:p-6">
                                            <h4 className="text-lg md:text-xl font-semibold mb-2 text-primary">{qual.qualification}</h4>
                                            <p className="text-sm  "><strong>Venue:</strong> {qual.venue}</p>
                                            <p className="text-sm  "><strong>Date:</strong> {qual.date}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}
