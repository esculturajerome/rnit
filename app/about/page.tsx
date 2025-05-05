
import { TeamsProfile } from '@/components/teams-profile'
import { Employees } from '@/data/employees'
import Image from 'next/image'
import React from 'react'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TitleRow from '@/components/title-row'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import orgChart from "@/public/images/2025-org-chart.jpg";
import assessmentFee from "@/public/images/assessment-fee_2024.jpg";
import assessmentMission from "@/public/images/assessment-mission.jpg";
import CharterImage from "@/public/images/charter.png";
import bg_pattern from "@/public/images/bg_pattern.png"

const About = () => {
    const aboutCards = [
        {
            title: "Vision",
            subText:
                "Skilling Romblon thru quality TVET Delivery for Peoples Prosperity.",
        },
        {
            title: "Mission",
            subText:
                "Equipping the province with competent, flexible, economically stable and dignified human resources for domestic and global demands.",
        },
        {
            title: "Philosophy",
            subText:
                "An institution that nurtures the total development of the Filipino youth, rich in knowledge, competent in their skills and imbued with positive attitude and work-values; whose program and services reflect the needs of its clientele and that of the greater community it servers; a school that is student centered enabling them to grow into producing, responsible, and loving individuals.",
        },
        {
            title: "Values Statement",
            subText:
                "We believe in competence, integrity, high level of commitment, transparency, 5S, strong desire for improvement, teamwork and cooperation.",
        },
    ];
    return (
        <div>
            <TeamsProfile employees={Employees} />

            <div className='lg:block'>
                <div className="w-full py-20" id="orgchart">
                    <div className="wrapper mx-auto">
                        <TitleRow title="Our Organizational Structure" subText="A visual representation of how our team collaborates to achieve excellence." />
                        <div className="grid gap-10 items-center">
                            <Link href={orgChart.src} target='_blank'>
                                <Image
                                    src={orgChart}
                                    width={orgChart.width}
                                    height={orgChart.height}
                                    alt="Organizational Chart"
                                    className='object-contain w-full max-h-[80vh]'
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full pb-20" id="assessmentCenter">
                    <div className="wrapper mx-auto">
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            <div>
                                <TitleRow title="Assessment Fees" subText="Clear and fair pricing to ensure accessibility and value." />
                                <Link href={assessmentFee.src} target='_blank'>
                                    <Image
                                        src={assessmentFee}
                                        width={500}
                                        height={1000}
                                        alt="Assessment Fee"
                                        className='object-contain w-full max-h-[60vh] rounded-md shadow-md'
                                        priority
                                    />
                                </Link>
                            </div>
                            <div>
                                <TitleRow title="Quality Assessments" subText="Striving for accuracy, fairness, and excellence in every evaluation." />
                                <Link href={assessmentMission.src} target='_blank'>
                                    <Image
                                        src={assessmentMission}
                                        width={assessmentMission.width}
                                        height={assessmentMission.height}
                                        alt="Assessment Mission"
                                        className='object-contain w-full max-h-[60vh] rounded-md shadow-md'
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper__wide bg-muted/40" id='citizen-charter'>
                <div className="relative min-h-[400px] flex items-center justify-center lg:justify-start">

                    <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
                        <Image
                            src={CharterImage}
                            alt="Citizen Charter Background"
                            fill
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-muted/40 via-muted/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 wrapper lg:w-1/2 lg:pr-8">
                        <div className="bg-background lg:bg-transparent p-8 rounded-lg shadow-lg lg:shadow-none lg:p-0">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl lg:leading-none">
                                Citizen&apos;s Charter
                            </h2>
                            <p className="text-base text-muted-foreground lg:text-lg max-w-xl">
                                The Citizen’s Charter is one of the primary tools that government
                                agencies use to communicate their service standards on the delivery
                                of government services to their citizens or clients.
                            </p>
                            <Button variant="secondary" asChild className="w-full sm:w-auto mt-6">
                                <a href="/documents/citizens-charter.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-auto py-16 md:py-24 wrapper__wide" id="vision-mission">

                <div className="absolute inset-0 z-[-1]">
                    <Image
                        src={bg_pattern}
                        alt="Background Pattern"
                        fill
                        className="object-cover object-center opacity-10"
                        priority
                    />
                </div>
                <div className="relative z-20 wrapper mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {aboutCards.map((card, index) => (
                            <Card
                                key={index}
                                className="flex flex-col bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden border border-border/40 h-full"
                            >
                                <CardHeader>
                                    <CardTitle className="text-3xl font-bold tracking-tight text-primary md:text-4xl lg:leading-none">
                                        {card.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {card.subText}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
