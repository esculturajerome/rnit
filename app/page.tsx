import { FeatureBlogs } from "@/components/feature-blogs";
import { Hero } from "@/components/rnit-hero";
import { TeamsProfile } from "@/components/teams-profile";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Employees } from "@/data/employees"
import { FeaturePrograms } from "@/components/feature-programs";
import FullWidthWithText from "@/components/full-width-with-text";
import ThreeColumn from "@/components/three-column";
import FullWidth from "@/components/full-width";
import DownloadSection from "@/components/download-section";
import ProgramsGrid from "@/components/programs-grid";


export default function Home() {
  return (
    <main>
      <Hero />
      <ThreeColumn />
      <FullWidth />
      {/* <FeaturePrograms
        maxPrograms={5} // Optionally customize how many programs to show
        showTitleRow={true}
      // You can also override title, subText, badgeText here if needed
      /> */}
      <ProgramsGrid />
      <section className="wrapper__wide py-12 ">
        <DownloadSection title="Download Citizen's Charter" subtext="View our service standards, processing times, and requirements." /></section>
      <FeatureBlogs showViewAllButton={true} />
      <FullWidthWithText />

      <section className="wrapper__wide py-12 ">
        <DownloadSection title="Download our Assessment Fees" />
        <div className="wrapper">
          <p className=" mt-4 px-5 mr-12">Download our Assessment Fees to view the official schedule of charges approved by TESDA. This document provides a transparent breakdown of costs for each program offered. It ensures that students and applicants are fully informed before enrollment. Access reliable information to help you plan your training journey with confidence.</p>
        </div>
      </section>
      {/* <IndexBlogs /> */}
    </main >
  );
}
