import Nav from "../components/Nav";
import ProgramRow from "../components/ProgramRow";
import Footer from "../components/Footer";
import Image from "next/image";
import Teams from "../components/Teams";
import Head from "next/head";
import ImageRow from "../components/ImageRow";
import Goals from "../components/Goals";

function About() {
  return (
    <>
      <Head>
        <title>RNIT | About us</title>
        <meta
          name="description"
          content="RNIT page with Team Information and Organizational Chart"
        />
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
      </Head>
      <Nav />
      <Teams />
      {/* <ProgramRow /> */}
      <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
}

export default About;
