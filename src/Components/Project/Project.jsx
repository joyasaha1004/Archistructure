import React from 'react';
import "./Project.css"

const Project = () => {
    return (
        <div>
         <div className=" dark:bg-gray-800 overflow-x-hidden w-full max-w-screen-xl mx-auto pt-20 ">
             <div className="bg-gray-100 drop-shadow-lg mx-4 font-semibold sm:grid grid-cols-2 md:grid-cols-4 justify-items-center py-6 mb-20 rounded-md md:mx-2 lg:mx-4">
                 <div className=" info">
                     <p className="">800</p>
                     <span className="">Finishing Project</span>
                 </div>
                 <div className=" info">
                     <p  className="">795</p>
                     <span className="">Happy Customers</span>
                 </div>
                 <div className=" info">
                     <p className="">1,200</p>
                     <span className=""> Working Hours</span>
                 </div>
                 <div className=" info">
                     <p className="">850</p>
                     <span className="">Cups Of Coffee</span>
                 </div>
             </div>
             </div>   
        </div>
    );
};

export default Project;