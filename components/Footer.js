import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#D7CED6]">
        <div className="sm:max-w-7xl mx-auto  mt-24 sm:mt-20">
          <div className="flex flex-wrap gap-10  sm:flex sm:justify-evenly px-3 items-start pt-16">
            <div>
              <h1 className="text-xl sm:text-2xl font-[700] uppercase text-[#775D6D] font-quicksand">
                My luar
              </h1>
              <ul className="mt-8 text-lg sm:text-xl font-[400] text-[#775D6D] font-quicksand">
                <li>Luar Products</li>
                <li>My Account</li>
                <li>Special Offers</li>
                <li>Blogs</li>
                <li>Rewards | Refer a Friend</li>
                <li>Careers</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-[700] uppercase text-[#775D6D] font-quicksand">
                help & faq
              </h1>
              <ul className="mt-8 text-lg sm:text-xl font-[400] text-[#775D6D] font-quicksand">
                <li>Live Chat</li>
                <li>FAQS</li>
                <li>Returns</li>
                <li>Contact Us</li>
                <li>Check Order Status</li>
                <li>Promo Details</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-[700] uppercase text-[#775D6D] font-quicksand">
                shop
              </h1>
              <ul className="mt-8 text-lg sm:text-xl font-[400] text-[#775D6D] font-quicksand">
                <li>Foundation</li>
                <li>Bite Sized Beauty</li>
                <li>Shade Shifter</li>
              </ul>
              <div className="flex justify-evenly gap-3 mt-5">
                <FaFacebookSquare className="w-8 h-8 text-white" />
                <FaInstagram className="w-8 h-8 text-white" />
                <FaYoutube className="w-8 h-8 text-white" />
                <FaPinterest className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-[700] text-[#775D6D] font-quicksand uppercase">
                subscribe to our newsletter
              </h1>
              <input
                className=" w-[320px] sm:w-[390px] block border-b-2 border-[#775D6D] mt-12 outline-none appearance-none bg-[#D7CED6] font-[500] text-[#775D6D] placeholder:text-[#775D6D] text-center text-xl pb-3"
                placeholder="Enter Email"
              />
              <div className="flex justify-center pb-5">
                <button className="w-48 h-10 mt-10 rounded-[15px] bg-white text-center font-inter uppercase text-[14px] font-[500] text-[#775D6D] opacity-[30%] ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
