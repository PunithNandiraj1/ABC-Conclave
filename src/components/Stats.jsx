"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  { name: "Global Attendees", value: 5000 },
  { name: "Renowned Speakers", value: 75 },
  { name: "Insightful Seminars", value: 25 },
  { name: "Blockchain Developers", value: 1000 },
  { name: "Web3 Founders", value: 500 },
  { name: "Media Partners", value: 100 },
  { name: "Respected KOLs", value: 150 },
  { name: "Active Investors", value: 100 },
];
export default function Example() {
  return (
    <div className="mt-8">
      <div className="mx-auto max-w-6xl relative z-[20]">
        <div className="grid gap-4 md:px-10 px-4 py-10 overflow-hidden rounded-2xl md:grid-cols-4 grid-cols-2">
          {stats.map((stat, index) => (
            <div
              key={stat.name}
              className={`px-4 py-4 ${
             "sm:px-4 lg:px-8  flex flex-col transition-all  hover:shadow-xl  duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95  "
              }`}
              
            >
              <p className="mt-2 flex items-baseline gap-x-2 ">
                <span className="md:text-4xl text-2xl font-semibold tracking-tight text-white">
                <CountUp start={0} end={stat.value} duration={2} separator="" />+

                </span>
              </p>
              <p className="md:text-xl text-xs uppercase font-ve  leading-6 text-white mt-4">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
