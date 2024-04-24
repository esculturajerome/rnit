import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { getOtherPrograms, getProgramById } from "../../components/Functions";
import Nav from "../../components/Nav";
import ProgramsGrid from "../../components/ProgramsGrid";
import TitleRow from "../../components/TitleRow";

import { Dialog, Transition, Tab } from "@headlessui/react";
import { PhotoIcon } from "@heroicons/react/20/solid";

const ProgramDetails = () => {
  const router = useRouter();
  const programID = router.query.programsID;

  const [isLoading, setLoading] = useState(true);
  const [program, setProgram] = useState([]);
  const [courses, setCourses] = useState([]);

  let [isOpen, setIsOpen] = useState(false);
  let [modalDetails, setModalDetails] = useState([]);

  function openModal(item) {
    setIsOpen(true);
    setModalDetails(item);
  }

  useEffect(() => {
    setProgram(getProgramById(programID));
    setCourses(getOtherPrograms(programID));
  }, [programID]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <>
      <Head>
        <title>{program?.title}</title>
        <meta property="og:url" content="https://rnit-tesda.org/programs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={program?.title} />
        <meta property="og:description" content={program?.subText} />
        <meta property="og:image" content={program?.image1} />
      </Head>
      <Nav />
      <div className="px-4 py-6 lg:py-24 lg:px-24 widest">
        <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row flex-wrap justify-center mb-12">
          <div className="flex-1 order-2 lg:order-1 space-y-4 ">
            <h2 className="text-2xl lg:text-4xl text-secondary pr-6 lg:pr-12 font-bold uppercase">
              {program?.title}
            </h2>
            <p className="text-black/85">{program?.subText}</p>
            <ul className="ml-2 text-md space-y-2 pt-2 text-black/90">
              <li>- {program?.desc1}</li>
              <li>- {program?.desc2}</li>
              <li>- {program?.desc3}</li>
              <li>{program?.desc4 && "- " + program?.desc4}</li>
            </ul>
            {program?.qualifications && (
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2 pt-10 max-w-2xl">
                {program?.qualifications.map((item, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden transition duration-300 transform shadow-sm hover:bg-secondary/60 hover:scale-105 group hover:shadow-xl cursor-pointer rounded-sm px-5 py-2 bg-secondary/40"
                    onClick={() => openModal(item)}
                  >
                    <p className="font-medium text-black/90 line-clamp-1">
                      {item?.qualification}
                    </p>
                    <p className="text-sm mt-1 opacity-75 line-clamp-1">
                      {item?.venue}
                    </p>
                    <p className="text-sm opacity-75 line-clamp-1">
                      {item?.date}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsOpen(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Tab.Group>
                          <Tab.List>
                            <Tab>
                              {({ selected }) => (
                                <PhotoIcon
                                  className={`
                                  ${
                                    selected
                                      ? "bg-main text-white border-main"
                                      : "bg-white text-black border-white"
                                  }  h-8 w-8 border-4 rounded
                                  `}
                                />
                              )}
                            </Tab>
                            <Tab>
                              {({ selected }) => (
                                <PhotoIcon
                                  className={`
                                  ${
                                    selected
                                      ? "bg-main text-white border-main"
                                      : "bg-white text-black border-white"
                                  }  h-8 w-8 mx-2 border-4 rounded
                                  `}
                                />
                              )}
                            </Tab>
                            <Tab>
                              {({ selected }) => (
                                <PhotoIcon
                                  className={`
                                  ${
                                    selected
                                      ? "bg-main text-white border-main"
                                      : "bg-white text-black border-white"
                                  }  h-8 w-8 border-4 rounded
                                  `}
                                />
                              )}
                            </Tab>
                          </Tab.List>
                          <Tab.Panels>
                            <Tab.Panel>
                              <Image
                                className="object-cover w-full rounded shadow-lg"
                                width={850}
                                height={500}
                                src={modalDetails?.image1}
                                alt="image1"
                              />
                            </Tab.Panel>
                            <Tab.Panel>
                              <Image
                                className="object-cover w-full rounded shadow-lg"
                                width={850}
                                height={500}
                                src={modalDetails?.image2}
                                alt="image2"
                              />
                            </Tab.Panel>
                            <Tab.Panel>
                              <Image
                                className="object-cover w-full rounded shadow-lg"
                                width={850}
                                height={500}
                                src={modalDetails?.image3}
                                alt="image3"
                              />
                            </Tab.Panel>
                          </Tab.Panels>
                        </Tab.Group>
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900 mt-3"
                        >
                          {modalDetails?.qualification}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {modalDetails?.venue}
                          </p>
                          <p className="text-sm text-gray-500">
                            {modalDetails?.date}
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-main-light px-4 py-2 text-sm font-medium text-white hover:bg-main-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => setIsOpen(false)}
                          >
                            Close
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
          {/* Loading */}
          <div className="lg:space-y-2 flex-1 order-1 lg:order-2">
            {isLoading ? (
              <div className="w-full grid place-items-center h-80">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-8 h-8 text-gray-200 animate-spin fill-secondary"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              program?.image1 && (
                <Image
                  className="object-cover w-full rounded shadow-lg"
                  width={850}
                  height={500}
                  src={program?.image1}
                  alt=""
                  priority
                />
              )
            )}

            {program?.image2 && (
              <div className="flex gap-2 lg:gap-4">
                {isLoading ? (
                  <div className="w-full grid place-items-center h-80">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="mr-2 w-8 h-8 text-gray-200 animate-spin fill-secondary"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={program?.image2}
                    className="object-cover w-full rounded shadow-lg"
                    width={400}
                    height={200}
                    alt=""
                    priority
                  />
                )}
                {isLoading ? (
                  <div className="w-full grid place-items-center h-80">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="mr-2 w-8 h-8 text-gray-200 animate-spin fill-secondary"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={program?.image3}
                    className="object-cover w-full rounded shadow-lg"
                    width={400}
                    height={200}
                    alt=""
                    priority
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="widest my-8">
        <TitleRow title="Other Programs &amp; Services" />
        <ProgramsGrid minimal courses={courses} />
      </div>
      <Footer />
    </>
  );
};

export default ProgramDetails;
