import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Card from "./Card";
import { convertToLink, handleNav } from "./Functions";
import TitleRow from "./TitleRow";

function Blogs({ data }) {
  return (
    <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:py-20 lg:px-24">
      <TitleRow title="What's new?" />
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {data?.map((item, i) => (
          <Card
            key={i}
            title={item?.title}
            subText={item?.subText}
            image={item?.image}
            url={"announcements/" + convertToLink(item?.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
