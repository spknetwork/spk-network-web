import "./test.css";
import rally1 from "../../src/assets/rally.png";
import spendhbd from "../../src/assets/spendhbd.png";
import aliento from "../../src/assets/aliento.png";
import Rosarito from "../../src/assets/Rosarito.png";
import vibes from "../../src/assets/vibes.jpg";
import bitcoinmachines from "../../src/assets/bitcoin-machine.jfif";
import starter from "../../src/assets/starter.png";

export default function Test() {
  const data = [
    {
      title: "Rally",
      img: rally1,
      link: "https://hiverally.com/",
      about:
        "Rally sport (World Rally Championship, European Rally Championship, National Rally Championships)",
    },
    {
      title: "SpendHBD",
      img: spendhbd,
      link: "https://spendhbd.com/",
      about: "Find a local business that accepts HBD or Bitcoin Lightning",
    },
    {
      title: "Aliento",
      img: aliento,
      link: "https://aliento.blog/",
      about:
        "Aliento es una comunidad general donde puedes dar tus primeros pasos en Hive.",
    },
    {
      title: "Rosarito",
      img: Rosarito,
      link: "https://rosarito.community/",
      about:
        "Una comunidad sobre Rosarito, México y los negocios que lo respaldan.",
    },
    {
      title: "Vibe",
      img: vibes,
      link: "https://hivevibes.community/",
      about:
        "A weekly music competition that's bringing back good vibes to WEB3",
    },
    {
      title: "Bitcoin Machines",
      img: bitcoinmachines,
      link: "https://bitcoinmachines.community/",
      about:
        "Una comunidad sobre Rosarito, México y los negocios que lo respaldan.",
    },
    {
      title: "StarterKitDAO",
      img: starter,
      link: "https://app.getstarterkit.com/trending/hive-139307",
      about:
        "Here are the tools, just start.",
    },
  ];
  return (
    <div className="main-margin  min-h-screen">
      <h1
        className="text-center text-[20px] md:text-[45px] mt-20 mb[20px] font-bold text-white"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {" "}
        Breakaway Communties 
      </h1>
      <p
        className="text-center text-[18px] md:text-[22px] md:mx-[120px]"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        A seamless way to create tokenised community social frontend platforms on the Hive blockchain.
      </p>
      <a href="https://breakaway.community/docker-setup" className="cursor-pointer flex justify-center mb-[20px] mt-[10px] " data-aos="fade-up"
        data-aos-duration="3000"><button className='py-[4px] px-[20px] md:p-4 faint rounded-md text-[#9ca9b3]'> LAUNCH YOUR PLATFROM</button></a>

      <div className="flex flex-wrap justify-center gap-4">
  {data.map((data, index) => (
    <div
      key={index}
      className="p-[3px_10px] w-[100%] md:w-[265px] h-[100%] md:h-[410px] gap-[10px] light-bgt mb-[10px] rounded-[10px] overflow-hidden text-ellipsis flex flex-col items-center"
    >
      <div className="w-[100%] h-[220px] w-[100%] h-[150px] flex-shrink-0">
        <img src={data.img} alt={data.title} className="w-[100%] h-[100%] rounded-[4px]" />
      </div>
      <p className="text-center">{data.title}</p>
      <p className="text-center">{data.about}</p>
      <a
        href={data.link}
        className="flex justify-center items-center text-center text-[16px]"
      >
        <button className="py-[3px] px-[40px] bg-[#007bff] rounded-[8px] text-[16px] text-white">
          Visit Platform
        </button>
      </a>
    </div>
  ))}
</div>


    </div>
  );
}
