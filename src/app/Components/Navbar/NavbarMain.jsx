"use client";
import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import LogoutNav from "./LogoutNav";
import LoginNav from "./LoginNav";
import Navcontroller from "./Navcontroller";
import { AiOutlineCloseCircle } from "react-icons/ai";
var query = require("india-pincode-search");

let token;
let place;
function NavbarMain() {
  const [checklogin, setchecklogin] = useState(false);
  const [pincode, setpincode] = useState("");
  const [validpincode, setvalidpincode] = useState(true);
  //const [place, setplace] = useState("");
  const [location, setlocation] = useState(false);
  const locationclicked = () => {
    setlocation(true);
  };

  const locationclosed = () => {
    setlocation(false);
  };

  const handleInput = (e) => {
    setpincode(e.target.value);
    if (e.target.value.length != 6) {
      setvalidpincode(false);
    } else if (e.target.value.length == 6) {
      setvalidpincode(true);
    }
  };

  const handlesubmit = () => {
    setpincode("");
    setlocation(false);
    place = query.search(pincode);
  };

  //get token from local storage
  useEffect(() => {
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");

      if (token) {
        setchecklogin(true);
      } else {
        setchecklogin(false);
      }
    }
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="top bg-[#d6f8e7] px-2 md:px-20 py-5 flex items-center justify-between">
        <button
          onClick={locationclicked}
          className="left_top space-x-2 bg-transparent flex justify-center items-center"
        >
          <CiLocationOn className="text-lg cursor-pointer" />
          <span className="md:text-sm text-[.65rem]  cursor-pointer text-slate-900 capitalize font-sans hover:underline">
            {place?.length > 0
              ? place[0].village + ", " + place[0].state
              : "Enter Your Location"}
          </span>
        </button>
        <a
          href="tel:9668171117"
          className="right_top flex justify-center space-x-2 items-center"
        >
          <IoCallOutline className="text-lg cursor-pointer" />
          <span className="md:text-sm text-[.7rem] cursor-pointer text-slate-900 hover:text-blue-800 hover:underline">
            +91-9668171117
          </span>
        </a>
      </div>

      {location && (
        <div>
          <aside
            id="logo-sidebar"
            className="absolute top-0 left-0 z-40 w-96 h-screen pt-6 t bg-[#c0fadd] border-r border-gray-200   "
            aria-label="Sidebar"
          >
            <div className="h-full px-3 pb-4 overflow-y-auto  ">
              <h1 className="font-semibold font-sans pl-[21rem] text-2xl  text-gray-700">
                <span>
                  <AiOutlineCloseCircle
                    onClick={locationclosed}
                    className="hover:cursor-pointer"
                  />
                </span>
              </h1>
              <h1 className="text-center pt-4 font-semibold font-sans text-2xl text-gray-700">
                Your Location
              </h1>
              <hr className="mb-10 mt-2 border-spacing-1 border-2 border-t border-black/20 rounded "></hr>
              {/* <label
                  htmlFor="helper-text"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  "
                  placeholder="name@flowbite.com"
                /> */}
              <div className="px-6">
                <h1 className="text-md pt-16 pb-1">Pin Code</h1>

                <input
                  type="number"
                  onChange={handleInput}
                  value={pincode}
                  className=" border-2 h-14 bg-transparent border-gray-900 text-md text-gray-900 text-sm rounded-lg block w-full p-4"
                  placeholder="Enter your Pin Code "
                />
                {!validpincode && (
                  <div className="text-[.7rem] -bottom-1 text-right mb-2 text-red-600">
                    *Enter a valid pin code
                  </div>
                )}
                <button
                  className="mt-20 ml-[3rem] text-center font-sans text-md bg-teal-500 text-white rounded-full px-20 py-2"
                  onClick={handlesubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      <nav className="relative">
        {!checklogin ? <LogoutNav /> : <Navcontroller login={token} />}
      </nav>
    </header>
  );
}

export default NavbarMain;
