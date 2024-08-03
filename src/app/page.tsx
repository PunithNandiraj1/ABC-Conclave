"use client"
import Cards from "@/components/Cards";
import Speakers from "@/components/PastSpeakers";
import Talkshow from "@/components/Talkshow";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Blogs from "@/components/Blogs";
import Stats from "@/components/Stats";
import Tweet from "@/components/Tweet";
import Testimonials from "@/components/Testimonials";
import Highlights from "@/components/Highlights";
import Youtube from "@/components/Youtube";
import Hero from "@/components/Hero";
import WhyDubai from "@/components/Whydubai";
import Marquee from "react-fast-marquee";
import Cta from "@/components/Cta";


export default function Home() {
  return (
    <main>
       <Marquee className="bg-purple-900 font-sato py-2 text-lg">
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

      <Hero />
      <Stats />

      <WhyDubai />
      <Highlights />
      <Testimonials />

      <img src="/gr1.png" alt="" />
      <Cards />

      <Speakers />
      {/* <Cta/> */}
      <img src="/gr1.png" alt="" />
      <Talkshow />
      <img src="/gr2.png" alt="" />

      <Gallery />
      <Sponsors />
      {/* <Blogs/>
      <Tweet/>
          <Youtube/> */}
    </main>
  );
}
