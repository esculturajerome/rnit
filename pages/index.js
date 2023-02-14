import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Teams from "../components/Teams";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Blogs from "../components/Blogs";
import ProgramRow from "../components/ProgramRow";
import Goals from "../components/Goals";
import ImageRow from "../components/ImageRow";
import { getAnnouncementHomepage } from "../data/announcements";
import Nav from "../components/Nav";

export default function Home() {
  const ANNOUNCEMENT_DATA = getAnnouncementHomepage();
  return (
    <>
      <Head>
        <title>Romblon National Institute of Technology</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta property="og:url" content="https://rnit-tesda.org/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Romblon National Institute of Technology"
        />
        <meta
          property="og:description"
          content="Skilling Romblon thru quality TVET Delivery for Peoples Prosperity?"
        />
        <meta
          property="og:image"
          content="https://rnit-tesda.org/images/charter.png"
        />
      </Head>
      <Nav />
      <Header />
      <Blogs data={ANNOUNCEMENT_DATA} />
      <ProgramRow />
      {/* <Teams /> */}
      <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
}
