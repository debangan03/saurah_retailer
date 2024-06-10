"use client";
import Image from "next/image";
import React, { useState } from "react";
import cibilimg from "../../../assets/cibilpic.png";
import { IoCloseCircleOutline } from "react-icons/io5";

function CheckCibilScore() {
  const [cibil, setcibil] = useState();
  const [openpopup, setopenpopup] = useState(false);

  function disableScroll() {
    window.scrollTo(0, 0);
  }

  function enableScroll() {
    window.onscroll = function () {};
  }
  const fetchcibil = async () => {
    setopenpopup(true);
    setcibil(true);
    //disableScroll();
    // let res = await fetch(
    //   `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getcibil`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ token: "token" }),
    //   }
    // );
    // let cibilinfo = await res.json();
    // setcibil(cibilinfo);
  };
  const closepopup = () => {
    enableScroll();
    setopenpopup(false);
  };
  return (
    <>
      {/* pop up window to show cibil info */}
      {/* {openpopup && (
      <div className="pop_up_window absolute top-0 left-0 z-50 h-screen w-screen bg-black/20 backdrop-blur-md">
        <div className="">
          <div className="flex rounded-lg relative justify-center items-center bg-[#d7f5e6] h-fit md:w-[40%] w-[89%] mx-auto mt-48">
            <span onClick={closepopup} className="absolute -top-5 -right-5">
              <IoCloseCircleOutline className="text-2xl text-rose-500 hover:text-rose-600 cursor-pointer" />
            </span>

            <div className="py-10">
              <p>Name : Debangan Bhattacharyya </p>
              <p>Pan No : ABCDE3434K </p>

            </div>
          </div>
        </div>
      </div>
    )} */}

      {/* page component */}

      <div className="my-10">
        <div className="flex bg-transparent  lg:my-4  lg:flex-row flex-col lg:justify-center   items-center md:px-20 ">
          <Image
            alt="cibildetails"
            src={cibilimg}
            className="md:w-[50%] pt-6 h-full "
          />
          <div className="md:w-[50%] h-full md:space-y-2  flex justify-center flex-col ">
            {!cibil && (
              <>
                <h1 className="xl:text-xl font-sans xl:pl-32 text-sm font-semibold text-slate-900  text-left">
                  Check your
                </h1>
                <h1 className="xl:text-5xl font-sans xl:pl-32 text-3xl md:pb-4 pb-2 font-semibold text-slate-900  text-left">
                  Cibil Score{" "}
                  <span className="md:text-4xl  text-2xl">in one tap</span>
                </h1>

                <button
                  onClick={fetchcibil}
                  className="bg-teal-500 xl:mx-32 p-2 mt text-lg font-semibold rounded-md text-white"
                >
                  Check Now
                </button>
              </>
            )}
            <div className="text-jutify 2xl:px-32 mt-20">
              {cibil && (
                // <div>
                //   <h1 className="xl:text-2xl pb-4 font-sans text-lg font-semibold text-slate-900  text-left">Name : Saurah</h1>
                //   <h1 className="xl:text-2xl pb-4 font-sans text-lg font-semibold text-slate-900  text-left">Address : Bhubaneswar</h1>
                //   <h1 className="xl:text-2xl pb-4 font-sans text-lg font-semibold text-slate-900  text-left">Date of Birth : 01-01-2024</h1>
                //   <h1 className="xl:text-2xl pb-4 font-sans text-lg font-semibold text-slate-900  text-left">Cibil : 897</h1>
                // </div>
                <div className="w-[90vw] lg:mt-0 -mt-20 md:w-[500px]  mx-4 md:px-0 bg-white shadow-md overflow-hidden rounded-md">
                  <div className="p-4">
                    <h2 className="md:text-2xl text-xl text-center font-sans font-semibold mb-2">Saurah Cibil Checker</h2>
                    <p className="text-center ">Coming Soon</p>
                    {/* <div className="mb-4">
                      <p className="text-gray-600">Bhubaneswar</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-600">Date of Birth: </p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-semibold text-green-500">
                        Credit Score:{" "}
                      </span>
                    </div> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckCibilScore;
