"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import calimage from "../../assets/solarcal.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import {toast,Toaster} from 'react-hot-toast'
import { solarcalculatorfunction } from "./solarcalculatorfunction";
import { useSearchParams } from "next/navigation";
import GraphComponent from "./GraphComponents";
let displayobj;
function CalculatorComponent() {
  const router = useRouter();
  const token = localStorage.getItem('token');
  const searchParams = useSearchParams();
  const ebillp = searchParams.get("ebill");
  const displayp = searchParams.get("display");

  const ref = useRef();
  const [valueunit, setvalueunit] = useState(62.9);
  const [basecharges, setbasecharges] = useState(20);
  const [calculateclicked, setcalculateclicked] = useState(false);
  const [breakdownclicked, setbreakdownclicked] = useState(false);

  const [ebill, setebill] = useState("");
  useEffect(() => {
    if(!token){
      toast.error("Access Denied Please Login First")
      setTimeout(() => {
        router.push('/Signup')  
      }, 500);
     
    }
  }, [token])
  
  useEffect(() => {
    if (displayp == 1 && ebillp) {
      setebill(ebillp);
      displayobj = solarcalculatorfunction(ebillp, 6.29, 200);
      setcalculateclicked(true);
      ref.current?.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  const showcalculation = () => {};

  const handleSubmit = () => {
    ref.current?.scrollIntoView({ behavior: "auto" });
    setcalculateclicked(false);
    let unitcharges_actual = valueunit / 10;
    let basecharges_actual = basecharges * 10;
    displayobj = solarcalculatorfunction(
      ebill.toString(),
      unitcharges_actual.toString(),
      basecharges_actual.toString()
    );
    if (displayobj?.emi != "NaN" && parseFloat(displayobj?.emi) > 0) {
      setcalculateclicked(true);
    } else {
      toast.error("Electricity bill too low for solar financing");
    }
  };

  return (
    <div className="md:px-10 px-4 my-10 ">
      <Toaster/>
      <div className="shadow-md">
        <div className=" md:flex flex-wrap  border-t-2 ">
          <div className="lg:w-[45%] pl-20 lg:block hidden h-fit">
            <Image src={calimage} alt="image" />
          </div>
          <div className="lg:w-[50%]  w-full lg:px-20 py-10 px-4 h-full">
            <h2 className="lg:text-3xl text-xl font-semibold ">
              Calculate Solar Benifits
            </h2>
            <p className="mt-4 italic font-sans text-sm">
              Calculate your savings under the sun with our solar calculator -
              powering your wallet and the planet!
            </p>
            <div className="mt-4">
              <label htmlFor="Electricity bill" className=" font-semibold mb-2">
                Enter Your Electricity Bill Amount
              </label>
              <input
                type="text"
                value={ebill}
                onChange={(e) => {
                  setcalculateclicked(false);
                  setebill(e.target.value);
                  displayobj = {};
                }}
                placeholder="Enter your average monthly electricity bill"
                className="p-3 w-full border-2 focus:ring-2 focus:ring-teal-400 placeholder:italic border-teal-400 rounded-md"
              />
            </div>

            <div className="flex justify-center items-center mt-3 space-x-4">
              <div className="w-full relative">
                <label htmlFor="unitcharges" className=" font-semibold mb-2">
                  Unit Charges
                </label>

                <input
                  type="range"
                  name="unitcharges"
                  value={valueunit}
                  min="20"
                  max="100"
                  onChange={(e) => {
                    (displayobj = {}),
                      setvalueunit(e.target.value),
                      setcalculateclicked(false);
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-teal-600"
                />
                <span className="start-[1px] absolute -bottom-[12px] text-[.7rem] ">
                  |
                </span>
                <span className="start-0 absolute -bottom-[45px] text-[.7rem] w-4">
                  Min 2
                </span>
                <span className="end-[1px] absolute -bottom-[12px] text-[.7rem]">
                  |
                </span>
                <span className="end-0 absolute -bottom-[45px] text-center text-[.7rem] w-4">
                  Max 10
                </span>
              </div>
              <div className="text-center">
                <input
                  value={valueunit / 10}
                  onChange={(e) => {
                    setcalculateclicked(false);
                    displayobj = {};
                    if (e.target.value === "") {
                      setvalueunit(); // Set value to 2 if input is empty
                    } else {
                      setvalueunit(e.target.value * 10);
                    }
                  }}
                  type="number"
                  className="p-2 w-20 rounded-md border-2 text-center focus:ring-2 focus:ring-teal-400 placeholder:italic border-teal-400"
                />
              </div>
            </div>

            <div className="flex justify-center items-center mt-12 space-x-4 ">
              <div className="w-full relative ">
                <label htmlFor="unitcharges" className=" font-semibold mb-2">
                  Base Charges
                </label>

                <input
                  type="range"
                  name="unitcharges"
                  value={basecharges}
                  min="5"
                  max="100"
                  onChange={(e) => {
                    (displayobj = {}),
                      setbasecharges(e.target.value),
                      setcalculateclicked(false);
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-teal-600"
                  style={{
                    backgroundImage: `linear-gradient(90deg, #10B981 ${basecharges}%, #e5e7eb ${basecharges}%)`,
                  }} // Tailwind green-500 and gray-200
                />
                <span className="start-[1px] absolute -bottom-[12px] text-[.7rem] ">
                  |
                </span>
                <span className="start-0 absolute -bottom-[45px] text-[.7rem] w-4">
                  Min 2
                </span>
                <span className="end-[1px] absolute -bottom-[12px] text-[.7rem]">
                  |
                </span>
                <span className="end-0 absolute -bottom-[45px] text-center text-[.7rem] w-4">
                  Max 10
                </span>
              </div>
              <div className="text-center">
                <input
                  value={basecharges * 10}
                  onChange={(e) => {
                    setcalculateclicked(false);
                    displayobj = {};
                    if (e.target.value === "") {
                      setbasecharges(); // Set value to 2 if input is empty
                    } else {
                      setbasecharges(e.target.value / 10);
                    }
                  }}
                  type="number"
                  className="p-2 w-20 rounded-md border-2 text-center focus:ring-2 focus:ring-teal-400 placeholder:italic border-teal-400"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                handleSubmit(0);
              }}
              className="text-lg p-2 mt-16 bg-teal-500 hover:bg-teal-600 text-white  font-semibold w-full rounded-lg "
            >
              Calculate Now
            </button>
          </div>
        </div>
        <div>
          {calculateclicked && (
            <div className="bg-[#d6f8e7] py-4 px-1">
              <div className="text-center mb-4 lg:mb-0  mx-auto w-fit border-2 p-2 border-black/40 text-slate-500  rounded-md text-sm font-semibold ">
               <h2 className=" w-fit ">
                    Our services are currently available for capacities up to
                    10kW. Please note that the provided calculations are
                    estimates, and actual costs may vary.
                  </h2></div>
              <div className="relative flex justify-center items-center md:flex-row flex-col  pb-4 bg-[#d6f8e7]">
                <div className="lg:w-[55%] md:pl-20 lg:block rounded-md   h-fit">
                  <GraphComponent
                    initialbill={ebill}
                    emi_i={displayobj?.emi}
                    initialcost={displayobj?.down_payment}
                    newbill={displayobj?.new_electricity_charges}
                    tenure_i={displayobj?.tenure}
                  />
                </div>
                <div className="absolute right-4   lg:bottom-4  bottom-2">
                  {!breakdownclicked && (
                    <button
                      type="button"
                      onClick={() => {
                        showcalculation(), setbreakdownclicked(true);
                      }}
                      className="   text-sm lg:text-base text-teal-500  "
                    >
                      <span className="flex items-center justify-center">
                        <VscTriangleDown />
                        &nbsp;View Calculation Breakdowm{" "}
                      </span>
                    </button>
                  )}{" "}
                  {breakdownclicked && (
                    <button
                      type="button"
                      onClick={() => {
                        setbreakdownclicked(false);
                      }}
                      className="  text-sm lg:text-base text-rose-500  "
                    >
                      <span className="flex items-center justify-center">
                        <VscTriangleUp />
                        &nbsp;Hide Calculation Breakdowm{" "}
                      </span>
                    </button>
                  )}
                </div>
                <div className="lg:w-[50%] relative  w-full lg:px-20 px-4 h-full my-10">
                 
                  <h3 className="text-2xl font-semibold font-sans text-teal-800 flex  items-center justify-start">
                    <span className="pr-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                    Your Savings
                  </h3>
                  <div className="  lg:px-[36px] space-y-1 font-base pt-4 text-slate-500">
                    <dl className="grid grid-cols-2 gap-4 lg:max-w-sm  px-1 max-w-screen">
                      <dt className="lg:text-xl  font-semibold font-sans">
                        Your EMI Amount&nbsp;:
                      </dt>
                      <dd className=" lg:text-lg font-bold text-slate-700">
                        ₹{displayobj?.emi}
                      </dd>
                      <dt className="lg:text-xl  font-semibold font-sans">
                        Total Cost&nbsp;:
                      </dt>
                      <dd className=" lg:text-lg font-bold text-slate-700">
                        ₹{displayobj?.total_cost}
                      </dd>
                      <dt className="lg:text-xl  font-semibold font-sans">
                        Interest Paid&nbsp;:
                      </dt>
                      <dd className=" lg:text-lg font-bold text-slate-700">
                        ₹{displayobj?.interest_paid}
                      </dd>
                      <dt className="lg:text-xl font-semibold font-sans">
                        Solar KW Installed&nbsp;:
                      </dt>
                      <dd className=" lg:text-lg font-bold text-slate-700">
                        {displayobj?.solar_KW_installer} units
                      </dd>
                      <dt className="lg:text-xl font-semibold font-sans">
                        Yearly Savings&nbsp;:
                      </dt>
                      <dd className=" lg:text-lg font-bold text-slate-700">
                        ₹{displayobj?.yearly_savings}
                      </dd>
                      <dt className="lg:text-xl font-semibold font-sans">
                        Rooftop area&nbsp;:
                      </dt>
                      <dd className=" lg:text-lg font-bold text-slate-700">
                        {displayobj?.rooftop_area} sq.ft
                      </dd>
                      <dt className="lg:text-xl font-semibold font-sans">
                        Emission Savings&nbsp;:
                      </dt>
                      <dd className=" lg:text-lg font-bold text-slate-700">
                        {displayobj?.emission_savings} tonnes CO2 in 25 years
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              {breakdownclicked && (
                <div className="h-fit p-4  pr-0  justify-end bg-[#d6f8e7] grid lg:grid-cols-2 lg:pl-36">
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-1 lg:max-w-[28rem]  px-1 max-w-screen">
                    <dt className="lg:text-base text-sm font-sans">
                      Units Used&nbsp;:
                    </dt>
                    <dd className=" lg:text-base text-sm text-slate-700">
                      {displayobj?.units_used}
                    </dd>
                    <dt className="lg:text-base text-sm font-sans">
                      Units per KW&nbsp;:
                    </dt>
                    <dd className=" lg:text-base text-sm text-slate-700">
                      {displayobj?.units_per_KW}
                    </dd>
                    <dt className="lg:text-base text-sm font-sans">
                      Estimated KW&nbsp;:
                    </dt>
                    <dd className=" lg:text-base text-sm text-slate-700">
                      {displayobj?.estimated_KW} units
                    </dd>
                    <dt className="lg:text-base text-sm font-sans">
                      Max Total Cost&nbsp;:
                    </dt>
                    <dd className="lg:text-base text-sm text-slate-700">
                      ₹{displayobj?.max_total_cost}
                    </dd>
                    <dt className="lg:text-base text-sm font-sans">
                      Subsidy&nbsp;:
                    </dt>
                    <dd className="lg:text-base text-sm text-slate-700">
                      ₹{displayobj?.subsidy}
                    </dd>
                  </dl>
                  <dl className="grid grid-cols-2 gap-x-8 mt-1 gap-y-1 lg:max-w-[28rem]  px-1 max-w-screen">
                    <dt className="lg:text-base text-sm font-sans">
                      New Electricity Charges&nbsp;:
                    </dt>
                    <dd className="lg:text-base text-sm text-slate-700">
                      ₹{displayobj?.new_electricity_charges}
                    </dd>
                    <dt className="lg:text-base text-sm font-sans">
                      Down Payment&nbsp;:
                    </dt>
                    <dd className=" lg:text-base text-sm text-slate-700">
                      ₹{displayobj?.down_payment}
                    </dd>
                    <dt className="lg:text-base text-sm font-sans">
                      ROI&nbsp;:
                    </dt>
                    <dd className=" lg:text-base text-sm text-slate-700">
                      {displayobj?.roi} %
                    </dd>
                    <dt className="lg:text-base text-sm font-sans">
                      Tenure&nbsp;:
                    </dt>
                    <dd className="lg:text-base text-sm text-slate-700">
                      {displayobj?.tenure} months
                    </dd>
                    <dt className="lg:text-base text-sm font-sans">
                      Breakeven Tenure&nbsp;:
                    </dt>
                    <dd className="lg:text-base text-sm text-slate-700">
                      {displayobj?.breakeven_tenure} months
                    </dd>
                  </dl>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="sr-only h-10">hello</div>
      </div>
      <div>
        <p
          ref={ref}
          className="text-center mt-6 text-blue-900 italic pt-6 text-xl font-sans font-semibold"
        >
          “Why burn fossil fuels when you can harness the sun?”
        </p>
      </div>
    </div>
  );
}

export default CalculatorComponent;
