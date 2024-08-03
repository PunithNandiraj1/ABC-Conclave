import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import Heading from "../ui/Heading";

const features = [
  {
    heading: "Cryptocurrency Craze Takes Hold",
    desc: "Dubai's 2021 establishment of VARA attracted major exchanges like Binance and Crypto.com. With the UAE having the highest global crypto ownership rate at 30.4%, Dubai is perfect for the ABC Conclave to engage a passionate audience.",
  },
  {
    heading: "Web3: A Flourishing Ecosystem",
    desc: "Dubai's 2023 Metaverse Strategy aims to lead in Web3, attracting global talent and companies. The ABC Conclave aligns with this vision, exploring transformative blockchain technology in a city poised for metaverse development.",
  },
  {
    heading: "Networking Hub for Global Minds",
    desc: "Dubai attracts global business leaders, entrepreneurs, and investors, creating a premier networking environment. The ABC Conclave benefits from this confluence, enhanced by the city's numerous blockchain-focused events and conferences.",
  },
  {
    heading: "Beyond Business: A Tech-Savvy City",
    desc: "Dubai's advanced infrastructure and tech adoption support blockchain technology development, including blockchain gaming. The city's innovation focus creates a conducive environment for tech advancements.",
  },
  {
    heading: "A Glimpse into the Future of Gaming",
    desc: "Blockchain gaming, valued at USD 4.83 billion in 2022, is growing rapidly. Dubai's innovation focus positions it to lead this space, with the ABC Conclave shaping blockchain gaming's future discourse.",
  },
  {
    heading: "CONFERENCE",
    desc: "Dubai's blockchain commitment, thriving crypto market, Web3 ecosystem, and networking reputation make it ideal for the ABC Conclave, promising a landmark event in global Web3 conversation.",
  },
];

//  <div key={feature.heading} className="flex flex-col p-8 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">

export default function Blockchain() {
  return (
    <div className="pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.heading}
                className="from-[#C525FF] transition-all  hover:shadow-xl  duration-150 hover:scale-95  to-[#FF03D3] hover:from-[#FF03D3] hover:to-[#C525FF] bg-gradient-to-r shadow-2xl p-6 rounded-2xl"
              >
                <dt className="flex flex-col text-lg font-semibold leading-7 text-white md:items-center md:flex-row md:text-2xl font-display gap-x-4">
                  {feature.heading}
                </dt>
                <dd className="flex flex-col font-sato flex-auto mt-4 text-base leading-7 text-white/80">
                  <p className="flex-auto">{feature.desc}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
