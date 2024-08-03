import Image from "next/image";
import Heading from "./ui/Heading";
import Link from "next/link";

const people = [
  {
      "name": "SERGEJ KUNZ",
      "role": "Co-founder",
      "company": "1inch Network",
      "location": "GERMANY",
      "imageUrl": "/speakers/Sergez.jpg"
  },
  {
      "name": "YAT SIU",
      "role": "Co-founder Executive Chairman, Founder and CEO",
      "company": "Animoca Brands, Outblaze",
      "location": "HONG KONG",
      "imageUrl": "/speakers/yat.jpg"
  },
  {
      "name": "AHMED ELMETWALLY",
      "role": "CEO/General Manager",
      "company": "Private Office of Sheikh Mohamed Bin Ahmed Bin Hamadan Al Nahyan",
      "location": "UAE",
      "imageUrl": "/speakers/Ahmed Elmetwally.jpg"
  },
  {
      "name": "ALEX CHEHADE",
      "role": "Executive Director and General Manager",
      "company": "Binance",
      "location": "UAE",
      "imageUrl": "/speakers/Alex Chehade.jpg"
  },
  {
      "name": "ASSAD DAR",
      "role": "CVO & Co-Founder",
      "company": "Medieval Empires",
      "location": "UAE",
      "imageUrl": "/speakers/Assad_Dar.jpg"
  },
  {
      "name": "MOHAMMED ALKAFF ALHASHMI",
      "role": "Co-founder",
      "company": "Islamic Coin",
      "location": "UAE",
      "imageUrl": "/speakers/MohammedAlKaffAlHashmi.jpg"
  },
  {
      "name": "ARPIT SHARMA",
      "role": "MD, Middle East, SE Asia and India",
      "company": "Near Foundation",
      "location": "UAE",
      "imageUrl": "/speakers/Arpit_Sharma.jpg"
  },
  {
      "name": "AARON TING",
      "role": "Co-founder",
      "company": "ICP Hub",
      "location": "SINGAPORE",
      "imageUrl": "/speakers/Aaron T.jpg"
  },
  {
      "name": "IGOR BERSHADSKIY",
      "role": "Director of Business Development & Partnerships",
      "company": "Hacken",
      "location": "UAE",
      "imageUrl": "/speakers/IgorBershadskiy.jpg"
  },
  {
      "name": "DR. JANE THOMASON",
      "role": "Chairman, Emeritus",
      "company": "World Metaverse Council",
      "location": "UAE",
      "imageUrl": "/speakers/DrJaneThomason.jpg"
  },
  {
      "name": "RAVIKANT AGRAWAL",
      "role": "Director of Growth",
      "company": "Polygon Labs",
      "location": "INDIA",
      "imageUrl": "/speakers/ravikanth.jpg"
  },
  {
      "name": "MATTHIAS MENDE",
      "role": "Co-founder",
      "company": "Dubai Blockchain Center",
      "location": "UAE",
      "imageUrl": "/speakers/Matthias-Mende.jpg"
  },
  {
      "name": "TIM MAGNALL",
      "role": "Founder and CEO",
      "company": "Capital Block",
      "location": "UAE",
      "imageUrl": "/speakers/Tim.jpg"
  },
  {
      "name": "GEOFF MCALISTER",
      "role": "Managing Director",
      "company": "Hex Trust",
      "location": "UAE",
      "imageUrl": "/speakers/Geoff_McAlister.jpg"
  },
  {
      "name": "RAMANI RAMACHANDRAN",
      "role": "Founder and CEO",
      "company": "Router Protocol",
      "location": "INDIA",
      "imageUrl": "/speakers/Ramani_Ramachandran.jpg"
  },
  
];



export default function Speakers() {
  return (
    <div className="py-28 " id="speaker">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
      <Heading title={"Our Past Speakers"}/>

        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-4 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {people.map((person) => (
            <li
              className="p-4 transition-all card duration-150 ease-in-out hover:scale-105 rounded-xl hover:bg-gray-50 hover:shadow-md flex flex-col justify-between"
              key={person.name}
              style={{
                background:
                  "linear-gradient(180deg, #3A102F 26.45%, #0A1021 110%)",
              }}
            >
              <div className="text-center">
                <img
                  className="object-cover w-full aspect-square rounded-2xl"
                  src= {person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 font-sato text-lg font-semibold leading-8 tracking-tight text-white">
                  {person.name}
                </h3>
                <p
                  className="text-sm font-sato leading-7 text-white"
                  dangerouslySetInnerHTML={{ __html: person.role }}
                ></p>
                
                <p className="text-xs font-sato leading-6 text-white">
                  {person.company}
                </p>
                <p className="text-xs font-sato leading-6 text-white">
                  {person.location}
                </p>
              </div>
              {/* <ul role="list" className="flex mt-6 gap-x-6">
                <li>
                  <a
                    target="_blank"
                    href={person.twitterUrl}
                    className="text-white hover:text-white"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={person.linkedinUrl}
                    className="text-white hover:text-white"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul> */}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-3xl font-bold tracking-tight text-center text-gray-100">
          & many more...
        </p>
        <div className="flex justify-center my-10">
          <Link href="/enquire" className=" text-white bg-purple-900 px-4 py-4 rounded-xl mx-auto  uppercase">Take The Stage</Link></div>
      </div>
    </div>
  );
}
