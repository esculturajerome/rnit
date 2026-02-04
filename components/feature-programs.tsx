// components/feature-programs.tsx
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpenCheck } from "lucide-react"

import { PROGRAMS_DATA } from "@/data/programs"
import TitleRow from "./title-row"
import { Button } from "./ui/button"

import bg_pattern from "@/public/images/bg_pattern.png"

const createSlug = (title: string): string =>
    title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")

interface FeatureProgramsProps {
    title?: string
    subText?: string
    showTitleRow?: boolean
    showViewAllButton?: boolean
}

export const FeaturePrograms = ({
    title = "Programs Offered",
    subText = "TESDA-accredited programs designed for practical skills and employment readiness.",
    showTitleRow = true,
    showViewAllButton = true,
}: FeatureProgramsProps) => {
    if (!PROGRAMS_DATA.length) {
        return null
    }

    return (
        <section className="relative w-full bg-muted/40 py-12 lg:py-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={bg_pattern}
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-10"
                />
            </div>

            <div className="wrapper relative z-10 mx-auto">
                {showTitleRow && (
                    <TitleRow title={title} subText={subText} />
                )}

                {/* Programs Grid */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {PROGRAMS_DATA.map((program) => (
                        <div
                            key={program.id}
                            id={createSlug(program.title)}
                            className="group relative aspect-square overflow-hidden rounded-md"
                        >
                            {/* Image */}
                            {program.image1 && (
                                <Image
                                    src={program.image1}
                                    alt={program.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         25vw"
                                />
                            )}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                                <BookOpenCheck className="h-8 w-8 stroke-1 text-gray-300" />

                                <div>
                                    <Link
                                        href={`/programs/${createSlug(program.title)}`}
                                        className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded"
                                    >
                                        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight hover:underline">
                                            {program.title}
                                        </h3>
                                    </Link>

                                    <Button
                                        variant="link"
                                        className="mt-3 h-auto p-0 text-white hover:text-gray-200"
                                        asChild
                                    >
                                        <Link
                                            href={`/programs/${createSlug(program.title)}`}
                                            className="group inline-flex items-center"
                                        >
                                            Learn more
                                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All */}
                {showViewAllButton && (
                    <div className="mt-12 text-center">
                        <Button size="lg" asChild>
                            <Link href="/programs" className="group inline-flex items-center">
                                View All Programs
                                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}
