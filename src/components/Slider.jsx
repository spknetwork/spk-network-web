import { useState } from "react";


function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Change this to match the total number of slides

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative main-margin">
      <div className="slider-header text-center mt-[110px] md:ml-[200px] md:mr-[200px]">
        <h2 className="text-[32px] font-bold text-[white]" data-aos="fade-up"
     data-aos-duration="1000">Independant monetization</h2>
        <p className="text-[20px]" data-aos="fade-up"
     data-aos-duration="1000">Make community or content creator Memes into collectables with NFT&apos;s and issue them to the token holders who stake the most of a communities or a creator&apos;s token.Users can earn collectable memes by staking the tokens of a creator or a community</p>
      </div>
      {/* Slider container */}
      <div className="overflow-hidden">
        {/* Slider track */}
        <div className="flex transition-transform duration-300"  style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {/* Slide 1 */}
          <div className=" w-full flex-shrink-0">
            <div className=" p-4 flex flex-col md:flex-row md:justify-center md:items-center gap-7 h-[fit-content]">
              <div className="w-full md:w-[40%]">
                <h2 className="text-2xl text-center font-semibold text-white mb-3">
                  Service infrastructure Nodes
                </h2>
                <p className="text-[16px] text-grey text-center md:text-left">
                  Encoding: Node operators can provide encoding/transcoding
                  services to the Network in exchange for direct payments from
                  users taking advantage of their resources. Content Storage
                  Nodes: Dedicated Storage Node operators will be rewarded for
                  providing storage capacity to the network. <span className="hidden"> Validator nodes
                  carry out the the process of validating these nodes for truth
                  and consistently. Content Delivery Network Gateways: Users of
                  the Network can set up a Content Delivery Gateway to the
                  Network and receive rewards in doing so. They would
                  effectively be running an IPFS gateway with some extra
                  wrapping on top for blocklists and other functionality</span>
                </p>
              </div>
              <img
                src="../../public/image/nodes.png"
                alt="Slide 2"
                className="md:w-[50%]  rounded-sm md:rounded-[40px] "
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="w-full flex-shrink-0">
            <div className=" p-4 flex flex-col md:flex-row md:justify-center md:items-center gap-7 h-[fit-content]">
              <div className="w-full md:w-[40%]">
                <h2 className="text-2xl text-center  font-semibold text-white">
                  Service infrastructure Pool
                </h2>
                <p className="text-lg text-grey text-center md:text-left">
                  The Service Infrastructure Pool (SIP) is a DeFi Liquidity Pool
                  designed to hold funds indefinitely for funding infrastructure
                  operation. These funds would come from advertisements space
                  and LARYNX miner purchases for example. The main SPK network
                  SIP will help to cover a portion of the costs of the operation
                  of the infrastructure node operators such as storage &
                  validator nodes
                </p>
              </div>
              <img
                src="../../public/image/poopl.png"
                alt="Slide 2"
                className="md:w-[50%] rounded-sm md:rounded-[40px] "
              />
            </div>
          </div>

          <div className="w-full flex-shrink-0">
            <div className=" p-4 flex flex-col md:flex-row md:justify-center md:items-center gap-7 h-[fit-content]">
              <div className=" w-full md:w-[40%]">
                <h2 className="text-2xl text-center font-semibold text-white">
                  WEB 3.0 SPK NETWORK
                </h2>
                <p className="text-lg text-grey text-center md:text-left">
                  The SPK Network provides the ability for content platforms and
                  content creators to interact with the decentralized social
                  graph, while rewarding infrastructure providers with SPK
                  governance and BROCA gas tokens. Using blockchain technology
                  to incentivize the storage of off-chain data. <span className="hidden"> Most data will
                  be off-chain, and we aim to be the first protocol to
                  incentivize infrastructure providers of any kind to be
                  rewarded for storing data using IPFS. You no longer need to
                  rely solely on blockchain to store files; now, IPFS operation
                  and beyond can be rewarded for joining the web 3 sharing
                  economy.</span>
                </p>
              </div>
              <img
                src="../../public/image/network.png"
                alt="Slide 2"
                className="md:w-[50%] rounded-sm md:rounded-[40px] "
              />
            </div>
          </div>
          <div className="w-full flex-shrink-0">
            <div className=" p-4 flex flex-col md:flex-row md:justify-center md:items-center gap-7 h-[fit-content]">
              <div className="w-full md:w-[40%]">
                <h2 className="text-2xl text-center font-semibold text-white">
                  BROCA GAS TOKEN
                </h2>
                <p className="text-lg text-grey text-center md:text-left">
                  The BROCA Gas token is akin to graphene Resource Credits in
                  functionality which limits spam in the network . Staked SPK
                  regenerates BROCA over time. Broca then can be exchanged for
                  services on the network
                </p>
              </div>
              <img
                src="../../public/image/token.png"
                alt="Slide 2"
                className="md:w-[50%] rounded-sm md:rounded-[40px] "
              />
            </div>
          </div>
          <div className="w-full flex-shrink-0">
            <div className=" p-4 flex flex-col md:flex-row md:justify-center md:items-center gap-7 h-[fit-content]">
              <div className=" w-full md:w-[40%]">
                <h2 className="text-2xl text-center font-semibold text-white">
                  SPEAK TOKEN
                </h2>
                <p className="text-lg text-grey text-center md:text-left">
                  Using blockchain technology to incentivize the storage of
                  off-chain data. You no longer need to rely solely on
                  blockchain to store files; now, you will be rewarded for
                  operating an IPFS storage node or other service on the network
                </p>
              </div>
              <img
                src="../../public/image/s-token.png"
                alt="Slide 2"
                className="md:w-[50%] rounded-sm md:rounded-[40px]"
              />
            </div>
          </div>

          {/* Add more slides as needed */}
        </div>{" "}
        {/* End of Slider track */}
      </div>{" "}
      {/* End of overflow-hidden */}
      <div className="flex justify-center mt-6 gap-6">
        {/* Left navigation button */}
        <button
          className=" absolute left-0 top-1/2  transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex justify-center items-center"
          onClick={prevSlide}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        {/* Right navigation button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex justify-center items-center"
          onClick={nextSlide}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;
