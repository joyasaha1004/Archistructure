import React from 'react';
import video from "../Assets/video.mp4";

const Hero = () => {
    return (
        <div className="w-[300px]  relative sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:h-screen xl:w-[1500px]">
            <div className="">
            <div className="relative xl:h-[30vw]">
            <video autoPlay loop muted src={video} className="brightness-50  "></video></div>
            <div className="-mt-24 ml-9 relative text-white flex font-semibold text-lg gap-2 sm:ml-28 sm:-mt-40 md:ml-48 sm:text-2xl md:-mt-56 md:text-3xl lg:text-5xl lg:ml-64 lg:-mt-80 xl:-mt-20 xl:ml-[33vw]">
            
                <div className="bg-white rounded-full w-2 h-2 mt-2.5 md:mt-3.5 lg:mt-5 "></div>
                   <span className="tracking-wide">Planning</span>
                   <div className="bg-white rounded-full w-2 h-2 mt-2.5 md:mt-3.5 xl:mt-5"></div>
                   <span className="tracking-wide">Draw</span>
                   <div className="bg-white rounded-full w-2 h-2 mt-2.5 md:mt-3.5 xl:mt-5"></div>
                   <span className="tracking-wide">Build</span>   
           </div></div>
        </div>
    );
};

export default Hero;