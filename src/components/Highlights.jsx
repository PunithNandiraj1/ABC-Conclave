import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import Heading from "./ui/Heading";

const features =  [
  {
    "name": "Conference",
    "image":"/himg1.jpg",
    "description": "Connect, gain insights, and partner with leading industry figures, developers, artists, investors, and pioneers. Engage in thought-provoking discussions, explore groundbreaking ideas."
  },
  {
    "name": "ABC Exhibition",
    "image":"/exhi.jpg",
    "description": "Embark on a journey into the world of cryptocurrencies, Web3, and blockchain technologies. Discover innovative products, experience cutting-edge advancements."
  },
  {
    "name": "ABC Awards",
    "image":"/awards.jpg",
    "description": "Honoring the trailblazers who have made exceptional contributions to the field. Nominees will be selected and winners chosen by esteemed community on different categories."
  },
  {
    "name": "FOMO Lounge",
    "image":"/fomol.jpg",
    "description": "Establishing impactful relationships with key industry players. Showcase your pioneering projects and inventive products to a discerning audience of potential investors and venture capitalists."
  },
  {
    "name": "Gaming & Esports",
    "image":"/gaming.jpg",
    "description": "A vibrant hub where gaming companies unveil their latest creations. Experience the thrill of new games firsthand, immersing yourself in diverse virtual worlds."
  },
  {
    "name": "Hackathon",
    "image":"/hackathon.jpg",
    "description": "A vibrant arena of opportunities. Unearth hidden talent, amplify your brand's resonance, and stimulate the inception and appraisal of pioneering ideas."
  },
  {
    "name": "Side Events",
    "image":"/sideevents.jpg",
    "description": "Seize the opportunity to mingle with industry experts, investors, and venture capitalists, fostering connections that could shape the future of your endeavors."
  },
  {
    "name": "After Party",
    "image":"/afterparty.jpg",
    "description": "Revel in the elegance of our VIP Gala Dinner and let loose at the After Party, where you can unwind and network in a relaxed atmosphere. "
  }
]
export default function Example() {
  return (
    <div className="my-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <img src="/gr2.png" alt="" />

       <Heading title="Highlights"/>
        <div className="mx-auto mt-8 max-w-2xl   lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">

            {features.map((feature) => (

             <div key={feature.name} className="flex  flex-col p-5 transition-all ring-2  hover:shadow-xl  duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <img src={feature.image} className='mb-4 h-60 rounded-lg' alt="" srcset="" />
             <dt className="flex flex-col text-lg font-semibold leading-7 text-white md:items-center uppercase md:flex-row md:text-2xl font-display gap-x-4">
               {feature.name}
             </dt>
             <dd className="flex flex-col flex-auto font-sato mt-4 text-base leading-7 text-white/80">
               <p className="flex-auto">{feature.description}</p>
             </dd>
           </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
