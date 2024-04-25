import React from "react";
import Head from "next/head";
import logo from "../../public/images/rnit-logo.svg";
import Footer from "../../components/Footer";
import ImageRow from "../../components/ImageRow";
import Image from "next/image";
import { useRouter } from "next/router";
import Goals from "../../components/Goals";
import Teams from "../../components/Teams";
import ProgramRow from "../../components/ProgramRow";

import OrgChart from "../../public/images/org-chart.jpg";
import AssessmentMission from "../../public/images/assessment-mission.jpg";
import Nav from "../../components/Nav";

function About() {
  return (
    <>
      <Head>
        <title>RNIT | About us</title>
        <meta property="og:url" content="https://rnit-tesda.org/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RNIT | About us" />
        <meta property="og:description" content="Get to know more about RNIT" />
        <meta
          property="og:image"
          content="https://rnit-tesda.org/images/charter.png"
        />
      </Head>
      <Nav />
      <div id="meetourteam">
        <Teams />
      </div>

      <div id="orgchart">
        <ImageRow variant>
          <a
            href={OrgChart.src}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Org Chart"
          >
            <Image
              src={OrgChart}
              width={OrgChart.width}
              height={OrgChart.height}
              alt="OrgChart"
              objectFit="cover"
              blurDataURL={OrgChart.blurData}
              placeholder="blur"
              priority
            />
          </a>
        </ImageRow>
      </div>
      <div id="assessmentCenter" className="max-w-[550px] mx-auto my-8">
        <a
          href={AssessmentMission.src}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Org Chart"
        >
          <Image
            src={AssessmentMission}
            width={AssessmentMission.width}
            height={AssessmentMission.height}
            alt="assessmentCenter"
            objectFit="cover"
            blurDataURL={AssessmentMission.blurData}
            placeholder="blur"
            priority
          />
        </a>
      </div>
      <Goals />
      <Footer />
    </>
  );
}

export default About;
