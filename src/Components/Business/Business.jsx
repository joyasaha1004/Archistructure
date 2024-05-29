import React from 'react';
import kitchen from "../Assets/kitchen.jpg";
import sofa from "../Assets/sofa.jpg";

const Business = () => {
    return (
        <div className="w-[300px] pt-12 -mt-10 dark:bg-gray-800 sm:w-[500px] sm:pt-28 sm:pl-5 md:w-[700px] md:pt-52 md:pl-10 lg:w-[1000px] lg:pt-72 lg:pl-24 xl:w-[1500px] xl:pt-[520px] xxl:w-[1800px] xxl:pt-[610px] xl:pl-10 xxl:pl-16 pb-20 ">
            <div className="grid ml-2  md:flex xl:pl-10 xl:ml-7 xl:gap-5 xl:w-[1799px]">
                <div className="mb-4 w-[250px] sm:w-[300px] md:w-[250px] md:mr-5 lg:w-[300px] xl:w-[450px]">
                <span className="text-orange-300 font-semibold xl:text-xl lg:tracking-widest">WELCOME</span>
                <h3 className="text-2xl font-bold dark:text-white md:text-2xl lg:text-3xl xl:text-5xl xxl:leading-tight">One Of The Fastest Way To Business Gain Success</h3>
                </div>
                <div className=" md:w-[300px] lg:w-[400px] xl:w-[650px]">
                    <p className="text-gray-600 text-sm lg:text-base xl:text-xl xl:leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat praesentium ullam repellat exercitationem quisquam similique voluptas temporibus pariatur dolorem.</p>
                    <button className="bg-orange-300 text-white p-2 text-sm mt-3 hover:bg-orange-400 lg:text-base xl:text-2xl xl:p-4 xl:mt-5">More About</button>
           </div> </div>
           <div className="mt-5 sm:flex md:-ml-28 md:gap-8 lg:mt-10 lg:-ml-32 sm:-ml-40 xl:-ml-16 sm:gap-1 xxl:-ml-10">
               <img src={kitchen} className="w-48 h-60 ml-12 mb-3 sm:ml-40 sm:w-40 md:w-52 md:h-64 lg:w-60 lg:h-80 xl:w-[400px] xl:h-[500px]"></img>
               <img src={sofa} className="ml-5 w-64 md:w-80 sm:w-72 md:-mt-2 lg:w-[450px] lg:-mt-3 xl:w-[700px] sm:-mt-2"></img>
           </div>
        </div>
    );
};

export default Business;