import React from "react";
import Head from "next/head";
import logo from "../../public/images/rnit-logo.svg";
import Footer from "../../components/Footer";
import ImageRow from "../../components/ImageRow";
import Image from "next/image";
import { handleNav } from "../../components/Functions";
import { useRouter } from "next/router";
import Goals from "../../components/Goals";
import Teams from "../../components/Teams";
import ProgramRow from "../../components/ProgramRow";

import OrgChart from "../../public/images/org-chart.jpg";
import NavBar from "../../components/NavBar";
console.log(OrgChart, "OrgChart");

function About() {
  return (
    <>
      <Head></Head>
      <NavBar />
      <ImageRow variant="bg-pattern-2">
        <Goals />
        {/* <a
          onClick={(e) => handleNav(router, e, "/")}
          href="#"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <Image
            src={logo}
            width={50}
            height={50}
            objectFit="contain"
            alt="logo"
          />
          <p className="ml-3 uppercase font-serif text-white tracking-wider">
            Romblon National Institute <br /> of Technology
          </p>
        </a> */}
      </ImageRow>
      <Teams />
      <ImageRow variant id="orgchart">
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
      <ProgramRow />
      <Footer />
    </>
  );
}

export default About;