import Image from "next/image";
import React from "react";

import logo from "../public/images/rnit-logo.svg";
import seal from "../public/images/transparency_seal.webp";
import Link from "next/link";
import { useRouter } from "next/router";
import { FooterLinks } from "./Functions";
import ImageRow from "./ImageRow";
import ViewMore from "./ViewMore";

function Footer() {
  return (
    <>
      <footer className="bg-main widest">
        <div className="md:flex md:gap-4 md:justify-around inside py-6 md:py-12">
          <div className="">
            <div>
              <Image
                src={seal}
                width={50}
                height={50}
                objectFit="contain"
                alt="seal"
              />
            </div>

            <p className="max-w-lg text-sm text-white font-serif">
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
                  <Link href={item.url}>
                    <h3 className="uppercase text-white cursor-pointer hover:underline ">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="mt-2">
                    {item.lists.map((list, key) => (
                      <Link href={list?.url} key={key}>
                        <p className="cursor-pointer text-white/80 text-xs mt-1 normal-case hover:underline">
                          {list.name}
                        </p>
                      </Link>
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
