import React from 'react';
import kitchen1 from "../Assets/kitchen1.jpg";
import window1 from "../Assets/window.jpg";

const Interior = () => {
    return (
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px] dark:bg-gray-800 -mt-56 ">
        <div className="mt-52 pt-16 sm:w-[450px] md:w-[650px] lg:w-[940px] sm:ml-7  sm:pl-5  md:flex md:gap-10  lg:pl-24  xl:pl-32 xl:pt-32 bg-gray-200 xl:gap-16  xxl:mt-52 xxl:ml-24 xxl:pl-28 dark:bg-gray-800 xl:w-[1300px] xxl:w-[1350px] pb-5 sm:dark:border pb-20">
            <div className="flex pl-10 gap-2 sm:ml-12 md:mt-5 md:-ml-5 xl:gap-4">
                <img src={window1} className="w-24 h-52 lg:w-32 lg:h-72 xl:w-36 xl:h-96"></img>
                <img src={kitchen1} className="w-28 h-64 -mt-7 lg:w-44 lg:h-80 xl:h-[450px]"></img>
            </div>
            <div className=" pt-5 pl-2">
                <h3 className="text-xl font-bold w-[230px] md:text-2xl md:w-[300px] lg:text-3xl lg:w-[330px] xl:text-5xl xl:w-[450px]
                dark:text-white xxl:leading-tight ">Interiors Are Here For You</h3>
                <p className="text-sm text-gray-600 mt-2 sm:w-[400px] lg:text-base xl:text-xl xl:w-[700px] md:w-[350px] lg:w-[450px] xl:leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quis esse eum et! Blanditiis aliquam ullam, sapiente ducimus ut fugit?</p>
                <button className="bg-orange-300 hover:bg-orange-400 text-white text-sm p-2 mt-4 lg:text-base xl:text-xl xl:p-4 xl:mt-5">Information</button>
            </div>
        </div></div>
    );
};

export default Interior;