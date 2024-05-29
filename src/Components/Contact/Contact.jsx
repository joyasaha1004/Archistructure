import React from 'react';
import contact from "../Assets/contact.png"
import contact2 from"../Assets/contact2.jpg";
const Contact = () => {
    return (
        <div className="w-[300px] pb-16 sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px] dark:bg-gray-800">
          <div>
                <div className="">
                    <img src={contact} className="brightness-75 h-[200px] w-[300px] sm:h-[250px] sm:w-[500px] md:w-[700px] lg:w-[1000px] lg:h-[400px] md:h-[300px] xl:w-[1400px] xl:h-[550px] xxl:w-[1600px] xxl:h-[620px]"></img>
                    <div className="text-center ml-24 -mt-32 absolute font-semibold text-white sm:ml-48 sm:-mt-40 md:ml-72 md:-mt-44 lg:ml-[384px] lg:-mt-60 xl:ml-[490px] xl:-mt-80 xxl:-mt-[360px] xxl:ml-[550px]"
                 data-aos="zoom-out"
                    >
                    <span className=" z-10 text-lg tracking-wide sm:text-2xl  md:text-3xl lg:text-4xl lg:tracking-wider  xl:text-5xl xxl:text-6xl ">Contact Us</span>
                    <p className="text-xs text-orange-300 tracking-wide md:tracking-wider md:mt-1 lg:text-base xl:text-2xl lg:mt-2">We Are Here For You</p>
               </div> </div>
            </div> 

           <div className="mt-10 md:px-2 md:mb-10 xl:ml-7">
               <div className="md:flex ">
                  <div className="md:mt-32 lg:w-[500px] xl:w-[700px]">
                   <img src={contact2} classname=" md:w-[650px] "></img>
                  </div>
                   <div className="ml-2 mt-5 dark:text-white lg:mt-12 lg:ml-5 xl:mt-20">
                       <h1 className="text-center text-xl font-serif font-semibold mb-2 lg:text-2xl xl:text-3xl">Contact Us</h1>
                       <div className="sm:ml-5">
                       <label for="email" className="font-semibold xl:text-xl xl:font-bold">Email</label><br></br>
                       <input type="email" id="email" placeholder="Enter your email address" className="w-72 h-10 border-2 border-orange-300 mt-1 text-xs pl-2 mb-2 rounded-md tracking-wide sm:w-96 md:w-80 lg:w-96 lg:tracking-wider xl:w-[600px] xl:h-16 xl:text-base xl:font-semibold"></input><br></br>
                       <label for="pass" className="font-semibold xl:text-xl xl:font-bold">Password</label><br></br>
                       <input type="password" placeholder="******" id="pass" className="w-72 h-10 border-2 border-orange-300 mt-1 text-xs pl-2 mb-2 rounded-md tracking-wide sm:w-96 md:w-80 lg:w-96 lg:tracking-wider xl:w-[600px] xl:h-16 xl:text-base xl:font-semibold"></input><br></br>
                       <label for="text" className="font-semibold xl:text-xl xl:font-bold">Textarea</label><br></br>
                       <textarea placeholder="Write About Yourself" className="w-72 h-40 border-2 border-orange-300 mt-1 text-xs text-center mb-2 rounded-md tracking-wide sm:w-96 md:w-80 pt-2 lg:w-96 lg:tracking-wider xl:w-[600px]  xl:text-base xl:font-semibold"></textarea><br></br>
                       <button className="bg-orange-300 text-xs p-2 rounded ml-2 hover:bg-orange-400 text-white xl:text-lg">Submit</button>
                  </div> </div>
               </div>
           </div>
        </div>
    );
};

export default Contact;