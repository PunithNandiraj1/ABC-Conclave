import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import Heading from "../ui/Heading";

const features =  [
  {
    "heading": "Cryptocurrency Craze Takes Hold",
    "desc": "Thailand's crypto adoption is soaring, with 12% of its population owning cryptocurrencies. Bangkok's vibrant crypto market makes it an ideal location for the ABC Conclave."
  },
  {
    "heading": "Web3: Where Innovation Breeds Opportunity",
    "desc": "Bangkok is fostering a supportive ecosystem for blockchain startups with the SEC's regulatory sandbox, making it a launchpad for Web3 advancements."
  },
  {
    "heading": "Networking: Where Connections Fuel Growth",
    "desc": "Bangkok's tech-savvy community and collaborative culture make it perfect for the ABC Conclave, promoting connections and partnerships in the Web3 and crypto space."
  },
  // {
  //   "heading": "Beyond the Numbers: A Look at Bangkok's Blockchain Gaming Strength",
  //   "desc": "Bangkok's thriving gaming industry, with popular blockchain games like Axie Infinity, makes it a strategic choice for the ABC Conclave to tap into this market."
  // }
]
  
  
  

export default function Blockchain() {
  return (
    <div className="pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
             <div key={feature.heading} className="flex flex-col p-8 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
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
  )
}
