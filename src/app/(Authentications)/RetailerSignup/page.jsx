import React from "react";
import RetailerRegistrationForm from "./RetailerRegistrationForm";

function page() {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl text-teal-500 font-sans font-semibold ">Welcome To Saurah</h1>
        <p className="mt-2 italic ">
          You Are One step Away from Joining Please fill The bellow Details And
          Be a Part of Us
        </p>
        <div className="flex w-48 mt-2 mb-6 overflow-hidden rounded   mx-auto md:mb-6">
            <div className="flex-1 h-2 bg-teal-200"></div>
            <div className="flex-1 h-2 bg-teal-400"></div>
            <div className="flex-1 h-2 bg-teal-300"></div>
          </div>
      </div>
      <RetailerRegistrationForm />
    </div>
  );
}

export default page;
