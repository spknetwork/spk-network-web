import './App.css'
import { useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Monetization from './page/Monetization'
import Tokenomics from './page/Tokenomics'


function App() {

  useEffect(()=>{
    Aos.init( {duration:1000});
  },[])

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Monetization' element={<Monetization /> } />
      <Route path='/Tokenomics' element={<Tokenomics /> } />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
