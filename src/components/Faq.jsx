
import { MdKeyboardArrowUp} from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import "./faq.css"
import { useState } from "react";

export default function Faq() {
    const [CurOpen, setCurOpen] = useState(null);
    const data = [
        // {
        //   title: "Independant monetization?",
        //   text:
        //   "Make community or content creator Memes into collectables with NFT's and issue them to the token holders who stake the most of a communities' or a creator's token.Users can earn collectable memes by staking the tokens of a creator or a community"
        // },
        {
          title: "How To Earn Rewards?",
          text:
          "Content platforms, content creators or individual users can help the network by storing, validating, serving high throughput content or encoding videos and content. Participating in these activities allows individuals to earn mining rewards without the need for physical mining rigs."
        },
        {
            title: "How To Run SPK Storage Node",
            text:
            "This is the base model for the SPK ecosystem. It allows anybody with a computer and an internet connection to participate. This setup is extremely simple but requires you to have Docker, which is a way to run compartmentalized virtual machines.",
            url:'https://peakd.com/hive-112019/@spknetwork/spk-testnet-node-setup-guide'
          },

      ];
   console.log(data[1])
  return (
    <div id="faq"  className="accordion-wrap my-smooth">
      <div className="accordion ">
         <h2>Frequently Asked Questions</h2>
    {data.map((el, i) => (
      <AccordionItem title={el.title} CurOpen={CurOpen} OnOpen={setCurOpen}  num={i} key={el.title}>
        {el.text} {i === data.length - 1 && <a className="text-a" href={el.url}>link</a>}
        </AccordionItem>   
    ))}
  </div>
    </div>
    
  )
}

function AccordionItem({ num, title, CurOpen, OnOpen, children }) {
    const isOpen= num ===CurOpen
    
  
    function handleToggle() {
      // setIsOpen((isOpen) => true);
      OnOpen(isOpen ? null : num)
    }
  
    return (
      <div id="faq" className={`item   ${isOpen ? "acc-open " : ""}`} onClick={handleToggle}>
        {/* <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p> */}
        <div className={`title-wrap  transition-all transform  ${isOpen ? "title-wrap-mb": ""}`}>
        <p className="titles">{title}</p>
        <p className="icon">{isOpen ? <RiArrowDownSLine size={30} /> : <MdKeyboardArrowUp size={30} />}</p>
        </div> 
        {isOpen && <div className={`content-box ${isOpen ? "content-box-mb" : ""} `}>{children}</div>}
      </div>
    );
  }
