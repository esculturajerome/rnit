import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsComponent({
  assessmentData,
  programsData,
  UTPRASData,
}) {
  const router = useRouter();
  const id = parseInt(router.query?.id);
  const [selectIndex, setSelectIndex] = useState();

  // useEffect(() => {
  //   setSelectIndex(id);
  // }, [id, router]);
  // console.log(router, "router");

  let [categories] = useState({
    " Accredited Assessments": [assessmentData],
    "Accredited Programs": [programsData],
    UTPRAS: [UTPRASData],
  });

  return (
    <div className="w-full px-4 py-6 md:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 bg-gray-100">
      <div className="lg:max-w-screen-lg mx-auto">
        <Tab.Group
        //  selectedIndex={selectIndex}
        >
          <Tab.List className="flex space-x-1 rounded-sm bg-main-light p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-sm py-2.5 text-sm font-medium leading-5 text-main",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-main-dark focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-sm    bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          {posts[0].columns.map((column, i) => (
                            <th key={i} className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                <p className="text-gray-400">{column.label}</p>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        {posts[0]?.rows?.map((data, key) => (
                          <tr key={key}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="font-medium text-gray-800">
                                  {data.row1}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">{data.row2}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left ">{data.row3}</div>
                            </td>
                            {data.row4 && (
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left ">{data.row4}</div>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
