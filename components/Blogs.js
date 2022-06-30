import Link from "next/link";
import React from "react";
import TitleRow from "./TitleRow";

function Blogs() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <TitleRow title="What's new?" />
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <Link href="/" aria-label="Article">
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </Link>
          <div className="py-5">
            <p className="mb-6 text-xs font-light text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <Link
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5 font-Lora text-secondary">
                Diving to the deep
              </p>
            </Link>
            <p className="text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
