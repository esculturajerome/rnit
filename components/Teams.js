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
    slidesToShow: 1,
    speed: 500,
    initialSlide: 1,
    centerPadding: "30px",
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
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
      <div className="pb-32 py-8 lg:py-12 widest ">
        <TitleRow title="Meet our team" />
        <EmployeesDesktop employees={employees} />
        <div className="mt-8 inside md:hidden">
          <Slider {...settings}>
            {employees.map((employee, i) => (
              <EmployeeCard employee={employee} key={i} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Teams;

function EmployeesDesktop({ employees }) {
  return (
    <div className="mt-12 inside hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {employees &&
        employees.map((employee, i) => (
          <EmployeeCard key={i} employee={employee} />
        ))}
    </div>
  );
}

function EmployeeCard({ employee }) {
  return (
    <div className="flex flex-col items-center justify-around p-4 mx-4 border border-secondary/30 rounded-lg bg-secondary/10">
      <div className="w-32 h-32 relative">
        <Image
          src={"/employees-gallery/" + employee.image}
          alt={employee.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          priority
        />
      </div>
      <p className="text-sm text-main-dark bg-white px-4 py-1 rounded-md mt-4 mb-1 whitespace-nowrap font-Lora font-bold">
        {employee.name}
      </p>
      <p className="text-xs text-gray-500 whitespace-nowrap">
        {employee.position}
      </p>
    </div>
  );
}
