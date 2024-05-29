import React from 'react';
import build6 from "../Assets/build6.jpg";
import oasis from "../Assets/oasis.jpg";
import mm from "../Assets/mm.jpg";
import restaurant from "../Assets/restaurant.jpg";
import stewart from "../Assets/stewart.jpg";
import common from "../Assets/common.jpg";
import gravity from "../Assets/gravity.jpg";
import horizon from "../Assets/horizon.jpg";
import kindergarten from "../Assets/kindergarten.jpg";
import botijo from "../Assets/botijo.jpg";
import brise from "../Assets/brise.jpg";
import library from "../Assets/library.jpg";
import rvtk from "../Assets/rvtk.jpg";
import villa from "../Assets/vila.jpg";
import gallery from "../Assets/gallery.jpg";
import abey from "../Assets/abey.jpg";
import billy from "../Assets/billy.jpg";
import wa from "../Assets/wa.jpg";
import pergas from "../Assets/pergas.jpg";

const New_Project = () => {
    return (
        <div className="w-[300px] sm:w-[500px] pb-16 md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px] dark:bg-gray-800">
            <div>
                <div className="">
                    <img src={build6} className="brightness-75 sm:h-[250px] sm:w-[500px] md:w-[700px] lg:w-[1000px] lg:h-[400px] md:h-[300px] xl:w-[1500px] xl:h-[550px] xxl:w-[1800px] xxl:h-[620px]"></img>
                    <div className="text-center ml-16 -mt-32 absolute font-semibold text-white sm:ml-40 sm:-mt-40 md:ml-64 md:-mt-44 lg:ml-[380px] lg:-mt-60 xl:ml-[450px] xl:-mt-80 xxl:-mt-[360px] xxl:ml-[550px]"
                    data-aos="zoom-out"
                    >
                    <span className=" z-10 text-lg tracking-wide sm:text-2xl  md:text-3xl lg:text-4xl lg:tracking-wider  xl:text-5xl xxl:text-6xl ">New Project</span>
                    <p className="text-xs text-orange-300 tracking-wide md:tracking-wider md:mt-1 lg:text-base xl:text-2xl lg:mt-2">We Want To Part Of Your Dream</p>
               </div> </div>
            </div>

            <div className="">
            <div className="grid grid-rows-3 grid-flow-col gap-2 md:grid-cols-3 font-semibold md:gap-3 xl:gap-2 xxl:gap-2">
                <div className="row-span-3 md:col-span-2">
                    <img src={oasis} className="w-52 h-[270px] sm:h-[425px] md:w-[450px] md:h-[353px] lg:w-[650px] lg:h-[491px] xl:w-[750px] xl:h-[838px] mb-2 xxl:w-[900px] xxl:h-[957px] xxl:mb-4"></img>
                    <span className="text-sm text-gray-600 lg:text-lg xl:text-2xl xxl:text-3xl ml-2">HOUSES</span>
                    <p className=" ml-2 text-sm lg:text-lg xl:text-2xl xxl:text-3xl xl:mt-1 dark:text-white">Oasis House / Unknown Works</p>

                </div>
                <div className="col-span-1 md:row-span-1 xl:-ml-52 xl:mr-28 xxl:-ml-64 xxl:mr-44">
                    <img src={restaurant} className="mb-2 xxl:mb-4 "></img>
                    <span className="text-sm text-gray-600 lg:text-lg xl:text-2xl xxl:text-3xl">RESTAURANT</span>
                    <p className="text-sm lg:text-lg xl:text-2xl xxl:text-3xl xl:mt-1 dark:text-white" >LANTERN / OMA</p>
                </div>
               <div className="row-span-2 col-span-1 md:row-span-2 xl:-ml-52 xl:mr-28 xxl:-ml-64 xxl:mr-44">
                   <img src={mm} className="mb-2 xxl:mb-4 "></img>
                   <span className="text-sm text-gray-600 lg:text-lg xl:text-2xl xxl:text-3xl">HOUSES</span>
                   <p className="text-sm lg:text-lg xl:text-2xl xxl:text-3xl xl:mt-1 dark:text-white">MM House/Benjamin Goni Arquitect</p>
               </div>
            </div>


           </div>

           <div>
           <div className="mx-2 font-semibold sm:flex sm:flex-wrap sm:gap-3 -mt-20 sm:-mt-40 md:ml-10 lg:-mt-52 md:-mt-32 xl:grid xl:grid-cols-3 xxl:mr-60 xxl:mx-3 xl:mr-28 xl:ml-3 xl:-mt-96">
               <div className="mb-4">
                   <img src={stewart} className="h-52 w-[287px] sm:w-[235px] md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                   data-aos="zoom-out" ></img>
                   <span className="text-sm text-gray-600 xl:text-xl ">HOUSES</span>
                   <p className="text-sm xl:text-xl dark:text-white">Stewart House/SSdH</p>
               </div>
               <div className="mb-4">
                   <img src={common} className="h-52 w-[287px] sm:w-[235px] md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                  data-aos="zoom-out" ></img>
                   <span className="text-sm text-gray-600 xl:text-xl">COWORK INTERIORS</span>

                   <p className="text-sm xl:text-xl dark:text-white">Common Knowledge Studio</p>
               </div>
               <div className="mb-4">
                   <img src={gravity} className="h-52 w-[287px] sm:w-[235px]  md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                  data-aos="zoom-out" ></img>
                   <span className="text-sm text-gray-600 xl:text-xl">OFFICES INTERIORS</span>
                   <p className="text-sm xl:text-xl dark:text-white">HAKUHODO Gravity Office/DDA</p>
               </div>
               <div className="mb-4">
                   <img src={horizon} className="h-52 w-[287px] sm:w-[235px] md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                  data-aos="zoom-out" ></img>
                   <span className="text-sm text-gray-600 xl:text-xl">HOUSES</span>
                   <p className="text-sm xl:text-xl dark:text-white">Horizon House/Taylor Knights</p>
               </div>

               <div className="mb-4">
                   <img src={kindergarten} className="h-52 w-[287px] sm:w-[235px] md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                data-aos="zoom-out"   ></img>
                   <span className="text-sm text-gray-600 xl:text-xl">KINDERGARTEN</span>
                   <p className="text-sm xl:text-xl dark:text-white">Kindergarten/office aaa</p>
               </div>
               <div>
                   <img src={botijo} className="h-52 w-[287px] sm:w-[235px] md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                  data-aos="zoom-out" ></img>
                   <span className="text-sm text-gray-600 xl:text-xl ">SUSTAINABILITY</span>
                   <p className="text-sm xl:text-xl dark:text-white ">Botijo House/ALE Estudio</p>
               </div> 
           </div>
           </div>


           <div className="mt-10">
            <div className="grid grid-rows-3 grid-flow-col gap-2 md:grid-cols-3 font-semibold md:gap-3 xl:gap-2 xxl:gap-2">
                <div className="row-span-3 md:col-span-2">
                    <img src={brise} className="w-52 h-[270px] sm:h-[447px] md:w-[450px] md:h-[370px] lg:w-[650px] lg:h-[517px] xl:w-[750px] xl:h-[833px] mb-2 xxl:w-[900px] xxl:h-[957px] xxl:mb-4"></img>
                    <span className="text-sm text-gray-600 lg:text-lg xl:text-2xl xxl:text-3xl ml-2">HOUSES</span>
                    <p className=" ml-2 text-sm lg:text-lg xl:text-2xl xxl:text-3xl xl:mt-1 dark:text-white">Oasis House / Unknown Works</p>

                </div>
                <div className="col-span-1 md:row-span-1 xl:-ml-52 xl:mr-28 xxl:-ml-64 xxl:mr-44">
                    <img src={library} className="mb-2 xxl:mb-4 xl:w-[610px] xl:h-[350px] xxl:h-[400px]"></img>
                    <span className="text-sm text-gray-600 lg:text-lg xl:text-2xl xxl:text-3xl">LIBRARY</span>
                    <p className="text-sm lg:text-lg xl:text-2xl xxl:text-3xl xl:mt-1 dark:text-white" >LANTERN / OMA</p>
                </div>
               <div className="row-span-2 col-span-1 md:row-span-2 xl:-ml-52 xl:mr-28 xxl:-ml-64 xxl:mr-44">
                   <img src={rvtk} className="mb-2 xxl:mb-4 xl:w-[610px] xl:h-[400px] xxl:h-[453px]"></img>
                   <span className="text-sm text-gray-600 lg:text-lg xl:text-2xl xxl:text-3xl">APARTMENTS</span>
                   <p className="text-sm lg:text-lg xl:text-2xl xxl:text-3xl xl:mt-1 dark:text-white">MM House/Benjamin Goni Arquitect</p>
               </div>
            </div>


           </div>


           <div>
           <div className="mx-2 font-semibold sm:flex sm:flex-wrap sm:gap-3 -mt-20 sm:-mt-28 md:ml-10 md:-mt-20 lg:-mt-32 xl:grid xl:-mt-80 
           xl:grid-cols-3 xxl:mr-60 xxl:mx-3 xl:mr-28 xl:ml-3">
               <div className="mb-4">
                   <img src={villa} className="h-52 w-[287px] sm:w-[235px] md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                   data-aos="zoom-out" ></img>
                   <span className="text-sm text-gray-600 xl:text-xl ">HOUSES</span>
                   <p className="text-sm xl:text-xl dark:text-white">Stewart House/SSdH</p>
               </div>
               <div className="mb-4">
                   <img src={gallery} className="h-52 w-[287px] sm:w-[235px] md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                  data-aos="zoom-out" ></img>
                   <span className="text-sm text-gray-600 xl:text-xl">COWORK INTERIORS</span>

                   <p className="text-sm xl:text-xl dark:text-white">Common Knowledge Studio</p>
               </div>
               <div className="mb-4">
                   <img src={abey} className="h-52 w-[287px] sm:w-[235px]  md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                  data-aos="zoom-out" ></img>
                   <span className="text-sm text-gray-600 xl:text-xl">OFFICES INTERIORS</span>
                   <p className="text-sm xl:text-xl dark:text-white">HAKUHODO Gravity Office/DDA</p>
               </div>
               <div className="mb-4">
                   <img src={billy} className="h-52 w-[287px] sm:w-[235px] md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                  data-aos="zoom-out" ></img>
                   <span className="text-sm text-gray-600 xl:text-xl">HOUSES</span>
                   <p className="text-sm xl:text-xl dark:text-white">Horizon House/Taylor Knights</p>
               </div>

               <div className="mb-4">
                   <img src={wa} className="h-52 w-[287px] sm:w-[235px] md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                data-aos="zoom-out"   ></img>
                   <span className="text-sm text-gray-600 xl:text-xl">KINDERGARTEN</span>
                   <p className="text-sm xl:text-xl dark:text-white">Kindergarten/office aaa</p>
               </div>
               <div>
                   <img src={pergas} className="h-52 w-[287px] sm:w-[235px] md:w-[300px] xl:w-[440px] xl:h-72 xxl:w-[500px] xl:mb-3"
                  data-aos="zoom-out" ></img>
                   <span className="text-sm text-gray-600 xl:text-xl ">SUSTAINABILITY</span>
                   <p className="text-sm xl:text-xl dark:text-white">Botijo House/ALE Estudio</p>
               </div> 
           </div>
           </div>

        </div>
    );
};

export default New_Project;