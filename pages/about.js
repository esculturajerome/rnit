import React from "react";
import logo from "../public/images/rnit-logo.svg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TitleRow from "../components/TitleRow";
import ReactJotformEmbed from "react-jotform-embed";
import ImageRow from "../components/ImageRow";
import Image from "next/image";
import { handleNav } from "../components/Functions";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();
  return (
    <>
      <Nav />
      <ImageRow>
        <a
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
        </a>
      </ImageRow>
      <Footer />
    </>
  );
}

export default About;
