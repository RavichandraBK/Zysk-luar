"use client"
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import lunarImg from "../public/Group 136.png";
import { GoPerson } from "react-icons/go";
import { BiShoppingBag } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  return (
    <div className="bg-[#d7ced6] sm:h-[160px] sticky top-0 z-10">
          <div className="max-w-7xl mx-auto pt-5">
            <div className="flex justify-between items-center pb-5 gap-10 relative  sm:border-b border-[#775D6D]">
              <CiSearch className="w-[40px] h-[40px] text-[#775D6D]" />
              <Image
                src={lunarImg}
                className="w-[90px] h-[45px] text-[#775D6D]"
              />
              <div className="sm:flex sm:justify-evenly sm:w-16 sm:gap-3 ">
                {
                  menuBtn?(
                    <IoClose className="sm:hidden w-12 h-12" onClick={()=>{setMenuBtn(false)}}/>
                  ):(
                    <IoMenu className="sm:hidden w-12 h-12" onClick={()=>{setMenuBtn(true)}}/>
                  )
                }
                
                <GoPerson className="w-12 h-12 text-[#775D6D] hidden sm:block" />
                <BiShoppingBag className="w-12 h-12 text-[#775D6D] hidden sm:block" />
              </div>
              <section className="absolute top-12 left-40 z-10">
                  <div className={`w-56 h-48 bg-white rounded-xl py-3 ${menuBtn?'block':'hidden'}`}>
                  <ul className="appearance-none  text-center flex flex-col justify-between h-full   text-[20px]  text-[#775D6D] font-semibold uppercase font-quicksand">
                <li className=''>Shop</li>
                <li>Shade Finder</li>
                <li>Rewards</li>
                <li>Blog</li>
                <li>About</li>
              </ul>
                  </div>
                </section>
            </div>
            <div className="sm:flex sm:justify-center hidden">
              <ul className="appearance-none flex justify-evenly w-[800px] text-[20px] gap-10 pt-4 text-[#775D6D] font-semibold uppercase font-quicksand">
                <li className=''>Shop</li>
                <li>Shade Finder</li>
                <li>Rewards</li>
                <li>Blog</li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>  
    );
};

export default Header;
