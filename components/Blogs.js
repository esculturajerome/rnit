import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Card from "./Card";
import { convertToLink } from "./Functions";
import TitleRow from "./TitleRow";

function Blogs({ data }) {
  const ANNOUNCEMENT_DATA = data.slice(0, 6);
  const router = useRouter();

  return (
    <div
      className={`${
        ANNOUNCEMENT_DATA.length < 1 && "hidden"
      } px-4 py-2 mx-auto lg:py-20 lg:px-32 mt-4 lg:mt-0 widest`}
    >
      <TitleRow title="What's new?" />
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {ANNOUNCEMENT_DATA?.map((item, i) => (
          <Card
            key={i}
            title={item?.title}
            subText={item?.subText}
            image={item?.images[0]}
            url={"announcements/" + convertToLink(item?.title)}
          />
        ))}
      </div>
      {router.pathname === "/" && (
        <Link href="/announcements">
          <div className="text-center">
            <div className="btn-contained mt-4 lg:mt-8 text-sm lg:text-base">
              Read More
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Blogs;
