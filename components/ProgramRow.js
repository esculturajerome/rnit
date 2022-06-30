import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProgramRow() {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:mb-0 lg:py-20 pb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-secondaryDark sm:text-4xl sm:leading-none">
              AUTOMOTIVE
              <br className="hidden md:block" /> SERVICING NC II
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              To produce qualified automotive service technicians with highly
              employable skills through quality instruction and an extensive
              shop experience and make them highly competitive in a rapidly
              changing world of automotive.
            </p>
          </div>
          <div className="flex  items-center gap-4">
            <Link href="/" className="btn-contained">
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 overflow-hidden">
        <div className="w-fullh-full  ">
          <Image
            src="/images/programs/mechanic.jpg"
            width={1580}
            height={1120}
            alt="Mechanic"
            objectFit="cover"
          />
        </div>

        {/* <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default ProgramRow;
