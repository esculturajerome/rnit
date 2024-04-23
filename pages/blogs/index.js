import Head from "next/head";
import React from "react";
import BlogsMultiple from "../../components/BlogsMultiple";
import Footer from "../../components/Footer";
import Goals from "../../components/Goals";
import ImageRow from "../../components/ImageRow";
import Nav from "../../components/Nav";
import ProgramRow from "../../components/ProgramRow";
import { allBlogs } from "/.contentlayer/generated";

const Blogs = () => {
  const blogs = allBlogs;
  return (
    <>
      <Head>
        <title>RNIT | Blogs</title>
        <meta property="og:url" content="https://rnit-tesda.org/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RNIT | Blogs" />
        <meta property="og:description" content="RNIT latest blogs" />
        <meta
          property="og:image"
          content="https://rnit-tesda.org/images/charter.png"
        />
      </Head>
      <Nav />
      <BlogsMultiple data={blogs} />
      <ProgramRow />
      <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
};

export default Blogs;
