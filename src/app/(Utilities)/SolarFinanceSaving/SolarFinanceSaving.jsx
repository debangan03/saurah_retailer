import React from "react";

function SolarFinanceSaving() {
  return (
    <div>
      <div className="pt-8 pb-4 px-2 lg:px-8">
        <div className="lg:max-w-6xl max-w-screen mx-auto bg-transparent rounded-lg shadow-md overflow-hidden">
          <h1 className="lg:text-3xl text-xl font-semibold text-center text-gray-800 bg-[#c0f9dd] py-4 px-6">
            Solar Investment Analysis
          </h1>
          <div className="py-4 px-1 ">
            <table className="w-full   table-auto mb-6">
              <thead>
                <tr className=" bg-[#c0f9dd]  ">
                  <th className="py-2 px-4">Description</th>
                  <th className="py-2 px-4">Value</th>
                  <th className="py-2 px-4">Calculation</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="hover:bg-[#d6f8e7]">
                  <td className="py-2 px-4">
                    Average Cost of 1 kW of grid connected solar rooftop
                  </td>
                  <td className="py-2 px-4">₹ 70,000</td>
                  <td className="py-2 px-4"></td>
                </tr>
                <tr className="hover:bg-[#d6f8e7]">
                  <td className="py-2 px-4">
                  Considering government subsidy of 30%, installation cost of 1 kW 
                  </td>
                  <td className="py-2 px-4">₹ 40000</td>
                  <td className="py-2 px-4">₹ (70000-30000) </td>
                </tr>
                <tr className="hover:bg-[#d6f8e7]">
                  <td className="py-2 px-4">
                    Average Down payment required for taking loan
                  </td>
                  <td className="py-2 px-4">₹ 8000</td>
                  <td className="py-2 px-4">20% of ₹ 40000</td>
                </tr>
                <tr className="hover:bg-[#d6f8e7]">
                  <td className="py-2 px-4">Loan to be taken for 1 kW</td>
                  <td className="py-2 px-4">₹ 32000</td>
                  <td className="py-2 px-4">₹ 40000 -&nbsp; ₹ 8000 </td>
                </tr>
                <tr className="hover:bg-[#d6f8e7]">
                  <td className="py-2 px-4">
                    Monthly EMI payable (considering payback period of 4 years
                    and interest rate of 10% )
                  </td>
                  <td className="py-2 px-4">₹ 811</td>
                  <td className="py-2 px-4"></td>
                </tr>
                <tr className="hover:bg-[#d6f8e7]">
                  <td className="py-2 px-4">Avg cost of electricity per kWh</td>
                  <td className="py-2 px-4">₹ 6.29</td>
                  <td className="py-2 px-4"></td>
                </tr>
                <tr className="hover:bg-[#d6f8e7]">
                  <td className="py-2 px-4">
                    For 150 units of monthly electricity consumption, total
                    monthly electricity bill
                  </td>
                  <td className="py-2 px-4">₹ 943.5</td>
                  <td className="py-2 px-4">150 * ₹ 6.29</td>
                </tr>
                <tr className="hover:bg-[#d6f8e7]">
                  <td className="py-2 px-4">
                    Solar panel of 1kW provides 4.5kWh approx electricity per
                    day. Monthly electricity produced
                  </td>
                  <td className="py-2 px-4">135 kWh</td>
                  <td className="py-2 px-4">4.5*30</td>
                </tr>
                

                {/* Add more rows here */}
              </tbody>
            </table>
          </div>
          <h1 className="lg:text-2xl text-lg font-semibold text-gray-800  bg-[#c0f9dd] py-2 px-6">
          Insights
        </h1>
        <div className="p-6 bg-[#e0f9ed]">
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700">
              Electricity bill reduction:
            </p>
            <ul className="list-disc pl-4 text">
            <li className="text-gray-600">
              Electricity bill reduces from ₹ 943.5 to ₹ 94.35 monthly.
            </li>
            <li className="text-gray-600">
              Breakeven received within 5 years.
            </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700">
              Yearly savings after breakeven:
            </p>
            <ul className="list-disc pl-4">
            <li className="text-gray-600">
              After breakeven, yearly savings of roughly ₹ 10,000 for the remaining 20 years.
            </li>
            <li className="text-gray-600">
              Considering the lifespan of solar panels to be 25 years.
            </li></ul>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">
            If you have cash and invest the amount in any mutual fund,
            </p>
            <ul className="list-disc pl-4 font-semibold">
            <li className="text-gray-600">
            Average interest per year in mutual fund: 14%.
            </li>
            <li className="text-gray-600">
            Interest you pay as solar loan: 10%.
            </li></ul>
            
          </div>
          
          <h1 className="text-center text-blue-900 italic pt-6 text-xl font-sans font-semibold">"Choose solar: because the Sun never sends a bill.”</h1>
        </div>
        </div>
      </div>
      <div className="bg-gray-100  pb-8 px-4 sm:px-6 lg:px-8">
      

      
        
      
    </div>
    
    </div>
  );
}

export default SolarFinanceSaving;
