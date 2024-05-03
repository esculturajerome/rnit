import React from "react";
import { convertToLink, getAboutUs } from "./Functions";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function Goals({ aboutUsData }) {
  const router = useRouter();
  const aboutUs = aboutUsData || getAboutUs();

  return (
    <div className="bg-main min-h-[30vh] widest relative grid items-center">
      <Image
        src="/images/bg/pattern-2.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="opacity-50"
      />
      <div className="inside">
        <div className="py-6 lg:py-20">
          <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4">
            {aboutUs.map((item, i) => (
              <Link
                key={i}
                href={`${aboutUsData ? "../about/" : "/about/"}${convertToLink(
                  item.title
                )}`}
                aria-label={item.title}
              >
                <div className="flex-1 flex-grow flex-shrink min-w-0 w-180px overflow-hidden transition duration-300 transform rounded shadow-sm hover:bg-white hover:scale-105 group hover:shadow-xl cursor-pointer">
                  <div className="relative p-5 lg:p-8 bg-white/90 rounded-sm group space-y-4">
                    <h3 className="font-semibold leading-5 text-2xl whitespace-nowrap">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-900 line-clamp-2">
                      {item.subText}
                    </p>
                    <div className="relative inline-block group cursor-pointer">
                      <p className="relative z-10 text-black/80 transition-all duration-300 normal-case font-semibold text-sm">
                        Learn more
                      </p>
                      <span
                        className={`absolute left-0 bottom-[-5px] bg-secondary h-0.5 w-full transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
                      ></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
