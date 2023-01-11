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
        <title>RNIT</title>
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
        <meta
          name="description"
          content="Skilling Romblon thru quality TVET Delivery for Peoples Prosperity"
        />
      </Head>
      <Nav />
      {/* <Nav /> */}
      <Header />
      <Blogs data={ANNOUNCEMENT_DATA} />
      <ProgramRow />
      <Teams />
      <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
}
