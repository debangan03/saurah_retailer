"use client";
import React from "react";
import { useState } from "react";
import { solarcalculatorfunction } from "@/app/(Utilities)/SolarCalculator/solarcalculatorfunction";
import Link from "next/link";
let displayobj;
function LoanCalculator() {
  const [ebill, setebill] = useState("");
  const [unitcharges, setunitcharges] = useState("6.29");
  const [basecharges, setbasecharges] = useState("200");

  const [showemi, setshowemi] = useState(false);

  const [validdetails, setvaliddetails] = useState(true);

  const triggercal = () => {
    if (ebill != "" && parseFloat(ebill) >= 1250) {
      setvaliddetails(true);

      displayobj = solarcalculatorfunction(ebill, unitcharges, basecharges);
      if (displayobj.emi != "NaN") {
        setshowemi(true);
      }
    } else {
      setvaliddetails(false);
    }
  };

  const handleInput = (e) => {
    if (e.target.name == "ebill") {
      setebill(e.target.value);
      displayobj = {};
      setshowemi(false);
    }
  };
  return (
    <div className="mb-6">
      {" "}
      <section className="lg:px-10 px-2 mt-4">
        <div className="min-h-72 bg-slate-800 shadow-lg shadow-slate-700  rounded-xl mb-10">
          <h1 className="text-white text-xl lg:text-5xl p-8 font-semibold font-sans text-center">
            How much Solar Power do you need ?
          </h1>

          <div>
            <div className="flex flex-col lg:flex-row justify-center space-x-8 items-center  lg:px-80  mt-10 ">
              <div className=" lg:w-[50%] w-full px-10 lg:px-0">
                <div className="relative z-0 w-full mb-5 group">
                  {!validdetails && (
                    <h1 className="absolute -bottom-14 text-rose-500 pt-1 lg:pl-8 text-sm">
                      *Electricity bill should be equal to more than ₹1250{" "}
                    </h1>
                  )}
                  <button
                    type="button"
                    onClick={triggercal}
                    className="text-teal-900  block absolute bottom-2 right-0 w-fit hover:scale-95 hover:bg-transparent hover:text-white hover:border-2 hover:border-white h-fit  border-1 bg-white rounded-full font-semibold text-md p-2.5 text-center "
                  >
                    Calculate Now
                  </button>
                  <input
                    type="number"
                    name="ebill"
                    id="ebill"
                    className="block py-2.5 px-0 w-full text-2xl font-semibold text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                    placeholder=" "
                    value={ebill}
                    onChange={handleInput}
                  />
                  <label
                    htmlFor="loanamount"
                    className="peer-focus:font-medium absolute text-[0.675rem] md:text-sm text-gray-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Monthly Electricity Bill (in ₹)
                  </label>
                </div>
              </div>
              
            </div>

            {showemi && validdetails && (
              <>
                <div className="lg:flex grid lg:justify-evenly justify-center lg:px-32 realtive items-center  pb-4 ">
                  <div className="p-4 border-2 border-white rounded-xl my-4">
                    <h1 className="text-white text-center font-sans font-base pb-2 text-sm lg:text-base">
                      Considering ,
                    </h1>
                    <div className="flex justify-center space-x-10">
                      <h1 className="text-white font-sans font-base pb-2 text-sm lg:text-base">
                        Unit Charges : ₹ 6.29
                      </h1>
                      <h1 className="text-white font-sans font-base pb-2 text-sm lg:text-base">
                        Base Charges : ₹ 200
                      </h1>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-white font-semibold pb-2 text-lg lg:text-2xl">
                      Solar KW required &nbsp;:&nbsp;{" "}
                      {displayobj?.solar_KW_installer} units
                    </h1>
                    <h1 className="text-white font-semibold pb-2 text-lg lg:text-2xl">
                      Total Cost &nbsp;:&nbsp; ₹&nbsp; {displayobj?.total_cost}
                    </h1>
                  </div>
                </div>
                <div className=" text-center p-4 pb-10 text-gray-100 lg:bottom-4  bottom-0">
                  <p className="mb-3">
                    To get your personalized solar calculations,{" "}
                  </p>

                  <a
                  target="_blank"
                    href={`https://www.saurah.com/SolarCalculator?ebill=${ebill}&display=1`}
                    className="text-lg bg-slate-700 hover:bg-slate-900 p-2 shadow-md shadow-teal-500 rounded-lg"
                  >
                    Click here
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoanCalculator;
