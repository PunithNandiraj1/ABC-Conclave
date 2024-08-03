import Image from "next/image";
import Heading from "./ui/Heading";

const sponsors = [
  {
    name: "Selfchain",
    link: "https://selfchain.xyz/",
    image: "/sponsors/Self-Chain.png",
    type: "TITLE SPONSOR"
  },
  {
    name: "Metachain One",
    link: "https://www.metachain.one/",
    image: "/sponsors/Metachain One.png",
    type: "POWERED BY SPONSOR"
  },
  {
    name: "Polkacity",
    link: "https://www.polkacity.io/",
    image: "/sponsors/Polkacity.png",
    type: "LEGENDARY SPONSORS"
  },
  {
    name: "Okratech",
    link: "https://ortcoin.org/",
    image: "/sponsors/Okratech.png",
    type: "LEGENDARY SPONSORS"
  },
  {
    name: "Alphatoken Capital",
    link: "https://alphatokencapital.com/",
    image: "/sponsors/AlphaTokenCapital.png",
    type: "LEGENDARY SPONSORS"
  },
  {
    name: "Sinverse",
    link: "https://sinverse.com/",
    image: "/sponsors/Sinverse.png",
    type: "EPIC SPONSORS"
  },
  {
    name: "Synthr",
    link: "https://synthr.io/",
    image: "/sponsors/Synthr.png",
    type: "EPIC SPONSORS"
  },
  {
    name: "Unore",
    link: "https://unore.io/",
    image: "/sponsors/UNOre.png",
    type: "EPIC SPONSORS"
  },
  {
    name: "Hacken",
    link: "https://hacken.io/",
    image: "/sponsors/Hacken.png",
    type: "EPIC SPONSORS"
  },
  {
    name: "Scallopx",
    link: "https://www.scallopx.com/",
    image: "/sponsors/Scallop.png",
    type: "EPIC SPONSORS"
  },
  {
    name: "Guerdon Victor",
    link: "https://guerdonvictor.live/",
    image: "/sponsors/GUERDONVICTOR.png",
    type: "EPIC SPONSORS"
  },
  {
    name: "Metaplayers",
    link: "https://metaplayers.gg/",
    image: "/sponsors/Metaplayers.gg.png",
    type: "EPIC SPONSORS"
  },
  {
    name: "Internet Computer",
    link: "https://internetcomputer.org/",
    image: "/sponsors/internet-computer.png",
    type: "EPIC SPONSORS"
  },
  {
    name: "GPU Net",
    link: "https://gpu.net/",
    image: "/sponsors/GPU.net.png",
    type: "RARE SPONSORS"
  },
  {
    name: "Quillaudits",
    link: "https://www.quillaudits.com/",
    image: "/sponsors/Quillaudits.png",
    type: "RARE SPONSORS"
  },
  {
    name: "Frontier",
    link: "https://www.frontier.xyz/",
    image: "/sponsors/Frontier.png",
    type: "RARE SPONSORS"
  },
  {
    name: "Router Protocol",
    link: "https://www.routerprotocol.com/",
    image: "/sponsors/router.png",
    type: "RARE SPONSORS"
  },
  {
    name: "Adlunam",
    link: "https://adlunam.cc/",
    image: "/sponsors/Adlunam.png",
    type: "RARE SPONSORS"
  },
  {
    name: "DMCC",
    link: "https://dmcc.ae/",
    image: "/sponsors/DMCC.png",
    type: "SUSTAINABILITY BUSINESS PARTNER"
  },
  {
    name: "Symbiote",
    link: "https://symbiote.gg/",
    image: "/sponsors/Symbiote.png",
    type: "ACCELERATOR PARTNER"
  },
  {
    name: "DTC Group",
    link: "https://www.dtcgroup.io/",
    image: "/sponsors/DTC Group.png",
    type: "ECOSYSTEM PARTNER"
  },
  {
    name: "Animoca Brands",
    link: "https://www.animocabrands.com/",
    image: "/sponsors/Animoca Brands.png",
    type: "ECOSYSTEM PARTNER"
  },
  {
    name: "Arabs in blockchain",
    link: "",
    image: "/sponsors/Arabs in blockchian.png",
    type: "ASSOCIATION PARTNER"
  }
  // Add other sponsors similarly
];

const mediaItems = [
  { name: "3 TV", image: "/Media/3 TV.jpeg" },
  { name: "ACN-Newswire", image: "/Media/ACN-Newswire.png" },
  { name: "all confs bot", image: "/Media/all confs bot.jpeg" },
  { name: "Asia token fund", image: "/Media/Asia token fund.webp" },
  { name: "Bitcoinist", image: "/Media/Bitcoinist.webp" },
  { name: "Block Tides", image: "/Media/Block Tides.webp" },
  { name: "Blockbeats", image: "/Media/Blockbeats.jpeg" },
  { name: "blockly", image: "/Media/blockly.png" },
  { name: "coin republic", image: "/Media/coin republic.webp" },
  { name: "coinfea", image: "/Media/coinfea.png" },
  { name: "Coingape-Logo", image: "/Media/Coingape-Logo.png" },
  { name: "Coinlive", image: "/Media/Coinlive.png" },
  { name: "coinscapture", image: "/Media/coinscapture.png" },
  { name: "corum 8", image: "/Media/corum 8.jpeg" },
  { name: "Cryptoken-Media-logo-profile", image: "/Media/Cryptoken-Media-logo-profile.jpg" },
  { name: "Cryptonewsz", image: "/Media/Cryptonewsz.png" },
  { name: "Cryptopolition", image: "/Media/Cryptopoliton.png" },
  { name: "CryptoTale", image: "/Media/CryptoTale.webp" },
  { name: "droomdroom", image: "/Media/droomdroom.webp" },
  { name: "DX Talks", image: "/Media/DX Talks.png" },
  { name: "gagsty", image: "/Media/gagsty.png" },
  { name: "hashtag web3", image: "/Media/hashtag web3.png" },
  { name: "industry-events", image: "/Media/industry-events.png" },
  { name: "INPUT_logo_2023_black", image: "/Media/one.webp" },
  { name: "international business magazine", image: "/Media/international business magazine.png" },
  { name: "News Btc", image: "/Media/News Btc.jpeg" },
  { name: "startup news fyi", image: "/Media/startup news fyi.png" },
  { name: "Territorio Blockchain", image: "/Media/Territorio Blockchain.jpeg" },
  { name: "U today", image: "/Media/U today.png" },
  { name: "Web3 TV", image: "/Media/Web3 TV.webp" },
  { name: "World Business Outlook", image: "/Media/World Business Outlook.png" },
  { name: "ZacroTribe", image: "/Media/ZacroTribe.webp" },
  { name: "ZEX-PR-Wire-logo", image: "/Media/ZEX-PR-Wire-logo.png" },
  { image: "/Media2/bitcoin insider.webp" },
  { image: "/Media2/Bitcoin World.png" },
  { image: "/Media2/bitmedia.webp" },
  { image: "/Media2/blockwee.png" },
  { image: "/Media2/chain wire.png" },
  { image: "/Media2/CIO Tech outlook.png.webp" },
  { image: "/Media2/coin edition.webp" },
  { image: "/Media2/CoinPedia-Logo.png" },
  { image: "/Media2/ct.png" },
  { image: "/Media2/Cointelegraph.png.webp" },
  { image: "/Media2/cryptobreaking_logo.jpeg" },
  { image: "/Media2/c.png" },
  { image: "/Media2/FW-Magazine-Black-Logo.png" },
  { image: "/Media2/Gagsty-1024x1024.png" },
  { image: "/Media2/ICOHOLDER_LOGO_black-2.png.webp" },
  { image: "/Media2/key difference media.png" },
  { image: "/Media2/klarda-2.jpg" },
  { image: "/Media2/merlyn pr.jpeg" },
  { image: "/Media2/miami crypto.png.webp" },
  { image: "/Media2/silicon.png" },
  { image: "/Media2/t.png" },
  { image: "/Media2/the news crypto.webp" },
  { image: "/Media2/The-Cryptonomist.jpg" },
  { image: "/Media2/traders brawl.jpeg" },
  { image: "/Media2/w.jpg" }
];
const communityItems = [
  { name: "Alaska - glodrush", image: "/Community/Alaska - glodrush.webp" },
  { name: "being invested club", image: "/Community/beinginvestedclub.png" },
  { name: "blockchain founders fund - bbf", image: "/Community/blockchainfounderfundbf.webp" },
  { name: "blockchained", image: "/Community/blockchained.png" },
  { name: "Collider", image: "/Community/Collider.png" },
  { name: "copperx", image: "/Community/copperx.png" },
  { name: "crypto chain wire", image: "/Community/crypto chain wire.webp" },
  { name: "crypto executives", image: "/Community/crypto executives.webp" },
  { name: "Crypto Nomads Club", image: "/Community/Crypto Nomads Club.png" },
  { name: "Crypto risk office", image: "/Community/Crypto risk office.webp" },
  { name: "dao struct", image: "/Community/dao struct.png" },
  { name: "Deca4", image: "/Community/Deca4.jpg" },
  { name: "Dubai Blockchain Network", image: "/Community/d.jpeg" },
  { name: "Dubai-Community", image: "/Community/Dubai-Community.png" },
  { name: "Enjinstarter", image: "/Community/Enjinstarter.webp" },
  { name: "genezi", image: "/Community/genezi.jpg" },
  { name: "Gratie", image: "/Community/Gratie.jpeg" },
  { name: "Gravity", image: "/Community/Gravity.jpeg" },
  { name: "Hex Trust", image: "/Community/Hex Trust.png" },
  { name: "htr group", image: "/Community/htr group.png" },
  { name: "KATANA inu", image: "/Community/KATANA inu.png" },
  { name: "Livelyverse", image: "/Community/Livelyverse.jpeg" },
  { name: "Lucidblue ventures", image: "/Community/Lucidblue ventures.png" },
  { name: "lumos", image: "/Community/lumos.png" },
  { name: "Lysithea Ventures", image: "/Community/Lysithea Ventures.webp" },
  { name: "maven", image: "/Community/maven.png" },
  { name: "Medieval Empires", image: "/Community/Medieval Empires.png" },
  { name: "Metapac", image: "/Community/Metapac.webp" },
  { name: "moledao", image: "/Community/moledao.png" },
  { name: "mysteria capital", image: "/Community/mysteria capital.webp" },
  { name: "Nadmah Fueling Flunders", image: "/Community/NadmahFuelingFlunders.png" },
  { name: "nft tech", image: "/Community/nft tech.png" },
  { name: "octopus_network", image: "/Community/octopus_network.png" },
  { name: "oneam capital", image: "/Community/oneam capital.png" },
  { name: "Plumdale", image: "/Community/Plumdale.png" },
  { name: "push", image: "/Community/push.webp" },
  { name: "QuillAcademy", image: "/Community/QuillAcademy.png" },
  { name: "Singularity Dao", image: "/Community/Singularity Dao.webp" },
  { name: "Soju DAO", image: "/Community/Soju DAO.png" },
  { name: "Wallet-Hunter-logo", image: "/Community/Wallet-Hunter-logo.png" },
  { name: "York St Capital", image: "/Community/York St Capital.webp" },
  { image: "/HACKATHON/AIRCHAINS.svg" },
  { image: "/HACKATHON/DECUBATE.png" },
  { image: "/HACKATHON/DORAHACKS.png" },
  { image: "/HACKATHON/POLYGON.png" },
  { image: "/HACKATHON/PUSH.svg" },
  { image: "/HACKATHON/SOLIDITY SCAN.avif" },
  { image: "/HACKATHON/UNORE.webp" }
];



export default function Who() {
  return (
    <>
      <div id="partners" className="px-6">
        <div className="block">
          <div className="max-w-6xl px-6 mx-auto lg:px-8">
            <Heading title={"Our Past Sponsors"} />
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl">
              {sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={sponsor.link}
                  className="p-8 bg-gray-50 sm:p-10 hover:bg-gray-100"
                >
                  <img
  className="object-contain w-full max-h-12 transform transition-transform duration-500 hover:scale-110 "
  src={sponsor.image}
  alt={sponsor.name}
/>

                </a>
              ))}
            </div>
            <div className="mt-10">
            <Heading title={"Media"} />
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl">
              {mediaItems.map((media, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-50 sm:p-10 hover:bg-gray-100"
                >
                  <img
                    className="object-contain w-full max-h-12 transform transition-transform duration-500 hover:scale-110 "
                    src={media.image}
                    alt={media.name}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
          <Heading title={"Community"} />
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl">
              {communityItems.map((community, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-50 sm:p-10 hover:bg-gray-100"
                >
                  <img
                    className="object-contain w-full max-h-12 transform transition-transform duration-500 hover:scale-110 "
                    src={community.image}
                    alt={community.name}
                  />
                </div>
              ))}
            </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
