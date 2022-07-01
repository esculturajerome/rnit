import Image from "next/image";
import React from "react";

import logo from "../public/images/rnit-logo.svg";
import seal from "../public/images/transparency_seal.webp";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleNav } from "./Functions";
import ImageRow from "./ImageRow";

function Footer() {
  const router = useRouter();

  return (
    <>
      <ImageRow />
      <div className="  bg-main">
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-4">
            <div className="md:max-w-md lg:col-span-2">
              <a
                onClick={(e) => handleNav(router, e, "/")}
                href="#"
                aria-label="Go home"
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
              </a>
              <div className="mt-2 lg:max-w-sm">
                <p className="text-sm text-white font-serif">
                  Skilling Romblon thru quality TVET <br />
                  Delivery for Peoples Prosperity.
                </p>
              </div>
              <div className="mt-4 flex flex-col font-serif lg:max-w-sm space-y-2">
                <a
                  href="mailto:ant@tesda.gov.ph"
                  className="text-sm text-white btn-text"
                >
                  Poblacion, Alcantara, Romblon
                </a>
                <a
                  href="mailto:ant@tesda.gov.ph"
                  className="text-sm text-white btn-text"
                >
                  ant@tesda.gov.ph
                </a>
                <a
                  href="mailto:ant@tesda.gov.ph"
                  className="text-sm text-white btn-text"
                >
                  09985731845
                </a>
                <a
                  href="mailto:ant@tesda.gov.ph"
                  className="text-sm text-white btn-text"
                >
                  09487705807
                </a>
              </div>
            </div>
            <div className="md:max-w-md lg:col-span-2">
              <Link
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <Image
                  src={seal}
                  width={50}
                  height={50}
                  objectFit="contain"
                  alt="seal"
                />
              </Link>
              <div className="mt-2 lg:max-w-sm">
                <p className="text-sm text-white font-serif">
                  A Transparency Seal, prominently displayed on the main page of
                  the website of a particular government agency, is a
                  certificate that it has complied with the requirements of
                  Section 93. This Seal links to a page within the agency’s
                  website which contains an index of downloadable items of each
                  of the above-mentioned documents.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-purple-200 sm:flex-row">
            <p className="text-sm text-gray-100">
              © Copyright 2022{" "}
              <Link
                href="https://junowebservices.netlify.app/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Juno Web Services
              </Link>
              . All rights reserved.
            </p>
            <div className="hidden items-center mt-4 space-x-4 sm:mt-0 ">
              <a
                onClick={(e) => handleNav(router, e, "/")}
                href="#"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-gray-300"
              >
                <svg viewBox="0 0 24 24" fill="white" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
