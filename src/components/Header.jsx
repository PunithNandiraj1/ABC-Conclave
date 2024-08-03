"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import TallyPopupButton from "./TallyPopupButton";

const Header = () => {
  const messages = ["Get Tickets", "Buy 2 Get 1 Free", "Buy 2 Get 2 Free"];
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((currentMessage + 1) % messages.length);
    }, 1500); // Change text every 1500 milliseconds (1.5 seconds)

    return () => clearInterval(interval);
  }, [currentMessage]);

  return (
    <Disclosure as="nav" className="  ">
      {({ open }) => (
        <>
          <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className=" flex justify-between items-center md:w-1/5 w-full">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <img
                      src={"/dark1.png"}
                      alt="Logo"
                      className="rounded w-[120px] relative mt-4 z-50"
                    />
                  </Link>
                </div>
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Link
                    href="/enquire"
                    className="uppercase text-center font-display py-2 mx-2 font-semibold transition-all duration-150 rounded-lg px-3 hover:bg-[#6c36ab] hover:text-white ease-in-out text-white bg-purple-700 hover:scale-95 active:scale-90"
                  >
                    Enquire
                  </Link>
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <div className="hidden md:ml-6 md:flex justify-center items-center md:space-x-8">
                <Link
                  href="/dubai"
                  className="inline-flex uppercase items-center border-b-2 border-transparent px-1 pt-1 text-lg text-gray-100 font-semibold hover:border-gray-300 hover:text-purple-700"
                >
                  Dubai
                </Link>
                <Link
                  href="/bangkok"
                  className="inline-flex uppercase items-center border-b-2 border-transparent px-1 pt-1 text-lg text-gray-100 font-semibold hover:border-gray-300 hover:text-purple-700"
                >
                  Bangkok
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  href="/#events"
                  className="hidden uppercase md:block  text-center font-display py-3 mx-2 font-semibold transition-all duration-150 rounded-lg px-4 hover:bg-[#6c36ab] hover:text-white ease-in-out text-white bg-purple-700 hover:scale-95 active:scale-90"
                >
                  Book Tickets
                </Link>
                <Link
                  href="/enquire"
                  className="hidden md:block uppercase  font-display py-3 mx-2 font-semibold transition-all duration-150 rounded-lg px-6 hover:bg-[#6c36ab] bg-purple-900 hover:text-white ease-in-out text-white hover:scale-95 active:scale-90"
                >
                  Become A Sponsor
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden absolute w-full bg-gray-900 z-[1000]">
            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="/dubai"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-purple-300 hover:bg-purple-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Dubai
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/bangkok"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-purple-300 hover:bg-purple-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Bangkok
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/#events"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-purple-300 hover:bg-purple-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Buy Tickets
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/enquire"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Become a Sponsor
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
