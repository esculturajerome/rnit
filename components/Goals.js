import React from "react";
import { convertToLink, getAboutUs } from "./Functions";
import { useRouter } from "next/router";
import Link from "next/link";

function Goals({ aboutUsData }) {
  const router = useRouter();
  const aboutUs = aboutUsData || getAboutUs();

  return (
    <div className="px-4 py-6 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {aboutUs.map((item, i) => (
          <div
            key={i}
            className="relative p-px overflow-hidden transition duration-300 transform rounded shadow-sm hover:bg-white hover:scale-105 group hover:shadow-xl "
          >
            <div className="relative p-5 bg-white/90 rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <h6 className="font-semibold leading-5">{item.title}</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 line-clamp-2">
                {item.subText}
              </p>
              <Link
                href={`${aboutUsData ? "../about/" : "/about/"}${convertToLink(
                  item.title
                )}`}
                aria-label={item.title}
              >
                <p className="text-sm text-black/80 hover:text-black font-semibold btn-text ">
                  Learn more
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
