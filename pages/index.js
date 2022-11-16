import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Teams from "../components/Teams";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Blogs from "../components/Blogs";
import ProgramRow from "../components/ProgramRow";
import Goals from "../components/Goals";
import ImageRow from "../components/ImageRow";
import { getAnnouncementHomepage } from "../data/announcements";

export default function Home() {
  const ANNOUNCEMENT_DATA = getAnnouncementHomepage();
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Nav />
      <Header />
      <Blogs data={ANNOUNCEMENT_DATA} />
      <ProgramRow />
      <Teams />
      <ImageRow variant="bg-pattern-bg-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
}
