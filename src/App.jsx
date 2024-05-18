
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import AOS from "aos";
import "aos/dist/aos.css"
import React from "react"
import Hero from './Components/Hero/Hero';

function App() {
 
    React.useEffect(()=>{
      AOS.init({
        offset:100,
        duration:800,
        easing:"ease-in-sine",
        delay:100,
      });
      AOS.refresh();
  
    },[]);
  

  return (
    <>
  <Navbar/>
  <Hero/>
    </>
  )
}

export default App
