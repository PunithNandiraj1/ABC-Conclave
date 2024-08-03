import { ChevronRightIcon } from "@heroicons/react/20/solid";
import awards from "@/images/awards.svg";
import Image from "next/image";

// Dummy data for award categories
const awardCategories = [
  {
    title: "BEST CRYPTO ENTREPRENEUR",
    description: "Recognizing exceptional leadership in the crypto space",
  },
  {
    title: "BEST CRYPTO CENTRALISED EXCHANGE",
    description: "Celebrating excellence in centralized cryptocurrency exchanges",
  },
  {
    title: "BEST CRYPTO DECENTRALISED EXCHANGE",
    description: "Honoring the top decentralized cryptocurrency exchange",
  },
  {
    title: "BEST EXCHANGE FOR DERIVATIVES TRADING",
    description: "Awarding the leading platform for derivatives trading",
  },
  {
    title: "BEST CRYPTO LAW FIRM",
    description: "Acknowledging the premier legal firm in the crypto industry",
  },
  {
    title: "BEST CRYPTO LAWYER",
    description: "Celebrating outstanding legal expertise in cryptocurrency",
  },
  {
    title: "BEST LIQUIDITY & MM PROVIDER",
    description: "Recognizing excellence in liquidity and market making services",
  },
  {
    title: "BEST TRADING APP",
    description: "Awarding the top trading application in the crypto market",
  },
  {
    title: "BREAKTHROUGH OF THE YEAR",
    description: "Highlighting the most significant breakthrough in the crypto industry",
  },
  {
    title: "BEST CRYPTO AI PROJECT",
    description: "Celebrating innovation in AI within the cryptocurrency space",
  },
  {
    title: "BEST WEB3 SECURITY FIRM",
    description: "Honoring the leading security firm in the Web3 ecosystem",
  },
  {
    title: "BEST CRYPTO FUND",
    description: "Recognizing the best-performing crypto investment fund",
  },
  {
    title: "BEST CRYPTO MEDIA",
    description: "Celebrating excellence in cryptocurrency media and journalism",
  },
  {
    title: "BEST LAYER-1 SOLUTION",
    description: "Awarding the top Layer-1 blockchain solution",
  },
  {
    title: "BEST LAYER-2 SOLUTION",
    description: "Honoring the leading Layer-2 blockchain solution",
  },
  {
    title: "BEST MARKETING AGENCY",
    description: "Recognizing exceptional marketing services in the crypto industry",
  },
  {
    title: "BEST WEB3 GAMING PROJECT",
    description: "Celebrating innovation in blockchain-based gaming",
  },
  {
    title: "MEME COIN OF THE YEAR",
    description: "Highlighting the most impactful meme coin",
  },
  {
    title: "SOCIAL INFLUENCER TO WATCH",
    description: "Recognizing a rising star in the crypto social media landscape",
  },
  {
    title: "INNOVATIVE NFT PROJECT OF THE YEAR",
    description: "Celebrating groundbreaking innovation in the NFT space",
  },
  {
    title: "ALL ‘BOUT CONNECTOR OF THE YEAR",
    description: "Honoring exceptional networking and community-building in crypto",
  },
];


export default function Hero() {
  return (
    <div>
      <div className="bg-[url('/awards.jpg')] bg-cover bg-no-repeat bg-awards md:bg-cover md:bg-awards-mobile flex flex-col justify-end items-center">
        <div className="items-center max-w-6xl px-4 pt-32 pb-10 mx-auto lg:flex lg:px-8 ">
          <div className="flex-shrink-0 max-w-7xl mx-auto lg:mx-0 lg:max-w-5xl">
            <h1 className="text-4xl font-bold text-white font-display sm:text-6xl text-center">Awards</h1>
            <p className="mt-6 text-lg text-center font-sato  text-gray-300">
              Honoring the trailblazers who have made exceptional contributions
              to the field. Nominees will be selected and winners chosen by the
              esteemed community in different categories. Participate in this
              grand celebration of digital innovation and excellence. We begin
              by inviting nominations for various categories within the
              Industry, celebrating the exceptional contributions of companies.
              The power to select the winners is given to our vibrant community.
              Voting will take place across all our social media channels,
              including Telegram To ensure all votes are accounted for, the
              voting process will be closed one day before the event. Winners
              will be announced during the conference.
            </p>
          
          </div>
         
        </div>
        <div className="flex flex-col items-center   mb-20 space-y-4 lg:flex-row lg:space-y-0 gap-x-6 ">
          <a
            href="/bangkok/awards/nominate"
            className="w-full px-6 py-4 font-semibold  text-purple-600 bg-white rounded-md shadow-sm hover:bg-gray-100 text-center"
          >
            Nominate
          </a>
         
        </div>
      </div>
      <div className="bg-grey-900">
        <div className="px-4 py-20 mx-auto max-w-7xl lg:px-8">
          <p className="text-4xl font-bold text-center font-display text-white">
            Award Categories
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 gap-y-8">
              {awardCategories.map((category, index) => (
                 <div key= {category.title} className='from-[#FFF3A4] shadow-xl hover:scale-95 to-[#FFD700] bg-gradient-to-r  p-6 rounded-2xl'>
              
                  <p className="text-lg font-semibold text-center text-purple-800 font-display">
                    {category.title}
                  </p>
                  <p className="mt-2 text-sm  font-sato font-medium text-center text-gray-600">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
