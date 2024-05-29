import React from 'react';
import build3 from "../Assets/build3.jpg";
import office1 from "../Assets/office1.jpg";
import build1 from "../Assets/build1.png"

const Guide = () => {
    return (
        <div>
            <div className="w-[300px] dark:bg-gray-800 -mt-24 pt-16 pb-16 sm:w-[500px] md:w-[700px] md:-mt-24 md:pt-20 lg:w-[1000px] xl:w-[1500px]
            xxl:w-[1800px]">
                <div className="text-center w-[250px] ml-5 mb-2 sm:w-[400px] sm:ml-12 md:ml-40 md:mb-5 lg:ml-64 lg:w-[500px] xl:ml-[450px] xl:mb-12 xxl:ml-[500px]"
                
               
                >
                    <h2 className="font-serif font-semibold dark:text-white lg:text-2xl lg:tracking-widest xl:text-3xl" data-aos="fade-up" data-aos-duration="800">LET US GUIDE YOU</h2>
                    <span className="text-xs text-gray-600 lg:text-base xl:text-lg"data-aos="fade-up"
      data-aos-duration="800"  data-aos-delay="400" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur, corporis hic cum obcaecati commodi.

                    </span>
                </div>
                <div className=" sm:ml-32 md:flex md:flex-wrap gap-7 md:ml-20 xxl:ml-40">
                    <div className="relative overflow-visible">
                    <img src={build3} className="h-80 sm:w-60 xl:w-96 xl:h-[450px] hover:brightness-50"
                    data-aos="fade-up" data-aos-duration="700"
                    data-aos-delay="400"
                    ></img>
                    <span className="ml-28 -mt-20 relative -top-44 text-white font-semibold text-xl sm:ml-20 xl:-top-56 xl:ml-32 xl:text-3xl tracking-widest" 
                     data-aos="fade-down"
                   
                    >AMERICA</span>
                    </div>
                    <div>
                    <img src={office1} className="h-80 sm:w-60 xl:w-96 xl:h-[450px] hover:brightness-50"
                    data-aos="fade-up"
                     data-aos-duration="700"
                    data-aos-delay="600"
                    
                    ></img>
                    <span className="ml-32 -mt-20 relative -top-44 text-white font-semibold text-xl sm:ml-24 xl:-top-56 xl:ml-40 xl:text-3xl tracking-widest"
                     data-aos="fade-down"
                    
                    
                    >SPAN</span>
                    </div>
                    <div>
                    <img src={build1} className="h-80 sm:w-60 xl:w-96 xl:h-[450px] hover:brightness-50"
                    data-aos="fade-up" data-aos-duration="700"
                    data-aos-delay="800"
                    
                    ></img>
                  <span className="ml-32 -mt-20 relative -top-44 text-white font-semibold text-xl sm:ml-24 xl:-top-56 xl:ml-40 xl:text-3xl tracking-widest"
                   data-aos="fade-down"
                  
                  >INDIA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;