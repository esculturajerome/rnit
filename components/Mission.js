import React from "react";
import TitleRow from "./TitleRow";

function Mission() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* <TitleRow /> */}
      <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-3">
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-secondary/20">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">Our Vission</h6>
            <p className="mb-3 text-sm text-gray-900">
              Skilling Romblon thru quality TVET Delivery for Peoples
              Prosperity.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-secondary/20">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">Our Mission</h6>
            <p className="mb-3 text-sm text-gray-900">
              Equipping the province with competent, flexible, economically
              stable and dignified human resources for domestic and global
              demands.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-secondary/20">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Values Statement
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              We believe in competence, integrity, high level of commitment,
              transparency, 5S, strong desire for improvement, teamwork and
              cooperation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
