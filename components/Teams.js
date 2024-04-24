import Image from "next/image";
import React, { useEffect, useState } from "react";
import TitleRow from "./TitleRow";
import Slider from "react-slick";

const Teams = () => {
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

  var settings = {
    centerMode: true,
    infinite: false,
    slidesToShow: 5,
    speed: 500,
    initialSlide: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerMode: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 4,
          infinite: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          centerMode: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 4,
          infinite: false,
        },
      },
      {
        breakpoint: 840,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
        },
      },
      {
        breakpoint: 667,
        settings: {
          centerPadding: "30px",
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 565,
        settings: {
          centerPadding: "30px",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="pb-32 py-20 lg:py-32 widest ">
        <TitleRow title="Meet our team" />
        <EmployeesDesktop employees={employees} />
      </div>
    </>
  );
};

export default Teams;

function EmployeesDesktop({ employees }) {
  return (
    <div className="mt-24 inside hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
      {employees &&
        employees.map((employee, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-around p-4 border border-secondary/30 rounded-lg bg-secondary/10"
          >
            <div className="w-32 h-32 relative">
              <Image
                src={"/employees-gallery/" + employee.image}
                alt={employee.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <p className="text-sm text-main-dark bg-white px-4 py-1 rounded-md mt-4 mb-1 whitespace-nowrap">
              {employee.name}
            </p>
            <p className="text-xs text-gray-500 whitespace-nowrap">
              {employee.position}
            </p>
          </div>
        ))}
    </div>
  );
}
