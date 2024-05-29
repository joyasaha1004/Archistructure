import React from 'react';
import video from "../Assets/video.mp4";

const Hero = () => {
    return (
        <div className="w-[300px]  relative sm:w-[500px] md:w-[700px] lg:w-[1000px]  xl:w-[1500px] xxl:w-[1800px] dark:bg-gray-800 mb-20">
            <div className="">
            <div className="relative xl:h-[30vw]">
            <video autoPlay loop muted src={video} className="brightness-50
             "></video></div>
            <div className="-mt-24 ml-9 relative text-white flex font-semibold xl:w-[1499px] text-lg gap-2 sm:ml-28 sm:-mt-40 md:ml-48 sm:text-xl md:-mt-56 xl:text-5xl md:text-2xl lg:text-4xl lg:ml-72 lg:-mt-80 xl:ml-[400px] xl:-mt-20 xxl:-mt-[100px] xxl:ml-[430px] xxl:text-6xl" 
             data-aos="zoom-out"
           
            >
            
                <div className="bg-white rounded-full w-[7px] h-[7px] mt-3
                sm:w-[8px] sm:h-[8px] sm:mt-2.5 md:w-[10px] md:h-[10px] md:mt-3 lg:mt-4 lg:w-[12px] lg:h-[12px] xl:w-[15px] xl:h-[15px] xl:mt-5 xxl:w-[18px] xxl:h-[18px] xxl:mt-7"></div>
                   <span className="tracking-wide">Planning</span>
                   <div className="bg-white rounded-full w-[7px] h-[7px] mt-3
                sm:w-[8px] sm:h-[8px] sm:mt-2.5 md:w-[10px] md:h-[10px] md:mt-3 xl:w-[15px] xl:h-[15px] xl:mt-5 lg:mt-4 lg:w-[12px] lg:h-[12px] xxl:w-[18px] xxl:h-[18px] xxl:mt-7
                md:w-3 h-3 sm:w-2 sm:h-2 sm:mt-2.5 "></div>
                   <span className="tracking-wide">Draw</span>
                   <div className="bg-white rounded-full w-[7px] h-[7px] mt-3
                sm:w-[8px] sm:h-[8px] sm:mt-2.5 md:w-[10px] md:h-[10px] md:mt-3 xl:w-[15px] xl:h-[15px] xl:mt-5 lg:mt-4 lg:w-[12px] lg:h-[12px] xxl:w-[18px] xxl:h-[18px] xxl:mt-7
                md:w-3 h-3 sm:w-2 sm:h-2 sm:mt-2.5 "></div>
                   <span className="tracking-wide">Build</span>   
           </div></div>

          
        </div>
    );
};

export default Hero;