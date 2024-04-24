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
        <div className="mt-24 inside">
          <Slider {...settings}>
            {employees.map((employee, i) => (
              <Employee
                picture={"/employees-gallery/" + employee.image}
                name={employee.name}
                position={employee.position}
                key={i}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Teams;

function Employee({ picture, name, position }) {
  return (
    <div className="mx-2 lg:mx-6">
      <div className="relative mb-4 rounded w-full">
        {picture && (
          <Image
            src={picture}
            alt={name}
            width={400}
            height={400}
            className="absolute object-cover w-full h-full rounded-full"
          />
        )}
      </div>
      <div className="text-center">
        <p className="font-Lora">{name}</p>
        <p className="text-sm ">{position}</p>
      </div>
    </div>
  );
}
