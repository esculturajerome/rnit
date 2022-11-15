import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getOtherPrograms, getProgramById } from "../../components/Functions";
import Layout from "../../components/Layout";
import ProgramsGrid from "../../components/ProgramsGrid";
import TitleRow from "../../components/TitleRow";

const ProgramDetails = () => {
  const router = useRouter();
  const programID = router.query.programsID;
  const [program, setProgram] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setProgram(getProgramById(programID));
    setCourses(getOtherPrograms(programID));
  }, [programID, router]);

  return (
    <Layout>
      <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row flex-wrap justify-center mb-32">
        <div className="flex-1 order-2 lg:order-1 space-y-4 ">
          <h2 className="text-2xl lg:text-4xl text-secondary pr-6 lg:pr-12 font-bold">
            {program?.title}
          </h2>
          <p className="text-black/85">{program?.subText}</p>
          <ul className="ml-4 text-md space-y-4 pt-4 text-black/80">
            <li>{program?.desc1}</li>
            <li>{program?.desc2}</li>
            <li>{program?.desc3}</li>
          </ul>
        </div>
        <div className="space-y-4 flex-1 order-1 lg:order-2">
          {program?.image1 && (
            <Image
              className="object-cover w-full rounded shadow-lg"
              width={700}
              height={350}
              src={program?.image1}
              alt=""
            />
          )}

          {program?.image2 && (
            <div className="flex gap-4">
              <Image
                src={program?.image2}
                className="object-cover w-full rounded shadow-lg"
                width={400}
                height={200}
                alt=""
              />
              <Image
                src={program?.image3}
                className="object-cover w-full rounded shadow-lg"
                width={400}
                height={200}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <TitleRow title="Other Programs &amp; Services" />
      <ProgramsGrid minimal courses={courses} />
    </Layout>
  );
};

export default ProgramDetails;
