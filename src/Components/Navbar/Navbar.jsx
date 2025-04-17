import React, { useRef } from 'react';
import logo from "../Assets/logo2.png";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom';

const Navbar = () => {
    //menu start
    // const [isMenuOpen, setMenuOpen] = useState(false);
    //  const toggleMenu = useRef();
     
   
    // const change = ()=>{
    //     setMenuOpen(!isMenuOpen)
    //   toggleMenu.current.classList.add("hidden")
       
    // }
    // console.log(isMenuOpen)
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
     
    // const cross = ()=>{
    //     setMenuOpen(!isMenuOpen)
    //     toggleMenu.current.classList.remove("hidden")
    // }
    const [menuOpen, setMenuOpen] = useState(false);
    return (

       <div className='dark:bg-gray-800 px-2 w-full overflow-x-hidden max-w-screen-xl mx-auto'>

        <header className="items-center py-1.5 ">

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
    {/* <button className='font-bold' onClick={change} ref={toggleMenu}>☰</button> */}
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
        // data-aos="flip-down"
//         <div className=" bg-yellow-400 w-full dark:bg-gray-800 overflow-x-hidden max-w-screen-xl mx-auto " >
            
//            <nav className="flex font-sans ">
 
     
//                    <img src={logo} className='w-20  object-contain'></img>

             
//  <div className="">
                       
//                    <button className=" transition duration-100 delay-1000 lg:hidden" onClick={change} ref={toggleMenu} >
//                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-0.5 dark:text-white " >
//   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
// </svg>
//   </button>
  
//   <button className=" fixed ">
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 dark:text-white  xl:w-6 h-6" onClick={handleThemeSwitch}>
//   <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
// </svg></button>
 
// </div>
//                <div className="">
                  
//                    <ul className="gap-7 opacity-0 lg:opacity-100 flex  dark:text-white font-semibold cursor-pointer xl:text-xl">
//                        <li className="hover:text-sky-500"><Link to="/Archistructure">Home</Link></li>
//              <li className ="hover:text-sky-500"><Link to="/about">About</Link></li>
//               <li className ="hover:text-sky-500 "><Link to="/newproject">New Project</Link></li>
//                   <li className ="hover:text-sky-500"><Link to="/works">Works</Link></li>
//                  <li className ="hover:text-sky-500"><Link to="/contact">Contact us</Link></li>
                     
//                    </ul>
//                </div>
//                </nav>
//                {isMenuOpen ? (
//                    <div className=" relative h-screen ">
//                        <div className="">
                   
//    <button className="">
//    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  dark:text-white " onClick={cross}>
//   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
// </svg>


//    </button>
  
  
//    </div> 
//                     <ul className="grid grid-row-4  dark:text-white"
//                     data-aos="fade-left"
//                     >
//                        <li className="text-lg font-semibold mb-4 hover:text-sky-500"><Link to="/">Home</Link></li>  
//                     <li className="text-lg font-semibold mb-4 hover:text-sky-500"><Link to="/about">About</Link></li>
//                     <li className="text-lg font-semibold mb-4 hover:text-sky-500 "><Link to="/newproject">New Project</Link></li>
//                     <li className="text-lg font-semibold mb-4 hover:text-sky-500 "><Link to="/works">Works</Link></li>
//                     <li className="text-lg font-semibold hover:text-sky-500"><Link to="/contact">Contact us</Link></li>
                  
//                 </ul></div>
//                ):null}
              
//         </div>
    );
};

export default Navbar;