import React from 'react';
import "./Guide.css";
import build3 from "../Assets/build3.jpg";
import office1 from "../Assets/office1.jpg";
import build1 from "../Assets/build1.png"

const Guide = () => {
    return (
        <div>
            <div className="dark:bg-gray-800 overflow-hidden max-w-screen-xl mx-auto relative">
                <div className="text-center px-2 pb-4 sm:px-4 md:pb-6 lg:pb-8 lg:pt-6">
                
               
               
                    <h2 className="font-serif font-semibold dark:text-white mb-2 text-lg md:mb-1 lg:tracking-widest lg:text-2xl" data-aos="fade-up" data-aos-duration="800">LET US GUIDE YOU</h2>
                    <span className="text-xs text-gray-600 lg:text-base mx-6 "data-aos="fade-up"
      data-aos-duration="800"  data-aos-delay="400" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur, corporis hic cum obcaecati commodi.

                    </span>
                </div>
                <div className=" md:grid grid-cols-2 gap-7 sm:px-2 lg:grid-cols-3">
                    <div className="relative overflow-visible project">
                    <img src={build3} className=""
                    data-aos="fade-up" data-aos-duration="700"
                    data-aos-delay="400"
                    ></img>
                    <span className="" 
                     data-aos="fade-down"
                   
                    >AMERICA</span>
                    </div>
                    <div className="relative project">
                    <img src={office1} className=""
                    data-aos="fade-up"
                     data-aos-duration="700"
                    data-aos-delay="600"
                    
                    ></img>
                    <span className=""
                     data-aos="fade-down"
                    
                    
                    >SPAN</span>
                    </div>
                    <div className='relative project justify-content-center'>
                    <img src={build1} className=""
                    data-aos="fade-up" data-aos-duration="700"
                    data-aos-delay="800"
                    
                    ></img>
                  <span className=""
                   data-aos="fade-down"
                  
                  >INDIA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;