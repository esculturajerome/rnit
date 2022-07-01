import React from "react";
import Nav from "../components/Nav";
import Course from "../components/Course";
import Link from "next/link";
import { handleNav } from "../components/Functions";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

function Programs() {
  const router = useRouter();
  const courses = [
    {
      id: 1,
      title: "AUTOMOTIVE SERVICING NC II GOALS:",
      subText:
        "To produce qualified automotive service technicians with highly employable skills through quality instruction and an extensive shop experience and make them highly competitive in a rapidly changing world of automotive.",
      desc1:
        "Teach trainees the fundamental knowledge and skills required of a service technician in the high-demand and high-paying job in automotive technology.",
      desc2:
        "Provide a learning environment of close, relevant hands-on experience and meaningful interaction between trainer and trainees instilling values like teamwork, professionalism and work safety among others.",
      desc3:
        "Continually strive to provide high level of student satisfaction to produce a consistently high rate of graduates certification and placement through partnership with industries.",
    },
    {
      id: 2,
      title: "DRESSMAKING NC II GOALS:",
      subText:
        "To produce qualified dressmakers/garment sewers with highly employable skills through quality instruction and an extensive shop experience and make them highly competitive in a rapidly changing world of dressmaking.",
      desc1:
        "Teach trainees the fundamental knowledge and skills required of a dressmaker/garment sewer in the high- demand and high-paying job in dressmaking industry.",
      desc2:
        "Provide a learning environment of close, relevant hands-on experience and meaningful interaction between trainer and trainees instilling values like teamwork, professionalism and work safety among others.",
      desc3:
        "Continually strive to provide high level of student satisfaction to produce a consistently high rate of graduates certification and placement through partnership with industries.",
    },
    {
      id: 3,
      title: "RAC SERVICING NC II GOALS:",
      subText:
        "To produce DomRAC technician with highly employable skills through quality instruction and an extensive shop experience and make them highly competitive in a rapidly changing world of DomRAC.",
      desc1:
        "Teach trainees the fundamental knowledge and skills required of a DomRAC technician in the high-demand and high-paying job in DomRAC industry.",
      desc2:
        "Provide a learning environment of close, relevant hands-on experience and meaningful interaction between trainer and trainees instilling values like teamwork, professionalism and work safety among others.",
      desc3:
        "Continually strive to provide high level of student satisfaction to produce a consistently high rate of graduates certification and placement through partnership with industries.",
    },
    {
      id: 4,
      title: "SHIELDED METAL ARC WELDING NC II GOALS:",
      subText:
        "To produce qualified welders/fabricator with highly employable skills through quality instruction and an extensive shop experience and make them highly competitive in a rapidly changing world of welding and fabrication.",
      desc1:
        "Teach trainees the fundamental knowledge and skills required of a welder/fabricator in the high-demand and high-paying job in welding industry.",
      desc2:
        "Provide a learning environment of close, relevant hands-on experience and meaningful interaction between trainer and trainees instilling values like teamwork, professionalism and work safety among others.",
      desc3:
        "Continually strive to provide high level of student satisfaction to produce a consistently high rate of graduates certification and placement through partnership with industries.",
    },
    {
      id: 5,
      title: "FOOD AND BEVERAGE SERVICES NC II GOALS:",
      subText:
        "To produce competent food and beverage service attendants with highly employable skills through quality instruction and an extensive hands on experience and make them highly competitive in a rapidly changing world of food and beverage services.",
      desc1:
        "Teach learners the competencies required of a food and beverage service standards in a high-demand and high paying jobs on food and beverage services facilities/establishments.",
      desc2:
        "Provide a learning environment of close relevant workshop experience and meaningful interaction between trainer and learners instilling work values like teamwork, collaboration, professionalism and work safety among others.",
      desc3:
        "Continually strive to provide a high level of satisfaction to produce consistently high rate of graduate certification and job placement through partnership with industries.",
    },
  ];
  return (
    <>
      <Nav />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Programs &amp; Services
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                We believe in competence, integrity, high level of commitment,
                transparency, 5S, strong desire for improvement, teamwork and
                cooperation
              </p>
            </div>
            <div>
              <a
                onClick={(e) => handleNav(router, e, "/")}
                href="#"
                aria-label="Learn more"
                className="btn-contained"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {courses.map((course, i) => {
        <Course
          title={course?.title}
          // subText={course?.subText}
          // desc1={course?.desc1}
          // desc2={course?.desc2}
          // desc3={course?.desc3}
        />;
      })}
      <Course />
      <Footer />
      {/* <Course type />
      <Course type /> */}
    </>
  );
}

export default Programs;
