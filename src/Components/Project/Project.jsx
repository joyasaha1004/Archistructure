import React from 'react';

const Project = () => {
    return (
        <div>
         <div className="pt-40 w-[300px] -mt-10 sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px] dark:bg-gray-800 ">
             <div className="flex w-[270px] bg-gray-100 drop-shadow-lg h-[110px] sm:w-[450px] sm:ml-5 sm:gap-4 sm:pl-5 text-center ml-3 pt-3 font-semibold sm:h-[80px] md:w-[550px] md:ml-20 md:gap-7 lg:w-[700px] lg:ml-40 lg:h-[100px] lg:gap-9 xl:w-[1000px] xl:h-[150px] xl:pt-4 xl:gap-10 xxl:w-[1250px] xxl:h-[200px] xxl:pt-10 xxl:gap-16 xxl:pl-16 mb-20 rounded-md">
                 <div className="xl:ml-10">
                     <p className="text-orange-300 sm:text-lg lg:text-xl xl:text-3xl xl:mb-2 xxl:text-4xl">800</p>
                     <span className="text-xs md:text-sm lg:text-lg xl:text-2xl xxl:text-3xl">Finishing Project</span>
                 </div>
                 <div>
                     <p  className="text-orange-300 sm:text-lg lg:text-xl xl:text-3xl xl:mb-2 xxl:text-4xl">795</p>
                     <span className="text-xs md:text-sm lg:text-lg xl:text-2xl xxl:text-3xl">Happy Customers</span>
                 </div>
                 <div>
                     <p className="text-orange-300 sm:text-lg lg:text-xl xl:text-3xl xl:mb-2 xxl:text-4xl">1,200</p>
                     <span className="text-xs md:text-sm lg:text-lg xl:text-2xl xxl:text-3xl"> Working Hours</span>
                 </div>
                 <div>
                     <p className="text-orange-300 sm:text-lg lg:text-xl xl:text-3xl xl:mb-2 xxl:text-4xl">850</p>
                     <span className="text-xs md:text-sm lg:text-lg xl:text-2xl xxl:text-3xl">Cups Of Coffee</span>
                 </div>
             </div>
             </div>   
        </div>
    );
};

export default Project;