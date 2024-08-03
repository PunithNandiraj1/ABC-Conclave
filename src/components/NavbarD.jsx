"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const schedule = [
  { name: "Agenda", href: "/schedule" },
  { name: "7 Days 7 Wonders", href: "/seven-wonders" },
];
const getinvolved = [
  { name: "Media", href: "https://tally.so/r/mY09gd" },
  { name: "Community", href: "https://tally.so/r/mVQNdv" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Speakers", href: "/speakers" },
  { name: "Volunteer", href: "https://tally.so/r/w2aoZV" },
  { name: "Affiliate", href: "https://tally.so/r/woezp1" },
];
const more = [
  { name: "Why Dubai?", href: "#about" },
  { name: "Contact", href: "/enquire" },
  { name: "FAQs", href: "/faqs" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="z-50">
      <nav
        className={`bg-transparent lg:block hidden inset-x-0 !z-20 flex items-center justify-between py-3 ${
          scrolled ? `!bg-black/30 backdrop-blur` : ""
        }`}
        aria-label="Global"
      >
        <div className="flex items-center justify-between w-full max-w-7xl px-4 mx-auto sm:px-8">
          <Link href="/">
            <img
              src={"/logo.svg"}
              alt=""
              srcSet=""
              className="md:relative md:hidden rounded lg:top-[40px] md:w-[100px] w-[60px] relative md:z-30"
            />
          </Link>
          <Popover.Group className="flex mx-auto lg:gap-x-8">
            <Link
              href="#about"
              className="p-2 text-sm  uppercase   font-semibold leading-6 text-white rounded hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2"
            >
              Why Dubai
            </Link>
            <Link
              href="#speaker"
              className="p-2 text-sm  uppercase   font-semibold leading-6 text-white rounded hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2"
            >
              Speakers
            </Link>
            <Link
              href="#talkshow"
              className="p-2 text-sm  uppercase   font-semibold leading-6 text-white rounded hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 "
            >
              After Party
            </Link>
            <Link
              href="#gallery"
              className="p-2 text-sm  uppercase   font-semibold leading-6 text-white rounded hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2"
            >
              Gallery
            </Link>
            <Link
              href="#partners"
              className="p-2 text-sm  uppercase   font-semibold leading-6 text-white rounded hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2"
            >
              Our Partners
            </Link>
            <Link
              href="/#blog"
              className="p-2 text-sm  uppercase font-semibold leading-6 text-white rounded hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2"
            >
              Blog
            </Link>
            <Link
              href="/dubai/awards"
              className="p-2 text-sm  uppercase font-semibold leading-6 text-white rounded hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2"
            >
              Awards
            </Link>
            <Link
              href="/enquire"
              className="p-2 text-sm  uppercase  font-semibold leading-6 text-white rounded hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2"
            >
              Contact
            </Link>
          </Popover.Group>
       
        </div>
      </nav>
      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-gray-950 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img
                src={"/logo.svg"}
                alt=""
                srcSet=""
                className="md:w-[100px] w-[60px]"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Link
                  href="/why-india"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                >
                  Why India
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                        Schedule
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {schedule.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm  uppercase   font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                        Get Involved
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {getinvolved.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            target="_blank"
                            className="block py-2 pl-6 pr-3 text-sm  uppercase   font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/sponsors"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                >
                  Sponsors
                </Link>
                <Link
                  href="/speakers"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                >
                  Speakers
                </Link>
                <Link
                  href="/demo-night"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                >
                  Demo Night
                </Link>
                <Link
                  href="/awards"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                >
                  Awards
                </Link>
                <Link
                  href="/side-events"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                >
                  Other Events
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                        More
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {more.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm  uppercase  font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <Link
                  href="/buy-ticket"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  Buy Tickets
                </Link>
                <Link
                  href="/sponsors"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  Become a Sponsor
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
