import { TeamsProfile } from '@/components/teams-profile'
import { Employees } from '@/data/employees'
import Image from 'next/image'
import React from 'react'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TitleRow from '@/components/title-row'

import orgChart from "@/public/images/org-chart.jpg";
import assessmentFee from "@/public/images/assessment-fee_2024.jpg";
import assessmentMission from "@/public/images/assessment-mission.jpg";
import CharterImage from "@/public/images/charter.png";

const About = () => {
    return (
        <div>
            <TeamsProfile employees={Employees} />
            <div className=' lg:block'>
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
                                    className='object-fill w-full'
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full pb-20" id="assessmentCenter">
                    <div className="wrapper mx-auto">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <TitleRow title="Assessment Fees" subText="Clear and fair pricing to ensure accessibility and value." />
                                <Link href={assessmentFee.src} target='_blank'>
                                    <Image
                                        src={assessmentFee}
                                        width={500}
                                        height={1000}
                                        alt="Assessment Fee"
                                        className='object-fill w-full'
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
                                        className='object-fill w-full'
                                        priority
                                    />
                                </Link></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Citizen Charter */}
            <div className="wrapper__wide" id='citizen-charter'>
                <div className="relative h-[400px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                    <div className="wrapper">
                        <div className="lg:order-1 flex-1 mx-4 py-8 lg:py-0 sm:mx-auto md:ml-8 lg:ml-16">
                            <h2 className="max-w-lg lg:mb-6 text-2xl font-bold tracking-tight text-secondaryDark md:text-3xl lg:leading-none">
                                Citizen&apos;s Charter
                            </h2>
                            <p className="text-sm text-gray-700 lg:text-lg sm:max-w-md">
                                The Citizen’s Charter is one of the primary tools that government
                                agencies use to communicate their service standards on the delivery
                                of government service s to their citizens or clients
                            </p>
                            <Button variant="secondary" asChild className="w-full sm:w-auto mt-6">
                                <a href="/documents/citizens-charter.pdf">Download</a>
                            </Button>
                        </div>
                    </div>
                    <div className="hidden lg:block relative h-full w-full">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={CharterImage}
                                alt="Background"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default About
