import Image from "next/image";
import Link from "next/link";
import { convertToLink } from "./Functions";

const ProgramsGrid = ({ courses, minimal }) => {
  return (
    <div
      className={`${
        minimal ? "lg:grid-cols-4 " : "lg:grid-cols-3 "
      } grid grid-cols-1 sm:grid-cols-2 gap-5  max-w-full`}
    >
      {courses.map((course, i) => (
        <div
          key={i}
          className="overflow-hidden transition-shadow duration-300 bg-white rounded "
        >
          {/* <img
            src={course.image1}
            className={`${
              minimal ? "h-44" : "h-52 "
            } object-cover w-full rounded`}
            alt=""
          /> */}
          <Image
            src={course.image1}
            width={500}
            height={300}
            className={`${
              minimal ? "h-44" : "h-52 "
            } object-cover w-full rounded`}
            alt=""
          />
          <div className="py-2">
            {/* <p className="mb-6 text-xs font-light text-gray-600 uppercase">
                  13 Jul 2020
                </p> */}
            <Link
              href={`${minimal ? "../programs/" : "/programs/"}${convertToLink(
                course.title
              )}`}
              aria-label="Program"
            >
              <h2 className="text-2xl font-bold text-secondary btn-text mb-4">
                {course.title}:
              </h2>
            </Link>
            {!minimal && (
              <>
                <p className="text-gray-700">{course.subText}</p>{" "}
                <Link
                  href={`${
                    minimal ? "../programs/" : "/programs/"
                  }${convertToLink(course.title)}`}
                  aria-label="Program"
                >
                  <p className="btn-text pt-4">Learn more</p>
                </Link>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramsGrid;
