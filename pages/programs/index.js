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
import Nav from "../../components/Nav";
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
        <meta property="og:url" content="https://rnit-tesda.org/programs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RNIT | Programs" />
        <meta
          property="og:description"
          content="RNIT page with all Programs and Services offered"
        />
        <meta
          property="og:image"
          content="https://rnit-tesda.org/images/charter.png"
        />
      </Head>
      <Nav />
      <div className="px-4 py-6 md:py-14 md:px-24 lg:px-8 widest">
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
