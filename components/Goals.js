import React from "react";
import TitleRow from "./TitleRow";

function Goals() {
  const mission = [
    {
      title: "Vission",
      subText:
        "Skilling Romblon thru quality TVET Delivery for Peoples Prosperity.",
      url: "/about",
    },
    {
      title: "Mission",
      subText:
        "Equipping the province with competent, flexible, economically stable and dignified human resources for domestic and global demands.",
      url: "/about",
    },
    {
      title: "Philosophy",
      subText:
        "An institution that nurtures the total development of the Filipino youth, rich in knowledge, competent in their skills and imbued with positive attitude and work-values; whose program and services reflect the needs of its clientele and that of the greater community it servers; a school that is student centered enabling them to grow into producing, responsible, and loving individuals.",
      url: "/about",
    },
    {
      title: "Values Statement",
      subText:
        "We believe in competence, integrity, high level of commitment, transparency, 5S, strong desire for improvement, teamwork and cooperation.",
      url: "/about",
    },
  ];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* <TitleRow /> */}
      <div className="grid gap-8 row-gap-5 lg:grid-cols-4">
        {mission.map((item, i) => (
          <div
            key={i}
            className="relative p-px overflow-hidden transition duration-300 transform rounded shadow-sm hover:bg-white hover:scale-105 group hover:shadow-xl"
          >
            <div className="relative p-5 bg-white/90  rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg--50 lg:mb-0">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
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
                <h6 className="font-semibold leading-5">{item.title}</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 line-clamp-2">
                {item.subText}
              </p>
              <Link
                href={item.url}
                aria-label=""
                className="text-sm font-semibold btn-text"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
