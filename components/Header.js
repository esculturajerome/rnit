import Image from "next/image";
import React from "react";

import HeroImage from "../public/images/hero-transparent.png";
import Link from "next/link";

function Header() {
  return (
    <div className="relative flex flex-col px-0 pb-16 lg:flex-col lg:pb-0 widest">
      <div className="flex flex-col items-center z-10  w-full px-4 lg:px-8 -2xl order-2 lg:order-1">
        <div className="mb-0 lg:my-40 lg:mt-32 lg:max-w-lg lg:-ml-96 lg:px-8 bg-white lg:py-12 lg:border-b-8 border-secondary space-y-4 lg:space-y-8">
          <h2 className="max-w-lg  text-3xl font-bold tracking-tight text-main sm:text-4xl sm:leading-none">
            Undertake direct training activities for TESDA
          </h2>
          <p className="text-base max-w-sm text-gray-700 md:text-lg">
            Skilling Romblon thru quality TVET Delivery for Peoples Prosperity
          </p>
          <div className="flex  items-center gap-4">
            <Link href="/enrol">
              <p className="btn-contained">Enrol now</p>
            </Link>
            <Link href="/about">
              <div className="relative inline-block group cursor-pointer">
                <span className="relative z-10 transition-all duration-300 ">
                  Learn more
                </span>
                <span
                  className={`absolute left-0 bottom-[-5px] bg-secondary h-0.5 w-full transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
                ></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" inset-y-0 flex right-0 w-full lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2  lg:absolute xl:px-0 order-1 lg:order-2 overflow-hidden">
        <div className="object-cover w-full h-full rounded-bl-3xl lg:rounded-none mb-12">
          {HeroImage && (
            <Image
              src={HeroImage}
              alt="Hero image"
              width={1250}
              height={1250}
              objectFit="cover"
              blurDataURL={HeroImage.blurData}
              placeholder="blur"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
