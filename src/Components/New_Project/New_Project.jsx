import React from 'react';
import "./New_Project.css";
import project_bg from "../Assets/build6.jpg";
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
        <div className=" pb-16 overflow-x-hidden relative max-w-screen-xl mx-auto dark:bg-gray-800">
            <div>
                <div className="bg-new-project bg-cover bg-center h-fit w-full relative mb-7"
                 style={{ backgroundImage: `url(${project_bg})` }}
                >
             <div className="absolute inset-0 bg-black opacity-50 "></div>
                   
                    <div className="text-center relative pt-40 pb-44 font-semibold text-white"
                  data-aos="zoom-out"
                    >
                    <span className="text-xl font-semibold tracking-wide sm:text-2xl  md:text-3xl  lg:tracking-wider lg:text-4xl ">New Project's</span>
                    <p className="text-xs text-orange-300 tracking-wide md:tracking-wider mt-2 lg:text-base lg:mt-2">We Want To Part Of Your Dream</p>
               </div> </div>
            </div>

            <div className="pb-10 px-2 lg:px-4">
            <div className="grid grid-rows-2 h-full gap-2 grid-cols-2 font-semibold md:gap-3">
                <div className="row-span-2  h-full col-span-2 md:col-span-1">
                    <img src={oasis} className="h-[19em] w-full mb-2 md:h-[24em] lg:h-[31em]"></img>
                    <span className="text-xs sm:text-sm text-gray-600 lg:text-lg ">HOUSES</span>
                    <p className=" text-xs sm:text-sm lg:text-lg dark:text-white">Oasis House / Unknown Works</p>

                </div>
                <div className="col-span-1 small-pro h-full row-span-1 ">
                    <img src={restaurant} className=""></img>
                    <span className="text-xs text-gray-600 lg:text-lg">RESTAURANT</span>
                    <p className="text-xs lg:text-lg dark:text-white" >LANTERN / OMA</p>
                </div>
               <div className=" col-span-1 small-pro  row-span-1 ">
                   <img src={mm} className=" "></img>
                   <span className="text-xs text-gray-600 lg:text-lg xl:text-2xl xxl:text-3xl">HOUSES</span>
                   <p className="text-xs lg:text-lg  dark:text-white">MM House/Benjamin Goni Arquitect</p>
               </div>
            </div>


           </div>

           <div>
           <div className="px-2 big-pro font-semibold  md:grid md:grid-cols-2 md:gap-3  lg:px-4">
               <div className="mb-4">
                   <img src={stewart} className=""
                   data-aos="zoom-out" ></img>
                   <span className="text-">HOUSES</span>
                   <p className="">Stewart House/SSdH</p>
               </div>
               <div className="mb-4">
                   <img src={common} className=""
                  data-aos="zoom-out" ></img>
                   <span className="">COWORK INTERIORS</span>

                   <p className="">Common Knowledge Studio</p>
               </div>
               <div className="mb-4">
                   <img src={gravity} className=""
                  data-aos="zoom-out" ></img>
                   <span className="">OFFICES INTERIORS</span>
                   <p className="">HAKUHODO Gravity Office/DDA</p>
               </div>
               <div className="mb-4">
                   <img src={horizon} className=""
                  data-aos="zoom-out" ></img>
                   <span className="">HOUSES</span>
                   <p className="">Horizon House/Taylor Knights</p>
               </div>

               <div className="mb-4">
                   <img src={kindergarten} className=""
                data-aos="zoom-out"   ></img>
                   <span className="">KINDERGARTEN</span>
                   <p className="">Kindergarten/office aaa</p>
               </div>
               <div>
                   <img src={botijo} className=""
                  data-aos="zoom-out" ></img>
                   <span className="">SUSTAINABILITY</span>
                   <p className="">Botijo House/ALE Estudio</p>
               </div> 
           </div>
           </div>


           <div className="mt-10 px-2 pb-10 lg:px-4">
            <div className="grid grid-rows-2  h-full gap-2 grid-cols-2 font-semibold md:gap-3">
                <div className="row-span-2 h-full col-span-2 md:col-span-1">
                    <img src={brise} className="h-[19em] w-full mb-2 md:h-[24em] lg:h-[31em]"></img>
                    <span className="text-xs text-gray-600 lg:text-lg ">HOUSES</span>
                    <p className="text-xs lg:text-lg dark:text-white">Oasis House / Unknown Works</p>

                </div>
                <div className="col-span-1 small-pro h-full row-span-1 ">
                    <img src={library} className="mb-2 "></img>
                    <span className="">LIBRARY</span>
                    <p className="" >LANTERN / OMA</p>
                </div>
               <div className="col-span-1 small-pro h-full row-span-1 ">
                   <img src={rvtk} className="mb-2 "></img>
                   <span className="">APARTMENTS</span>
                   <p className="">MM House/Benjamin Goni Arquitect</p>
               </div>
            </div>


           </div>


           <div>
           <div className="mx-2 big-pro font-semibold  md:grid md:grid-cols-2 md:gap-3  
          lg:px-4 ">
               <div className="mb-4">
                   <img src={villa} className=""
                   data-aos="zoom-out" ></img>
                   <span className="">HOUSES</span>
                   <p className="">Stewart House/SSdH</p>
               </div>
               <div className="mb-4">
                   <img src={gallery} className=""
                  data-aos="zoom-out" ></img>
                   <span className="">COWORK INTERIORS</span>

                   <p className="">Common Knowledge Studio</p>
               </div>
               <div className="mb-4">
                   <img src={abey} className=""
                  data-aos="zoom-out" ></img>
                   <span className="">OFFICES INTERIORS</span>
                   <p className="">HAKUHODO Gravity Office/DDA</p>
               </div>
               <div className="mb-4">
                   <img src={billy} className=""
                  data-aos="zoom-out" ></img>
                   <span className="">HOUSES</span>
                   <p className="">Horizon House/Taylor Knights</p>
               </div>

               <div className="mb-4">
                   <img src={wa} className=""
                data-aos="zoom-out"   ></img>
                   <span className="">KINDERGARTEN</span>
                   <p className="">Kindergarten/office aaa</p>
               </div>
               <div>
                   <img src={pergas} className=""
                  data-aos="zoom-out" ></img>
                   <span className=" ">SUSTAINABILITY</span>
                   <p className="">Botijo House/ALE Estudio</p>
               </div> 
           </div>
           </div>

        </div>
    );
};

export default New_Project;