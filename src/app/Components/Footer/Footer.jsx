import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#d6f8e7] mt-4 shadow ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center relative text-2xl font-semibold whitespace-nowrap ">
              <span className="text-teal-500">Saurah</span>.Finance
              
              <span className="text-base text-teal-500 absolute -bottom-4 right-0">retail</span>
            </span>
          </Link>
          <ul className="flex flex-wrap  justify-center items-center mb-6 text-sm font-medium text-slate-700 sm:mb-0 ">
            <li>
              <a target="_blank" href={'https://www.saurah.com/About'} className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a target="_blank" href={`/PrivacyPolicy`} className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            
            <li className="pr-6">
              <a  target="_blank" href={`https://www.saurah.com/TermsAndConditions`} className="hover:underline">
                Terms And Conditions
              </a >
            </li>
            <li>
              <a target="_blank" href={"https://www.saurah.com/ContactUs"} className="hover:underline me-4 md:me-6" >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 text-center ">
          © 2024{" "}
          <a href="https://www.saurah.com" target="_blank" className="hover:underline">
            Saurah™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
