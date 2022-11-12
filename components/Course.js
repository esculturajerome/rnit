import Image from "next/image";
import React from "react";
import TitleRow from "./TitleRow";

function Course({
  type,
  title,
  subText,
  desc1,
  desc2,
  desc3,
  image1,
  image2,
  image3,
}) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div
          className={`grid grid-cols-2 gap-5 ${type && "order-1 lg:order-2"}`}
        >
          {image1 && (
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src={image1}
              alt=""
            />
          )}
          {image2 && (
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src={image2}
              alt=""
            />
          )}
          {image3 && (
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src={image3}
              alt=""
            />
          )}
        </div>
        <div
          className={`flex flex-col justify-center ${
            type && "order-2 lg:order-1"
          }`}
        >
          <div className="mt-4 mb-8">
            <h2 className="text-xl mb-2">{title}</h2>
            <p className="text-md">{subText}</p>
          </div>
          <ul className="lg:ml-4 text-sm space-y-2">
            <li>{desc1}</li>
            <li>{desc2}</li>
            <li>{desc3}</li>
          </ul>
          {/* <div className="pb-4">
            <p className="text-sm text-gray-900">{desc1}</p>
          </div>
          <div className="pb-4">
            <p className="text-sm text-gray-900">{desc2}</p>
          </div>
          <div>
            <p className="text-sm text-gray-900">{desc3}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Course;
