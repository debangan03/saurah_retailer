import Image from "next/image";
import React from "react";
import retailicon from "../../../assets/retailicon.png";
import customerapply from "../../../assets/customerapply.png";
import incentives from "../../../assets/incentive.png";
import Link from "next/link";
import AboutUs from "./AboutUs";
import LoanCalculator from "./LoanCalculator";
import CheckCibilScore from "../../Dashboard/New/CheckCibilScore";

function DashboardMain() {
  return (
    <div className="my-10 lg:px-20 px-4">
      <h1 className="text-center text-3xl font-sans font-semibold ">
        Welcome to <span className="text-[#14b8a5]">Saurah</span>.Finance
        Retailer
      </h1>
      <div className="italic font-sans text-lg mt-10">
        At Saurah Finance Retailer, we are committed to providing innovative
        financing solutions for your solar energy needs. Whether you're looking
        to install solar panels on your home or business, we offer flexible
        financing options to make sustainable energy accessible and affordable.
        <p>
          Our team of experts is dedicated to guiding you through every step of
          the financing process, ensuring that you receive the best possible
          terms and rates. We understand the importance of renewable energy and
          are passionate about helping our customers reduce their carbon
          footprint while saving on energy costs.
        </p>
        <p>
          Join the green energy revolution with Saurah Finance Retailer and take
          the first step towards a brighter, more sustainable future.
        </p>
      </div>

      <div className="grid grid-row   gap-5 lg:grid-flow-col justify-between items-center mt-16">
        <Link
          href={"/RetailerSignup"}
          className="outline-dashed hover:scale-105 duration-500 cursor-pointer p-10 rounded-xl bg-[#d9eeeb] outline-[3px] outline-[#40beb0]  "
        >
          <div className="p-2 border-[2px] border-black w-fit rounded-md">
            <p>Join As Retailer</p>
          </div>
          <div className="flex justify-center border-2 border-[#3ed78a] w-fit mx-auto items-center m-5 p-2 rounded-xl  ">
            <Image alt="icon" src={retailicon} height={50} width={50} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, molestias.
          </p>
        </Link>

        <Link
          href={"/ApplyLoan"}
          className="outline-dashed hover:scale-105 duration-500 cursor-pointer p-10 rounded-xl bg-[#d9eeeb] outline-[3px] outline-[#40beb0]  "
        >
          <div className="p-2 border-[2px] border-black w-fit rounded-md">
            <p>Apply On Behalf Of Customer</p>
          </div>
          <div className="flex justify-center border-2 border-[#3ed78a] w-fit mx-auto items-center m-5 p-2 rounded-xl">
            <Image alt="icon" src={customerapply} height={50} width={50} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, molestias.
          </p>
        </Link>

        <Link
          href={"/Benifits"}
          className="outline-dashed p-10 rounded-xl hover:scale-105 duration-500 cursor-pointer bg-[#d9eeeb] outline-[3px] outline-[#40beb0]  "
        >
          <div className="p-2 border-[2px] border-black w-fit rounded-md">
            <p>View Benifits</p>
          </div>
          <div className="flex justify-center border-2 border-[#3ed78a] w-fit mx-auto items-center m-5 p-2 rounded-xl">
            <Image alt="icon" src={incentives} height={50} width={50} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, molestias.
          </p>
        </Link>
      </div>
      <AboutUs />
      <LoanCalculator />
      <CheckCibilScore />
      <div className="mx-auto text-xl font-sans text-center border-2 w-fit p-2 border-black rounded-md">
        <span>Learn More About SaurahFinance Visit </span>{" "}
        <a
          className="hover:scale-105 underline underline-offset-2  "
          target="_blank"
          href="https://www.saurah.com"
        >
          www.saurah.com
        </a>
      </div>
    </div>
  );
}

export default DashboardMain;
