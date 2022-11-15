import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ title, date, subText, image, url, readmore }) => {
  console.log(url);
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded ">
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
            <p className="text-2xl font-bold font-Lora text-secondary cursor-pointer btn-text line-clamp-1">
              {title}
            </p>
          </Link>
        )}
        {subText && (
          <p className="mb-2 text-sm text-gray-900 line-clamp-2">{subText}</p>
        )}
        {readmore && (
          <Link href={url}>
            <p className="btn-text text-sm">Read More</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
