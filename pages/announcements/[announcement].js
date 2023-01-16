import Head from "next/head";
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
import Nav from "../../components/Nav";
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
  const [item, setItem] = useState([]);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    setItem(getAnnouncementById(announcementID));
    setOthers(getOtheAnnouncement(announcementID));
  }, [announcementID, router]);

  return (
    <>
      <Head>
        <title>{item?.title}</title>
        <meta name="description" content={item?.subText} />
      </Head>
      <Nav />
      <div className="px-4 py-2 mx-auto max-w-full lg:max-w-screen-2xl lg:pt-20 lg:px-24 mt-4 lg:mt-0">
        <div>
          <h2>{item?.title}</h2>
          <p>{item?.subText}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full mt-16">
          {others?.slice(0, 3).map((item, i) => (
            <Card
              key={i}
              title={item?.title}
              subText={item?.subText}
              image={item?.image}
              url={"../announcements/" + convertToLink(item?.title)}
              // url={"../announcements/" + item?.id}
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
