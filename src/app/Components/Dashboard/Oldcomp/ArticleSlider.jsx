"use client";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/article1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";

const solarFinancingArticles = [
  {
    title: "Understanding Solar Financing Options",
    description:
      "Navigating the complex landscape of solar financing is a critical step for homeowners and businesses considering the leap to renewable energy. This article delves into the array of financing options available for solar installations, including solar loans, leases, and Power Purchase Agreements (PPAs). Each financing mechanism has its nuances, affecting everything from upfront costs to ownership and maintenance responsibilities. Moreover, the article explores the impact of government incentives, such as tax credits and rebates, which can significantly offset installation costs. By providing a detailed comparison of these options, the article aims to equip readers with the knowledge to make informed decisions that align with their financial goals and sustainability values.",
    slug: "understanding-solar-financing-options",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Benefits of Solar Leases",
    description:
      "Solar leases have emerged as a popular method for homeowners and businesses to embrace solar energy with minimal initial investment. This comprehensive guide examines the structure of solar leases, where participants typically pay a fixed monthly fee for using a solar system installed on their property. The article highlights the advantages of solar leasing, including reduced electricity costs, low maintenance concerns, and a straightforward path to adopting green energy. However, it also considers potential drawbacks, such as the implications for property value and the complexities of transferring the lease. Readers will gain insights into whether leasing is the most advantageous option for their situation, with an analysis of current trends and expert opinions in the solar industry.",
    slug: "the-benefits-of-solar-leases",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Solar Loans Explained",
    description:
      "Solar loans offer an accessible means for individuals to finance the purchase and installation of solar panels, empowering them to become system owners from day one. This article breaks down the different types of solar loans, their interest rates, terms, and how they compare with traditional financing methods. It also addresses the potential for solar loans to increase the value of one's property and the benefits of owning a system outright, such as eligibility for tax credits and rebates. Through expert analysis and real-world examples, readers will understand the long-term financial implications of solar loans and how they can maximize their investment in renewable energy.",
    slug: "solar-loans-explained",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Navigating Government Incentives for Solar",
    description:
      "Government incentives play a pivotal role in making solar energy more affordable for the average consumer. This article provides a thorough overview of the various federal, state, and local incentives available to those installing solar systems. From the Investment Tax Credit (ITC) to rebates and grant programs, it examines how these incentives lower the cost barrier to solar adoption. Additionally, the piece explores how to qualify for and claim these incentives, offering readers a roadmap to maximize their financial benefits. With detailed advice and the latest updates on incentive programs, this guide is an indispensable resource for anyone looking to reduce the financial burden of going solar.",
    slug: "navigating-government-incentives-for-solar",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Pros and Cons of Solar PPAs",
    description:
      "Power Purchase Agreements (PPAs) offer an alternative solar financing model where a developer installs, owns, and operates a solar system on a consumer's property. The consumer then purchases the power generated at a predetermined rate. This article delves into the benefits of PPAs, such as no upfront installation costs and potential savings on energy bills. However, it also addresses the limitations, including less financial benefit compared to ownership and potential complications when selling the property. By examining the intricacies of PPAs and providing guidance on navigating these agreements, the article helps readers evaluate whether a PPA aligns with their energy goals and financial plans.",
    slug: "the-pros-and-cons-of-solar-ppas",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "How to Qualify for Solar Financing",
    description:
      "Securing financing is a crucial step in the solar installation process, but not everyone meets the criteria set by lenders. This article outlines the key qualifications for different types of solar financing, including credit score requirements, income levels, and property assessments. It also offers tips on improving your chances of approval and compares the qualifications for loans, leases, and PPAs. By demystifying the qualification process and offering practical advice, the article aims to help potential solar adopters understand their financing options and take the necessary steps to qualify.",
    slug: "how-to-qualify-for-solar-financing",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Impact of Credit Scores on Solar Financing",
    description:
      "Credit scores can significantly affect an individual's ability to finance a solar system, influencing both the availability of financing options and the terms of those options. This detailed analysis explores how credit scores impact solar loans, leases, and PPAs, highlighting the different requirements and outcomes for borrowers with varying credit histories. The article provides advice on improving your credit score to secure better financing terms and examines the broader implications of credit on the solar financing process. Through expert insights and actionable tips, readers will learn how to navigate the intersection of credit and solar financing to achieve the best possible outcome.",
    slug: "the-impact-of-credit-scores-on-solar-financing",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Commercial Solar Financing: What Businesses Need to Know",
    description:
      "For businesses looking to adopt solar energy, understanding the unique financing options and incentives is key to making an informed decision. This article covers the spectrum of commercial solar financing, from loans and leases to specialized agreements like PPAs. It also dives into the tax incentives, grants, and rebates specifically available to businesses, detailing how these can significantly reduce the upfront and operational costs of solar systems. Additionally, the piece discusses the potential impact of solar investments on a business's bottom line and public image. With a focus on practical advice and real-world examples, business owners will gain valuable insights into the benefits and considerations of commercial solar financing.",
    slug: "commercial-solar-financing-what-businesses-need-to-know",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Zero-Down Solar Financing: Too Good to Be True?",
    description:
      "Zero-down solar financing options promise to make solar energy accessible without any upfront payment, but they come with their own set of considerations. This article examines the reality behind zero-down offers, detailing how they work and whom they benefit most. It compares different zero-down financing structures, such as loans and leases, and evaluates their long-term financial impact. The piece also addresses common concerns and misconceptions, providing a balanced view of the advantages and potential pitfalls. Readers considering zero-down solar financing will find this article an essential guide to understanding whether such options align with their financial goals and energy needs.",
    slug: "zero-down-solar-financing-too-good-to-be-true",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Future of Solar Financing: Trends and Predictions",
    description:
      "As the solar industry continues to evolve, so too do the financing options available to consumers. This forward-looking article explores the latest trends in solar financing, including the rise of blockchain technology, peer-to-peer lending platforms, and innovative government programs. It discusses how these developments could make solar more affordable and accessible than ever before. Additionally, the piece offers predictions for the future of solar financing, considering factors like technological advancements, policy changes, and market dynamics. With insights from industry experts and analysis of current trends, readers will get a glimpse into the future of making solar energy a universal reality.",
    slug: "the-future-of-solar-financing-trends-and-predictions",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ArticleSlider = () => {
  return (
    <>
      <div className="px-20 hidden md:block">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
        >
          {solarFinancingArticles?.map((item, i) => {
            return (
              <SwiperSlide key={item.slug}>
                {" "}
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
                      src={item.image}
                      alt="article"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                      {item.title.slice(0, 20)}
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="px-2 block md:hidden">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
          }}
        >
          {solarFinancingArticles?.map((item, i) => {
            return (
              <SwiperSlide key={item.slug}>
                {" "}
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                  <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    <Image
                      className="rounded-t-lg w-full h-[200px]"
                      width={1000}
                      height={1000}
                      src={item.image}
                      alt="article"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                      {item.title.slice(0, 20)}
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export default ArticleSlider;
