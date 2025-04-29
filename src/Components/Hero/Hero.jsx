import React from 'react';
import "./Hero.css"
import video from "../Assets/video.mp4";



const Hero = () => {
    return (
        <div className="overflow-x-hidden max-w-screen-xl mx-auto">
            <div className="relative w-full h-fit overflow-hidden">

            <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-50"
  >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
           
           <div className='justify-self-center center-text items-center mt-40 mb-44 gap-2 flex text-white'>
  <div className="circle"></div>
                   <span className="">Planning</span>
                   <div className="circle"></div>
                   <span className="">Draw</span>
                   <div className="circle"></div>
                   <span className="">Build</span>   
   </div>
 
</div>
          
        </div>
    );
};

export default Hero;