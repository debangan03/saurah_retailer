"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import loanicon from "../assets/apply_for_loan_icon.png";
function ApplyNowButton() {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [viewapply, setviewapply] = useState(false)
  
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsVisible(position > 200); // Change 200 to whatever scroll position you need
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      <>
        <div>
          {isVisible && (
            <Link
              href={"ApplyLoan"}
              onMouseLeave={()=>{setviewapply(false)}}
              className=" cursor-pointer  rounded-lg fixed bottom-6 right-4 z-20 "
            >
              <div className="relative grid grid-cols-4">
                {!viewapply &&<span className="col-span-3"></span>}
                {viewapply &&<span
                  
                  className="col-span-3 text-slate-900 shadow-md font-sans font-semibold bg-cyan-100 rounded-full my-2 p-2 pl-4 pr- translate-x-14"
                >
                  Apply Now
                </span>}
                <span
                  onMouseOver={()=>{setviewapply(true)}}
                  
                  className=" text-white shadow-lg font-semibold bg-gradient-to-r  from-cyan-500 to-teal-400 scale-105 duration-500 rounded-xl  p-2 "
                >
                  <Image loading="lazy" placeholder="blur" alt='apply' src={loanicon} className=" w-[40px] h-[40px] z-50" />
                </span>
                {/* {viewapply&&<span><p
                
                className=" text-white font-semibold bg-gradient-to-r  from-cyan-500 to-teal-400  hover:scale-110 duration-500 rounded-lg  p-2 right-10"
              >Apply Now</p></span>}
                <span><p
                  
                  className=" text-white font-semibold bg-gradient-to-r  from-cyan-500 to-teal-400  hover:scale-110 duration-500 rounded-lg  p-2 "
                >
                  <Image src={loanicon} className="w-[40px] h-[40px]" />
                </p></span> */}
              </div>
            </Link>
          )}</div>
          </>
  )
}

export default ApplyNowButton