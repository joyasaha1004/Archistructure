import React from 'react';
import build5 from "../Assets/build5.jpg";
import planning from "../Assets/planning.jpg";
import draw from "../Assets/draw.jpg";
import build from "../Assets/build4.jpg";

const Architecture = () => {
    return (
        <div className="">
          <div className=" w-[300px] pb-12 sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px]
         dark:bg-gray-800">
              <div>
                   <img src={build5} className="h-[200px] w-[300px] sm:w-[500px] sm:h-[250px] md:w-[700px] md:h-[300px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px] lg:h-[400px] xl:h-[550px] xxl:h-[620px] xxl:w-[1800px]"></img>
                   <div className="-mt-28 ml-9 relative text-white flex font-semibold xl:w-[1499px] text-lg gap-2 sm:ml-28 sm:-mt-36 md:ml-48 sm:text-xl md:-mt-40 xl:text-5xl md:text-2xl lg:text-4xl lg:ml-72 lg:-mt-56 xl:ml-[400px] xl:-mt-72 xxl:-mt-[350px] xxl:ml-[430px] xxl:text-6xl" 
          data-aos="zoom-out"
           
            >
                <div className="bg-white rounded-full w-[7px] h-[7px] mt-3
                sm:w-[8px] sm:h-[8px] sm:mt-2.5 md:w-[10px] md:h-[10px] md:mt-3 lg:mt-4 lg:w-[12px] lg:h-[12px] xl:w-[15px] xl:h-[15px] xl:mt-5 xxl:w-[18px] xxl:h-[18px] xxl:mt-7"></div>
                   <span className="tracking-wide">Planning</span>
                   <div className="bg-white rounded-full w-[7px] h-[7px] mt-3
                sm:w-[8px] sm:h-[8px] sm:mt-2.5 md:w-[10px] md:h-[10px] md:mt-3 lg:mt-4 lg:w-[12px] lg:h-[12px] xl:w-[15px] xl:h-[15px] xl:mt-5 xxl:w-[18px] xxl:h-[18px] xxl:mt-7"></div>
                   <span className="tracking-wide">Draw</span>
                   <div className="bg-white rounded-full w-[7px] h-[7px] mt-3
                sm:w-[8px] sm:h-[8px] sm:mt-2.5 md:w-[10px] md:h-[10px] md:mt-3 lg:mt-4 lg:w-[12px] lg:h-[12px] xl:w-[15px] xl:h-[15px] xl:mt-5 xxl:w-[18px] xxl:h-[18px] xxl:mt-7"></div>
                   <span className="tracking-wide">Build</span>   
           </div>
              </div>
              
              

              <div className="mt-24 sm:mt-[115px] sm:pt-3 px-4 sm:px-0 relative  md:mt-[128px]  lg:mt-[183px] xl:w-[1500px] xl:mt-[240px] xxl:mt-[288px]">
                  <div className="mb-5 sm:flex sm:mb-3 sm:ralative ">
                      <img src={planning} className="sm:w-[251px] sm:-mt-3 sm:h-52 md:w-[349px] lg:w-[900px] lg:h-72 xl:w-[1600px] xl:h-96" 
                      data-aos="fade-right"
                      data-aos-delay="1000"
                      data-aos-duration="1000"
                      ></img>
                      <div className="mt-2 dark:text-white sm:px-4 xl:ml-10 lg:mt-5 xl:mt-7">
                      <span className="text-lg font-semibold text-orange-300 lg:text-2xl mb-2 xl:text-3xl"
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay="800"
                      >Planning</span>
                      <p className="text-xs leading-normal lg:text-base lg:mt-3 xl:text-xl"
                       data-aos="fade-up"
                       data-aos-duration="700"
                       data-aos-delay="900"
                      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptate praesentium quod eaque voluptatibus quae beatae doloribus necessitatibus nisi commodi.</p>
                  </div></div>
                  <div className="mb-5 sm:flex sm:relative ">
                 <img src={draw} className="sm:w-[248px] sm:-mt-3 sm:h-52  sm:absolute sm:right-0 md:w-[350px] lg:w-[505px] lg:h-72 xl:w-[747px] xl:h-96 xxl:right-0"
                   data-aos="fade-left"
                   data-aos-delay="1200"
                   data-aos-duration="1000"
                  ></img>   
                      <div className="mt-2 dark:text-white sm:px-4 sm:w-[260px] md:w-[350px] lg:w-[470px] xl:ml-10 xl:w-[580px] lg:mt-5 xl:mt-7">
                      <span className="text-lg font-semibold text-orange-300 lg:text-2xl xl:text-3xl"
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay="900"
                      >Draw</span>
                      <p className="text-xs leading-normal lg:text-base lg:mt-3 xl:text-xl"
                       data-aos="fade-up"
                       data-aos-duration="700"
                       data-aos-delay="1000"
                      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptate praesentium quod eaque voluptatibus quae beatae doloribus necessitatibus nisi commodi.</p>
                  </div> 
                  </div>
                  <div className="mb-5 sm:flex sm:mt-[82px] md:mt-[118px] lg:mt-[152px] xl:mt-[225px] xxl:mt-[225px]">
                  <img src={build} className="sm:w-[252px] sm:-mt-3 sm:h-52 md:w-[350px] lg:w-[495px] lg:h-72 xl:w-[1592px] xl:h-96"
                   data-aos="fade-right"
                   data-aos-delay="1400"
                   data-aos-duration="1000"
                  ></img>
                      <div className="mt-2 dark:text-white sm:px-4 xl:ml-10 lg:mt-5 xl:mt-7">
                      <span className="text-lg font-semibold text-orange-300 lg:text-2xl xl:text-3xl"
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay="1000"
                      >Build</span>
                      <p className="text-xs leading-normal lg:text-base lg:mt-3 xl:text-xl"
                       data-aos="fade-up"
                       data-aos-duration="700"
                       data-aos-delay="1100"
                      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptate praesentium quod eaque voluptatibus quae beatae doloribus necessitatibus nisi commodi.</p>
                  </div>  </div>
              </div>
         </div> </div>
    );
};

export default Architecture;