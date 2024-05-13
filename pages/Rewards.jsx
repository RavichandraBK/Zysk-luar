import React from "react";
import Image from "next/image";
import topPic from "../public/Screenshot 2023-07-19 at 12.18 2.png";
import signuppic from "../public/Artboard 1 3.png";
import shop from "../public/Artboard_shop.png";
import rewards from "../public/Artboard_reward.png";
import GetStarted from "@/components/GetStarted";
import EarnPoints from "@/components/EarnPoints";
import profile from "../public/profile.png";
import cake from "../public/cake.png";
import cart from "../public/cart.png";
import instagram from "../public/instagram.png";
import review from "../public/review.png";
import cosmetic from "../public/cosmetic.png";
import Table from "@/components/Table";
import luarImg from "../public/luarImg.png";
import Faqs from "@/components/Faqs";
import endPic from "../public/endPic.png";

const Rewards = () => {
  const pointsArr = [
    { img: profile, titleTxt: "Create an account", subTxt: "5,000 points" },
    {
      img: cart,
      titleTxt: "Place an order",
      subTxt: "Earn 1 point per Rs. 1 spent",
    },
    {
      img: instagram,
      titleTxt: "Follow us on Instagram",
      subTxt: "3,000 points",
    },
    { img: cake, titleTxt: "Share your birthday", subTxt: "2,000 points" },
    { img: cosmetic, titleTxt: "Get shade matched", subTxt: "2,000 points" },
    { img: review, titleTxt: "Write a review", subTxt: "8,000 points" },
  ];

  return (
    <>
      <div>
        <div className="max-w-[90rem] mx-auto relative">
          <Image src={topPic} />
          <p className=" absolute top-8 sm:top-[360px] font-[400] text-lg sm:text-6xl text-white left-5 sm:left-24">
            The Beyond Club
          </p>
          <p className="absolute font-[500] top-16 text-xs left-5 font-quicksand text-left sm:text-lg sm:w-[550px] sm:top-[440px] sm:left-28 text-white">
            Become a member of The Beyond Club and step into the infinite world
            of Luar Beauty – earn points with every purchase and get access to
            exclusive promotions and rewards. 
          </p>
          <div className="flex sm:flex-row flex-col justify-between w-48 sm:w-[400px] sm:h-auto h-16 absolute left-5  sm:left-28 top-32 sm:top-[550px]">
            <button className="bg-[#D7CED6] rounded-md sm:rounded-xl text-[#775D6D] text-center font-inter text-xs sm:text-md font-[500] uppercase cursor-pointer w-36 sm:w-48 h-6 sm:h-10">
              Join the club
            </button>
            <button className="bg-[#D7CED6] rounded-md sm:rounded-xl text-[#775D6D] text-center font-inter text-xs sm:text-md font-[500] uppercase cursor-pointer w-36 sm:w-48 h-6 sm:h-10">
              sign in
            </button>
          </div>
        </div>
        <div className="w-auto sm:max-w-6xl  mx-auto mt-12">
          <p className="text-2xl text-center sm:text-left font-[400] text-[#41333B]  sm:text-7xl font-quicksand">
            How To Get Started
          </p>
          <div className="sm:flex sm:justify-between sm:gap-48  sm:w-fit mx-auto sm:ml-24">
            <GetStarted
              pic={signuppic}
              headTxt={"sign up"}
              detailTxt={"Create an account"}
            />
            <GetStarted
              pic={shop}
              headTxt={"SHOP WITH US"}
              detailTxt={"Stack up those points with each purchase"}
            />
            <GetStarted
              pic={rewards}
              headTxt={"sign up"}
              detailTxt={"Create an account"}
            />
          </div>
        </div>
        <div className="w-[300px] mx-auto sm:w-auto sm:max-w-6xl sm:mx-auto">
          <p className="text-2xl text-center sm:text-left font-[400] text-[#41333B] sm:text-7xl font-quicksand mt-16">
            How To Earn Points
          </p>
          <div className="mt-10 flex justify-start gap-10 flex-wrap ">
            {pointsArr.map((item) => (
              <EarnPoints
                img={item.img}
                titleTxt={item.titleTxt}
                subTxt={item.subTxt}
              />
            ))}
          </div>
        </div>
        <div className=" w-[300px] sm:w-auto sm:max-w-6xl  mx-auto mt-36 overflow-scroll sm:overflow-auto">
          <Table />
        </div>
        <div className="sm:max-w-6xl w-[300px] sm:w-auto mx-auto mt-20">
          <p className="text-4xl font-[400]">How To Redeem</p>
          <p className="text-xl">
            Use your points from The Beyond Club account at checkout. Points
            never expire. 
          </p>
        </div>
        <div className="w-[300px] sm:w-auto sm:max-w-6xl mx-auto">
          <div className="border-b-2 border-[#41333B] py-5 mt-10">
            <p className="text-xl sm:text-3xl font-[500] text-[#41333B]">
              Frequently Asked Questions 
            </p>
          </div>
          <Faqs txt={"GETTING STARTED"} />
          <Faqs txt={"POINTS"} />
          <Faqs txt={"TIERS"} />
          <Faqs txt={"REWARDS"} />
        </div>
        <div className="w-[300px] sm:w-auto max-w-6xl mx-auto mt-20">
          <Image src={endPic} />
        </div>
      </div>
    </>
  );
};

export default Rewards;
