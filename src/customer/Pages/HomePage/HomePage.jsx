import React from "react";
import HomePageCarousel from "../../components/Home/HomePageCarousel/HomePageCarousel";
import HomeProductSwiper from "../../components/Home/HomeProductSwiper/HomeProductSwiper";
import HomeCategorySection from "../../components/Home/HomeCategorySection/HomeCategorySection";
import HomeCounterDash from "../../components/Home/HomeCounterDash/HomeCounterDash";
import CommentCardCarousel from "../../components/Home/CommentCardCarousel/CommentCardCarousel";
import Pic from "../../../assets/pic.svg";
import Heading from "../../components/common/Heading/Heading";
import PopularProductGrid from "../../components/Home/PopularProductGrid";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HomePageCarousel />
      <div className="mb-[180px] h-[1500px] md:h-[440px]">
        <Heading text="OUR RANGE OF PRODUCTS" />
        <div className="flex items-center justify-center">
          <HomeCategorySection />
        </div>
      </div>

      <div className=" my-[10px] lg:my-[50px] mx-[10px]">
        <div className="rounded-md border-2 border-black">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg"
            alt="img"
            className="rounded-md w-[100%]"
          />
        </div>
      </div>

      <div className="mb-5 relative">
        <Heading text="OUR MOST POPULAR PRODUCTS" />
        <div className="my-8 flex justify-center -mt-14">
          {/* <HomeProductSwiper /> */}
          <PopularProductGrid />
        </div>
      </div>

      <div className="relative">
        <Heading text="WHAT THEY SAY ABOUT US"/>
        <div className="px-5 flex flex-col lg:flex-row justify-center items-center -mt-14 lg:-mt-24">
          <div className="hidden lg:block">
            <img src={Pic} alt="" className="w-[500px] animate-rotate" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <CommentCardCarousel />
            <div className="p-12 w-[100%]">
              <HomeCounterDash />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
