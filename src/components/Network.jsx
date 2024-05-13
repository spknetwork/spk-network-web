import { Link } from "react-router-dom";
export default function Network() {
  return (
    <div className="network-wrap network-wrap">
      <div className="main-margin min-h-screen  pt-44">
        <div className=" ">
          <h1 className=" double-color text-center text-[35px] md:text-[45px] font-bold  my-8">
            SPK Network...
          </h1>
          {/* grid md:grid-cols-2 xl:grid-cols-3 gap-2 mb-[20px] */}
          <div className="flex flex-col  md:flex-row  gap-2 mb-[20px]  " data-aos="zoom-in">
            <Link className="flex-1" to="/Monetization">
              {" "}
              <div className="box-1  py-[35px] px-[30px] light-bg rounded-[7px] h-[500px] f flex flex-col justify-between  ">
                <div className="">
                  <img
                    className="mb-[20px]"
                    src="../../public/image/coma.svg"
                    alt=""
                  />
                  <p className="text-[16px]  pb-8  ">
                    Your community/local group can help eachother by providing
                    IPFS storage with your PCs. This removes central points of
                    failure unlike traditional platforms.
                  </p>
                </div>
                <button className="text-[14px] text-[#1cb68b] faint2 py-1.5 px-[50px] opacity-100 rounded-[15px]  ">
                  Self Hosting
                </button>
              </div>
            </Link>
            <Link className="flex-1" to="/Monetization">
              {" "}
              <div className="box-1 py-[35px] px-[30px] light-bg rounded-[7px] h-[500px] flex flex-col justify-between  ">
                <div className="">
                  <img
                    className="mb-[20px]"
                    src="../../public/image/coma.svg"
                    alt=""
                  />
                  <p className="text-[16px]  pb-8  ">
                    Independent users running the desktop application can store
                    content from creators. By default when the user clicks play
                    on a video, the app will automatically start downloading the
                    video. Meaning, the content creator does not have to take on
                    the burden of hosting the video. If one of the servers
                    hosting the video is taken down, the content will continue
                    to stay alive via secondary nodes storing the data.
                  </p>
                </div>
                <button className="text-[14px] text-[#1cb68b] faint2 py-1.5 px-[50px] opacity-100 rounded-[15px]  ">
                  Censorship Resistant
                </button>
              </div>
            </Link>
            <Link className="flex-1" to="/Monetization">
              {" "}
              <div className="box-1 py-[35px] px-[30px] light-bgt rounded-[7px] h-[500px] flex flex-col justify-between  ">
                <div className="">
                  <img
                    className="mb-[20px]"
                    src="../../public/image/coma.svg"
                    alt=""
                  />
                  <p className="text-[16px]  pb-8  ">
                    SPK Network puts storage, CDN, and video encoding
                    infrastructure into the hands of peers within the community,
                    meaning there is not a reliance on a centralised content
                    platform (that can control your data and account of course).
                  </p>
                </div>
                <button className="text-[14px] text-[#1cb68b] faint2 py-1.5 px-[50px] opacity-100 rounded-[15px]  ">
                  Users do not depend on YouTube
                </button>
              </div>
            </Link>
          </div>
          <div className="md:mx-[200px] mt-3 grid md:grid-cols-2 xl:grid-cols-2 gap-2 h-[170%]">
            <Link to="/Monetization">
              {" "}
              <div className="box-1 py-[35px] px-[30px] light-bg rounded-[7px] h-[500px] flex flex-col justify-between flex-1  ">
                <div className="">
                  <img
                    className="mb-[20px]"
                    src="../../public/image/coma.svg"
                    alt=""
                  />
                  <p className="text-[16px]  pb-8  ">
                    The SPK Network provides a token creation system for content
                    creators and communities. Meaning creators can have their
                    own independent community centric token economies.
                  </p>
                </div>
                <button className="text-[14px] text-[#1cb68b] faint2 py-1.5 px-[50px] opacity-100 rounded-[15px]  ">
                  Tokenise Your Communities
                </button>
              </div>
            </Link>
            <Link to="/Monetization">
              {" "}
              <div className="box-1 py-[35px] px-[30px] light-bgt rounded-[7px] h-[500px] flex flex-col justify-between flex-1  ">
                <div className="">
                  <img
                    className="mb-[20px]"
                    src="../../public/image/coma.svg"
                    alt=""
                  />
                  <p className="text-[16px]  pb-8  ">
                    Each HIVE blockchain token holder is eligible to claim their
                    LARYNX miner tokens based on the amount of HIVE and HIVE
                    power held in their wallet on January 6th 2022. Unclaimed
                    tokens will be distributed via proposal fund by community
                    vote.
                  </p>
                </div>
                <button className="text-[14px] faint2 py-1.5 px-[50px] opacity-100 rounded-[15px] text-[#1cb68b] ">
                  LARYNX MINER CLAIM DROP (MONTHLY)
                </button>
              </div>
            </Link>

            {/* <div className="">
              <img className="mb-[20px]" src="../../public/image/coma.svg" alt="" />
              <div className="box-1 py-[35px] px-[30px] bg-color1 rounded-[7px] h-[500px] flex flex-col justify-between flex-1  ">
              <p className="text-[16px]  pb-8  ">
              — Users of the network can operate a Content Delivery Gateway. These nodes provide hot, high volume throughput for serving videos for possibly thousands of users at a time. These play a crucial role in ensuring videos play well for the end users. Also rewarded through direct payments from content creators, platform operators & community DAO funds.
              </p>
              </div>
              <button className="text-[14px] faint2 py-1.5 px-[50px] opacity-100 rounded-[15px] text-[#1cb68b] ">
              Content Delivery Network Gateways
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
