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
      <div id="meetourteam" className="border-2">
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
              alt="Mechanic"
              objectFit="cover"
              blurDataURL={OrgChart.blurData}
              placeholder="blur"
            />
          </a>
        </ImageRow>
      </div>
      <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
}

export default About;
