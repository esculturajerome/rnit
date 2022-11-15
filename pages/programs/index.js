import Nav from "../../components/Nav";
import { getAllPrograms } from "../../components/Functions";
import Footer from "../../components/Footer";
import Link from "next/link";
import Layout from "../../components/Layout";
import ProgramsGrid from "../../components/ProgramsGrid";
import { useEffect, useState } from "react";

import { assessmentData } from "../../data/assessmentData";
import { programsData } from "../../data/programsData";
import { UTPRASData } from "../../data/UTPRASData";
import ProgramRow from "../../components/ProgramRow";
import ImageRow from "../../components/ImageRow";
import Goals from "../../components/Goals";

function Programs() {
  const [courses, setCourses] = useState([]);
  const [active, setActive] = useState(1);
  useEffect(() => {
    setCourses(getAllPrograms());
  }, []);

  const buttonTabs = [
    { id: 1, label: "Accredited Assessments" },
    { id: 2, label: "Accredited Programs" },
    { id: 3, label: "UTPRAS" },
  ];

  const handleActiveTab = (id) => {
    setActive(id);
  };

  return (
    <>
      <Nav />
      <div className="px-4 py-6 md:py-14 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
        <ProgramsGrid courses={courses} />
        <section className="antialiased bg-gray-100 text-gray-600 px-4 mt-8 lg:mt-16  py-6 lg:py-14">
          <div className="flex gap-1 lg:gap-4 justify-between max-w-4xl mx-auto rounded-sm border border-gray-200 mb-4">
            {buttonTabs.map((tab, i) => (
              <div
                key={i}
                onClick={() => handleActiveTab(tab.id)}
                className={`${
                  active !== tab.id && "bg-white text-black "
                } leading-3 btn-contained px-2 lg:px-5 py-4 border w-full text-center text-sm lg:text-md`}
              >
                {tab.label}
              </div>
            ))}
          </div>
          {active === 1 && (
            <div className="flex flex-col justify-center">
              <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">
                    Accredited Assessments
                  </h2>
                </header>
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          {assessmentData?.columns.map((column, i) => (
                            <th key={i} className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                <p className="text-gray-400">{column.label}</p>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        {assessmentData?.rows?.map((data, i) => (
                          <tr key={i}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="font-medium text-gray-800">
                                  {data.qualifications}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">{data.fee}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left ">{data.hours}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left ">
                                {data.candidates}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          {active === 2 && (
            <div className="flex flex-col justify-center">
              <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">
                    Accredited Programs
                  </h2>
                </header>
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          {programsData?.columns.map((column, i) => (
                            <th key={i} className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                <p className="text-gray-400">{column.label}</p>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        {programsData?.rows?.map((data, i) => (
                          <tr key={i}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="font-medium text-gray-800">
                                  {data.qualifications}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">{data.accnumber}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left ">{data.exp}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          {active === 3 && (
            <div className="flex flex-col justify-center">
              <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">UTPRAS</h2>
                </header>
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          {UTPRASData?.columns.map((column, i) => (
                            <th key={i} className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                <p className="text-gray-400">{column.label}</p>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        {UTPRASData?.rows?.map((data, i) => (
                          <tr key={i}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="font-medium text-gray-800">
                                  {data.qualifications}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">{data.duration}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left ">{data.corpNo}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left ">
                                {data.dateIssued}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
      <ImageRow variant="bg-pattern-bg-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
}

export default Programs;
