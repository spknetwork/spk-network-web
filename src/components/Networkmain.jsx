import { GrVirtualStorage } from "react-icons/gr";
function Networkmain() {
    return (
        <div className="main-margin mt-[40px]">
            <div className="flex justify-center flex-col items-center">
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=" double-color text-center text-[35px] md:text-[45px] font-bold  my-8">
            EARN REWARDS FOR CONTRIBUTING TO THE NETWORK
          </h1>
          <p className="text-center mb-10 lg:px-[140px] text-[20px]">Content platforms, content creators or individual users can help the network by storing, validating, serving high throughput content or encoding videos and content. Participating in these activities allows individuals to earn mining rewards without the need for physical mining rigs</p>
            </div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div data-aos="zoom-in-down"  className="box-1 flex gap-5 light-bg p-6 rounded-lg">
                    <div>
                    <GrVirtualStorage size={30} />
                    </div>
                    <div>
                        <h3 className="mb-2 text-[white] font-bold text-[20px]">Content Storage Nodes</h3>
                        <p>— Dedicated Storage Node operators will be rewarded for providing storage capacity to the network. Validator node would do the process of validating these nodes for truth and consistently.</p>
                    </div>
                </div>
                <div data-aos="zoom-in-down" className="box-2 flex gap-5 light-bgt p-6 rounded-lg">
                    <div>
                      <GrVirtualStorage size={30} />
                    </div>
                    <div>
                        <h3 className="mb-2 text-[white] font-bold text-[20px]">Encoder / Video Encoding Nodes</h3>
                        <p>— Node operators provide video encoding / transcoding services to users on the network in exchange for direct payments for their work.</p>
                    </div>
                </div>
                <div data-aos="zoom-in-down" className="box-3 flex gap-5 light-bg p-6 rounded-lg">
                    <div>
                     <GrVirtualStorage size={30} />
                    </div>
                    <div>
                        <h3 className="mb-2 text-[white] font-bold text-[20px]">Indexing Nodes</h3>
                        <p>— Indexing nodes keep track of posts on the network and account metadata. These nodes play a crucial role in UX and performance of the network.</p>
                    </div>
                </div>
                <div data-aos="zoom-in-down" className="box-4 flex gap-5 light-bgt p-6 rounded-lg">
                    <div>
                     <GrVirtualStorage size={30} />
                    </div>
                    <div>
                        <h3 className="mb-2 text-[white] font-bold text-[20px]">Validator Nodes</h3>
                        <p>— SPK nodes providing infrastructure in the network will operate validator nodes that will independently execute validation checks to ensure storage provider nodes are being truthful and consistent.</p>
                    </div>
                </div>
                <div data-aos="zoom-in-down" className="box-5 flex gap-5 light-bg p-6 rounded-lg">
                    <div>
                     <GrVirtualStorage size={30} />
                    </div>
                    <div>
                        <h3 className="mb-2 text-[white] font-bold text-[20px]">Content Delivery Network Gateways</h3>
                        <p>— Users of the network can operate a Content Delivery Gateway. These nodes provide hot, high volume throughput for serving videos for possibly thousands of users at a time.</p>
                    </div>
                </div>
                <div data-aos="zoom-in-down" className="box-6 flex gap-5 light-bgs p-6 rounded-lg">
                    <div>
                     <GrVirtualStorage size={30} />
                    </div>
                    <div>
                        <h3 className="mb-2 text-[white] font-bold text-[20px]">Indexing Nodes</h3>
                        <p>These nodes play a crucial role in UX and performance of the network. (Indexing nodes rewards mechanism is currently under construction).</p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Networkmain
