import React from 'react';
import facebook from "../Assets/facebook-app-round-white-icon.svg";
import instra from "../Assets/instagram-white-icon.svg";
import linkedin from "../Assets/linkedin-app-white-icon.svg"
import copyright from "../Assets/copy.png"
const Footer = () => {
    return (
        <div className=" -mt-5">
            <div className="w-[300px] pt-7  bg-black dark:bg-black sm:w-[500px] sm:pl-5 md:w-[700px] lg:w-[1000px] xl:w-[1500px] lg:pb-16 xxl:w-[1800px] xxl:pl-7">
                <div className="pl-2">
                    <h3 className="text-xl tracking-wide text-white font-semibold lg:text-2xl md:mb-5 xl:text-3xl">Skidmore,Owings&Merrill</h3>
                    <ul className="mt-2 gap-2 text-sm font-semibold text-gray-600 sm:text-sm md:flex md:gap-7 lg:text-base lg:mt-5 xl:text-xl">
                        <li className=" hover:underline hover:underline-offset-4 hover:transition-all hover:delay-700 hover:duration-700 mb-2"><a href="#" >Carrers</a></li>
                        <li className="hover:underline hover:underline-offset-4 hover:transition-all hover:delay-700 hover:duration-700 mb-2"><a href="">Press</a></li>
                        <li className="hover:underline hover:underline-offset-4 hover:transition-all hover:delay-700 hover:duration-700 mb-2"><a href="">Human Rights Policy</a></li>
                        <li className="hover:underline hover:underline-offset-4 hover:transition-all hover:delay-700 hover:duration-700 mb-2"><a href="">Privacy and Learnt Terms</a></li>
                        <li className="hover:underline hover:underline-offset-4 hover:transition-all hover:delay-700 hover:duration-700 mb-2"><a href="">Employment Policy</a></li>
                    </ul>
                </div>
                <div className="sm:ml-20 md:ml-44 lg:ml-[300px] lg:mt-7 xl:ml-[980px] xl:-mt-20">
                <div className="pl-28 gap-4 mt-5 flex">
                   <img src={facebook} className="w-5 h-5 xl:w-7 xl:h-7"></img>
                   <img src={instra} className="w-5 h-5 xl:w-7 xl:h-7"></img>
                   <img src={linkedin} className="w-5 h-5 xl:w-7 xl:h-7"></img>
                    
                </div>
                <div className="mt-3 ml-7 flex text-sm lg:text-xl">
                    <span className="text-white  underline mr-7">Credit:Code and Theory</span>
                    <img src={copyright} className="w-3 h-3 mt-1.5 lg:w-4 lg:h-4 lg:mt-2"></img>
                    <p className="text-white mt-0.5">2024</p>
                </div></div>
            </div>
        </div>
    );
};

export default Footer;