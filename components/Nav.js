import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

import logo from "../public/images/rnit-logo.svg";

function Nav() {
  const router = useRouter();

  const handleNav = (e, url) => {
    e.preventDefault();
    router.push(url);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-white text-sm ">
      <div className="bg-main/90 ">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex justify-end gap-2">
            <a
              onClick={(e) => handleNav(e, "/enrol")}
              href="#"
              aria-label="Enrol now"
              title="Enrol now"
              className="inline-flex items-center py-2 px-4  transition duration-200   hover:bg-secondary focus:shadow-outline focus:outline-none"
            >
              Online Enrolment
            </a>
            <a
              onClick={(e) => handleNav(e, "/assessment")}
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
              onClick={(e) => handleNav(e, "/")}
              href="#"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <Image src={logo} width={50} height={50} objectFit="contain" />
              <p className="ml-3 uppercase font-serif text-white tracking-wider">
                Romblon National Institute <br /> of Technology
              </p>
            </a>
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="btn-text text-white"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleNav(e, "/programs")}
                  href="#"
                  aria-label="Our product"
                  title="Our product"
                  className="btn-text text-white"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleNav(e, "/about")}
                  href="#"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="btn-text text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleNav(e, "/contact")}
                  href="#"
                  aria-label="Contact us"
                  title="Contact us"
                  className="btn-text text-white"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="btn-contained h-8"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </a>
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
                      <ul className="space-y-4">
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="btn-text text-black"
                          >
                            Product
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="btn-text text-black"
                          >
                            Features
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="btn-text text-black"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="About us"
                            title="About us"
                            className="btn-text text-black"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="btn-contained"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
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
  );
}

export default Nav;
