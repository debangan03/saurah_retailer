"use client";
import { solarcalculatorfunction } from "@/app/(Utilities)/SolarCalculator/solarcalculatorfunction";
import { useAuth } from "@/app/Context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const LoanApplicationForm = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      toast.error('Please login to access this page');
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  }, [router]);

  const sampleData = {
    "123456": { lastBill: "$120.50", loanAmount: "1000" },
    "654321": { lastBill: "$200.75", loanAmount: "1500" },
    // Add more sample data here
  };

  const [formData, setFormData] = useState({
    retailerId: user?.id,
    customerName: "",
    email: "",
    phone: "",
    panNo: "",
    electricityAccountNo: "",
    electricityBill: "",
    amountForLoan: "",
    electricityProvider: "", // New field
    unitCharges: "6.29", // New field
    baseCharges: "200", // New field
  });

  const electricityProviders = [
    "APEPDCL", "APSPDCL", "APDCL", "NBPDCL", "SBPDCL", "CH_ELEC",
    "CSPDCL", "DNH", "MUNCIPAL_DL", "TATA_DL", "UPAY_GOA", "GOA_ELEC",
    "MGVCL", "PGVCL", "UGVCL", "DGVCL", "DHBVN", "UHBVN", "HESCOM",
    "BESCOM", "GESCOM", "MESCOM", "CESCOM", "KSEB", "MPCZ", "MPEZ",
    "MPWZ", "RELIANCE_MH", "MSEDCL", "TATA_MUMBAI", "NAGALAND", "ORISSA_CENTRAL",
    "ORISSA", "PSPCL", "SIKKIM", "TNEB", "TSSPDCL", "UPCL", "CESC", "WBSEDCL"
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [billFound, setBillFound] = useState(false);

  useEffect(() => {
    const { electricityAccountNo } = formData;
    if (electricityAccountNo && sampleData[electricityAccountNo]) {
      setBillFound(true);
      setFormData((prevFormData) => ({
        ...prevFormData,
        electricityBill: `Last Bill: ${sampleData[electricityAccountNo].lastBill}`,
        amountForLoan: sampleData[electricityAccountNo].loanAmount,
      }));
    } else {
      setBillFound(false);
      setFormData((prevFormData) => ({
        ...prevFormData,
        electricityBill: "",
        amountForLoan: "",
      }));
    }
  }, [formData.electricityAccountNo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      const loanamount= solarcalculatorfunction(parseFloat(formData.electricityBill),parseFloat(formData.unitCharges),parseFloat(formData.baseCharges)).total_cost;
      // Simulate API call delay (remove this in actual implementation)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(formData);
      
      // Replace with actual API call
      const response = await fetch("/api/applyloanforcustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...formData,retailerId:user?.id,loanamount:loanamount}),
      });

      if (!response.ok) {
        throw new Error("Failed to submit loan application");
      }

      toast.success("Loan application submitted successfully");
      setTimeout(() => {
        router.push('/RetailerDashboard');
      }, 1000);
    } catch (error) {
      console.error("Error submitting loan application:", error);
      toast.error("Failed to submit loan application");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user?.id) return <>Loading...</>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-teal-500 mb-6 text-center">Apply for a Loan</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label htmlFor="retailerId" className="block text-gray-700">Retailer ID</label>
            <input
              type="text"
              id="retailerId"
              name="retailerId"
              value={formData.retailerId??user?.id}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
              readOnly
            />
          </div>
          <div>
            <label htmlFor="customerName" className="block text-gray-700">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="panNo" className="block text-gray-700">Customer PAN No.</label>
            <input
              type="text"
              id="panNo"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          {/* <div className="col-span-1 lg:col-span-2">
            <label htmlFor="address" className="block text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div> */}
          <div>
            <label htmlFor="electricityAccountNo" className="block text-gray-700">Electricity Account No.</label>
            <input
              type="text"
              id="electricityAccountNo"
              name="electricityAccountNo"
              value={formData.electricityAccountNo}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="electricityProvider" className="block text-gray-700">Electricity Provider</label>
            <input
              type="text"
              list="electricityProviders"
              id="electricityProvider"
              name="electricityProvider"
              value={formData.electricityProvider}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
            <datalist id="electricityProviders">
              {electricityProviders.map((provider) => (
                <option key={provider} value={provider} />
              ))}
            </datalist>
          </div>
          <div>
            <label htmlFor="electricityBill" className="block text-gray-700">Average Electricity Bill (last 6 months)</label>
            {billFound ? (
              <div className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100">
                {formData.electricityBill}
              </div>
            ) : (
              <input
                type="text"
                id="electricityBill"
                name="electricityBill"
                value={formData.electricityBill}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required={!billFound} // Make required only when not found
              />
            )}
          </div>
          <div>
            <label htmlFor="unitCharges" className="block text-gray-700">Unit Charges (in ₹)</label>
            <input
              type="number"
              id="unitCharges"
              name="unitCharges"
              value={formData.unitCharges}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="baseCharges" className="block text-gray-700">Base Charges (in ₹)</label>
            <input
              type="number"
              id="baseCharges"
              name="baseCharges"
              value={formData.baseCharges}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          
          {/* <div>
            <label htmlFor="amountForLoan" className="block text-gray-700">Amount for Loan</label>
            <input
              type="number"
              id="amountForLoan"
              name="amountForLoan"
              value={formData.amountForLoan}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div> */}
          <div className="col-span-1 lg:col-span-2">
            <button
              type="submit"
              className={`w-full bg-teal-500 text-white p-2 rounded-md font-semibold hover:bg-teal-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Apply'}
            </button>
          </div>
        </form>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default LoanApplicationForm;
