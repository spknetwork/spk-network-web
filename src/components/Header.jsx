import React from 'react';
import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <div className="text-white h-screen sm:h-[70vh] md:h-screen" data-aos="fade-left">
      <div className="md:main-margin sm:mx-3" data-aos="fade-right">
        <div className="text-center">
          <h1 className="text-[45px] mt-[50px] md:mt-[100px] md:text-[70px] font-bold double-color">An incentivization layer for web3</h1>
          <p className="text-[21px] md:text-[30px] mt-[40px] mb-5 md:mx-[100px]">
            Decentralised, incentivised Peer to Peer: Storage, Encoding, Content Delivery Networks and No Middle men or third parties involved in your content platforms
          </p>
          <div className="flex justify-center mt-[40px] gap-5 mb-6">
            <a className="flex gap-[7px] items-center px-3 py-1 ml-3 rounded-md faint" href="https://apps.apple.com/us/app/3speak/id1614771373" target="_blank" rel="noopener noreferrer">
              <svg className="w-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div>
                <h4 className="text-[12px] font-semibold">Download on the</h4>
                <span className="text-[17px] font-bold">App Store</span>
              </div>
            </a>
            <a className="flex gap-[7px] items-center px-3 py-1 ml-3 rounded-md faint" href="https://play.google.com/store/apps/details?id=tv.threespeak.app" target="_blank" rel="noopener noreferrer">
              <svg className="w-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div>
                <h4 className="text-[12px] font-semibold">Download on the</h4>
                <span className="text-[17px] font-bold">Play Store</span>
              </div>
            </a>
          </div>
        </div>

        <div className="slider mt-[70px] mx-[50px]" data-aos="fade-up" data-aos-duration="2000">
          <Marquee pauseOnHover gradient gradientColor={"black"} className="flex">
          <a href="https://3Speak.tv/" target="_blank" rel="noopener noreferrer"><div className="faint slide flex items-center py-[15px] px-4 rounded-[15px] gap-2 ml-3 ">
              <img className="w-[67px]" src="/image/3speak.png" alt="3speak" /> <span className="text-[18px]">3speak</span>
            </div></a>
            <a href="https://breakaway.community/" target="_blank" rel="noopener noreferrer"><div className="flex items-center faint py-[15px] px-4 rounded-[15px] gap-2 ml-3">
              <img className="w-[67px]" src="/image/bac-white.png" alt="Dbuzzzz" /> <span className="text-[18px]">Breakaway <br /> Community</span>
            </div></a>
            <a href="https://actifit.io/" target="_blank" rel="noopener noreferrer"><div className="flex items-center faint py-[15px] px-4 rounded-[15px] gap-2 ml-3 w-[200px]">
              <img className="w-[58px] rounded-[7px] " src="/image/actifit.png" alt="Gem" /> <span className="text-[18px] ">Actifit</span>
            </div></a>
            <a href="https://D.buzz/" target="_blank" rel="noopener noreferrer"><div className="flex items-center faint py-[15px] px-4 rounded-[15px] gap-2 ml-3 w-[200px]">
              <img className="w-[58px] rounded-[7px]" src="/image/dbuzz.jpg" alt="Leo Finance" /> <span className="text-[18px]">Dbuzz</span>
            </div></a>
            <a href="dlux.io/" target="_blank" rel="noopener noreferrer"><div className="flex items-center faint py-[15px] px-4 rounded-[15px] gap-2 ml-3 w-[200px]">
              <img className="w-[62px]" src="/image/dlux.svg" alt="3speak" /> <span className="text-[18px] ">Dlux</span>
            </div></a>
            <a href="https://3Speak.tv/" target="_blank" rel="noopener noreferrer"><div className="faint slide flex items-center py-[15px] px-4 rounded-[15px] gap-2 ml-3">
              <img className="w-[67px]" src="/image/3speak.png" alt="3speak" /> <span className="text-[18px]">3speak</span>
            </div></a>
            <a href="https://breakaway.community/" target="_blank" rel="noopener noreferrer"><div className="flex items-center faint py-[15px] px-4 rounded-[15px] gap-2 ml-3">
              <img className="w-[67px]" src="/image/bac-white.png" alt="Dbuzzzz" /> <span className="text-[18px]">Breakaway <br /> Community</span>
            </div></a>
            <a href="https://actifit.io/" target="_blank" rel="noopener noreferrer"><div className="flex items-center faint py-[15px] px-4 rounded-[15px] gap-2 ml-3 w-[200px]">
              <img className="w-[58px] rounded-[7px]" src="/image/actifit.png" alt="Gem" /> <span className="text-[18px]">Actifit</span>
            </div></a>
            <a href="https://D.buzz/" target="_blank" rel="noopener noreferrer"><div className="flex items-center faint py-[15px] px-4 rounded-[15px] gap-2 ml-3 w-[200px]">
              <img className="w-[58px] rounded-[7px]" src="/image/dbuzz.jpg" alt="Leo Finance" /> <span className="text-[18px]">Dbuzz</span>
            </div></a>
            <a href="dlux.io/" target="_blank" rel="noopener noreferrer"><div className="flex items-center faint py-[15px] px-4 rounded-[15px] gap-2 ml-3 w-[200px]">
              <img className="w-[62px]" src="/image/dlux.svg" alt="3speak" /> <span className="text-[18px]">Dlux</span>
            </div></a>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
