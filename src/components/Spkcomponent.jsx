import "./spkcomponent.css"

export default function Spkcomponent() {
  return (
    <div data-aos="zoom-in" className="main-margin mt-[40px]">
        <div data-aos="zoom-in" className=" flex-col md:flex-row flex justify-center items-center gap-[15px] md:mx-[150px] mb-[90px]">
            <div className="text-center md:text-start">
                <h2 className="text-[32px] font-extrabold text-[white]">Self Hosting</h2>
                <p className=" text-[20px]  leading-7 ">Your community/local group can help eachother by providing IPFS storage with your PCs. This removes central points of failure unlike traditional platforms.</p>
            </div>
            <div className="">
                <img className="w-[100%] md:w-[1900px] rounded-[20px]" src="../../image/self-host.png" alt="" />
            </div>
        </div>
        <div className=" flex-col md:flex-row-reverse flex justify-center items-center gap-[15px] md:mx-[150px] mb-[90px]">
            <div className="text-center md:text-start">
                <h2 className="text-[32px] font-extrabold text-[white]">Censorship Resistant</h2>
                <p className=" text-[20px]  leading-7 ">Independent users running the desktop application can store content from creators. By default when the user clicks play on a video, the app will automatically start downloading the video. Meaning, the content creator does not have to take on the burden of hosting the video. If one of the servers hosting the video is taken down, the content will continue to stay alive via secondary nodes storing the data.</p>
            </div>
            <div className="">
                <img className="w-[100%] md:w-[3100px] rounded-[20px]" src="../../image/Censorship.png" alt="" />
            </div>
        </div>
        <div className=" flex-col md:flex-row flex justify-center items-center gap-[15px] md:mx-[150px] mb-[90px]">
            <div className="text-center md:text-start">
                <h2 className="text-[32px] font-extrabold text-[white]">Users do not depend on YouTube</h2>
                <p className=" text-[20px]  leading-7 ">SPK Network puts storage, CDN, and video encoding infrastructure into the hands of peers within the community, meaning there is not a reliance on a centralised content platform (that can control your data and account of course).</p>
            </div>
            <div className="">
                <img className="w-[100%] md:w-[1900px] rounded-[20px]" src="../../image/Decentralized.png" alt="" />
            </div>
        </div>
        <div className=" flex-col md:flex-row-reverse flex justify-center  items-center gap-[15px] md:mx-[150px] mb-[90px]">
            <div className="text-center md:text-start">
                <h2 className="text-[32px] font-extrabold text-[white]">Tokenise Your Communities</h2>
                <p className=" text-[20px]  leading-7 ">The SPK Network provides a token creation system for content creators and communities. Meaning creators can have their own independent community centric token economies.</p>
            </div>
            <div className="">
                <img className="w-[100%] md:w-[1900px] rounded-[20px]" src="../../image/cummunities.png" alt="" />
            </div>
        </div>
        <div className=" flex-col md:flex-row flex justify-center items-center gap-[15px] md:mx-[150px] mb-[90px]">
            <div className="text-center md:text-start">
                <h2 className="text-[32px] font-extrabold text-[white]">LARYNX MINER CLAIM DROP (MONTHLY)</h2>
                <p className=" text-[20px]  leading-7 ">Each HIVE blockchain token holder is eligible to claim their LARYNX miner tokens based on the amount of HIVE and HIVE power held in their wallet on January 6th 2022. Unclaimed tokens will be distributed via proposal fund by community vote.</p>
            </div>
            <div className="">
                <img className="w-[100%] md:w-[1900px] rounded-[20px]" src="../../image/larynx.png" alt="" />
            </div>
        </div>
        
        
    </div>
  )
}

