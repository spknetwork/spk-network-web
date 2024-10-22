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
     <Link  to="/"><img className="w-[50px]" src="../../image/SPK.4d91f7a0.png" alt="" /></Link>
    <ul className='hidden md:flex'>
     <Link to="/Tokenomics"> <li className='p-4'>TOKENOMICS</li></Link>
     <a href="#faq"><li className='p-4'>FAQ</li></a>
     <a href=" https://linktr.ee/spknetwork" className="cursor-pointer "><li className='p-4 '> Further Reading SPK Network</li></a> 
     <a href=" https://linktr.ee/proofofaccess" className="cursor-pointer "><li className='p-4 '> Proof of Access Info </li></a> 
    </ul>
    <a href="https://peakd.com/hive-112019/@spknetwork/spk-network-white-paper" className="cursor-pointer hidden md:block "><button className='p-4 faint rounded-md text-[#9ca9b3]'> White Paper</button></a>

    <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
    </div>
    <ul className={nav ? 'fixed  left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
     <img className="w-[50px]" src="../../public/image/SPK.4d91f7a0.png" alt="" />
       <Link onClick={()=> setNav(!nav)} to="/Tokenomics"><li className='p-4 border-b border-gray-600'>Tokenomics</li></Link> 
            <a onClick={()=> setNav(!nav)} href="https://peakd.com/hive-112019/@spknetwork/spk-network-white-paper"
            target="_blank"
            rel="noopener noreferrer"><li className='p-4 border-b border-gray-600'> Whitepaper</li></a>
       <a onClick={()=> setNav(!nav)} href="#faq"><li className='p-4 border-b border-gray-600'>Faq</li></a>
       <a onClick={()=> setNav(!nav)} href="https://discord.com/invite/RJn9dQfPeM"
            target="_blank"
            rel="noopener noreferrer"><li className='p-4'>Contact</li></a>
    </ul>
  </div>
  );
}
