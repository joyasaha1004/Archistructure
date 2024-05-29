import React from 'react';
import work1 from "../Assets/work1.jpg";
import work2 from "../Assets/work2.jpg";
import work3 from "../Assets/work3.jpg";
import leaf from "../Assets/leaf.png";
import hammer from "../Assets/hammer.jpg";
import twofour from "../Assets/twofour.png";
import man from "../Assets/man.jpg";

const Work = () => {
    return (
        <div className="w-[300px] pb-16 sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px] dark:bg-gray-800">
             <div>
                <div className="">
                    <img src={work1} className="brightness-75 h-[200px] w-[300px] sm:h-[250px] sm:w-[500px] md:w-[700px] lg:w-[1000px] lg:h-[400px] md:h-[300px] xl:w-[1500px] xl:h-[550px] xxl:w-[1800px] xxl:h-[620px]"></img>
                    <div className="text-center ml-16 -mt-32 absolute font-semibold text-white sm:ml-40 sm:-mt-40 md:ml-64 md:-mt-44 lg:ml-[380px] lg:-mt-60 xl:ml-[450px] xl:-mt-80 xxl:-mt-[360px] xxl:ml-[550px]"
                    data-aos="zoom-out"
                    >
                    <span className=" z-10 text-lg tracking-wide sm:text-2xl  md:text-3xl lg:text-4xl lg:tracking-wider  xl:text-5xl xxl:text-6xl ">Our Works</span>
                    <p className="text-xs text-orange-300 tracking-wide md:tracking-wider md:mt-1 lg:text-base xl:text-2xl lg:mt-2">Your choice is our first priority</p>
               </div> </div>
            </div>

           <div>
               <div className=" mt-5 pb-10 md:ml-10 lg:ml-20 xl:ml-32 xxl:ml-52">
                   <div className="bg-black w-[300px] sm:mr-2 h-52 flex sm:w-[495px] sm:h-60 md:w-[600px] lg:w-[850px] lg:h-80 xl:w-[1100px] lg:h-96">
                   <img src={work2} className="w-32 h-60 relative pt-7 brightness-75 sm:w-44 sm:h-64 lg:w-72 lg:h-[400px] md:ml-4 xl:w-80 xl:h-[420px]"></img>
                   <div className="relative text-white mx-2 mt-10 sm:mx-5 sm:mt-12 md:mt-16 lg:mt-20">
                       <div className="flex -ml-10 sm:-ml-16">
                   <span className="font-serif font-semibold sm:text-lg lg:text-3xl xl:text-4xl">Our DNA</span>
                   <hr className="w-16 mt-3 ml-2 md:mt-4 lg:w-24 lg:mt-5"></hr>
                   </div>
                   <p className="text-[10px] mt-2 md:text-xs md:leading-relaxed lg:text-sm lg:mt-5 xl:text-xl xl:mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus magnam ea laudantium quam accusamus?</p>
                   <button className="text-xs bg-orange-300 p-1 mt-5 hover:bg-orange-400 lg:text-sm xl:text-xl xl:p-2">Read More</button>
                  </div> </div>
               </div>
               </div> 


               <div className="pt-10 relative sm:ml-2 md:ml-10 lg:ml-20 xl:ml-24 xl:pt-20">

                   <div className="dark:text-white ">
                       <div className=" ml-2 flex gap-2 relative">
                           <hr className=" w-16 mt-3 xl:mt-5"></hr>
                           <h1 className="font-serif text-xl lg:text-2xl xl:text-4xl">Selected Work</h1>
                          
                       </div> 
                       <div className="ml-2 mt-3 w-screen pr-2 md:w-[640px] lg:w-[920px] xl:w-[1250px] xxl:w-[1350px]">
                       <p className="text-xs lg:text-sm xl:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, voluptate numquam qui voluptas porro repellendus voluptatibus est dolorem dolorum obcaecati ut molestiae et magni sunt?</p></div>
                   </div>
                   <div className="sm:flex sm:mt-3 ml-2 lg:ml-5 xl:ml-16 xxl:ml-24">
                   <div className="mt-5">
                       <img src={work3} className="sm:w-64 md:w-96 lg:w-[500px] xl:w-[600px]"
                       data-aos="zoom-in"></img>
                       <div className="w-52 h-10 bg-white ml-24 -mt-10 overflow-visible absolute sm:w-40 sm:pt-1 sm:h-9 sm:-mt-9 md:w-52 sm:-mt-10  md:ml-44 md:-mt-[40px] md:h-10 lg:w-[245px] lg:ml-64 xl:w-[279px] xl:-mt-[50px]  xl:ml-80 xl:h-12 xl:-mt-12"
                      data-aos="fade-left"
                       >
                           <button className="bg-gray-300 text-xs py-1 px-4 ml-5 mt-2 hover:bg-gray-600 hover:text-white xl:text-base ">View Card</button>
                       </div>
                       
                   </div>
                   <div className="ml-2 mt-5 sm:w-44 sm:ml-10 md:w-52 md:mt-10 lg:w-72 lg:mt-16 xl:w-96 xl:mt-20 dark:text-white">
                       <h1 className="text-xl font-semibold font-sans sm:text-lg lg:text-xl xl:text-3xl ">A Residence</h1>
                       <p className="text-xs mt-5 tracking-wider lg:text-sm xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus delectus quisquam ratione laborum. Vel, voluptatibus optio!</p>
                   </div>
                   </div>

               </div>

               <div className="mt-20 pb-32">
                   <div className="bg-gray-900 h-64 pl-10 sm:pl-20 sm:h-52 md:mx-10 md:mr-16 md:pl-28 lg:mx-20 lg:h-72 lg:pl-44 xl:mx-36 xl:mr-60 xl:h-[350px] xl:pl-52 xxl:mx-52 xxl:mr-[420px]">
                       <div className="text-white flex overflow-visible relative gap-2 pt-10 font-serif sm:ml-12 lg:ml-20 xl:ml-28">
                           <hr className="w-16 mt-4 lg:w-20"></hr>
                            <span className="text-xl tracking-wide lg:text-2xl xl:text-3xl xxl:text-4xl">Why Us</span>
                            
                       </div>
                       <div className="mt-5 w-32 ml-28 sm:ml-40 sm:w-40 lg:ml-52 lg:w-60 xl:w-72 xl:ml-72">
                           <p className="text-xs text-white lg:text-base xl:text-xl xl:leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde explicabo facilis repellat iusto! Soluta.
                            </p>
                       </div>
                       <div className="sm:flex">
                       <div className="w-36 h-40 bg-gray-100 -ml-10 -mt-24 pt-1 sm:w-40 sm:px-2 rounded sm:-mt-16 lg:w-80 lg:h-56 lg:-mt-24  xl:h-72 xl:-mt-28 xxl:h-72 xl:pt-3">
                           <div className="flex xl:pt-3">
                           <img src={man} className="w-8 h-8 rounded-full m-2 mt-2 lg:w-10 lg:h-10 xl:w-12 xl:h-12"></img>
                           <span className="text-gray-400 text-xs font-semibold mt-3.5 lg:rext-sm lg:mt-5 tracking-wide lg:ml-2 xl:text-lg">Mannager</span>
                           </div>
                           <p className="text-xs mx-1 mt-1 lg:text-base  lg:mt-2 xl:text-xl xl:leading-normal">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolorem."</p>
                       </div>

                       <div className="mt-12 w-[300px] -ml-7 flex sm:ml-3 sm:mt-5 md:mt-8 lg:mt-10 lg:w-[1000px] lg:gap-3 xl:ml-5 xl:gap-4">
                           <div className="w-20 h-16 bg-gray-100 ml-2 text-center pt-2 drop-shadow-xl lg:w-32 lg:h-20 xl:w-36 xl:h-32 xl:pt-5">
                               <img src={leaf} className="w-6 h-6 ml-8 mb-1 lg:w-8 lg:h-8 lg:ml-9 xl:w-12 xl:h-12 xl:ml-12"></img>
                               <p className="text-xs font-semibold lg:text-base xl:text-xl xl:font-semibold">Eco Friendly</p>
                           </div>

                           <div className="w-20 h-16 bg-gray-100 ml-2 text-center pt-2 drop-shadow-xl lg:w-32 lg:h-20 xl:w-36 xl:h-32 xl:pt-5">
                               <img src={hammer} className="w-6 h-6 ml-8 mb-1 lg:w-8 lg:h-8 lg:ml-9 xl:w-12 xl:h-12 xl:ml-12"></img>
                               <p className="text-xs font-semibold lg:text-base xl:text-xl xl:font-semibold">Eco Friendly</p>
                           </div>

                             <div className="w-20 h-16 bg-gray-100 ml-2 text-center pt-2 drop-shadow-xl lg:w-32 lg:h-20 xl:w-36 xl:h-32 xl:pt-5">
                               <img src={twofour} className="w-6 h-6 ml-8 mb-1 lg:w-8 lg:h-8 lg:ml-8 xl:w-12 xl:h-12 xl:ml-12"></img>
                               <p className="text-xs font-semibold lg:text-base xl:text-xl xl:font-semibold">Eco Friendly</p>
                           </div>
                       </div>
                   </div>
               </div>
</div>
        </div>
    );
};

export default Work;