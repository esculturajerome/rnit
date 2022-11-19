import React from "react";
import Blogs from "../../components/Blogs";
import Footer from "../../components/Footer";
import Goals from "../../components/Goals";
import ImageRow from "../../components/ImageRow";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import ProgramRow from "../../components/ProgramRow";
import { ANNOUNCEMENT_DATA } from "../../data/announcements";

const Announcements = () => {
  const ANNOUNCEMENTS_DATA = ANNOUNCEMENT_DATA;
  return (
    <>
      <NavBar />
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
