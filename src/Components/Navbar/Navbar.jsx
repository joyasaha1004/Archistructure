import React, { useRef } from 'react';
import logo from "../Assets/logo.png";


import {useState, useEffect} from "react"
const Navbar = () => {
    //menu start
    const [isMenuOpen, setMenuOpen] = useState(false);
     const toggleMenu = useRef();
     
   
    const change = ()=>{
        setMenuOpen(!isMenuOpen)
      toggleMenu.current.classList.add("hidden")
       
    }
    console.log(isMenuOpen)
    //menu end 

    
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
//    Dark mode close
     
    const cross = ()=>{
        setMenuOpen(!isMenuOpen)
        toggleMenu.current.classList.remove("hidden")
    }
    return (
        <div className="w-[299px] bg-transparent dark:bg-gray-800 sm:w-[499px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] ">
            
           <nav className="flex font-sans h-[60px] xl:h-[70px] ">

               <div className="-mt-5 -ml-[22px] relative lg:ml-2">
                   <img src={logo} className="w-[230px] h-[100px] ml-5 sm:-ml-5 md:-ml-7"></img>
                   <h4 className="text-[10px] font-sans font-bold tracking-[4px] text-sky-800 ml-8 -mt-10 xl:text-[15px] xl:ml-5">
                       Builders
                      </h4>
               </div>

               <div className="lg:ml-52 xl:ml-[550px]">
                   <div className="relative ml-40 mt-4 flex sm:ml-52 xl:ml-60">
                       
                   <button className=" transition duration-100 delay-1000 md:hidden" onClick={change} ref={toggleMenu} >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 dark:text-white md:hidden" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
  </button>
  
  <button className="ml-8 fixed">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 dark:text-white md:ml-44 xl:w-6 h-6" onClick={handleThemeSwitch}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg></button>
 
</div>
                   <ul className="gap-7 opacity-0 md:opacity-100 flex  dark:text-white font-semibold cursor-pointer xl:text-xl">
             <li className ="hover:text-sky-500"><a href="#">About</a></li>
              <li className ="hover:text-sky-500 "><a href="#">New Project</a></li>
                  <li className ="hover:text-sky-500"><a href="#">Works</a></li>
                 <li className ="hover:text-sky-500"><a href="#">Contact us</a></li>
                     
                   </ul>
               </div>
               </nav>
               {isMenuOpen ? (
                   <div className="ml-32 relative h-screen sm:ml-52">
                       <div className="mr-7">
                   
   <button className="">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -mt-16 ml-28 dark:text-white sm:ml-44" onClick={cross}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


   </button>
  
  
   </div> 
                    <ul className="grid grid-row-4 mt-24 -ml-2 dark:text-white"
                    data-aos="fade-left"
                    >
                    <li className="text-lg font-semibold mb-4 hover:text-sky-500"><a href="#">About</a></li>
                    <li className="text-lg font-semibold mb-4 hover:text-sky-500 "><a href="#">New Project</a></li>
                    <li className="text-lg font-semibold mb-4 hover:text-sky-500 "><a href="#">Works</a></li>
                    <li className="text-lg font-semibold hover:text-sky-500"><a href="#">Contact us</a></li>
                  
                </ul></div>
               ):null}
              
        </div>
    );
};

export default Navbar;