import Image from "next/image";
import Link from "next/link";
import React from "react";
import Content, { HTMLContent } from "../components/Content";

const Card = ({ title, date, subText, image, url, readmore }) => {
  const PostContent = HTMLContent || Content;

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
      {image && (
        <Link href={url}>
          <Image
            src={image}
            width={500}
            height={300}
            className="h-52 object-cover w-full rounded hover:opacity-90 cursor-pointer"
            alt=""
          />
        </Link>
      )}
      <div className="py-5 space-y-3">
        {date && (
          <p className="mb-4 text-xs font-light text-gray-600 uppercase">
            {date}
          </p>
        )}
        {url && (
          <Link href={url}>
            <h2 className="text-xl lg:text-2xl font-bold font-Lora text-secondary cursor-pointer line-clamp-2 hover:underline uppercase">
              {title}
            </h2>
          </Link>
        )}
        {subText && (
          <div className="mb-2 text-sm text-gray-900 line-clamp-2">
            <PostContent content={subText} />
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
