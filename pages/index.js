import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Teams from "../components/Teams";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import BlogsMultiple from "../components/BlogsMultiple";
import ProgramRow from "../components/ProgramRow";
import Goals from "../components/Goals";
import ImageRow from "../components/ImageRow";
import Nav from "../components/Nav";

import { allBlogs } from "/.contentlayer/generated";

export default function Home() {
  const blogs = allBlogs;

  return (
    <>
      <Head>
        <title>Romblon National Institute of Technology</title>
        <link
          rel="shortcut icon"
          href="https://rnit-tesda.org/RNIT-logo.webp"
        />
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
        <meta property="og:url" content="https://rnit-tesda.org/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Romblon National Institute of Technology"
        />
        <meta
          property="og:description"
          content="Skilling Romblon thru quality TVET Delivery for Peoples Prosperity"
        />
        <meta
          property="og:image"
          content="https://rnit-tesda.org/images/charter.png"
        />
      </Head>
      <Nav />
      <Header />
      <BlogsMultiple data={blogs} />
      <ProgramRow />
      <Goals />
      {/* <div className="widest">
        <div className="bg-cover bg-center min-h-screen relative ">
          <Image
            src="/images/bg/pattern-2.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="py-6 md:py-0 inside">

          </div>
        </div>
      </div> */}
      {/* <Teams /> */}
      {/* <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow> */}
      <Footer />
    </>
  );
}
