"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import TitleRow from "./title-row"
import { Employees } from '@/data/employees'

// Chunking function for the desktop 2x4 grid
const chunk = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    )

export const TeamsProfile = () => {
    const desktopSlides = chunk(Employees, 8); // 8 items per slide (2 rows of 4)

    return (
        <section id="meettheteam" className="bg-white">
            <div className="wrapper py-20">
                <TitleRow
                    title="Meet the Team"
                    subText="Our instructors and staff are dedicated to delivering quality, industry-relevant training."
                />

                <div className="mt-10 w-full relative">
                    <Carousel opts={{ align: "start", loop: false }}>
                        <CarouselContent>
                            {/* MOBILE VIEW: 1 employee per slide */}
                            {/* Hidden on md screens and up */}
                            {Employees.map((employee) => (
                                <CarouselItem key={`mobile-${employee.id}`} className="md:hidden">
                                    <EmployeeCard employee={employee} />
                                </CarouselItem>
                            ))}

                            {/* DESKTOP VIEW: 8 employees per slide in a grid */}
                            {/* Hidden on small screens */}
                            {desktopSlides.map((group, index) => (
                                <CarouselItem key={`desktop-${index}`} className="hidden md:block">
                                    <div className="grid grid-cols-4 grid-rows-2 gap-6">
                                        {group.map((employee) => (
                                            <EmployeeCard key={employee.id} employee={employee} />
                                        ))}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

// Reusable Card Component to keep code clean
const EmployeeCard = ({ employee }: { employee: any }) => (
    <div className="border border-primary p-4 text-center h-full bg-white shadow-sm">
        <Image
            src={employee.image}
            alt={employee.name}
            width={128}
            height={128}
            className="mx-auto h-32 w-32 object-cover object-top"
        />
        <h3 className="mt-4 font-medium text-slate-900 line-clamp-1">
            {employee.name}
        </h3>
        <p className="text-sm text-slate-600">
            {employee.position}
        </p>
    </div>
)