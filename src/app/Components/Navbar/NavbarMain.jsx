// components/NavbarMain.js
"use client";
import React, { useState, useEffect } from "react";

import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "@/app/Context/AuthContext";
var query = require("india-pincode-search");

let place;

function NavbarMain() {
  const { user, setUser,loading } = useAuth();
  const [mobile, setMobile] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [pincode, setPincode] = useState("");
  const [validPincode, setValidPincode] = useState(true);
  const [location, setLocation] = useState(false);

  const locationClicked = () => {
    setLocation(true);
  };

  const locationClosed = () => {
    setLocation(false);
  };

  const handleInput = (e) => {
    setPincode(e.target.value);
    if (e.target.value.length !== 6) {
      setValidPincode(false);
    } else {
      setValidPincode(true);
    }
  };

  const handleSubmit = () => {
    setPincode("");
    setLocation(false);
    place = query.search(pincode);
  };

  const handleLogout = () => {
    toast.success("Logged out");
    localStorage.removeItem("token");
    setUser(null);
    window.location = "/";
  };

  return (
    <header className="sticky top-0 z-50">
      <Toaster />
   

      

      <nav className="relative bg-[#eff8f3] shadow-md pb-2.5 z-30">
        <div className="mx-auto  px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div
              className="absolute inset-y-0 left-0 flex items-center sm:hidden"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-transparent hover:text-slate-900 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>

                {!mobile ? (
                  <CgMenuGridO className="text-xl text-slate-900" />
                ) : (
                  <CgClose className="text-xl text-slate-900" />
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link href={"/"} className="flex flex-shrink-0 items-center">
                <h1 className="text-slate-700 font-semibold text-xl cursor-pointer">
                  <span className="self-center relative text-2xl font-semibold whitespace-nowrap">
                    <span className="text-teal-500">Saurah</span>.Finance
                    <span className="text-base text-teal-500 absolute -bottom-4 right-0">
                      retail
                    </span>
                  </span>
                </h1>
              </Link>
            
            </div>
          {!loading && <div> {!user ? (
              <Link
                href={"/RetailerLogin"}
                className="absolute top-6 bg-teal-500 text-white font-semibold md:text-lg rounded-full px-5 p-1 right-2 md:right-2"
              >
                Login
              </Link>
            ) : (
              <button
                onMouseOver={() => setAccountDropdown(true)}
                onClick={()=> setAccountDropdown(!accountDropdown)}
                className="absolute top-3 text-4xl text-teal-500 font-bold right-2 md:right-2"
              >
                <MdAccountCircle className="size-12"/>
              </button>
            )}

            </div>}
          </div>
        </div>

        {mobile && (
          <div className="sm:hidden transition-all duration-500" id="mobile-menu" onMouseLeave={() => setMobile(false)}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href={"http://saurah.com/About"}
                className="text-slate-700 hover:scale-95 hover:text-slate-500 block rounded-md px-3 py-2 text-base font-medium"
              >
                About Us
              </Link>
              <Link
                href={"http://saurah.com/ContactUs"}
                className="text-slate-700 hover:scale-95 hover:text-slate-500 block rounded-md px-3 py-2 text-base font-medium"
              >
                Contact Us
              </Link>
              <Link
                href={"http://saurah.com/FeedBack"}
                className="text-slate-700 hover:scale-95 hover:text-slate-500 block rounded-md px-3 py-2 text-base font-medium"
              >
                Feedback
              </Link>
            </div>
          </div>
        )}
      </nav>
      {user && accountDropdown && (
        <div
          className="absolute right-2 md:right-4 top-16 mt-2 z-50 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          onMouseLeave={() => setAccountDropdown(false)}
        >
          <div className="" role="none">
            <Link
              href={"/RetailerDashboard"}
              className="text-slate-700 block px-4 py-2 text-sm hover:bg-neutral-300"
              role="menuitem"
            >
              My Account
            </Link>
            <button
              onClick={handleLogout}
              className="text-slate-700 block w-full text-left px-4 py-2 text-sm hover:bg-neutral-300"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavbarMain;