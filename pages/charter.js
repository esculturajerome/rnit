import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import ProgramRow from "../components/ProgramRow";
import ImageRow from "../components/ImageRow";
import Goals from "../components/Goals";
import Nav from "../components/Nav";
import Link from "next/link";
import Image from "next/image";

import CharterImage from "../public/images/charter.png";

const charter = () => {
  return (
    <>
      <Head>
        <title>RNIT | Citizen Charter</title>
        <meta name="description" content="RNIT page with Citizen's Charter" />
      </Head>
      <Nav />
      {/* <Teams /> */}
      <div className="grid md:grid-cols-2 gap-4 -mb-1.5 items-center mt-0 widest">
        <div className="lg:order-1 flex-1 mx-4 py-8 lg:py-0 sm:mx-auto md:ml-8 lg:ml-16">
          <h2 className="max-w-lg lg:mb-6 text-2xl font-bold tracking-tight text-secondaryDark md:text-3xl lg:leading-none">
            Citizen&apos;s Charter
          </h2>
          <p className="text-sm text-gray-700 lg:text-lg sm:max-w-md">
            The Citizen’s Charter is one of the primary tools that government
            agencies use to communicate their service standards on the delivery
            of government service s to their citizens or clients
          </p>
          <a
            className="btn-contained mt-4 lg:mt-8 text-sm lg:text-base"
            href={`/citizens-charter.pdf`}
            download
          >
            Download
          </a>
        </div>

        <div className="order-1 flex-1">
          <Image
            src={CharterImage}
            width={800}
            height={500}
            alt="Mechanic"
            objectFit="cover"
            blurDataURL={CharterImage.blurData}
            placeholder="blur"
          />
        </div>
      </div>
      <Goals />
      <Footer />
    </>
  );
};

export default charter;
