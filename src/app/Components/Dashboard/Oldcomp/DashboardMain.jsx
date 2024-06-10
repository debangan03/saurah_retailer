"use client";
import React from "react";
import Banner from "./Banner";
import Advertisements from "./Advertisements";
import LoanCalculator from "../New/LoanCalculator";
import AboutSolarFinance from "./AboutSolarFinance";
import CheckCibilScore from "../New/CheckCibilScore";
import Statistics from "./Statistics";
import AboutUs from "../New/AboutUs";
import Articles from "./Articles";


// import Responsive from "./ArticleSlider";

function DashboardMain() {


  return (
    <>
      <div>
        {/*  banner image component */}
        <Banner />
        {/*  Advertisement  component */}
        <Advertisements />
        {/* loan calculator */}
        <LoanCalculator />
        {/* about solar finance */}
        <AboutSolarFinance />
        {/* ckeck cibil Score */}
        <CheckCibilScore />
        {/* About Us */}
        <AboutUs />
        {/* Statistics */}
        {/* <Statistics/> */}
        {/* Articles */}
        <Articles />
        {/* </> */}
      </div>
    </>
  );
}

export default DashboardMain;
