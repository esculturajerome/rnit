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
import NavBar from "../components/NavBar";
import Nav from "../components/Nav";

export default function Home() {
  const ANNOUNCEMENT_DATA = getAnnouncementHomepage();
  return (
    <>
      <Head></Head>
      <NavBar />
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
