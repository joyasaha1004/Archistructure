import React from 'react';
import "./Architecture.css";
import build5 from "../Assets/build5.jpg";
import planning from "../Assets/planning.jpg";
import draw from "../Assets/draw.jpg";
import build from "../Assets/build4.jpg";

const Architecture = () => {
    return (
        <div className="overflow-hidden relative max-w-screen-xl mx-auto w-full pb-8">
          


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