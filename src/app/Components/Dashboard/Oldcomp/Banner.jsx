import React from "react";
import bannerimg from "../../assets/banner2.jpg";
import Image from "next/image";
import Link from "next/link";
import savingsimg from "../../assets/savings.png";
import questionmarkimg from "../../assets/questionmark.png";

function Banner() {
  return (
    <div className="relative  ">
      <Image
        loading="lazy"
        placeholder="blur"
        className="w-screen lg:h-[81vh] h-[65vh] object-cover object-center"
        src={bannerimg}
        alt="banner"
      />
      <div className="absolute top-0 bottom-0 bg-black/30 right-0 left-0">
        <div className="xl:w-[40%] w-[80%] lg:mt-32 mt-10 ml-10 xl:ml-24  text-white text-3xl md:text-6xl font-bold">
          <h1>Finance Your Solar</h1>
          <p className="mt-4 mb-1 font-light text-[1.2rem] xl:text-[1.75rem] text-white text-wrap pr-10">
          Energize Your Roof
          </p>
          <p className="lg:mt-4 mb-4 font-light text-[1rem] xl:text-[1.25rem] text-white text-wrap pr-10">
          Simplify Your Loan

          </p>
          <Link
            href={`/ApplyLoan`}
            className="border-white  cursor-pointer font-semibold font-sans z-0 bg-black/10 border-2 rounded-full px-4 py-2 hover:bg-white hover:text-black/70   text-white text-lg"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* card items */}
      <div className="card items">
        {/* laptop view */}
        <div className="h-36 xl:block absolute hidden xl:max-w-[52%]  w-full bottom-3 right-0 ">
          <div className="grid grid-cols-3 justify-end gap-2   h-full w-full items-center p-2">
            <Link
              className="xl:w-48 hover:scale-105 hover:duration-300 cursor-pointer bg-neutral-800/40 shadow-neutral-400 shadow-md rounded-xl  h-full "
              href={"/SolarFinanceSaving"}
            >
              <div>
                <h1 className="text-center py-2    text-gray-200">
                  Solar Finance Saving
                </h1>
                <div className="flex justify-center items-center">
                  <Image src={savingsimg} height={50} width={60} alt="abc" />
                </div>
              </div>
            </Link>
            <Link
              className="w-48 hover:scale-105 hover:duration-300 cursor-pointer bg-neutral-800/40 shadow-neutral-400 shadow-md rounded-xl  h-full "
              href={"/SolarCalculator"}
            >
              <div>
                <h1 className="text-center py-2 text-gray-200">
                  Solar Calculator
                </h1>
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={56}
                    height={44}
                    viewBox="0 0 32 32"
                    id="Calculator"
                    className="mt-3"
                  >
                    <path
                      d="M6 32h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2zm16-10a2 2 0 1 1 .001-4.001A2 2 0 0 1 22 22zm2 4a2 2 0 1 1-4.001-.001A2 2 0 0 1 24 26zm-2-10a2 2 0 1 1 .001-4.001A2 2 0 0 1 22 16zM8 8V4h16v4H8zm8 14a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 22zm2 4a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 26zm-2-10a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 16zm-6-4a2 2 0 1 1-.001 4.001A2 2 0 0 1 10 12zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 10 18zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 10 24z"
                      fill="#13b4a4"
                      className="color000000 svgShape"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              className="w-48 hover:scale-105 hover:duration-300 cursor-pointer bg-neutral-800/40 shadow-neutral-400 shadow-md rounded-xl  h-full "
              href={"/About"}
            >
              <div>
                <h1 className="text-center pt-2 pb-1 text-gray-200">
                  Why Saurah
                </h1>
                <div className="flex justify-center py-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-20 h-16 text-teal-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* mobile view */}
        <div className="absolute bottom-0 left-0 h-40 right-0  xl:hidden grid grid-cols-3 justify-evenly items-center space-x-2 text-center p-2">
          <Link href={"/SolarFinanceSaving"}>
            <div className="bg-neutral-800/40 shadow-neutral-400 shadow-md px-2 h-24 py-2  rounded-md hover:scale-105 hover:duration-300 ">
              <p className="text-[.7rem] h-12 text-white ">
                Solar Finance Saving
              </p>
              <div className="flex justify-center items-center">
                <Image src={savingsimg} height={30} width={30} alt="abc" />
              </div>
            </div>
          </Link>
          <Link href={"/SolarCalculator"}>
            <div className="bg-neutral-800/40 shadow-neutral-400 shadow-md px-2 h-24 py-2   rounded-md hover:scale-105 hover:duration-300 ">
              <p className="text-[.7rem] h-12 text-white ">Solar Calculator</p>
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 32 32"
                  id="Calculator"
                  className=""
                >
                  <path
                    d="M6 32h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2zm16-10a2 2 0 1 1 .001-4.001A2 2 0 0 1 22 22zm2 4a2 2 0 1 1-4.001-.001A2 2 0 0 1 24 26zm-2-10a2 2 0 1 1 .001-4.001A2 2 0 0 1 22 16zM8 8V4h16v4H8zm8 14a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 22zm2 4a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 26zm-2-10a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 16zm-6-4a2 2 0 1 1-.001 4.001A2 2 0 0 1 10 12zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 10 18zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 10 24z"
                    fill="#13b4a4"
                    className="color000000 svgShape"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>
          <Link href={"/About"}>
            <div className="bg-neutral-800/40 shadow-neutral-400 shadow-md px-2 h-24 py-2   rounded-md hover:scale-105 hover:duration-300 ">
              <p className="text-[.7rem] h-12 text-white ">Why Saurah</p>
              <div className="flex justify-center items-center">
                <Image src={questionmarkimg} height={30} width={30} alt="abc" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
