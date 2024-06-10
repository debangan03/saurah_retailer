"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { MdAccountCircle } from "react-icons/md";
import LogoutNav from "./LogoutNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function LoginNav( {data} ) {
  const [mobile, setmobile] = useState(false);
  const [accountdropdown, setaccountdropdown] = useState(false);
  const handlelogout = () => {
    toast.success("Logged out", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // alert("Logging out")
    localStorage.removeItem("token");
    window.location = process.env.NEXT_PUBLIC_VERCEL_URL;
  };

  //if token is tampered
  if(!data.login)
  {
    // localStorage.removeItem('token')
    return<LogoutNav/>
  }
  //no token tampered
  else
  {
  return (
    <div>
    <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <nav onMouseLeave={()=>{setaccountdropdown(false)}} className="bg-[#eff8f3] shadow-md   py-2 z-30">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div
            className="absolute inset-y-0 left-0 flex items-center sm:hidden"
            onClick={() => {
              setmobile(!mobile);
            }}
          >
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-transparent hover:text-slate-900 focus:outline-none  "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              {!mobile && <CgMenuGridO className="text-xl text-slate-900" />}
              {mobile && <CgClose className="text-xl text-slate-900" />}

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href={"/"} className="flex flex-shrink-0 items-center">
              <h1 className="text-slate-700 font-semibold text-xl cursor-pointer">
              <span className="self-center relative text-2xl font-semibold whitespace-nowrap ">
              <span className="text-teal-500">Saurah</span>.Finance
              
              <span className="text-base text-teal-500 absolute -bottom-4 right-0">retail</span>
            </span>
              </h1>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center space-x-4">
                <Link
                  href={"/About"}
                  className="text-slate-700 hover:scale-95 hover:text-slate-500 rounded-md px-3 py-2 text-[1rem] font-medium"
                >
                  About Us
                </Link>
                <Link
                  href={"/ContactUs"}
                  className="text-slate-700 hover:scale-95 hover:text-slate-500 rounded-md px-3 py-2 text-[1rem] font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  href={"/FeedBack"}
                  className="text-slate-700 hover:scale-95 hover:text-slate-500 rounded-md px-3 py-2 text-[1rem] font-medium"
                >
                  Feedback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {mobile && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href={"/About"}
              className="text-slate-700 hover:bg-[#D6F8E7] hover:text-slate-900 block rounded-md px-3 py-2 text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href={"/ContactUs"}
              className="text-slate-700 hover:bg-[#D6F8E7] hover:text-slate-900 block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact Us
            </Link>
            <Link
              href={"/FeedBack"}
              className="text-slate-700 hover:bg-[#D6F8E7] hover:text-slate-900 block rounded-md px-3 py-2 text-base font-medium"
            >
              Feedback
            </Link>
          </div>
        </div>
      )}

      <button
        onMouseOver={() => setaccountdropdown(true)}
       
        className="absolute top-6 text-4xl text-teal-500 font-bold  right-2 md:right-20 "
      >
        <MdAccountCircle />
      </button>
      {/* avatar hover options */}

      {accountdropdown && (
        <div
          onMouseLeave={() => setaccountdropdown(false)}

          className="absolute top-14 right-2 z-50 bg-[#d6f8e7] h-18 rounded-md text-sm"
        >
          <ul className="font-semibold space-y-1 text-slate-600">
            <Link href={'/MyAccount'}><li className="cursor-pointer p-2 hover:bg-[#a8e9c5]">My Account</li></Link>
            <li  onClick={handlelogout} className="cursor-pointer p-2 hover:bg-[#a8e9c5] rounded-md">Logout</li>
          </ul>
        </div>
      )}
    </nav>
    </div>
  );
      }
}

export default LoginNav;
