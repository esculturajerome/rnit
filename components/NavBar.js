import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  AcademicCapIcon,
  Bars3BottomRightIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  ChevronDownIcon,
  MegaphoneIcon,
  PhoneIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/rnit-logo.svg";

export default function NavBar() {
  return (
    <div className="lg:max-w-screen-xl mx-auto">
      <div className="w-full bg-main-light">
        <Menu
          as="div"
          className="relative flex sm:gap-2 justify-evenly sm:justify-end sm:pr-8"
        >
          <div>
            <Link href="/enrol">
              <Menu.Button className="inline-flex w-full justify-center px-3 lg:px-4 py-1 text-sm text-white hover:bg-secondary focus:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Online Enrolment
              </Menu.Button>
            </Link>
          </div>
          <div>
            <Link href="/assessment">
              <Menu.Button className="inline-flex w-full justify-center px-3 lg:px-4 py-1 text-sm text-white hover:bg-secondary focus:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Online Assessment
              </Menu.Button>
            </Link>
          </div>
        </Menu>
      </div>
      <div className="w-full bg-main flex justify-between py-4 px-4 lg:px-8 items-center md:max-w-full lg:max-w-screen-xl">
        <Link href="/">
          <div className="flex cursor-pointer items-center">
            <Image
              src={logo}
              width={50}
              height={50}
              objectFit="contain"
              alt="logo"
            />
            <p className="ml-3 uppercase font-serif text-white tracking-wider text-sm hidden sm:block">
              Romblon National <br />
              Institute of Technology
            </p>
          </div>
        </Link>
        <Menu as="div" className="relative text-left md:flex lg:gap-2 hidden">
          <div>
            <Link href="/announcements">
              <Menu.Button className="inline-flex w-full justify-center bg-main px-3 lg:px-4 py-2 text-sm hover:underline underline-offset-8 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Announcements
              </Menu.Button>
            </Link>
          </div>

          <div>
            <Link href="/programs">
              <Menu.Button className="inline-flex w-full justify-center bg-main px-3 lg:px-4 py-2 text-sm hover:underline underline-offset-8 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Programs
              </Menu.Button>
            </Link>
          </div>

          <div>
            <Link href="/about">
              <Menu.Button className="inline-flex w-full justify-center bg-main px-3 lg:px-4 py-2 text-sm hover:underline underline-offset-8 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                About Us
              </Menu.Button>
            </Link>
          </div>

          <div>
            <Link href="/contact">
              <Menu.Button className="inline-flex w-full justify-center bg-secondary rounded-md px-3 lg:px-4 py-2 text-sm hover:underline underline-offset-8 text-white hover:bg-secondaryDark focus:bg-secondaryDark focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Contact Us
              </Menu.Button>
            </Link>
          </div>
        </Menu>
        <Menu as="div" className="relative text-left flex lg:gap-2 md:hidden">
          <div>
            <Menu.Button className="inline-flex w-full justify-center bg-main px-3 lg:px-4 py-2 text-sm hover:underline underline-offset-8 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <Bars3BottomRightIcon className="w-8 h-8" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Link href="/announcements">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-main-light text-white" : "text-main"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <MegaphoneIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <MegaphoneIcon
                            className="mr-2 h-5 w-5 "
                            aria-hidden="true"
                          />
                        )}
                        Announcements
                      </button>
                    )}
                  </Menu.Item>
                </Link>
                <Link href="/programs">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-main-light text-white" : "text-main"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <AcademicCapIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <AcademicCapIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        Programs
                      </button>
                    )}
                  </Menu.Item>
                </Link>
                <Link href="/about">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-main-light text-white" : "text-main"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <BuildingLibraryIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <BuildingLibraryIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        About us
                      </button>
                    )}
                  </Menu.Item>
                </Link>
              </div>
              <div className="px-1 py-1">
                <Link href="/contact">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? " bg-secondaryDark" : "bg-secondary"
                        } group text-white  flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <PhoneIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <PhoneIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        Contact us
                      </button>
                    )}
                  </Menu.Item>
                </Link>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
