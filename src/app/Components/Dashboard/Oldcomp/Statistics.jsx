import React from "react";

function Statistics() {
  return (
    <div>
      <div className="md:h-100 md:pt-4 pv-6 mt-4 mb-10 py-8 md:px-20 px-2 ">
      <div className="min-h-72 bg-[#d6f8e7] shadow-md pb-6 shadow-slate-300  rounded-xl mb-10">
      <div className="px-4  mb-2 py-4 text-center md:mb-2 mt-10">
        <p className="mb-2 text-base md:text-lg font-semibold font-sans text-teal-500 ">
          Stats
        </p>
        <h2 className="pb-2 text-2xl font-sans font-semibold text-slate-800 md:text-5xl ">
          Let Our Numbers Talk
        </h2>
        <div className="flex w-64 md:w-72 mt-1 md:mt-3 mb-2 overflow-hidden rounded   mx-auto">
          <div className="flex-1 h-2 bg-teal-200"></div>
          <div className="flex-1 h-2 bg-teal-400"></div>
          <div className="flex-1 h-2 bg-teal-300"></div>
        </div>
      </div>
        <div className="relative grid gap-4 md:gap-8 md:grid-cols-3 md:px-32 p-4 ">
          <div className="relative md:w-80 p-6 rounded-2xl bg-[#eff8f3] shadow ">
            <div className="space-y-2">
              <div className="text-3xl">$192.1k</div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 ">
                <span>Loan Provided</span>
              </div>
            </div>
          </div>

          <div className="relative md:w-80 p-6 rounded-2xl bg-[#eff8f3] shadow ">
            <div className="space-y-2">
              <div className="text-3xl">1340 MW</div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 ">
                <span>Delivered</span>
              </div>
            </div>
          </div>
          <div className="relative md:w-80 p-6 rounded-2xl bg-[#eff8f3] shadow ">
            <div className="space-y-2">
              <div className="text-3xl">3543</div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 ">
                <span>Satisfied Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
}

export default Statistics;
