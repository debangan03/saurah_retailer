import React from "react";
import img1 from "../../assets/article1.png";
import img2 from "../../assets/article2.png";
import img3 from "../../assets/article3.png";
import Link from "next/link";
import Image from "next/image";
import ArticleSlider from "../ArticleSlider";
import ArticlesComponent from "../ArticlesComponent";


function Articles() {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div className="w-fit">
        <h2 className="mb-1 text-2xl font-semibold font-sans leadi text-center text-slate-900 md:text-5xl">
          Knowledge Base
        </h2><div className="flex w-32 md:w-52  mt-1 md:mt-3 mb-4 overflow-hidden rounded md:mx-auto md:mb-4">
        <div className="flex-1 h-2 bg-teal-200"></div>
        <div className="flex-1 h-2 bg-teal-400"></div>
        <div className="flex-1 h-2 bg-teal-300"></div>
      </div>
         
        </div>
      </div>
     
      {/* <ArticleSlider/> */}
      <ArticlesComponent />
    </>
  );
}

export default Articles;
