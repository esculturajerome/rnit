import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { getOtherPrograms, getProgramById } from "../../components/Functions";
import Nav from "../../components/Nav";
import Loading from "../../components/Loading";
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
          <div className="flex-1 order-1 lg:order-2">
            {isLoading ? (
              <Loading />
            ) : (
              program?.image1 && (
                <div className="relative w-full h-[300px] lg:h-42 mb-2 lg:mb-3">
                  <Image
                    src={program?.image1}
                    className="w-full rounded shadow-lg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    priority
                  />
                </div>
              )
            )}

            {program?.image2 && (
              <div className="flex gap-2 lg:gap-4">
                {isLoading ? (
                  <Loading />
                ) : (
                  <div className="relative w-full h-44 lg:h-42">
                    <Image
                      src={program?.image2}
                      className="w-full rounded shadow-lg"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      priority
                    />
                  </div>
                )}
                {isLoading ? (
                  <Loading />
                ) : (
                  <div className="relative w-full h-44 lg:h-42">
                    <Image
                      src={program?.image3}
                      className="w-full rounded shadow-lg"
                      alt=""
                      objectFit="cover"
                      priority
                      layout="fill"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div className="widest my-8">
        <TitleRow title="Other Programs &amp; Services" />
        <ProgramsGrid minimal courses={courses} />
      </div> */}
      <Footer />
    </>
  );
};

export default ProgramDetails;
