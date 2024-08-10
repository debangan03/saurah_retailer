"use client";
import Image from "next/image";
import React, { useState } from "react";
import cibilimg from "../../../assets/cibilpic.png";
import {toast,Toaster} from 'react-hot-toast'
import { useFormik } from "formik";
import { cibiluserSchema } from "./FormValidator";

function CheckCibilScore() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    pan: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: cibiluserSchema,
      onSubmit: (values, action) => {
        handlesubmit_for_civil(values);
        action.resetForm();
      },
    });

  const [isformsubmitted, setisformsubmitted] = useState(false);
  const handlesubmit_for_civil = async (v) => {
    let request = await fetch(`/api/addcibilusercheck`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: v.name,
        email: v.email,
        phone: v.phone,
        pan: v.pan,
      }),
    });
    const response = await request.json();
    console.log(response);
    if (response.success) {
      setcibil(false);
      setisformsubmitted(true);
      toast.success("Request recieved")
    } else {
      toast.error("Error occured. Please try again.");
    }
  };
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
      {/* page component */}

      <div className="my-24">
        <Toaster/>
        <div className="flex bg-transparent lg:h-[500px] lg:my-4  lg:flex-row flex-col lg:justify-center  items-center  ">
          <Image
            alt="cibildetails"
            src={cibilimg}
            className="md:w-[50%] pt-6 h-full "
          />
          <div className="md:w-[50%] h-full md:space-y-2  flex justify-center flex-col ">
            {!cibil && (
              <>
                {isformsubmitted && (
                  <p className="text-center text-green-500 font-medium">
                    <h2 className="xl:text-xl font-sans xl:pl-32 text-sm font-semibold text-slate-900  text-left">
                      Your request to check Cibil score has been received.
                    </h2>
                    <p className="xl:text-3xl font-sans xl:pl-32 text-3xl md:pb-4 pb-2 font-semibold text-slate-900  text-left">
                      We will reach out to you soon.
                    </p>
                  </p>
                )}
                {!isformsubmitted && (
                  <>
                    <h2 className="xl:text-xl font-sans xl:pl-32 text-sm font-semibold text-slate-900  text-left">
                      Check your
                    </h2>
                    <p className="xl:text-5xl font-sans xl:pl-32 text-3xl md:pb-4 pb-2 font-semibold text-slate-900  text-left">
                      Cibil Score{" "}
                      <span className="md:text-4xl  text-2xl">in one tap</span>
                    </p>

                    <button
                      onClick={fetchcibil}
                      className="bg-teal-500 xl:mx-32 p-2 mt text-lg font-semibold rounded-md text-white"
                    >
                      Check Now
                    </button>
                  </>
                )}
              </>
            )}
            <div className="text-jutify relative 2xl:px-32 mt-20">
              {cibil && (
                <div className="w-[90vw] lg:mt-0 -mt-20 md:w-[500px] mx-4 pb-6 md:px-0 bg-[#c0fada] shadow-md overflow-hidden rounded-md">
                  <div className="p-4">
                    <h2 className="md:text-2xl text-xl text-center font-sans font-semibold mb-2">
                      Saurah Cibil Checker
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Enter Your Name..."
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                        />
                        {errors.name && touched.name ? (
                          <p className="form-error p-[2px] absolute text-[0.65rem] text-rose-500">
                            {errors.name}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="email"
                        >
                          Email ID
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Enter Email Address..."
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                        />
                        {errors.email && touched.email ? (
                          <p className="form-error p-[2px] absolute text-[0.65rem] text-rose-500">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="phone"
                        >
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          id="phone"
                          type="text"
                          placeholder="Enter Your phone Number..."
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                        />
                        {errors.phone && touched.phone ? (
                          <p className="form-error p-[2px] absolute text-[0.65rem] text-rose-500">
                            {errors.phone}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="pan"
                        >
                          PAN Number
                        </label>
                        <input
                          name="pan"
                          type="text"
                          id="pan"
                          placeholder="Enter Your Pan Number..."
                          value={values.pan}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                        />
                        {errors.pan && touched.pan ? (
                          <p className="form-error p-[2px] text-[0.65rem] absolute text-rose-500">
                            {errors.pan}
                          </p>
                        ) : null}
                      </div>
                      <div className="text-center">
                        <button
                          disabled={Object.keys(errors).length > 0}
                          type="submit"
                          className="mt-4 px-4 py-2 disabled:cursor-not-allowed bg-[#14b8a6] text-white text-md font-medium rounded-md shadow-sm hover:scale-95 "
                        >
                          Submit
                        </button>
                      </div>
                    </form>
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
