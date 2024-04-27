import Image from "next/image";
import React from "react";

import seal from "../public/images/transparency_seal.webp";
import Link from "next/link";
import { FooterLinks } from "./Functions";
import ViewMore from "./ViewMore";

function Footer() {
  return (
    <>
      <footer className="bg-main widest">
        <div className="lg:flex md:gap-4 md:justify-around inside py-6 md:py-12">
          <div className="">
            <div className="w-16 h-16 lg:w-24 lg:h-24 relative">
              <Image
                src={seal}
                objectFit="contain"
                layout="fill"
                alt="seal"
                sizes="80px"
              />
            </div>

            <p className="mt-4 max-w-lg text-sm text-white font-serif">
              A Transparency Seal, prominently displayed on the main page of the
              website of a particular government agency, is a certificate that
              it has complied with the requirements of Section 93. This Seal
              links to a page within the agency’s website which contains an
              index of downloadable items of each of the above-mentioned
              documents.
            </p>
          </div>

          <div className="mt-6 pl-12 hidden md:inline w-full">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
              {FooterLinks.map((item, i) => (
                <div key={i}>
                  <div>
                    <div className="relative inline-block group cursor-pointer">
                      <Link href={item.url}>
                        <h3 className="relative z-10 text-white transition-all duration-300 uppercase">
                          {item.title}
                        </h3>
                      </Link>
                      <span
                        className={`absolute left-0 bottom-[-5px] bg-secondary h-0.5 w-full transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
                      ></span>
                    </div>
                  </div>
                  {/*  <h3 className="uppercase text-white cursor-pointer hover:underline ">
                      {item.title}
                    </h3> */}
                  <div className="space-y-3 mt-4">
                    {item.lists.map((list, key) => (
                      <div key={key}>
                        <div className="relative inline-block group cursor-pointer">
                          <Link href={list?.url}>
                            <span className="relative z-10 text-white transition-all duration-300 normal-case font-light text-sm">
                              {list.name}
                            </span>
                          </Link>
                          <span
                            className={`absolute left-0 bottom-[-5px] bg-secondary h-0.5 w-full transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
                          ></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <ViewMore />
        </div>

        <div className="py-2 bg-main-dark">
          <p className="text-center text-white/60 font-serif text-xs">
            © Romblon National Institute of Technology -{" "}
            <br className="lg:hidden" />
            <Link href="https://junowebservices.com/">
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hover:underline"
              >
                By Juno Web Services
              </a>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
