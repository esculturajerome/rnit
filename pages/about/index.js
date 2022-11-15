import React from "react";
import Head from "next/head";
import logo from "../../public/images/rnit-logo.svg";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ImageRow from "../../components/ImageRow";
import Image from "next/image";
import { handleNav } from "../../components/Functions";
import { useRouter } from "next/router";
import Goals from "../../components/Goals";
import Teams from "../../components/Teams";
import ProgramRow from "../../components/ProgramRow";

import OrgChart from "../../public/images/org-chart.jpg";
console.log(OrgChart, "OrgChart");

function About() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Nav />
      <ImageRow variant="bg-pattern-bg-2">
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
      <ProgramRow />
      <Footer />
    </>
  );
}

export default About;
