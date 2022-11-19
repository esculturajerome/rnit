import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import {
  convertToLink,
  getOtherPrograms,
  getProgramById,
} from "../../components/Functions";
import Goals from "../../components/Goals";
import ImageRow from "../../components/ImageRow";
import Layout from "../../components/Layout";
Import Navbar from "../../Navbar";
import ProgramRow from "../../components/ProgramRow";
import ProgramsGrid from "../../components/ProgramsGrid";
import TitleRow from "../../components/TitleRow";
import {
  getAnnouncementById,
  getOtheAnnouncement,
} from "../../data/announcements";

const Announcement = () => {
  const router = useRouter();
  const announcementID = router.query.announcement;
  console.log(announcementID);
  const [item, setItem] = useState([]);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    setItem(getAnnouncementById(announcementID));
    setOthers(getOtheAnnouncement(announcementID));
  }, [announcementID, router]);

  return (
    <>
      <Navbar />
      <div className="px-4 py-6 md:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h2>{item?.title}</h2>
        <p>{item?.subText}</p>
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {others?.map((item, i) => (
            <Card
              key={i}
              title={item?.title}
              subText={item?.subText}
              image={item?.image}
              url={"../announcements/" + convertToLink(item?.title)}
            />
          ))}
        </div>
      </div>
      {/* <ProgramRow /> */}
      <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
};

export default Announcement;
