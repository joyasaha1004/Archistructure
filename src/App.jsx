
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import {Routes,Route} from "react-router-dom";
import React from "react"
import Hero from './Components/Hero/Hero';
import About from "./Pages/About";
import NewProject from './Pages/NewProject';
import Works from './Pages/Works';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
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
  
  <Routes>
  <Route path="/Archistructure" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/newproject" element={<NewProject/>}/>
    <Route path="/works" element={<Works/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
