import React from "react";
import Heading from "./ui/Heading";
import Link from "next/link";

const Cards = () => {
  return (
    <div
      id="events"
      className="w-full flex justify-center items-center flex-col md:p-0 p-8"
    >
      <Heading title={"Our Upcoming Events"} />
      <div className="grid h-1/2 max-w-3xl md:grid-cols-2 gap-20 my-20 ">
        <div class="relative grid h-[30rem] w-[20rem] flex-col  justify-center overflow-hidden rounded-xl bg-white  text-center text-gray-700">
          <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none  bg-transparent bg-[url('/d.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div class="relative p-6 px-6 flex flex-col justify-between   md:px-10 py-10">
            <img src="/dark.png" className="w-44 mx-auto" alt="" srcset="" />
            <h2 class="mb-2 block uppercase font-sans text-4xl font-bold  tracking-normal text-white antialiased">
              Dubai
            </h2>
            <h2 class="mb-6 block font-sans  text-2xl font-bold  tracking-normal text-white antialiased">
              11 - 12<br/> <span className="uppercase"> Oct </span> &apos;24
            </h2>
           
            <Link
              href="/dubai/tickets"
              className="bg-white uppercase px-6 py-2 rounded-xl mt-20"
            >
              Book Tickets
            </Link>
          </div>
        </div>

        <div class="relative grid h-[30rem]  w-[20rem] flex-col  justify-center overflow-hidden rounded-xl bg-white  text-center text-gray-700">
          <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none  bg-transparent bg-[url('/bangkok.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div class="relative p-6 px-6 flex flex-col justify-between  md:px-10 py-10">
            <img src="/dark.png" className="w-44 mx-auto" alt="" srcset="" />
            
            <h2 class="mb-2 block uppercase font-sans text-4xl font-bold  tracking-normal text-white antialiased">
              Bangkok
            </h2>
            <h2 class="mb-6 block font-sans text-2xl font-bold  tracking-normal text-white antialiased">
            7 - 8<br/> Nov 
            &apos;24
            </h2>
            <Link
              href="/bangkok/tickets"
              className="bg-white uppercase px-6 py-2 rounded-xl mt-20"
            >
              Book Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
