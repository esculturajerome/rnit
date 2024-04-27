import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { getAboutById, getOtheAbout } from "../../components/Functions";
import Goals from "../../components/Goals";
import ImageRow from "../../components/ImageRow";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";
import ProgramRow from "../../components/ProgramRow";
import Image from "next/image";

const AboutDetails = () => {
  const router = useRouter();
  const aboutID = router.query.aboutID;
  const [about, setAbout] = useState([]);
  const [filterAbout, setFilterAbout] = useState([]);
  useEffect(() => {
    setAbout(getAboutById(aboutID));
    setFilterAbout(getOtheAbout(aboutID));
  }, [aboutID, router]);

  return (
    <>
      <Head>
        <title>RNIT | {about?.title}</title>
        <meta name="description" content={about?.subText} />
        <meta property="og:url" content="https://rnit-tesda.org/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={about?.title} />
        <meta property="og:description" content={about?.subText} />
        <meta
          property="og:image"
          content="https://rnit-tesda.org/images/charter.png"
        />
      </Head>
      <Nav />
      <div className="min-h-[50vh] widest relative grid items-center">
        <Image
          src="/images/bg/pattern-3.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="p-8 mx-auto max-w-lg space-y-6 z-10">
          <h2 className="text-3xl text-main lg:text-5xl font-bold ">
            {about?.title}
          </h2>
          <p className="lg:text-xl text-main">{about?.subText}</p>
        </div>
      </div>
      {/* <ImageRow variant="bg-pattern-3">
        <div className="grid place-items-center h-[50vh]">
          <div className="max-w-xl text-main space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold ">{about?.title}</h2>
            <p className="lg:text-xl text-main/90 ">{about?.subText}</p>
          </div>
        </div>
      </ImageRow> */}
      <Goals aboutUsData={filterAbout} />
      <Footer />
    </>
  );
};

export default AboutDetails;
