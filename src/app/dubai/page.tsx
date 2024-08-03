import Image from "next/image";
import Talkshow from "@/components/Talkshow";
import Sponsors from "@/components/Sponsors";
import PastSpeakers from "@/components/PastSpeakers";
import Blockchain from "@/components/dubai/Block";
import Stats from "@/components/Stats";
import Countdown from "@/components/dubai/Countdown";
import Gallery from "@/components/Gallery";
import WhyDubai from "@/components/dubai/Whydubai";
import Highlights from "@/components/Highlights";

import Link from "next/link";
import Nav from "@/components/NavbarD";

export default function Home() {
  return (
    <main>
      <Nav/>
      <div className="bg-[url('/dubai.jpg')] bg-cover bg-no-repeat h-screen flex flex-col  justify- items-center">
      <img src="/abc2.png" className="md:h-52 h-24 mt-16" alt=""  />
        <p className="md:text-6xl text-4xl font-bold max-w-4xl mt-12 text-center">
        FUTURE FUSION: UNITING AI, WEB3, AND GAMING 
        </p>
       
        <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/dubai/tickets"
                    className="rounded-md uppercase bg-[#670B56] hover:bg-purple-800 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
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
      <Stats />
      <img src="/gr1.png" className="absolute" alt="" />
     
      <WhyDubai/>

      <Blockchain />
      <Countdown />
    <Highlights/>
      <img src="/gr2.png" alt="" />
      <Talkshow />
      <img src="/gr2.png" className="absolute" alt="" />
      <PastSpeakers />
      <img src="/gr2.png" alt="" />
      <Gallery/>

      <Sponsors />
      <img src="/gr2.png" className="absolute" alt="" />


      {/* <Blogs />
      <Tweet />
      <Youtube /> */}
    </main>
  );
}
