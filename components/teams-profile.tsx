// components/teams-profile.tsx
"use client"

import React, { useRef } from "react" // Needed for useRef
import Autoplay from "embla-carousel-autoplay" // Carousel Autoplay plugin
import {
    Carousel,
    // CarouselApi, // Removed unused import
    CarouselContent,
    CarouselItem,
    CarouselNext,     // Navigation button
    CarouselPrevious, // Navigation button
} from "@/components/ui/carousel"
import Image from "next/image"
import TitleRow from "./title-row"

import bg_pattern from "@/public/images/bg_pattern.png"

interface EmployeeProps {
    id: string
    name: string
    position: string
    image: string
}

interface TeamsProfileProps {
    employees: EmployeeProps[]
}

export const TeamsProfile = ({ employees }: TeamsProfileProps) => {
    // useRef to keep the plugin instance stable across renders
    const plugin = useRef(
        // Configure Autoplay: 2s delay, stop on interaction/hover
        Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true })
    )

    return (
        <div className="w-full py-20 lg:py-40 relative wrapper__wide" id="meetourteam">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src={bg_pattern}
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-10"
                    priority
                />
            </div>
            <div className="wrapper mx-auto relative z-10">
                <div className="flex flex-col gap-10">
                    <TitleRow title="Meet Our Team" subText="A glimpse of the passionate individuals behind our success." />
                    <Carousel
                        plugins={[plugin.current]} // Pass the autoplay plugin instance
                        className="w-full"
                        opts={{
                            align: "start", // Ensure items align to the start
                            loop: true,     // Enable looping
                        }}
                    >
                        <CarouselContent>
                            {employees.map((employee) => (
                                <CarouselItem
                                    // Adjust item width based on screen size
                                    className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6" // Shows ~3 up to 8 items
                                    key={employee.id} // Use unique ID for key
                                >
                                    {/* Increased padding slightly for larger images */}
                                    <div className="flex rounded-md aspect-square items-start justify-center p-2 sm:p-3 mx-auto">
                                        <Image
                                            src={employee.image}
                                            alt={employee.name}
                                            width={150} // Base size for mobile/smaller screens
                                            height={150}
                                            className="object-cover object-top aspect-square shadow rounded-md lg:w-[180px] lg:h-[180px]"
                                        // --- End Size Adjustment ---
                                        />
                                    </div>
                                    <p className="text-sm font-medium text-center mt-2 truncate px-1">{employee.name}</p>
                                    <p className="text-xs text-center text-gray-500 truncate px-1">{employee.position}</p>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Carousel Navigation Buttons */}
                        <CarouselPrevious className="absolute left-[-10px] sm:left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-primary text-primary" />
                        <CarouselNext className="absolute right-[-10px] sm:right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-primary text-primary" />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
