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
      <div className="widest mt-8 p-4 lg:my-12 md:px-24 md:text-center">
        <div className="max-w-4xl mx-4 md:mx-auto">
          <div className="flex place-content-center gap-2 md:gap-4">
            {item?.image && (
              <Image
                src={item?.image}
                width={800}
                height={500}
                className="h-52 object-cover w-full rounded"
                alt=""
              />
            )}
            {item?.image2 && (
              <Image
                src={item?.image2}
                width={800}
                height={500}
                className="h-52 object-cover w-full rounded"
                alt=""
              />
            )}
          </div>
          <h2 className="text-2xl lg:text-4xl text-secondary font-bold uppercase mb-4 mt-6 lg:my-16 md:leading-loose">
            {item?.title}
          </h2>
          <p className="text-black/85 md:leading-loose">{item?.subText}</p>
        </div>
      </div>
      <div className="widest p-4 md:px-16 lg:px-24 lg:py-24">
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
      <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
};

export default Announcement;
