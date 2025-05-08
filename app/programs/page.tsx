// app/programs/page.tsx
import { PROGRAMS_DATA } from "@/data/programs";
import { FeaturePrograms } from "@/components/feature-programs";
import { AccreditedProgramsTable } from "@/components/accredited-programs-table";
import { UTPRASData, assessmentData, programsData } from '@/data/tables-data';

export default function ProgramsPage() {
    return (
        <>
            <FeaturePrograms
                maxPrograms={PROGRAMS_DATA.length} // Display all programs
                showTitleRow={true} // Let FeaturePrograms handle its title section
                title="Our Programs"
                subText="Explore the diverse range of technical and vocational programs offered at RNIT."
                badgeText="All Programs" // You can customize this badge text
                showViewAllButton={false} // Not needed as we are on the "all programs" page
                displayMode="uniformTwoColumn" // Use the new two-column layout
            />
            <AccreditedProgramsTable
                utprasData={UTPRASData}
                assessmentData={assessmentData}
                programsData={programsData}
            />
        </>
    );
}
