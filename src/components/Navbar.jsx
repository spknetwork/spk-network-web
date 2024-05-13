import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='sticky z-10 top-0 bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
     <Link  to="/"><img className="w-[50px]" src="../../public/image/SPK.4d91f7a0.png" alt="" /></Link>
    <ul className='hidden md:flex'>
     <Link to="/Tokenomics"> <li className='p-4'>TOKENOMICS</li></Link>
     <a href="#faq"><li className='p-4'>FAQ</li></a>
     <a href="https://play.google.com/store/apps/details?id=tv.threespeak.app" className="cursor-pointer"><li className='p-4'> JOIN NOW</li></a>
     {/* <li className='p-4' smooth={true} duration={1000}> <a href="#faq"  >Section 1</a></li> */}
     
      
    </ul>
    <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
    </div>
    <ul className={nav ? 'fixed  left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
     <img className="w-[50px]" src="../../public/image/SPK.4d91f7a0.png" alt="" />
       <Link onClick={()=> setNav(!nav)} to="/Tokenomics"><li className='p-4 border-b border-gray-600'>TOKENOMICS</li></Link> 
       <a onClick={()=> setNav(!nav)} href="https://peakd.com/hive/@spknetwork/spk-network-light-paper"
            target="_blank"
            rel="noopener noreferrer"><li className='p-4 border-b border-gray-600'>LIGHTPAPPER ROAD</li></a>
       <a onClick={()=> setNav(!nav)} href="#faq"><li className='p-4 border-b border-gray-600'>FAQ</li></a>
       <a onClick={()=> setNav(!nav)} href="https://discord.com/invite/RJn9dQfPeM"
            target="_blank"
            rel="noopener noreferrer"><li className='p-4'>Contact</li></a>
    </ul>
  </div>
    // <div>
    //   <div className="main-margin">
    //     <div className="md:flex justify-between items-center hidden ">
    //       <img className="w-[50px]" src="../../public/image/SPK.4d91f7a0.png" alt="" />
    //       <ul className="md:flex gap-4 text-white hidden ">
    //         <li>Tokenomics</li>
    //         <li>LightPaper</li>
    //         <li>Roadmap</li>
    //         <li>FAQ</li>
    //       </ul>
    //       <button className=" bg-white px-[20px] py-1 rounded hidden" >Start</button>
    //       <div className=" md:hidden">
          
    //       </div>
         

    //     </div>

    //     <div className="md:hidden bg-cover h-[100vh] bg-green-400">
    //       <div className=" flex justify-between">
    //       <img className="w-[50px]" src="../../public/image/SPK.4d91f7a0.png" alt="" />
    //       <h1 className="text-[30px]">x</h1>
    //       </div>

    //     <div className="w-[60%] h-full bg-blue-300  ">
    //      <ul className="block  text-white ">
    //         <li className="p-4">Tokenomics</li>
    //         <li className="p-4">LightPaper</li>
    //         <li className="p-4">Roadmap</li>
    //         <li className="p-4">FAQ</li>
    //       </ul>
    //      </div>
    //     </div>
        
    //   </div>
    // </div>
  );
}
