"use client"

import { useEffect, useState } from "react"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
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
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            const nextIndex =
                api.selectedScrollSnap() + 1 === api.scrollSnapList().length ? 0 : current + 1
            setCurrent(nextIndex)
            api.scrollTo(nextIndex)
        }, 1500)

        return () => clearInterval(interval)
    }, [api, current])

    return (
        <div className="w-full py-20 lg:py-40 relative wrapper__wide" id="meetourteam">
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
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {employees.map((employee, index) => (
                                <CarouselItem
                                    className="basis-1/4 lg:basis-1/6"
                                    key={index}
                                >
                                    <div className="flex rounded-md aspect-square items-center justify-center p-2 ">
                                        <Image
                                            src={employee.image}
                                            alt={employee.name}
                                            width={200}
                                            height={200}
                                            className="mx-auto object-contain aspect-square overflow-hidden"
                                        />
                                    </div>
                                    <p className="text-sm text-center mt-2">{employee.name}</p>
                                    <p className="text-xs text-center text-gray-500">{employee.position}</p>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
