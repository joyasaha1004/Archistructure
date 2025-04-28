import React, { useRef } from 'react';
import logo from "../Assets/logo2.png";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
   
   
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
// Dark mode start

    const [theme, setTheme] = useState(null);

    useEffect(()=>{
        if(window.matchMedia('(prefer-color-scheme! dark)').matches){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    },[]);
    useEffect(()=>{
      if(theme === "dark"){
          document.documentElement.classList.add("dark");
      }else{
          document.documentElement.classList.remove("dark");
      }
    },[theme]);

    const handleThemeSwitch = ()=>{
        setTheme(theme === "dark" ? "light":"dark");
    }

    const [menuOpen, setMenuOpen] = useState(false);
    return (

       <div 
       className={`w-full fixed z-50 transition-all duration-300 
        ${scrolled ? 'bg-white text-black shadow-md dark:bg-gray-900 dark:text-white' : 'bg-transparent text-white'}`}>
     

        <header className="items-center py-1.5 overflow-x-hidden max-w-screen-xl mx-auto">

            <div className='flex justify-between '>
  <div className="flex items-center text-base -space-x-1.5 sm:text-lg ">
    <img src={logo} alt="Builders Logo" className="w-8 h-auto lg:w-10"/>
    <span className="font-bold text-blue-600">Builders</span>
  </div>
 <div className="lg:content-center">
                  
                                   <ul className="lg:gap-9 hidden lg:block lg:flex relative  list dark:text-white lg:text-sm font-semibold ">
                                       <li className=""><Link to="/Archistructure">Home</Link></li>
                              <li className =""><Link to="/about">About</Link></li>
                               <li className =""><Link to="/newproject">New Project</Link></li>
                                    <li className =""><Link to="/works">Works</Link></li>
                                   <li className =""><Link to="/contact">Contact us</Link></li>
                                       
                                  </ul>
                                </div>
  <div className="flex items-center space-x-3">
 
    <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl lg:hidden">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
    <button onClick={handleThemeSwitch}>🌙</button>
  </div>
</div>
 

</header>

     {menuOpen && (
      <div className=" relative h-screen pt-16 ">
                            <div className="">
                       
     
      
        </div> 
                       <ul className="justify-items-center nav-list dark:text-white"
                         data-aos="fade-left"
                        >
                          <li className=""><Link to="/">Home</Link></li>  
                         <li className=""><Link to="/about">About</Link></li>
                         <li className=" "><Link to="/newproject">New Project</Link></li>
                         <li className=" "><Link to="/works">Works</Link></li>
                        <li className=""><Link to="/contact">Contact us</Link></li>
                      
                    </ul></div>
                    )}
              </div>    
     
 

    );
};

export default Navbar;