import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";

import logo from "../public/images/rnit-logo.svg";
import { handleNav } from "./Functions";

function Nav() {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [breadcrumbs, setBreadcrumbs] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];

    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <>
      <div className="text-white text-sm ">
        <div className="bg-main/90 ">
          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="flex justify-end gap-2">
              <a
                onClick={(e) => handleNav(router, e, "/enrol")}
                href="#"
                aria-label="Enrol now"
                title="Enrol now"
                className="inline-flex items-center py-2 px-4  transition duration-200   hover:bg-secondary focus:shadow-outline focus:outline-none"
              >
                Online Enrolment
              </a>
              <a
                onClick={(e) => handleNav(router, e, "/assessment")}
                href="#"
                aria-label="Enrol now"
                title="Enrol now"
                className="inline-flex items-center py-2 px-4 transition duration-200   hover:bg-secondary focus:shadow-outline focus:outline-none"
              >
                Online Assessment
              </a>
            </div>
          </div>
        </div>
        <div className="bg-main">
          <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="relative flex items-center justify-between">
              <a
                onClick={(e) => handleNav(router, e, "/")}
                href="#"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
              >
                <Image
                  src={logo}
                  width={50}
                  height={50}
                  objectFit="contain"
                  alt="logo"
                />
                <p className="ml-3 uppercase font-serif text-white tracking-wider">
                  Romblon National Institute <br /> of Technology
                </p>
              </a>
              <ul className="text-white items-center hidden space-x-8 lg:flex">
                <li
                  className={`btn-text   ${
                    currentUrl === "/programs" &&
                    "underline underline-offset-8 text-secondary"
                  } `}
                  onClick={(e) => handleNav(router, e, "/programs")}
                >
                  Programs
                </li>
                <li
                  className={`btn-text   ${
                    currentUrl === "/announcements" &&
                    "underline underline-offset-8 text-secondary"
                  } `}
                  onClick={(e) => handleNav(router, e, "/announcements")}
                >
                  Announcements
                </li>
                <li
                  className={`btn-text   ${
                    currentUrl === "/about" &&
                    "underline underline-offset-8 text-secondary"
                  } `}
                  onClick={(e) => handleNav(router, e, "/about")}
                >
                  About Us
                </li>
                <li
                  className={`btn-text   ${
                    currentUrl === "/contact" &&
                    "underline underline-offset-8 text-secondary"
                  } `}
                  onClick={(e) => handleNav(router, e, "/contact")}
                >
                  Contact Us
                </li>

                <li
                  className="btn-contained h-8"
                  onClick={(e) => handleNav(router, e, "/")}
                >
                  Sign up
                </li>
              </ul>
              <div className="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-0 left-0 w-full z-50">
                    <div className="p-5 bg-white text-black border rounded shadow-sm">
                      <div className="flex items-center justify-end mb-4">
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-white focus:bg-white focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg className="w-5" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul className="space-y-4 text-black">
                          <li
                            className="btn-text "
                            onClick={(e) => handleNav(router, e, "/programs")}
                          >
                            Programs
                          </li>
                          <li
                            className="btn-text"
                            onClick={(e) =>
                              handleNav(router, e, "/announcements")
                            }
                          >
                            Announcements
                          </li>
                          <li
                            className="btn-text"
                            onClick={(e) => handleNav(router, e, "/about")}
                          >
                            About Us
                          </li>
                          <li
                            className="btn-text"
                            onClick={(e) => handleNav(router, e, "/contact")}
                          >
                            Contact Us
                          </li>

                          <li
                            className="btn-contained"
                            onClick={(e) => handleNav(router, e, "/")}
                          >
                            Sign up
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {router.asPath === "/" ? (
        ""
      ) : (
        <Breadcrumb>
          <BreadcrumbItem href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </BreadcrumbItem>
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb) => (
              <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbItem>
            ))}
        </Breadcrumb>
      )}
    </>
  );
}

export default Nav;
