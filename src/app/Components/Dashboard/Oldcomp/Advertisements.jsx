import React from "react";

function Advertisements() {
  return (
    <div className="z-20 grid grid-cols-3 text-center justify-between items-center md:mb-16 mb-10 gap-2 mt-4 md:mt-14 md:px-20 px-2 py-10 text-xl font-semibold">
      <div className="relative md:text-3xl text-[.75rem] ">
        <div className="lg:py-6 lg:mx-14 mr-2 py-1 md:mr-2 md:py-2 rounded-lg shadow-xl bg-[#cdfbe4]   ">
          <p className="text-black font-semibold font-sans ">
            Hassle free Loans <br className="md:block hidden" /> Upto ₹5 lakhs
          </p>
        </div>
        <div className="absolute right-0 top-0  h-full lg:h-[145px] lg:-mt-3 w-[1.5px] lg:w-[2px] bg-teal-500 rounded-md block" />
      </div>
      <div className="relative md:text-3xl text-[.75rem] ">
        <div className="lg:py-6 lg:mx-14 mr-2 py-1 md:mx-2 md:py-2 rounded-lg shadow-xl bg-[#cdfbe4]   ">
          <p className="text-black font-semibold font-sans ">
            Easy And Timely <br className="md:block hidden" /> Loan Approval
          </p>
        </div>
        <div className="absolute right-0 top-0  h-full lg:h-[145px] lg:-mt-3 w-[1.5px] lg:w-[3px] bg-teal-500 rounded-md block" />
      </div>
      <div className="relative md:text-3xl text-[.75rem] ">
        
        <div className="lg:py-6 lg:mx-14 mr-2 py-1 md:mx-2 md:py-2 rounded-lg shadow-xl bg-[#cdfbe4]   ">
          <p className="text-black font-semibold font-sans ">
          Low Rates Starting <br className="md:block hidden" /> at 12% APR
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Advertisements;
