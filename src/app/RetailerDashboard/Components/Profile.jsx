"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import banner from "../../assets/dashbanner.jpg";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const LoanCard=()=>{
    return(
        <>
        <div className="bg-white h-36 w-full relative shadow-md rounded-md border-2">
        <p className="absolute bottom-2 left-2 text-[0.6rem] bg-teal-900 text-white p-1 rounded-lg">10-10-2024</p>
        <div className="p-2 font-semibold flex justify-between items-center">
            <div>
           <p> Name: Debangan Bhattacharyya</p>
           <p> Amount: 100000</p>
           <p> Tanure: 8 months</p>
           </div>
           <FaEye className="size-6 text-orange-400 mr-10"/>

        </div>
        </div>
        </>
    )
}
function Profile() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Welcome to Saurah",
        "Explore All Loan Options",
        "Join us today!",
      ], // Strings to display
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true, // Loop the typing animation
    });

    // Destroy the Typed instance on component unmount to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="relative h-[300px] w-full">
        <Image
          src={banner}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="bg-black/60 z-20 flex  justify-center items-center absolute top-0 left-0 h-full w-full">
          <h3 className="text-3xl text-white tracking-widest">
            <span ref={el}></span>
          </h3>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 flex lg:flex-row lg:space-y-0 space-y-10 flex-col justify-between items-start">
        <div className="profile lg:w-[45%] lg:bg-neutral-100 bg-white lg:shadow-none shadow-md rounded  p-6 relative ">
          <div className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaEdit size={20} />
          </div>
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">User Name</h2>
            <p className="text-gray-600">Email: user@example.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Address: 123 Main St, Anytown, USA</p>
            <p className="text-gray-600">Address: 123 Main St, Anytown, USA</p>
            <p className="text-gray-600">
              Address: 123 Main St, Anytown, USA
            </p>{" "}
            <p className="text-gray-600">Address: 123 Main St, Anytown, USA</p>
            <p className="text-gray-600">Address: 123 Main St, Anytown, USA</p>
            {/* Add more user information here */}
          </div>
        </div>
        <div className="h-[300px] bg-gray-400 mt-4 w-[1px] hidden lg:block"></div>
        <div className="profile lg:w-[45%] lg:bg-neutral-100 bg-white  lg:shadow-none shadow-md rounded p-6 relative ">
          <div className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-gray-800  ">
          <span className="flex justify-center items-center shadow-lg rounded-full p-1 border">Add <MdAdd size={20} className="size-6"/></span>  
            
          </div>
          <div className="flex flex-col items-start min-h-[200px] space-y-4">
            <h2 className="text-2xl underline underline-offset-2 font-semibold text-gray-800">Loan History</h2>
            <LoanCard/>
           
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
