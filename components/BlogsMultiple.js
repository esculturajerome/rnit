import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Card from "./Card";
import { convertToLink } from "./Functions";
import TitleRow from "./TitleRow";

function BlogsMultiple({ data, title }) {
  const router = useRouter();

  const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  const trimBlogs = sortedBlogs.slice(0, 6);
  return (
    <div
      className={`${
        trimBlogs.length < 1 && "hidden"
      } px-4 py-2 mx-auto lg:py-20 lg:px-32 mt-4 lg:mt-0 widest`}
    >
      {!title && <TitleRow title="What's new?" />}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {trimBlogs?.map((item, i) => (
          <Card
            key={i}
            title={item?.title}
            date={item?.date}
            description={item?.description}
            image={item?.featuredImage}
            url={item?.slug}
          />
        ))}
      </div>
      {router.pathname === "/" && (
        <Link href="/blogs">
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

export default BlogsMultiple;
