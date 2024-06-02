import "./footer.css";
import {
  FaGithubSquare,
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300" data-aos="fade-up"
    data-aos-duration="1000">
      <div className="sm-1:mx-auto">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] sm-1:text-center md:text-left">
          SPK Network.
        </h1>
        <p className="py-4 sm-1:text-center md:text-left ">
          {" "}
          A decentralised, censorship-resistant social media protocol and
          incentivization layer for web3.{" "}
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
        <a href="https://medium.com/@spknetsm"
            target="_blank"
            rel="noopener noreferrer"><BsMedium size={30} className="floating-image-1" /></a>
          <a href="https://discord.com/invite/RJn9dQfPeM"
            target="_blank"
            rel="noopener noreferrer"><FaDiscord size={30} className="floating-image-2" /></a>
          <a href="https://twitter.com/SPKweb3"
            target="_blank"
            rel="noopener noreferrer"><FaSquareXTwitter size={30} className="floating-image-3" /></a>
          <a href="https://github.com/spknetwork"
            target="_blank"
            rel="noopener noreferrer"><FaGithubSquare size={30} className="floating-image-4" /></a>
         <a href="https://t.me/spknetwork"
            target="_blank"
            rel="noopener noreferrer"> <FaTelegramPlane size={30} className="floating-image-5" /></a>
        </div>
      </div>
      <div className="lg:col-span-2 flex-col md:flex-row flex justify-between mt-1">
        <div className="flex  justify-center items-center w-[100%] ">
          <ul className=" flex justify-between gap-12  text-[23px] w-[100%  mb-4">
           <a href="https://discord.com/invite/RJn9dQfPeM"  target="_blank" rel="noopener noreferrer"> <li className="py-2 text-[18px] ">Contact</li></a>
            <a href="https://discord.com/invite/RJn9dQfPeM"  target="_blank" rel="noopener noreferrer"><li className="py-2 text-[18px] ">Support</li> </a>
          </ul> 
        </div>
        <div className="flex justify-center flex-col items-center w-[100%]">
        <div className=" flex justify-center items-center  w-[100%]">
          <a className="flex gap-[7px]  items-center px-3 py-1 ml-3 rounded-md  faint floating-image-1" href="https://apps.apple.com/us/app/3speak/id1614771373"
            target="_blank"
            rel="noopener noreferrer">
            <svg
              className="w-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="">
              <h4 className="text-[12px] font font-semibold ">
                Dowload on the{" "}
              </h4>
              <span className="text-[17px] font-bold font">App Store</span>
            </div>
          </a>  
          <a
            className="flex gap-[7px] items-center px-3 py-1 ml-3 rounded-md  faint floating-image-2"
            href="https://play.google.com/store/apps/details?id=tv.threespeak.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <div className="">
              <h4 className="text-[12px] font font-semibold ">
                Dowload on the{" "}
              </h4>
              <span className="text-[17px] font-bold font">Play Store</span>
            </div>
          </a>
        </div>
        <a href=" https://linktr.ee/spknetwork" className="cursor-pointer"><button className="  p-[20px] mt-[20px] rounded-md  faint">Documentation and Link Trees</button></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
