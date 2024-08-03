"use client";
import React from 'react';
import Heading from "@/components/ui/Heading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


function Gallerys() {
  return (
    <div id="gallery" className="max-w-7xl py-16 mx-auto">
      <Heading title={"Gallery"} />
      <div className="grid grid-cols-3 my-10">
        <img src="/f1.png" alt="" srcset="" />
        <img src="/f2.png" alt="" srcset="" />
        <img src="/f3.png" alt="" srcset="" />

      </div>
    </div>
  );
}

export default Gallerys;
