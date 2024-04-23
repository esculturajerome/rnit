import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { FooterLinks } from "./Functions";

export default function ViewMore() {
  return (
    <div className="w-full pt-2">
      <div className="mx-auto w-full bg-main pt-2 divide-y divide-main">
        {FooterLinks.map((link, i) => (
          <Disclosure key={i}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between bg-main-dark px-4 py-4 text-left text-sm font-medium text-white  hover:text-secondary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ">
                  <span>{link.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="bg-main-light py-2">
                  {link.lists?.map((item, key) => (
                    <Link href={item.url} key={key}>
                      <p className=" cursor-pointer px-4 py-2 text-sm text-white">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
