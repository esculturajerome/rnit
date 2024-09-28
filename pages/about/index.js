import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import ImageRow from "../../components/ImageRow";
import Image from "next/image";
import Goals from "../../components/Goals";
import Teams from "../../components/Teams";
import Nav from "../../components/Nav";

import orgChart from "../../public/images/org-chart.jpg";
import assessmentMission from "../../public/images/assessment-mission.jpg";
import assessmentCenter from "../../public/images/assessment-center.jpg";
import assessmentFee from "../../public/images/assessment-fee_2024.jpg";

function About() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await fetch("/api/employees");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees", error);
      }
    };
    getEmployees();
  }, []);

  return (
    <>
      <Head>
        <title>RNIT | About us</title>
        <meta property="og:url" content="https://rnit-tesda.org/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RNIT | About us" />
        <meta property="og:description" content="Get to know more about RNIT" />
        <meta
          property="og:image"
          content="https://rnit-tesda.org/images/charter.png"
        />
      </Head>
      <Nav />
      {employees && (
        <div id="meetourteam">
          <Teams employees={employees} />
        </div>
      )}

      {orgChart && (
        <div id="orgchart">
          <ImageRow variant>
            <a
              href={orgChart.src}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Org Chart"
            >
              <Image
                src={orgChart}
                width={orgChart.width}
                height={orgChart.height}
                alt="orgChart"
                objectFit="cover"
                blurDataURL={orgChart.blurData}
                placeholder="blur"
                priority
              />
            </a>
          </ImageRow>
        </div>
      )}
      <div className="flex gap-2 justify-center w-full">
        <a href="/images/assessment-fee_2024.jpg">
          <Image
            src="/images/assessment-fee_2024.jpg"
            alt="assessment-fee-2024"
            width={700}
            height={950}
            priority
            objectFit="contain"
            className="mx-auto w-full border-2"
          />
        </a>
        <a href="/images/assessment-mission.jpg">
          <Image
            src="/images/assessment-mission.jpg"
            alt="assessment-mission"
            width={700}
            height={950}
            priority
            objectFit="contain"
            className="mx-auto w-full border-2"
          />
        </a>
      </div>
      <div className="flex gap-2 justify-center w-full">
      <Image
            src="/images/assessment-center.jpg"
            alt="assessment-center"
            width={900}
            height={700}
            priority
            objectFit="contain"
            className="mx-auto w-full border-2"
          />
           </div>
      <Goals />
      <Footer />
    </>
  );
}

export default About;
