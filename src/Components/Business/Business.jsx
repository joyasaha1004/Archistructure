import React from 'react';
import kitchen from "../Assets/kitchen.jpg";
import sofa from "../Assets/sofa.jpg";

const Business = () => {
    return (
        <div className="dark:bg-gray-800 overflow-x-hidden max-w-screen-xl mx-auto pt-10 pb-20 ">

             <span className="text-orange-300 font-semibold  lg:text-xl px-3 lg:px-5 lg:tracking-widest">WELCOME</span>
            <div className="grid px-3 pb-6 lg:flex sm:pb-8 md:pb-10 lg:gap-9 lg:px-5">
               
                <div className="mb-2 ">
                
                <h3 className="text-2xl font-bold dark:text-white md:text-2xl md:mt-2  leading-relaxed lg:leading-normal lg:text-3xl ">One Of The Fastest Way To Business Gain Success</h3>
                </div>
                <div className="lg:self-center ">
                    <p className="text-gray-600 text-sm lg:text-base xl:text-xl  leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat praesentium ullam repellat exercitationem quisquam similique voluptas temporibus pariatur dolorem.</p>
                    <button className="bg-orange-300 text-white p-2 text-sm mt-3 hover:bg-orange-400 xl:mt-5">More About</button>
           </div> </div>
           <div className="px-4 md:grid grid-cols-3 md:gap-8 justify-items-center md:px-6">
               <img src={kitchen} className="mb-4 md:h-72 object-cover lg:w-screen lg:h-96"></img>
               <img src={sofa} className="md:h-72 md:col-span-2 lg:h-96 w-screen"></img>
           </div>
        </div>
    );
};

export default Business;