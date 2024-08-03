"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      
      <div className="h-[90vh]">
       
        <div className="relative isolate pt-14">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-[110vh] object-cover z-[-1]"
          />
        
          <div className="py-12 sm:py-1">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-7xl text-center">
                <img
                  src={"/dark.png"}
                  alt=""
                  srcSet=""
                  className=" rounded  w-72 mx-auto  "
                />
                <h1 className="text-4xl uppercase mt-0 font-ve tracking-tight text-white sm:text-6xl">
                World&apos;s largest <br/> <span className="text-yellow-400"> Web3 </span> Conclave


                </h1>

                <div className="mt-10 flex items-center  hover:pb-20 justify-center gap-x-6">
                  <Link
                    href="/#events"
                    className="rounded-md uppercase transition-all ease-in-out hover:scale-105   hover:bg-white bg-[#670B56] hover:text-purple-800 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Book Tickets
                  </Link>
                  {/* <Link
                    href="/contact"
                    className="rounded-md bg-[#670B56] hover:bg-purple-800 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Become A Sponsor
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee direction="right" className="bg-purple-900 font-sato py-2 text-lg">
          <p className="text-sm px-2 uppercase">#World&apos;s largest Web3 Conclave</p>
          <p className="text-sm px-2 uppercase">#Abc Conclave  Dubai</p>
          <p className="text-sm px-2 uppercase">#Abc Conclave  Bangkok</p>
          <p className="text-sm px-2 uppercase">#World&apos;s largest Web3 Conclave</p>
          <p className="text-sm px-2 uppercase">#Abc Conclave  Dubai</p>
          <p className="text-sm px-2 uppercase">#Abc Conclave  Bangkok</p>
          <p className="text-sm px-2 uppercase">#World&apos;s largest Web3 Conclave</p>
          <p className="text-sm px-2 uppercase">#Abc Conclave  Dubai</p>
          <p className="text-sm px-2 uppercase">#Abc Conclave  Bangkok</p>
          <p className="text-sm px-2 uppercase">#World&apos;s largest Web3 Conclave</p>
          <p className="text-sm px-2 uppercase">#Abc Conclave Dubai</p>
          <p className="text-sm px-2 uppercase">#Abc Conclave  Bangkok</p>
        </Marquee>
    </div>
  );
}
