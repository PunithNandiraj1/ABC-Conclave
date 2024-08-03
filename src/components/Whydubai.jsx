import Link from "next/link";
import React from "react";

const Whydubai = () => {
  return (
    <div id="aboutus" className="mt-16 overflow-hidden ">

      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <img src="/glowgr.svg"  className="absolute left-0 w-[1000px] z-[-1]" alt="" srcset="" />

            <h2 className="text-3xl tracking-tight text-purple-500 sm:text-4xl">
              WHY ATTEND ABC CONCLAVE?{" "}
            </h2>
            <p className="mt-6 text-lg font-sato  text-gray-100">
              Catalyzing a global convergence of web3 enthusiasts, blockchain
              experts, c-suites, and digital asset visionaries from every corner
              of the world, ABC Conclave is set to make its second wave in Dubai
              and Bangkok this year. Dive into an immersive journey featuring
              insightful web3 conferences, competitive esports and gaming,
              transformative networking opportunities, and blockchain-driven
              hackathons.
            </p>
            <p className="mt-6 text-base mb-6 font-sato  text-gray-100">
              ABC Conclave offers an unparalleled blend of engagement, learning,
              and celebration in the heart of Dubai&apos;s and Bangkok’s most
              sought-after location. Don&apos;t miss your chance to be part of
              this extraordinary experience that is set to redefine the standard
              for events in Dubai.
            </p>
            <Link
              href="/aboutus"
              className="rounded-md uppercase bg-indigo-600  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm mt-10 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             Learn More
            </Link>
          </div>
          <div className="md:flex hidden flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="/a1.jpg"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="/a2.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="/a3.jpg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="/a4.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:hidden grid gap-6 sm:grid-cols-1">
          {/* Image 1 */}
          <div className="aspect-w-4 aspect-h-3">
            <img
              src="/a2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl bg-gray-50"
            />
          </div>
          {/* Image 2 */}
          <div className="aspect-w-7 aspect-h-5">
            <img
              src="/a3.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl bg-gray-50"
            />
          </div>
          {/* Image 3 */}
          <div className="aspect-w-4 aspect-h-3">
            <img
              src="/a4.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl bg-gray-50"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Whydubai;
