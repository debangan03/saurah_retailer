"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import retailicon from "../../../assets/retailicon.png";
import Link from "next/link";
import { useAuth } from "@/app/Context/AuthContext";
import rightimage from "../../../assets/partner.png";
import { BsStars } from "react-icons/bs";

import {
  FaCalculator,
  FaChartLine,
  FaMoneyBillWave,
  FaRegHandshake,
} from "react-icons/fa6";

// Milestone component for step-by-step registration process
const Milestone = ({ step, title, description }) => (
  <div className="relative mb-8 sm:mb-0">
    <div className="flex items-center">
      <div className="z-10 flex items-center justify-center w-10 h-10 bg-teal-100 rounded-full ring-8 ring-white shrink-0">
        <span className="font-bold text-teal-800">{step}</span>
      </div>
      <div className="hidden sm:flex w-full bg-gray-200 h-0.5" />
    </div>
    <div className="mt-3 sm:pr-8">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-base font-normal text-gray-500">{description}</p>
    </div>
  </div>
);

const DashboardMain = () => {
  const [loggedin, setloggedin] = useState(false);
  const { user } = useAuth();
  console.log(user);
  useEffect(() => {
    if (user) {
      setloggedin(true);
    }
  }, [user]);

  return (
    <>
      <div className="text-zinc-600">
        {/* Animation */}
        <div className="custom-shape-divider-top-1722285751">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            />
          </svg>
        </div>
        {/* Top Nav */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between px-4 md:px-10 items-center md:py-0 py-6">
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-lg md:text-xl font-semibold mb-4">
              Are your customers looking for loans to install rooftop solar at
              home?
            </p>
            <p className="text-base md:text-lg">
              We, at SAURAH, provide instant approved loans for your customers,
              at your doorstep.
            </p>
            <div className="flex justify-start space-x-4 mt-4 items-center relative">
              <p className="absolute top-14 left-5 font-bold text-red-500">
                *Tnc
              </p>
              <Link
                className="bg-teal-100 font-semibold hover:underline text-zinc-500 p-3 px-6 rounded-full"
                href={"/RetailerDashboard"}
              >
                Loan for Customer
              </Link>

              {!loggedin ? (
                <Link
                  className="bg-teal-600 text-zinc-50   px-8 p-3 font-semibold underline-offset-2 rounded-full hover:underline"
                  href={"/RetailerLogin"}
                >
                  Login
                </Link>
              ) : (
                <Link
                  className="bg-teal-600 text-zinc-50 px-8 p-3 font-semibold underline-offset-2 rounded-full hover:underline"
                  href={"/RetailerDashboard"}
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="mt-6 md:mt-0 md:w-2/5 w-full">
            <Image
              src={rightimage}
              alt="Solar Panel"
              layout="responsive"
              width={500} // Adjust the width and height as needed
              height={500}
              className="object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* About Saurah */}
      <section className="py-16 px-4  md:mt-44 xl:mt-10">
        <div className="w-full lg:px-16 px-2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Why SAURAH for you?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            <strong>
              Unlock Easy Financing for Renewable Energy with Saurah
            </strong>
          </p>
          <div className="flex justify-start">
            <div className="lg:h-64 h-[712px] w-1 bg-gradient-to-b from-emerald-600 to-amber-100" />
            <ul className="text-left pl-4 list-disc list-inside">
              <li className="text-gray-700">
                As a retailer of rooftop solar, you're likely accustomed to
                consumer inquiries about financing options, especially given the
                initial investment required for solar installation.
                <br />
                <br />
              </li>
              <li className="text-gray-700">
                Addressing these questions can be challenging, but with Saurah,
                you can simplify the process.
                <br />
                <br />
              </li>
              <li className="text-gray-700">
                Saurah is your go-to platform for seamless loan disbursal.
                Forget the hassle of contacting banks, submitting extensive
                documents, and keeping clients waiting.
                <br />
                <br />
              </li>
              <li className="text-gray-700">
                With Saurah, you can quickly verify yourself, onboard customers,
                and provide tailored financial solutions for their rooftop solar
                projects—all in one place.
                <br />
                <br />
              </li>
              <li className="text-gray-700">
                This means you can provide your customers with customized
                financing options quickly and efficiently, enhancing both their
                experience and your operational efficiency.
                <br />
                <br />
              </li>
              <li className="text-gray-700">
                Experience a hassle-free way to manage renewable energy
                financing and keep your business running smoothly with Saurah.
                <br />
                <br />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-br to-teal-400 via-teal-700 from-teal-600 w-fit mx-auto p-4 flex flex-col justify-center items-center space-y-2 rounded">
        <div className="flex justify-center space-x-4">
          <BsStars className="text-3xl text-white" />
          <span className="text-white font-bold underline text-2xl">
            Loan for customer, all the money for you.
          </span>
          <BsStars className="text-3xl text-white" />
        </div>
        <Link
          className="bg-white rounded-full font-sans text-sm font-semibold hover:scale-x-105 duration-500 px-4 py-2"
          href={"/"}
        >
          Know More
        </Link>
      </div>

      <section>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Benefits of Registering at SAURAH
            </h2>
            <p className="text-lg text-gray-600">
              Discover the advantages of partnering with us and streamline your
              solar business.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300">
              <FaRegHandshake className="text-teal-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Instant Loan Approval</h3>
                <p className="text-gray-600 mt-2">
                  Get instant loan approval for your customers.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300">
              <FaMoneyBillWave className="text-teal-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Finance Solutions</h3>
                <p className="text-gray-600 mt-2">
                  Provide tailored financial solutions.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300">
              <FaChartLine className="text-teal-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">
                  Operational Efficiency
                </h3>
                <p className="text-gray-600 mt-2">
                  Enhance operational efficiency.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300">
              <FaCalculator className="text-teal-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Simplified Process</h3>
                <p className="text-gray-600 mt-2">
                  Experience a hassle-free way to manage financing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Register as a Retailer
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow these simple steps to become a registered retailer at Saurah.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Milestone
              step={1}
              title="Sign Up"
              description="Complete the online registration form with your details."
            />
            <Milestone
              step={2}
              title="Verification"
              description="Submit necessary documents for verification."
            />
            <Milestone
              step={3}
              title="Approval"
              description="Receive approval and start offering loans."
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">How We Help</h2>
          <div className="flex justify-center space-x-6">
            <Image src={retailicon} alt="Retail Icon" width={50} height={50} />
            <p className="text-gray-700">
              We assist retailers in providing easy and fast financing options
              for their customers' solar projects. Our platform streamlines the
              loan process, ensuring quick approvals and disbursals.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-8">
        <p className="text-lg text-gray-700">
          Want to learn more about how Saurah can benefit your business?
        </p>
        <a
          target="_blank"
          className="bg-teal-600 text-white py-2 px-6 rounded-full inline-block mt-4 hover:bg-teal-700"
          href="https://saurah.com/ContactUs"
        >
          Contact Us
        </a>
      </div>
    </>
  );
};

export default DashboardMain;
