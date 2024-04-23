import Image from "next/image";
import Link from "next/link";
import React from "react";
import Content, { HTMLContent } from "../components/Content";
import DateFormatter from "../utils/DateFormatter";

const Card = ({ title, date, description, image, url, readmore }) => {
  const PostContent = HTMLContent || Content;

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded  border-gray-200">
      {url && (
        <Image
          src={image}
          width={500}
          height={300}
          className="h-52 object-cover w-full rounded"
          alt=""
          priority
        />
      )}
      <div className="mb-4 pb-6 space-y-3">
        {/* {date && (
          <p className="mb-4 text-xs font-light text-gray-600 uppercase">
            <DateFormatter dateString={date} />
          </p>
        )} */}
        <div className="relative inline-block group cursor-pointer">
          <Link href={url}>
            <h2 className="relative z-10 text-secondary transition-all duration-300 text-lg lg:text-xl font-bold font-Lora uppercase line-clamp-2">
              {title}
            </h2>
          </Link>
          <span
            className={`absolute left-0 bottom-[-5px] bg-secondary h-0.5 w-full transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
          ></span>
        </div>

        {/* <div>
          <h2 className="relative z-10 transition-all duration-300 ">
            {title}
          </h2>
          <span className="absolute left-0 bottom-[-5px] bg-secondary h-0.5 w-full transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </div>*/}
        {description && (
          <div className="mb-2 text-sm text-gray-900 line-clamp-3">
            <PostContent content={description} />
          </div>
        )}
        {readmore && (
          <Link href={url}>
            <p className="text-sm hover:underline">Read More</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
