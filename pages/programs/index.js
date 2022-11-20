import { getAllPrograms } from "../../components/Functions";
import Footer from "../../components/Footer";
import Link from "next/link";
import Layout from "../../components/Layout";
import ProgramsGrid from "../../components/ProgramsGrid";
import { useEffect, useState } from "react";

import { assessmentData } from "../../data/assessmentData";
import { programsData } from "../../data/programsData";
import { UTPRASData } from "../../data/UTPRASData";
import ImageRow from "../../components/ImageRow";
import Goals from "../../components/Goals";
import NavBar from "../../components/NavBar";
import TabsComponent from "../../components/TabsComponent";
import Head from "next/head";

function Programs() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(getAllPrograms());
  }, []);

  return (
    <>
      <Head>
        <title>RNIT | Programs</title>
        <meta
          name="description"
          content="RNIT page with all Programs and Services offered"
        />
      </Head>
      <NavBar />
      <div className="px-4 py-6 md:py-14 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
        <ProgramsGrid courses={courses} />
      </div>
      <div id="table">
        <TabsComponent
          assessmentData={assessmentData}
          programsData={programsData}
          UTPRASData={UTPRASData}
        />
      </div>

      <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
}

export default Programs;
