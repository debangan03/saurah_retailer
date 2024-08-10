"use client";
import React, { useState, useRef } from "react";
import { useAuth } from "../Context/AuthContext";
import Loaderpage from "../LoadingComponent/Loaderpage";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { SlMagnet, SlUser, SlUserFollowing } from "react-icons/sl";
import { GiPayMoney } from "react-icons/gi";
import { CgMore } from "react-icons/cg";
import { AiOutlineCalculator } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { IoIosLogOut, IoMdHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";

//import inner components

import Profile from "./Components/Profile";
import WelcomePage from "./Components/Welcome";
import CalculatorComponent from "../(Utilities)/SolarCalculator/CalculatorComponent";
import { HomeMaxOutlined, HomeMiniSharp } from "@mui/icons-material";
import { MdContactSupport, MdOutlineContactSupport } from "react-icons/md";
import CheckEligibility from "./Components/CheckEligibility";
import ComingSoon from "./Components/ComingSoon";
import LeadsPage from "./Components/LeadsPage";

//end of import

function DashBoard() {
  const ref = useRef();
  const router = useRouter();
  const { user, loading } = useAuth();
  const [activeContent, setActiveContent] = useState("profile");

  const tooglesidebar = () => {
    ref.current.classList.toggle("hidden");
  };

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  if (loading) {
    return <Loaderpage />;
  }

  if (!user) {
    toast.error("Action not allowed, please login.");
    setTimeout(() => {
      router.push("/RetailerLogin");
    }, 2000);
    return <Loaderpage />;
  }

  const renderContent = () => {
    switch (activeContent) {
      case "profile":
        return (
          <div>
            <Profile />
          </div>
        );
      case "leads":
        return <div><LeadsPage/></div>;
      case "eligibility":
        return <div><CheckEligibility/></div>;
      case "calculator":
        return (
          <div>
            <CalculatorComponent />
          </div>
        );
      case "subsity":
        return <div><ComingSoon/></div>;
      case "analytics":
        return <ComingSoon/>;
      case "others":
        return <div><ComingSoon/></div>;
      default:
        return (
          <div>
            <WelcomePage />
          </div>
        );
    }
  };

  return (
    <div>
      <div className="lg:flex hidden items-center justify-start h-full w-screen">
        <div className="sidebar w-[18%] back h-[100vh] overflow-y-auto px-4 pt-10 bg-neutral-800/80 text-white relative">
          <img
            src="https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg"
            alt="bg"
            className="absolute top-0 bottom-0 left-0 right-0 -z-20 h-full w-full object-cover object-center"
          />
          <div>
            <h3 className="text-2xl font-semibold text-neutral-200 text-center">
              Dashboard
            </h3>
            <hr className="mb-4 border border-neutral-500" />
          </div>
          <ul className="space-y-6 px-4 min-h-[80vh] font-thin">
            <li
              onClick={() => handleContentChange("profile")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "profile"
                  ? "bg-teal-600"
                  : "hover:bg-teal-700"
              }`}
            >
              <SlUser /> <span>Profile</span>
            </li>

            <li
              onClick={() => handleContentChange("leads")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "leads" ? "bg-teal-600" : "hover:bg-teal-700"
              }`}
            >
              <SlMagnet /> <span>Leads</span>
            </li>
            <li
              onClick={() => handleContentChange("eligibility")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "eligibility"
                  ? "bg-teal-600"
                  : "hover:bg-teal-700"
              }`}
            >
              <SlUserFollowing /> <span>Check Eligibility</span>
            </li>
            <li
              onClick={() => handleContentChange("calculator")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "calculator"
                  ? "bg-teal-600"
                  : "hover:bg-teal-700"
              }`}
            >
              <AiOutlineCalculator /> <span>Solar Calculator</span>
            </li>
            <li
              onClick={() => handleContentChange("subsity")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "subsity"
                  ? "bg-teal-600"
                  : "hover:bg-teal-700"
              }`}
            >
              <GiPayMoney /> <span>Subsity Details</span>
            </li>
            <li
              onClick={() => handleContentChange("analytics")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "analytics"
                  ? "bg-teal-600"
                  : "hover:bg-teal-700"
              }`}
            >
              <IoAnalytics /> <span>Analytics</span>
            </li>
            <li
              onClick={() => handleContentChange("others")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "others" ? "bg-teal-600" : "hover:bg-teal-700"
              }`}
            >
              <CgMore /> <span>Others</span>
            </li>
            <li
              onClick={() => {
                if (confirm("are You sure want to Logout ?")) {
                  localStorage.removeItem("token");
                  window.location = "/";
                }
              }}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize `}
            >
              <IoIosLogOut  /> <span>Logout</span>
            </li>
          </ul>
          <div className="flex justify-center items-center space-x-6">
            <IoMdHome
              onClick={() => router.push("/")}
              className="size-6 hover:text-teal-400 cursor-pointer"
            />
            <MdContactSupport
              onClick={() => router.push("/")}
              className="size-6 hover:text-teal-400 cursor-pointer"
            />
            <FaCircleInfo
              onClick={() => router.push("/")}
              className="size-5 hover:text-teal-400 cursor-pointer"
            />
          </div>
        </div>

        <div className="content w-[82%] overflow-y-scroll overflow-x-hidden  h-[100vh]">
          {renderContent()}
        </div>
      </div>

      <div className="relative lg:hidden">
        <div
          ref={ref}
          className="sidebar w-[80%] z-30 absolute back h-[100vh] overflow-y-auto px-4 pt-10 bg-neutral-800/80 text-white"
        >
          <VscClose
            className="absolute right-2 top-2 size-6"
            onClick={tooglesidebar}
          />

          <img
            src="https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg"
            alt="bg"
            className="absolute top-0 bottom-0 left-0 right-0 -z-10 hidden h-full w-full object-cover object-center"
          />
          <div>
            <h3 className="text-2xl font-semibold text-neutral-200 text-center">
              Dashboard
            </h3>
            <hr className="mb-4 border border-neutral-500" />
          </div>
          <ul className="space-y-6 px-4 font-thin min-h-[80vh]">
            <li
              onClick={() => handleContentChange("profile")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "profile"
                  ? "bg-teal-600"
                  : "hover:bg-teal-700"
              }`}
            >
              <SlUser /> <span>Profile</span>
            </li>
            <li
              onClick={() => handleContentChange("leads")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "leads" ? "bg-teal-600" : "hover:bg-teal-700"
              }`}
            >
              <SlMagnet /> <span>Leads</span>
            </li>
            <li
              onClick={() => handleContentChange("eligibility")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "eligibility"
                  ? "bg-teal-600"
                  : "hover:bg-teal-700"
              }`}
            >
              <SlUserFollowing /> <span>Check Eligibility</span>
            </li>
            <li
              onClick={() => handleContentChange("calculator")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "calculator"
                  ? "bg-teal-600"
                  : "hover:bg-teal-700"
              }`}
            >
              <AiOutlineCalculator /> <span>Solar Calculator</span>
            </li>
            <li
              onClick={() => handleContentChange("subsity")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "subsity"
                  ? "bg-teal-600"
                  : "hover:bg-teal-700"
              }`}
            >
              <GiPayMoney /> <span>Subsity Details</span>
            </li>
            <li
              onClick={() => handleContentChange("analytics")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "analytics"
                  ? "bg-teal-600"
                  : "hover:bg-teal-700"
              }`}
            >
              <IoAnalytics /> <span>Analytics</span>
            </li>
            <li
              onClick={() => handleContentChange("others")}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize ${
                activeContent === "others" ? "bg-teal-600" : "hover:bg-teal-700"
              }`}
            >
              <CgMore /> <span>Others</span>
            </li>
            <li
              onClick={() => {
                if (confirm("are You sure want to Logout ?")) {
                  localStorage.removeItem("token");
                  window.location = "/";
                }
              }}
              className={`flex justify-start text-neutral-200 font-[300] cursor-pointer rounded p-2 px-6 items-center space-x-2 hover:scale-105 duration-500 capitalize `}
            >
              <IoIosLogOut  /> <span>Logout</span>
            </li>
          </ul>
          <div className="flex justify-center items-center space-x-6">
            <IoMdHome
              onClick={() => router.push("/")}
              className="size-6 hover:text-teal-400 cursor-pointer"
            />
            <MdContactSupport
              onClick={() => router.push("/")}
              className="size-6 hover:text-teal-400 cursor-pointer"
            />
            <FaCircleInfo
              onClick={() => router.push("/")}
              className="size-5 hover:text-teal-400 cursor-pointer"
            />
          </div>
        </div>
        <div className="content overflow-scroll  w-[100%]  h-[100vh]">
          <div className="flex bg-teal-800 items-center z-0 relative justify-between p-4  text-white lg:hidden">
            <button onClick={() => tooglesidebar()}>
              <FaBars size={24} />
            </button>
            <h1 className="text-2xl">Dashboard</h1>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
