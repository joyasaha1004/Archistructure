import React from 'react';
import kitchen1 from "../Assets/kitchen1.jpg";
import window1 from "../Assets/window.jpg";

const Interior = () => {
    return (
        <div className="dark:bg-gray-800 overflow-x-hidden max-w-screen-xl mx-auto   xl:px-6">
        <div className="dark:bg-gray-800 flex flex-col-reverse sm:dark:border pb-10 pt-20 lg:grid grid-cols-3 bg-gray-200 px-2 md:px-2 ">
            
            <div className=" pt-7 pl-2 sm:px-4 lg:col-span-2">
                <h3 className="text-xl sm:text-2xl font-bold dark:text-white lg:text-3xl xxl:leading-tight ">Interiors Are Here For You</h3>
                <p className="text-sm text-gray-600 mt-2 lg:text-lg  lg:mt-4 leading-loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quis esse eum et! Blanditiis aliquam ullam, sapiente ducimus ut fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in sapiente neque, perferendis tempora reprehenderit ipsa nam? Et, repellat iste!
                </p>
                <button className="bg-orange-300 hover:bg-orange-400 text-white text-sm p-2 mt-4 lg:text-base xl:mt-5">Information</button>
            </div>
            
            <div className="flex  gap-2 self-center sm:pb-4 lg:gap-4">
                <img src={window1} className="w-24 h-52 md:h-60 lg:w-[12vw] lg:h-72 xl:w-[8em]"></img>
                <img src={kitchen1} className="w-24 h-64 -mt-7 md:h-72 lg:w-[12vw] lg:h-[22em] xl:w-[8em]"></img>
            </div>
        </div></div>
    );
};

export default Interior;