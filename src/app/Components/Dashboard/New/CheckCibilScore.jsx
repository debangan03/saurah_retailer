"use client";
import Image from "next/image";
import React, { useState } from "react";
import cibilimg from "../../../assets/cibilpic.png";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { cibiluserSchema } from "./FormValidator";
import Loaderpage from "@/app/LoadingComponent/Loaderpage";

function CheckCibilScore() {
  const [person_cibilscore, setPersonCibilScore] = useState("");
  const [person_name, setPersonName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [cibil, setCibil] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false); // New state for checkbox

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
      onSubmit: (values, { resetForm }) => {
        handleCibilSubmit(values);
        resetForm();
      },
    });

  const handleCibilSubmit = async (values) => {
    setisloading(true);

    try {
      const request = await fetch(`/api/checkcibilscore`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: values.phone,
          name: values.name,
        }),
      });

      const response = await request.json();

      if (response.data?.message === "Success") {
        setPersonCibilScore(
          response.data.data.equifaxReport.ScoreDetails[0].Value
        );
        setPersonName(
          response.data.data.equifaxReport.IDAndContactInfo.PersonalInfo.Name
            .FullName
        );

        await fetch(`/api/addcibilcheckers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: response.data.data.equifaxReport.IDAndContactInfo.PersonalInfo
              .Name.FullName,
            email: values.email,
            phone: values.phone,
            pan: values.pan,
            details: response,
          }),
        });

        setCibil(false);
        setIsFormSubmitted(true);
        //toast.dismiss();
        toast.success("Data loaded successfully!");
      } else if (response.data.error?.reason === "Not Found") {
        throw new Error("Data not found.");
      } else {
        throw new Error("Couldn't fetch details.");
      }
    } catch (error) {
      //toast.dismiss();
      toast.error(error.message || "An error occurred!");
    } finally {
      setisloading(false);
    }
  };

  const fetchCibil = () => {
    setOpenPopup(true);
    setCibil(true);
  };

  const closePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      {/* Page Component */}
      <div className="my-24">
        <Toaster position="bottom-left" reverseOrder={false} />
        <div className="flex bg-transparent lg:h-[500px] lg:my-4 lg:flex-row flex-col lg:justify-center items-center md:px-20">
          <Image
            alt="cibildetails"
            src={cibilimg}
            className="md:w-[50%] pt-6 h-full"
          />
          <div className="md:w-[50%] h-full md:space-y-2 flex justify-center flex-col">
            {!cibil && (
              <>
                {isFormSubmitted ? (
                  <div className="text-center text-green-500 font-medium">
                    <h2 className="px-6 font-sans xl:pl-32 text-xl font-semibold text-slate-900 text-left">
                      Name: {person_name}
                    </h2>
                    <p className="px-6 font-sans xl:pl-32 text-3xl md:pb-4 pb-2 font-semibold text-slate-900 text-left">
                      Cibil Score: {person_cibilscore}
                    </p>
                    <a href="/RetailerDashboard">Back To Home</a>
                  </div>
                ) : (
                  <>
                    <h2 className="xl:text-xl font-sans xl:pl-32 text-sm font-semibold text-slate-900 text-left">
                      Check your
                    </h2>
                    <p className="xl:text-5xl font-sans xl:pl-32 text-3xl md:pb-4 pb-2 font-semibold text-slate-900 text-left">
                      Cibil Score{" "}
                      <span className="md:text-4xl text-2xl">in one tap</span>
                    </p>

                    <button
                      onClick={fetchCibil}
                      className="bg-teal-500 xl:mx-32 p-2 mt text-lg font-semibold rounded-md text-white"
                    >
                      Check Now
                    </button>
                  </>
                )}
              </>
            )}

            {/* Form */}
            <div className="text-justify relative 2xl:px-32 mt-20">
              {cibil && (
                <div className="w-[90vw] lg:mt-0 -mt-20 md:w-[500px] mx-4 pb-6 md:px-0 bg-[#c0fada] shadow-md overflow-hidden rounded-md">
                  <div className="p-4">
                    <h2 className="md:text-2xl text-xl text-center font-sans font-semibold mb-2">
                      Saurah Cibil Checker
                    </h2>
                    <div className="max-h-[500px]">
                      {isloading ? (
                        <Loaderpage />
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          {/* Input Fields */}
                          {["name", "email", "phone", "pan"].map(
                            (field, index) => (
                              <div key={index}>
                                <label
                                  className="block text-sm font-medium text-gray-700"
                                  htmlFor={field}
                                >
                                  {field.charAt(0).toUpperCase() +
                                    field.slice(1)}
                                </label>
                                <input
                                  name={field}
                                  id={field}
                                  type={field === "email" ? "email" : "text"}
                                  placeholder={`Enter Your ${
                                    field.charAt(0).toUpperCase() +
                                    field.slice(1)
                                  }...`}
                                  value={values[field]}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                                {errors[field] && touched[field] && (
                                  <p className="form-error p-[2px] absolute text-[0.65rem] text-rose-500">
                                    {errors[field]}
                                  </p>
                                )}
                              </div>
                            )
                          )}

                          {/* Checkbox for agreement */}
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="agree"
                              checked={isAgreed}
                              onChange={() => setIsAgreed(!isAgreed)}
                              className="mr-2"
                            />
                            <label
                              htmlFor="agree"
                              className="text-sm text-gray-700"
                            >
                              I agree to fetch my CIBIL information
                            </label>
                          </div>

                          <div className="text-center">
                            <button
                              disabled={
                                !isAgreed || Object.keys(errors).length > 0
                              }
                              type="submit"
                              className="mt-4 px-4 py-2 disabled:cursor-not-allowed bg-[#14b8a6] text-white text-md font-medium rounded-md shadow-sm hover:scale-95"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
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
