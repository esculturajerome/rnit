import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import ProgramRow from "../components/ProgramRow";
import Link from "next/link";
import ImageRow from "../components/ImageRow";
import Goals from "../components/Goals";
import ContactForm from "../components/ContactForm";
import Head from "next/head";
import Nav from "../components/Nav";

import building from "../public/images/building.png";

function Contact() {
  return (
    <>
      <Head>
        <title>RNIT | Contact us</title>
        <meta property="og:title" content="RNIT | Contact us" />
        <meta name="description" content="RNIT page with contact information" />
        <meta property="og:url" content="https://rnit-tesda.org/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://rnit-tesda.org/images/charter.png"
        />
      </Head>
      <Nav />
      <div className="relative font-serif widest">
        <div className="absolute inset-0 object-cover w-full h-full">
          <Image
            src={building}
            layout="fill"
            alt="RNIT Building"
            blurDataURL={building.blurData}
            placeholder="blur"
            priority
          />
        </div>

        <div className="relative bg-gray-900 bg-opacity-75 flex flex-col md:flex-row items-center w-full justify-between px-6 md:px-24 py-8">
          <div className="w-full max-w-md mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Poblacion, Alcantara,
              <br className="hidden md:block" /> Romblon
            </h2>
            <p className="max-w-xl mb-4 text-base text-white/80 md:text-lg">
              We always want to hear from you! Let us know how we can best help
              you and we&apos;ll do our very best.
            </p>
            <a
              href="https://goo.gl/maps/nxYjrUPPdfPnVgx88"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="map"
              className="btn-text text-white"
            >
              View in Google Maps
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          <div className="w-full max-w-md">
            <div className="bg-white rounded shadow-2xl p-7 sm:py-6 px-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <ProgramRow />
      <Goals />
      <Footer />
    </>
  );
}

export default Contact;
