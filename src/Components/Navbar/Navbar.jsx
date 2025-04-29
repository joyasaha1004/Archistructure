import React, { useRef } from 'react';
import logo from "../Assets/logo2.png";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

   
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (

       <div 
       className={`w-full fixed z-50 transition-all duration-300 
        ${scrolled ? 'bg-white text-black shadow-md dark:bg-gray-900 dark:text-white' : 'bg-transparent text-white'}`}>
     

        <header className="items-center py-1.5 px-2 lg:px-2 overflow-x-hidden max-w-screen-xl mx-auto">

            <div className='flex justify-between z-50'>
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
 
    
         <button onClick={toggleMenu} className="lg:hidden text-black  dark:text-white z-50">
         {isOpen ? (
    <XMarkIcon className="h-6 w-6" />
  ) : (
    <Bars3Icon className="h-6 w-6" />
  )}
        </button>
    <button onClick={handleThemeSwitch} className='z-50'>🌙</button>
  </div>
</div>
 

</header>

     {isOpen && (
      <div className="absolute top-0 right-0 w-full h-screen text-black bg-white dark:bg-gray-900 dark:text-white pt-20 space-y-8 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}">
                      
                       
     
      
       
                       <ul className="justify-items-center nav-list "
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