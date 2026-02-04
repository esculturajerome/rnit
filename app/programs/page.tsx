// app/programs/page.tsx
import { PROGRAMS_DATA } from "@/data/programs";
import { FeaturePrograms } from "@/components/feature-programs";
import { AccreditedProgramsTable } from "@/components/accredited-programs-table";
import { UTPRASData, assessmentData, programsData } from '@/data/tables-data';

export default function ProgramsPage() {
    return (
        <>
            <FeaturePrograms
                showTitleRow={true} // Let FeaturePrograms handle its title section
                title="Our Programs"
                subText="Explore the diverse range of technical and vocational programs offered at RNIT."
                showViewAllButton={false} // Not needed as we are on the "all programs" page
            />
            <AccreditedProgramsTable
                utprasData={UTPRASData}
                assessmentData={assessmentData}
                programsData={programsData}
            />
        </>
    );
}
