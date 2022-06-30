import Image from "next/image";
import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="relative flex flex-col px-0 pb-16 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-center z-10  w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl order-2 lg:order-1">
        <div className="mb-0 lg:my-40 lg:mt-32 lg:max-w-lg lg:-ml-96 lg:px-8 bg-white lg:py-5 lg:border-b-8 border-secondary">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Undertake direct training <br className="hidden md:block" />
              activities for TESDA
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Skilling Romblon thru quality TVET Delivery for Peoples Prosperity
            </p>
          </div>
          <div className="flex  items-center gap-4 mb-8">
            <Link href="/" className="btn-contained">
              Enrol now
            </Link>
            <Link href="/" aria-label="" className="btn-text">
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className=" inset-y-0 flex right-0 w-full max-w-full lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2  lg:absolute xl:px-0 order-1 lg:order-2 overflow-hidden">
        {/* <div className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full bg-main"></div> */}
        <div className="object-cover w-full h-full rounded-bl-3xl lg:rounded-none  mb-12">
          <Image
            src="/images/hero-transparent.png"
            alt="Hero image"
            width={1276}
            height={1280}
            objectFit="cover"
          />
        </div>
        {/* <img
          className="object-cover w-full h-full rounded-bl-3xl lg:rounded-none lg:shadow-none sm:h-96 lg:hidden lg:h-full mb-12"
          src="/images/hero-sm.png"
          alt=""
        />
       
        <img
          className="object-cover w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 hidden lg:inline lg:h-full"
          src="/images/hero-transparent.png"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Header;
