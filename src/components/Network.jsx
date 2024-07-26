import { Link } from "react-router-dom";
export default function Network() {
  return (
    <div className="network-wrap network-wrap">
      <div className="main-margin min-h-screen  pt-44">
        <div className=" ">
          <h1 className=" double-color text-center text-[35px] md:text-[45px] font-bold  my-8">
            SPK Network...
          </h1>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-2  " data-aos="zoom-in">
            <Link className="flex-1" to="/Monetization">
              {" "}
              <div className="box-1  py-[35px] px-[30px] light-bg rounded-[7px] h-[fit-content] md:h-[350px] flex flex-col justify-between  ">
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
              <div className="box-1 py-[35px] px-[30px] light-bg rounded-[7px] h-[fit-content] md:h-[350px] flex flex-col justify-between  ">
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
                    video. 
                  </p>
                </div>
                <button className="text-[14px] text-[#1cb68b] faint2 py-1.5 px-[50px] opacity-100 rounded-[15px]  ">
                  Censorship Resistant
                </button>
              </div>
            </Link>
            <Link className="flex-1" to="/Monetization">
              {" "}
              <div className="box-1 py-[35px] px-[30px] light-bgt rounded-[7px] h-[fit-content] md:h-[350px] flex flex-col justify-between  ">
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
            <Link to="/Monetization">
              {" "}
              <div className="box-1 py-[35px] px-[30px] light-bgt rounded-[7px] h-[fit-content] md:h-[350px] flex flex-col justify-between w-[100%] ">
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
          </div>
        </div>
      </div>
    </div>
  );
}
