import Image from "next/image";
import React from "react";
import TitleRow from "./TitleRow";
import Slider from "react-slick";

const Teams = () => {
  const images = [
    {
      "No.": 1,
      NAME: "ANNA CHRISTINA C. MARTINEZ",
      POSITION: "Officer-in-Charge",
    },
    {
      "No.": 2,
      NAME: "FELIPE S. GADO",
      POSITION: "Assistant professor IV",
    },
    {
      "No.": 3,
      NAME: "JOYSEDYLL M. FAJUTNAO",
      POSITION: "Assistant professor III",
    },
    {
      "No.": 21,
      NAME: "TERESA F. GALICIA",
      POSITION: "Assistant professor I",
    },
    {
      "No.": 25,
      NAME: "PRENZ JUMER B. LOTA",
      POSITION: "Assistant professor I",
    },
    {
      "No.": 12,
      NAME: "MARIA ELENA G. GACA",
      POSITION: "Administrative Assistant VI",
    },
    {
      "No.": 9,
      NAME: "JENETTE G. FETALVERO",
      POSITION: "Administrative Officer IV",
    },
    {
      "No.": 10,
      NAME: "U M. MACAPAGAL",
      POSITION: "Administrative Officer III",
    },
    {
      "No.": 11,
      NAME: "APRIL JOY P. LOTA",
      POSITION: "Administrative Officer I",
    },
    {
      "No.": 14,
      NAME: "MARILOU G. MAESTRO",
      POSITION: "Administrative Aide III",
    },
    {
      "No.": 26,
      NAME: "JHERALDIN V. VILLAN",
      POSITION: "Administrative Aide III",
    },
    {
      "No.": 16,
      NAME: "RUSTUM M. RUBIO",
      POSITION: "Administrative Aide I",
    },
    {
      "No.": 20,
      NAME: "MELANIS BALDEA",
      POSITION: "Instructor III",
    },
    {
      "No.": 7,
      NAME: "PERRY JOY M. GALASAO",
      POSITION: "Instructor III",
    },
    {
      "No.": 23,
      NAME: "ROMESTAN G. FERNANDEZ",
      POSITION: "Instructor II",
    },
    {
      "No.": 8,
      NAME: "JONAS C. LORENZO",
      POSITION: "Instructor II",
    },
    {
      "No.": 22,
      NAME: "MA. DIANNE LU L. GALICIA",
      POSITION: "Instructor I",
    },
    {
      "No.": 221,
      NAME: "NICO C. GALISANAO",
      POSITION: "Instructor I",
    },

    {
      "No.": 24,
      NAME: "JUNE RYAN G. FUENTES",
      POSITION: "Instructor I",
    },

    {
      "No.": 13,
      NAME: "MA. MELODY G. GALICIA",
      POSITION: "Nurse II",
    },
    {
      "No.": 15,
      NAME: "MELANIE P. MENDOZA",
      POSITION: "School Librarian II",
    },

    {
      "No.": 17,
      NAME: "ISIDRO M. GALASAO",
      POSITION: "Watchman II",
    },
    {
      "No.": 18,
      NAME: "TEODY L. GACA",
      POSITION: "Watchman II",
    },
    {
      "No.": 19,
      NAME: "ELIZALDE D. CATAJAY",
      POSITION: "Security Guard I",
    },
  ];

  var settings = {
    centerMode: false,
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
      <div className="pb-32 py-20 lg:py-32 widest">
        <TitleRow title="Meet our team" />
        <div className="mt-24 inside">
          <Slider {...settings}>
            {images.map((image, i) => (
              <Employee
                picture={"/employees-gallery/" + image.NAME + ".JPG"}
                name={image.NAME}
                position={image.POSITION}
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
        <Image
          src={picture}
          alt={name}
          width={400}
          height={400}
          className="absolute object-cover w-full h-full rounded"
        />
      </div>
      <div className="flex flex-col text-center">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-md ">{position}</p>
      </div>
    </div>
  );
}
