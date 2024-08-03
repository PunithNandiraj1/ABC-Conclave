import Image from "next/image";
import Talkshow from "@/components/Talkshow";
import Sponsors from "@/components/Sponsors";
import Blockchain from "@/components/bangkok/Block";
import Stats from "@/components/Stats";
import Countdown from "@/components/bangkok/Countdown";
import Gallery from "@/components/Gallery";
import Highlights from "@/components/Highlights";
import WhyBangkok from "@/components/bangkok/Whybangkok";
import Link from "next/link";
import Nav from "@/components/Navbar";
import Speakers from "@/components/PastSpeakers";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="bg-[url('/dubai.jpg')] bg-cover bg-no-repeat h-screen flex flex-col  justify- items-center">

        <img src="/abc1.png" className="md:h-52 h-24 mt-16" alt="" />
        <p className="md:text-7xl text-4xl max-w-5xl mt-12 font-bold text-center">
          NEXT-GEN NEXUS: UNITING AI, WEB3, AND GAMING
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/bangkok/tickets"
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
      <WhyBangkok />
      <Blockchain />
      <Countdown />

      <Highlights />
      <Gallery />

      <img src="/gr2.png" alt="" />
      <Talkshow />
      <Speakers />
      <Sponsors />
      <img src="/gr2.png" className="absolute" alt="" />

      {/* 
      <Blogs />
      <Tweet />
      <Youtube /> */}
    </main>
  );
}
