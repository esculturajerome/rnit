import React from "react";
import Layout from "./Layout";

function ImageRow({ variant, children }) {
  return (
    <div className={`${variant && variant} bg-cover bg-white`}>
      <div className="px-4 py-6 md:py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {children}
        {/* <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <p className="max-w-xl mb-4 text-sm tracking-wider text-white ">
              A Transparency Seal, prominently displayed on the main page of the
              website of a particular government agency, is a certificate that
              it has complied with the requirements of Section 93. This Seal
              links to a page within the agency’s website which contains an
              index of downloadable items of each of the above-mentioned
              documents.
            </p>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12 ">
            <div className="relative w-24 h-24 rounded">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="/images/transparency_seal.webp"
                alt="Seal"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ImageRow;
