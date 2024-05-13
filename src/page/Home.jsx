import Header from "../components/Header";
import Network from "../components/Network";
import Networkmain from "../components/Networkmain";
// import Stunt from "../components/Stunt";
import Test from "../components/Test";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"

export default function Home() {
  return (
    <>
    <div className=" bg-color">
    <Navbar />
    <Header />
    <Networkmain /> 
    {/* <Stunt />  */}
    <Network /> 
    <Slider />
    <Test /> 
    <Faq /> 
    <Footer /> 
    </div> 
    </>
  )
}
// overflow-x-hidden app
// overflow-y-scroll