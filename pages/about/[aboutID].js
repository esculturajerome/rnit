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
        <title>{about?.title}</title>
        <meta name="description" content={about?.subText} />
      </Head>
      <Nav />
      <ImageRow variant="bg-pattern-3">
        <div className="grid place-items-center">
          <div className="max-w-xl text-main py-8 md:py-24 ">
            <h2 className="text-3xl lg:text-5xl mb-4 lg:mb-12  font-bold ">
              {about?.title}
            </h2>
            <p className="lg:text-xl text-main/90 ">{about?.subText}</p>
          </div>
        </div>
      </ImageRow>
      <ImageRow variant="bg-pattern-2">
        <Goals aboutUsData={filterAbout} />
      </ImageRow>
      {/* <ProgramRow /> */}
      <Footer />
    </>
  );
};

export default AboutDetails;
