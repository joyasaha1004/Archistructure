import React from 'react';
import "./Work.css";
import work1 from "../Assets/work1.jpg";
import work2 from "../Assets/work2.jpg";
import work3 from "../Assets/work3.jpg";
import leaf from "../Assets/leaf.png";
import hammer from "../Assets/hammer.jpg";
import twofour from "../Assets/twofour.png";
import man from "../Assets/man.jpg";

const Work = () => {
    return (
        <div className="overflow-hidden w-full max-w-screen-xl mx-auto pb-10 dark:bg-gray-800">
             <div>
               <div className="bg-new-project bg-cover  bg-center h-fit w-full relative mb-7"
                                style={{ backgroundImage: `url(${work1})` }}
                               >
                    <div className="absolute inset-0 bg-black opacity-50 "></div>            
                   
                    <div className="text-center relative pt-40 pb-44 font-semibold text-white"
                    data-aos="zoom-out"
                    >
                    <span className="text-xl font-semibold tracking-wide sm:text-2xl  md:text-3xl  lg:tracking-wider lg:text-4xl  ">Our Works</span>
                    <p className="text-xs text-orange-300 tracking-wide md:tracking-wider md:mt-1 lg:text-base xl:text-2xl lg:mt-2">Your choice is our first priority</p>
               </div> </div>
            </div>

           <div>
               <div className=" bg-black h-fit sm:mx-2 md:mx-4 lg:mx-8 xl:mx-12">
               
                   <div className=" grid grid-cols-2 gap-2 py-2 sm:px-4">
                   <img src={work2} className="w-full h-60 relative pt-7 sm:w-40 sm:justify-self-center brightness-75 lg:w-52 lg:h-72 xl:w-60 xl:h-80"></img>
                  
                   <div className="relative  text-white self-center">
                        
                   <div className=" gap-1 absolute flex items-center justify-center ">
                   <span className="font-serif font-semibold sm:text-xl shrink-0 lg:text-2xl ">Our DNA</span>
                   <hr className="w-16 self-center"></hr>
                   </div>
                   <p className="text-[11px] mt-8 sm:mt-10 md:text-xs leading-loose md:leading-loose  lg:text-sm lg:leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus magnam ea laudantium quam accusamus?</p>
                   <button className="text-xs bg-orange-300 p-1.5 mt-5 hover:bg-orange-400 lg:text-sm xl:p-2">Read More</button>
                  </div> </div>
                  
                   </div>
               </div>
                


               <div className="pt-12 relative px-2 md:px-4 lg:px-6">

                   <div className="dark:text-white ">
                       <div className="  flex gap-2 relative">
                           <hr className=" w-16 self-center"></hr>
                           <h1 className="font-serif text-xl lg:text-2xl">Selected Work</h1>
                         
                       </div> 
                       <div className=" mt-3 ">
                       <p className="text-xs leading-loose lg:text-sm lg:leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, voluptate numquam qui voluptas porro repellendus voluptatibus est dolorem dolorum obcaecati ut molestiae et magni sunt?</p></div>
                   </div>
                   <div className="md:grid grid-cols-2 md:h-fit sm:mt-3 md:gap-4">
                   <div className="mt-5 ">
                       <img src={work3} className="md:h-full"
                       data-aos="zoom-in"></img>
                     
                       
                   </div>
                   <div className="dark:text-white mt-3 md:pt-2 ">
                       <h1 className="text-xl text-orange-300 mb-2 font-sons font-semibold sm:text-lg lg:text-2xl ">A Residence</h1>
                       <p className="text-xs  leading-loose lg:text-sm lg:leading-loose ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus delectus quisquam ratione laborum. Vel, voluptatibus optio! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laudantium architecto non maiores doloribus quos quod totam delectus necessitatibus dolore?
                       </p>
                   </div>
                   </div>

               </div>

               <div className="mt-16 pb-10 ">
                   <div className="bg-gray-900 pt-6 pb-8 sm:mx-2 sm:rounded lg:mx-6 lg:pb-12">
                       <div className="text-white flex justify-center items-center pb-4 overflow-visible relative gap-2 font-serif">
                           <hr className="w-16 flex justify-center"></hr>
                            <span className="text-xl tracking-wide lg:text-2xl">Why Us</span>
                            
                       </div>
                      
                       <div className=" sm:align-center w-full md:grid grid-cols-2">
                       <div className="bg-gray-100 rounded pb-8 self-center items-center mb-4 w-fit mx-10 sm:mx-12 lg:w-64 ">
                           <div className="flex flex-wrap  mt-2 px-2">
                           <img src={man} className="w-8 h-8 rounded-full m-2  lg:w-10 lg:h-10 xl:w-12 xl:h-12"></img>
                           <span className="text-gray-400 text-xs font-semibold self-center lg:text-sm  tracking-wide ">Mannager</span>
                           </div>
                           <p className="text-xs  mx-3 lg:text-base  leading-normal">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolorem."</p>
                       </div>

           <div className="px-2 sm:pt-4 sm:px-4">
                           <p className="text-xs text-white lg:text-base leading-relaxed lg:leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde explicabo facilis repellat iusto! Soluta.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, tempora?
                            </p>
                       </div>      
                      </div></div>
                  
               </div>
                       <div className="flex flex-wrap pt-2 lg:relative lg:justify-end lg:-mt-24 lg:px-10 lg:gap-10 justify-center gap-4 sm:gap-8 md:gap-16">
                           <div className="plus-point ">
                               <img src={leaf} className=""></img>
                          <p className="">Eco Friendly</p>
                           </div>
                 
                           <div className="plus-point ">
                               <img src={hammer} className=""></img>
                               <p className="">Eco Friendly</p>
                           </div>

                             <div className=" plus-point ">
                               <img src={twofour} className=""></img>
                               <p className="">Eco Friendly</p>
                           </div>
                       
</div>
        </div>
    );
};

export default Work;