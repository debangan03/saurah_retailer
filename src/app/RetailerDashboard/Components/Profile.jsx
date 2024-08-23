"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import banner from "../../assets/dashbanner.jpg";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { useAuth } from "@/app/Context/AuthContext";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

const LoanCard = ({ item,changecompo }) => {

  return (
    <div>
   {item && <div className="bg-white h-36 w-full relative shadow-md rounded-md border-2">
      <p className="absolute bottom-2 left-2 text-[0.6rem] bg-teal-900 text-white p-1 rounded-lg">
        {new Date(item?.createdAt).toLocaleString()}
      </p>
      <div className="p-2 font-semibold flex justify-between items-center">
        <div>
          <p>Name: {item?.customerName}</p>
          <p>Amount: {item?.amountForLoan}</p>
          <p>Phone: {item?.phone}</p>
        </div>
        <FaEye onClick={()=>changecompo('leads')} className="size-6 text-orange-400 mr-10" />
      </div>
    </div>}</div>
  );
};

function Profile({ leads,changecompo }) {
  //console.log(leads);
  
  const el = useRef(null);
  const { user } = useAuth();
  //console.log(user);
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "User Name",
    email: "user@example.com",
    phone: "(123) 456-7890",
    address: "123 Main St, Anytown, USA",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Welcome to Saurah",
        "Explore All Loan Options",
        "Join us today!",
      ], // Strings to display
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true, // Loop the typing animation
    });

    // Destroy the Typed instance on component unmount to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="relative h-[200px] bg-teal-400/30 m-4 rounded-lg  w-full">
        {/* <Image
          src={banner}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        /> */}
        <div className="bg-transparent z-20  flex  justify-center items-center absolute top-0 left-0 h-full w-full">
          <h3 className="text-3xl text-black tracking-widest">
            <span ref={el}></span>
          </h3>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 flex lg:flex-row lg:space-y-0 space-y-10 flex-col justify-between items-start">
        <div className="profile lg:w-[45%] lg:bg-neutral-100 bg-white lg:shadow-none shadow-md rounded  p-6 relative ">
          <div
            className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-gray-800"
            onClick={toggleEditing}
          >
            {!isEditing ? <FaEdit size={20} /> : <MdOutlineCancel size={24} />}
          </div>
          <div className="flex flex-col items-start ">
            {isEditing ? (
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  readOnly={true}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <input
                  type="tel"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <textarea
                  name="address"
                  value="Bhubaneswar, Odisha"
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <button className="w-full mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
                  Save
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {user.name}
                </h2>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Phone: {user.phone}</p>
                <p className="text-gray-600">Address: Bhubaneswar, Odisha</p>
              </div>
            )}
          </div>
        </div>
        <div className="h-[300px] bg-gray-400 mt-4 w-[1px] hidden lg:block"></div>
        <div className="profile lg:w-[45%] lg:bg-neutral-100 bg-white  lg:shadow-none shadow-md rounded p-6 relative ">
          <div className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-gray-800">
            <Link
              target="_blank"
              href="/ApplyLoan"
              className="flex justify-center items-center shadow-lg rounded-full p-1 border"
            >
              Add <MdAdd size={20} className="size-6" />
            </Link>
          </div>
          <div className="flex flex-col items-start min-h-[200px] space-y-4">
            <h2 className="text-2xl underline underline-offset-2 font-semibold text-gray-800">
              Loan History
            </h2>
            <div className="max-h-[350px] w-full space-y-2 overflow-y-auto">
            {leads?.map((item) => (
              <LoanCard key={item._id} item={item} changecompo={changecompo}/>
            ))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
