import React from 'react';
import "./Contact.css";
import contact from "../Assets/contact.png"
import contact2 from"../Assets/contact2.jpg";
const Contact = () => {
    return (
        <div className="pb-16 oveflow-hidden mx-auto max-w-screen-xl dark:bg-gray-800">
          <div>
                 <div className="bg-new-project bg-cover  bg-center h-fit w-full relative mb-7"
                                                style={{ backgroundImage: `url(${contact})` }}
                                               >
                                    <div className="absolute inset-0 bg-black opacity-50 "></div> 

                 
                    <div className="text-center relative pt-40 pb-44 font-semibold text-white"
                 data-aos="zoom-out"
                    >
                    <span className=" text-xl font-semibold tracking-wide sm:text-2xl  md:text-3xl  lg:tracking-wider lg:text-4xl ">Contact Us</span>
                    <p className="text-xs text-orange-300 tracking-wide md:tracking-wider md:mt-1 lg:text-base lg:mt-2">We Are Here For You</p>
               </div> </div>
            </div> 

           <div className="mt-10 mx-2 md:px-2 md:mb-10 xl:ml-7">
               <div className="lg:grid grid-cols-2 lg:gap-6 ">
                  <div className=" lg:self-center lg:mt-12">
                   <img src={contact2} classname="w-full object-contain lg:h-full"></img>
                  </div>
                   <div className="dark:text-white mt-4 sm:mt-8 text-xs lg:text-sm">
                       <h1 className="text-center text-xl font-serif font-semibold mb-4 md:text-2xl md:mb-6 lg:mb-4">Contact Us</h1>
                       <div className="">
                       <label for="email" className="font-semibold ">Email</label><br></br>
                       <input type="email" id="email" placeholder="Enter your email address" className="py-2 px-2 my-2"></input><br></br>
                       <label for="pass" className="font-semibold  xl:font-bold">Password</label><br></br>
                       <input type="password" placeholder="******" id="pass" className="py-2 px-2 my-2"></input><br></br>
                       <label for="text" className="font-semibold ">Textarea</label><br></br>
                       <textarea placeholder="Write About Yourself" className="h-32 px-2 my-2 py-1 lg:h-28"></textarea><br></br>
                       <button className="bg-orange-300 text-xs py-2.5 px-3 rounded  hover:bg-orange-400 text-white lg:text-sm lg:px-4">Submit</button>
                  </div> </div>
               </div>
           </div>
        </div>
    );
};

export default Contact;