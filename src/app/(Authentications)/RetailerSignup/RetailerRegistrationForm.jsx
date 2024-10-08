

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/Context/AuthContext";
import PrivacyPolicy from "./Privacydocs";
import PrivacyPolicydocs from "./Privacydocs";

function RetailerRegistrationForm() {
  const [privacyopen, setprivacyopen] = useState(false)
  const router = useRouter();
  const session = useAuth();

  useEffect(() => {
    if (session.user) {
      alert("Already logged in");
      setTimeout(() => {
        router.push("/");
      }, 400);
    }
  }, [session.user, router]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    panNo: "",
    gstNo: "",
    mobileNo: "",
    password: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPanValid, setIsPanValid] = useState(null); // null indicates no validation yet
  const [panErrorMessage, setPanErrorMessage] = useState("");
  const [agreedToPolicy, setAgreedToPolicy] = useState(false); // New state for checkbox

  let timeoutId = null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setAgreedToPolicy(checked);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Validate PAN number when it changes
    if (name === "panNo") {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => validatePan(value), 1000); // Debounce for 500ms
    }
  };

  const validatePan = async (panNo) => {
    if (!panNo) {
      setIsPanValid(null);
      setPanErrorMessage("");
      return;
    }

    try {
      const response = await fetch("/api/validatePan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ panNumber: panNo }),
      });
      const data1 = await response.json();

      if (!data1.success) {
        throw new Error("Failed to validate PAN");
      }

      setIsPanValid(data1.success);

      if (data1.success) {
        setPanErrorMessage("");
      } else {
        setPanErrorMessage("Invalid PAN number.");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsPanValid(false);
      setPanErrorMessage("Error validating PAN number.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, panNo, gstNo, mobileNo, password } = formData;

    try {
      const response = await fetch("/api/sendotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, panNo, gstNo, mobileNo, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to send OTP");
      }

      setOtpSent(true);
      alert("OTP sent to your email");
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending OTP");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { email, otp, name, panNo, gstNo, mobileNo, password } = formData;

    try {
      const response = await fetch("/api/verifyotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
          name,
          panNo,
          gstNo,
          mobileNo,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to verify OTP");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      alert("OTP verified successfully. Registration complete.");
      window.location = "/"; // Redirect to the desired page after registration
    } catch (error) {
      console.error("Error:", error);
      alert("Error verifying OTP");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:mx-auto max-w-7xl my-6 p-4 border shadow-md border-gray-400 rounded-lg mx-10">
      {privacyopen &&<div className="fixed  flex justify-center items-center top-0 left-0 w-screen h-screen backdrop-blur-md bg-white/30">
      <div
      className="relative xl:h-[600px] overflow-auto xl:w-[900px] no-scrollbar  w-screen h-screen">
        <span className="absolute right-6 top-6 hover:font-bold text-red-500 cursor-pointer" onClick={()=>{setprivacyopen(false)}}>X</span>
        <PrivacyPolicydocs/>

      </div>
        
        </div>}
      <h2 className="text-xl font-semibold">Retailer Registration</h2>
      {!otpSent ? (
        <form onSubmit={handleSubmit}>
          <div className="lg:grid lg:grid-cols-2 gap-6 mb-4">
            {/* Form fields */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Retailer Name
              </label>
              <input
                placeholder="fill your credentials"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                placeholder="fill your credentials"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="panNo"
                className="block text-sm font-medium text-gray-700"
              >
                PAN No
              </label>
              <input
                placeholder="fill your credentials"
                type="text"
                name="panNo"
                id="panNo"
                value={formData.panNo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
              {isPanValid !== null && (
                <div className="mt-1">
                  {isPanValid ? (
                    <span className="text-green-600">✔️ Valid PAN</span>
                  ) : (
                    <span className="text-red-600">❌ {panErrorMessage}</span>
                  )}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="gstNo"
                className="block text-sm font-medium text-gray-700"
              >
                GST No
              </label>
              <input
                placeholder="fill your credentials"
                type="text"
                name="gstNo"
                id="gstNo"
                value={formData.gstNo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="mobileNo"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile No
              </label>
              <input
                placeholder="fill your credentials"
                type="tel"
                name="mobileNo"
                id="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                placeholder="fill your credentials"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          {/* Privacy Policy checkbox */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="privacyPolicy"
                checked={agreedToPolicy}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">
                I agree to the{" "}
                <span
                  onClick={()=>setprivacyopen(true)}
                  className="text-teal-500 underline"
                >
                  Privacy Policy
                </span>
              </span>
            </label>
          </div>

          <p className="text-[.8rem] pl-1 mb-1">
            Already have an account{" "}
            <Link
              className="text-teal-500 underline font-semibold "
              href="/RetailerLogin"
            >
              Login
            </Link>
          </p>
          <div>
            <button
              type="submit"
              disabled={isSubmitting || isPanValid === false || !agreedToPolicy ||name== ""||
                email== ""||
                panNo== ""||
                gstNo== ""||
                mobileNo== ""||
                password== ""||
                otp== ""}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-gray-400"
            >
              {isSubmitting ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
        <div className="mb-4">
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-gray-700"
          >
            OTP
          </label>
          <input
            placeholder="fill your credentials"
            type="text"
            name="otp"
            id="otp"
            value={formData.otp}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            {isSubmitting ? "Loading..." : "Verify OTP"}
          </button>
        </div>
      </form>
      )}
    </div>
  );
}

export default RetailerRegistrationForm;
