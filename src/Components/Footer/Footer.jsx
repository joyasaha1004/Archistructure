import React from 'react';
import facebook from "../Assets/facebook-app-round-white-icon.svg";
import instra from "../Assets/instagram-white-icon.svg";
import linkedin from "../Assets/linkedin-app-white-icon.svg"
import copyright from "../Assets/copy.png"
const Footer = () => {
    return (
        <div className="dark:bg-gray-800 pt-5 overflow-x-hidden max-w-screen-xl mx-auto ">
            <div className=" bg-black  ">
                <div className="px-2 py-4 sm:px-4">
                    <h3 className="text-lg tracking-wide text-white font-semibold lg:text-2xl md:mb-5 ">Skidmore,Owings&Merrill</h3>
                    <ul className="mt-2 gap-3 footer text-sm font-semibold text-gray-600 sm:text-sm md:flex flex-wrap md:gap-7 lg:text-base lg:mt-5 xl:text-xl">
                        <li className=""><a href="#" >Carrers</a></li>
                        <li className=""><a href="">Press</a></li>
                        <li className=""><a href="">Human Rights Policy</a></li>
                        <li className=""><a href="">Privacy and Learnt Terms</a></li>
                        <li className=""><a href="">Employment Policy</a></li>
                    </ul>
                </div>
                <div className="">
                <div className="justify-center gap-4 mt-5 flex">
                   <img src={facebook} className="w-5 h-5 xl:w-7 xl:h-7"></img>
                   <img src={instra} className="w-5 h-5 xl:w-7 xl:h-7"></img>
                   <img src={linkedin} className="w-5 h-5 xl:w-7 xl:h-7"></img>
                    
                </div>
                <div className="justify-center mt-3 flex text-sm lg:text-xl">
                    <span className="text-white  underline mr-7">Credit:Code and Theory</span>
                    <img src={copyright} className="w-3 h-3 mt-1.5 lg:w-4 lg:h-4 lg:mt-2"></img>
                    <p className="text-white mt-0.5">2024</p>
                </div></div>
            </div>
        </div>
    );
};

export default Footer;