import Head from "next/head";
import React from "react";
import Blogs from "../../components/Blogs";
import Footer from "../../components/Footer";
import Goals from "../../components/Goals";
import ImageRow from "../../components/ImageRow";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";
import ProgramRow from "../../components/ProgramRow";
import { ANNOUNCEMENT_DATA } from "../../data/announcements";

const Announcements = () => {
  const ANNOUNCEMENTS_DATA = ANNOUNCEMENT_DATA.slice(0, 15);

  return (
    <>
      <Head>
        <title>RNIT | Announcements</title>
        <meta
          property="og:url"
          content="https://rnit-tesda.org/announcements"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RNIT | Announcements" />
        <meta property="og:description" content="RNIT latest announcements" />
        <meta
          property="og:image"
          content="https://rnit-tesda.org/images/charter.png"
        />
      </Head>
      <Nav />
      <Blogs data={ANNOUNCEMENTS_DATA} />
      <ProgramRow />
      <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
};

export default Announcements;
