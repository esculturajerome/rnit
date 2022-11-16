import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { handleNav } from "./Functions";

import ProgramImage from "../public/images/programs/mechanic/mechanic1.jpg";

function ProgramRow() {
  const router = useRouter();
  return (
    <div className="grid md:grid-cols-2 gap-4 -mb-1.5 lg:max-w-screen-xl mx-auto items-center mt-0 bg-gray-100">
      <div className="lg:order-1 flex-1 mx-4 py-8 lg:py-0 sm:mx-auto md:ml-8 lg:ml-16">
        <h2 className="max-w-lg lg:mb-6 text-2xl font-bold tracking-tight text-secondaryDark md:text-3xl lg:leading-none">
          AUTOMOTIVE
          <br className="hidden md:block" /> SERVICING NC II
        </h2>
        <p className="text-sm text-gray-700 lg:text-lg sm:max-w-md">
          To produce qualified automotive service technicians with highly
          employable skills through quality instruction and an extensive shop
          experience and make them highly competitive in a rapidly changing
          world of automotive.
        </p>
        <a
          onClick={(e) => handleNav(router, e, "/programs")}
          href="#"
          className="btn-contained mt-4 lg:mt-8 text-sm lg:text-base"
        >
          Learn more
        </a>
      </div>

      <div className="order-1 flex-1">
        <Image
          src={ProgramImage}
          width={800}
          height={500}
          alt="Mechanic"
          objectFit="cover"
          blurDataURL={ProgramImage.blurData}
          placeholder="blur"
        />
      </div>
    </div>
    // <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
    //   <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
    //     <div className="mb-16 lg:mb-0 lg:py-20 pb-0 lg:max-w-lg lg:pr-5">
    //       <div className="max-w-xl mb-6">
    //         <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-secondaryDark sm:text-4xl sm:leading-none">
    //           AUTOMOTIVE
    //           <br className="hidden md:block" /> SERVICING NC II
    //         </h2>
    // <p className="text-base text-gray-700 md:text-lg">
    //   To produce qualified automotive service technicians with highly
    //   employable skills through quality instruction and an extensive
    //   shop experience and make them highly competitive in a rapidly
    //   changing world of automotive.
    // </p>
    //       </div>
    //       <div className="flex  items-center gap-4">
    //         <a
    //           onClick={(e) => handleNav(router, e, "/programs")}
    //           href="#"
    //           className="btn-contained"
    //         >
    //           Learn more
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 overflow-hidden">
    //     <div className="w-full h-full  ">
    //       <Image
    //         src={ProgramImage}
    //         width={1580}
    //         height={1120}
    //         alt="Mechanic"
    //         objectFit="cover"
    //         blurDataURL={ProgramImage.blurData}
    //         placeholder="blur"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProgramRow;
