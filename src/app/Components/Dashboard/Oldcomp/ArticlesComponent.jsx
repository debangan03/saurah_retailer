"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
const solarFinancingArticles = [
  {
    title: "Harnessing Solar Power: Exploring the Potential of Solar Rooftops",
    description:
      "In the quest for sustainable energy solutions, solar power has emerged as a promising avenue for reducing carbon emissions and reliance on fossil fuels. One of the key innovations in solar energy utilization is the concept of solar rooftops. Let's delve into what solar rooftops are, the types available, and their significance in the renewable energy landscape.",
    slug: "Harnessing_Solar_Power",
    image: "https://i.ibb.co/vZyCsvR/har.jpg",
  },
  {
    title:
      "Grid-Connected Solar Rooftops: Empowering India's Energy Transition",
    description:
      "In India, grid-connected solar rooftops have emerged as a key component of the country's ambitious renewable energy targets and efforts to mitigate climate change. These systems are integrated with the existing power grid, allowing users to generate electricity from solar energy while remaining connected to the grid for supplementary power as needed. Let's explore the landscape of grid-connected solar rooftops in India, including installation data and available subsidies.",
    slug: "Grid-_Connected_Solar_Rooftops",
    image: "https://i.ibb.co/BCCBQ4F/https-freepicdownloader.jpg",
  },
];
function ArticlesComponent() {
  const [displaypopup, setdisplaypopup] = useState(false);

  function disableScroll() {
    window.scrollTo(0, 0);
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  const closepopup = () => {
    enableScroll();
    setdisplaypopup(false);
  };

  return (
    <>
      

      <div className="grid lg:grid-cols-6 my-10 md:px-20 px-4 gap-4  ">
        <div className="lg:col-span-4 lg:grid-cols-3 grid gap-4">
          {solarFinancingArticles?.map((item, i) => (
            <div
              key={i}
              className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "
            >
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                <Image
                  className="rounded-t-lg w-full h-[200px] bg-slate-600"
                  width={1000}
                  height={1000}
                  src={item.image}
                  alt="article"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                  {item.title.slice(0, 22)}..
                </h5>
                <p className="mb-4 text-sm text-neutral-600 ">
                  {item.description.slice(0, 100)}..
                </p>
                <Link
                  className="text-teal-500 hover:text-teal-400 hover:text-[17px]"
                  href={`/Articles/${item.slug}`}
                >
                  Learn More{" "}
                  <span className="text-lg font-extrabold text-teal-500 hover:text-teal-400 hover:text-[17px]">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
          <>
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                <Image
                  className="rounded-t-lg w-full h-[200px] bg-slate-600"
                  width={1000}
                  height={1000}
                  src={
                    "https://i.ibb.co/WFF3nzr/Whats-App-Image-2024-03-28-at-01-19-46-d544542a.jpg"
                  }
                  alt="article"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Claim Your Solar Subsidy: Easy Steps for Installation!
                </h5>
                <p className="mb-4 text-sm text-neutral-600 ">
                  Follow the steps for installation of rooftop solar plant
                </p>
                <a href="/stepwise.pdf"
                target="_blank"
                  className="text-teal-500 mt-2 cursor-pointer hover:text-teal-400 hover:text-[17px]"
                  
                >
                  Learn More{" "}
                  <span className="text-lg font-extrabold text-teal-500 hover:text-teal-400 hover:text-[17px]">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </>
        </div>
        <div className="lg:col-span-2  rounded-md shadow-md links  ">
          <div className="shadow-md pb-8 border-t-2">
            <h1 className="text-center text-2xl pt-5 font-semibold text-sate-700 font-sans">
              Government Info
            </h1>
            <hr className="mx-auto w-[18%] border-[2px] border-teal-400 rounded-md mt-[1px]" />
          </div>
          <ul className="max-h-[30vh] lg:max-h-[45vh] overflow-y-auto p-4 text-base font-sans list-disc text-slate-600 px-10">
            <a href="https://mnre.gov.in/" target="blank">
              <li className="hover:underline  hover:text-teal-500">
                Ministry of New and Renewable Energy (MNRE)
              </li>
            </a>
            <a href="https://www.seci.co.in/" target="blank">
              <li className="hover:underline  hover:text-teal-500">
                Solar Energy Corporation of India (SECI)
              </li>
            </a>
            <a href="https://www.ireda.in/home" target="blank">
              <li className="hover:underline  hover:text-teal-500">
                Indian Renewable Energy Development Agency (IREDA)
              </li>
            </a>
            <a href="https://www.guvnl.com/" target="blank">
              <li className="hover:underline  hover:text-teal-500">
                Gujarat Urja Vikas Nigam Limited (GUVNL)
              </li>
            </a>
            <a href="https://kredl.karnataka.gov.in/english" target="blank">
              <li className="hover:underline  hover:text-teal-500">
                Karnataka Renewable Energy Development Limited (KREDL)
              </li>
            </a>
            <a href="https://www.mahaurja.com/meda/" target="blank">
              <li className="hover:underline  hover:text-teal-500">
                Maharashtra Energy Development Agency (MEDA)
              </li>
            </a>
            <a href="https://energy.rajasthan.gov.in/rrecl/" target="blank">
              <li className="hover:underline  hover:text-teal-500">
                Rajasthan Renewable Energy Corporation Limited (RRECL)
              </li>
            </a>
            <a href="https://upneda.org.in/" target="blank">
              <li className="hover:underline  hover:text-teal-500">
                Uttar Pradesh New and Renewable Energy Development Agency
                (UPNEDA)
              </li>
            </a>
            <a href="https://kseb.in/ksebhome" target="blank">
              <li className="hover:underline  hover:text-teal-500">
                Kerala State Electricity Board (KSEB)
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ArticlesComponent;
