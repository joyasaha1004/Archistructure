import React from 'react';
import "./Architecture.css";
import build5 from "../Assets/build5.jpg";
import planning from "../Assets/planning.jpg";
import draw from "../Assets/draw.jpg";
import build from "../Assets/build4.jpg";

const Architecture = () => {
    return (
        <div className="overflow-hidden relative max-w-screen-xl mx-auto w-full pb-8">
          
{/*          
              <div className='bg-about-bg relative bg-cover bg-center h-fit'>


               <div className='justify-self-center center-text items-center mt-40 mb-44 gap-2 flex text-black'>
  <div className="circle"></div>
                   <span className="">Planning</span>
                   <div className="circle"></div>
                   <span className="">Draw</span>
                   <div className="circle"></div>
                   <span className="">Build</span>   
   </div> 
 </div> */}

     <div className='bg-hero-pattern bg-cover bg-center relative h-fit mb-10'
      style={{ backgroundImage: `url(${build5})` }}
     >
      <div className='justify-self-center center-text items-center pt-40 pb-44 gap-2 flex text-white'>
      <div className="circle"></div>
                   <span className="">Planning</span>
                   <div className="circle"></div>
                   <span className="">Draw</span>
                   <div className="circle"></div>
                   <span className="">Build</span> 
      </div>
     </div>
{/* </div> */}
                   {/* <img src={build5} className="h-[200px] w-[300px] sm:w-[500px] sm:h-[250px] md:w-[700px] md:h-[300px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px] lg:h-[400px] xl:h-[550px] xxl:h-[620px] xxl:w-[1800px]"></img>
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
           </div> */}
              
              
              

              <div className="relative px-2 lg:px-4">
                  <div className="mb-5 method ">
                      <img src={planning} className="" 
                      data-aos="fade-right"
                      data-aos-delay="1000"
                      data-aos-duration="1000"
                      ></img>
                      <div className=" dark:text-white basis-2/4">
                      <span className=""
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay="800"
                      >Planning</span>
                      <p className=""
                       data-aos="fade-up"
                       data-aos-duration="700"
                       data-aos-delay="900"
                      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptate praesentium quod eaque voluptatibus quae beatae doloribus necessitatibus nisi commodi.</p>
                  </div></div>
                  <div className="mb-5 method  ">
                 <img src={draw} className="lg:order-2"
                   data-aos="fade-left"
                   data-aos-delay="1200"
                   data-aos-duration="1000"
                  ></img>   
                      <div className=" dark:text-white lg:order-1">
                      <span className=""
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay="900"
                      >Draw</span>
                      <p className=""
                       data-aos="fade-up"
                       data-aos-duration="700"
                       data-aos-delay="1000"
                      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptate praesentium quod eaque voluptatibus quae beatae doloribus necessitatibus nisi commodi.</p>
                  </div> 
                  </div>
                  <div className="method">
                  <img src={build} className=""
                   data-aos="fade-right"
                   data-aos-delay="1400"
                   data-aos-duration="1000"
                  ></img>
                      <div className=" dark:text-white">
                      <span className=""
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay="1000"
                      >Build</span>
                      <p className=""
                       data-aos="fade-up"
                       data-aos-duration="700"
                       data-aos-delay="1100"
                      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptate praesentium quod eaque voluptatibus quae beatae doloribus necessitatibus nisi commodi.</p>
                  </div>  </div>
              </div> 
         </div>
    );
};

export default Architecture;