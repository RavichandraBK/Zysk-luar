import React from 'react'
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import img30 from "../public/image 30.png";
import lunarImg from "../public/Layer_1.png";
import beanImg from "../public/Asset 1-8 2.png";
import img36 from "../public/image 36.png";
import Rect from "../public/Rectangle 51.png";
import art from "../public/Artboard 7_8 1.png";
const AboutUs = () => {
  return (
    <>
      <div>
      
        {/* header
        <div className="bg-[#d7ced6] h-[160px] ">
          <div className="max-w-7xl mx-auto pt-5">
            <div className="flex justify-between items-center pb-5 gap-10  border-b border-[#775D6D]">
              <CiSearch className="w-[40px] h-[40px] text-[#775D6D]" />
              <Image
                src={lunarImg}
                className="w-[90px] h-[45px] text-[#775D6D]"
              />
              <div className="flex justify-evenly w-16 gap-3">
                <GoPerson className="w-12 h-12 text-[#775D6D]" />
                <BiShoppingBag className="w-12 h-12 text-[#775D6D]" />
              </div>
            </div>
            <div className="flex justify-center">
              <ul className="appearance-none flex justify-evenly w-[800px] text-[20px] gap-10 pt-4 text-[#775D6D] font-semibold uppercase font-quicksand">
                <li className=''>Shop</li>
                <li>Shade Finder</li>
                <li>Rewards</li>
                <li>Blog</li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* header */}
        {/* <Header/> */}
        <p className="text-center font-quicksand leading-[86.4px] font-[400] text-[#41333B] text-[48px] mt-5">
          About Us
        </p>
        {/* <div className="flex flex-col items-center mt-5"> */}
        <div className=" max-w-[350px] mx-auto sm:max-w-7xl sm:mx-auto mt-5">
          <div className="flex flex-col justify-evenly h-[700px] gap-10 sm:gap-5 sm:flex sm:flex-row sm:justify-evenly sm:min-w-max sm:mt-5">
            <Image src={img30} className="sm:w-[630px] sm:h-[620px]" />
            <Image src={img30} className="sm:w-[630px] sm:h-[620px]" />
          </div>
          <div className="sm:flex sm:justify-center gap-16">
            <Image
              src={lunarImg}
              alt="img"
              className="w-[356px] h-[157px] pl-5"
            />
            <p className="text-md sm:text-[26px] font-quicksand  font-[400] text-[#41333B] h-[297px] w-[350px] sm:w-[901px] mt-5 sm:mt-0">
              At Luar, we're going beyond. Luar is a scientifically-powered
              house of beauty that was born to complement the rich uniqueness of
              diverse skin tones while transforming the makeup experience as you
              know it. Imagine high-performance formulations that are the
              perfect blend of scientific research and artistry, curated to wear
              effortlessly, even in the face of our unforgiving hot and humid
              weather. We know that true beauty deserves to be adorned with the
              finest ingredients, which is why all our products are meticulously
              crafted using the latest technology to ensure an unparalleled
              experience.
            </p>
          </div>
          <section className=" w-full  mt-48 ">
          <div className="relative max-w-7xl mx-auto ">
            <Image src={beanImg} className="w-[850px] mx-auto"/>
            <span className="absolute text-md top-16  left-[-15px] right-5 w-36 sm:font-[400] font-quicksand sm:text-[30px] text-[#775D6D] sm:top-48 sm:left-[180px] sm:w-60">
              Geo-Specific Formulations
            </span>
            <span className="absolute text-md top-10 left-[270px] w-20 sm:text-[30px] sm:font[400] font-quicksand text-[#775D6D] sm:top-60 sm:h-[92px] sm:left-[896px] sm:w-[350px]">
              Customizable Beauty for All Skin Tones
            </span>
            <span className="absolute text-md top-48 w-36 left-0 text-right sm:text-[30px] sm: font-quicksand text-[#775D6D] sm:top-[450px] sm:left-[180px] sm:w-[371px]">
              Inspiring Creativity through Makeup
            </span>
            <span className="absolute text-md top-[180px]  left-60 text-[#41333B] sm:text-5xl leading-tight sm:font-[400]  sm:top-[440px] font-quicksand sm:left-[800px] ">
              Experience Luar <br />{" "}
              <span className="text-sm sm:text-3xl leading-tight sm:font-[300]">
                Your Beauty, Your Way
              </span>
            </span>
          </div>
          </section>
          <div className="sm:flex sm:justify-between gap-24 mt-5">
            <div>
              <Image src={img36} className="w-[600px]" />
            </div>
            <div>
              <h1 className="text-6xl leading-[2] font-[400] text-[#41333B]">
                The Brand
              </h1>
              <p className="text-2xl font-[400] font-quicksand sm:w-[600px] text-[#41333B]">
                Our brand story is rooted in the desire to empower individuals
                to explore their reflections. We know that makeup is more than
                just a product. It is self-expression. We are here to deliver
                the most exquisite formulas with bespoke customization that will
                allow you to make finer choices. And that's the cornerstone of
                our brand, Luar.
              </p>
            </div>
          </div>
          <div className="mt-36">
            <Image src={Rect} className=" sm:w-[1300px] sm:h-[600px]" />
          </div>
        </div>
          <div className="max-w-[20rem] sm:max-w-[80rem] mx-auto">
          <div className="w-[100%]  mt-5 relative">
            <p className="text-[40px] text-left font-quicksand text-[#785E6D] font-[300] sm:w-auto sm:text-[90px]">
              We are <strong className="font-semibold">bold</strong>, <br />
              We are <strong className="font-semibold">bespoke</strong>, <br />
              We go <strong className="font-semibold">beyond</strong>. We are{" "}
            </p>
            <span>
              <Image
                src={art}
                className="absolute w-36  top-[180px] left-[105px] sm:top-[253px] sm:left-[890px] sm:w-auto"
              />
            </span>
          </div>
          </div>
        
      </div>
    </>
  )
}

export default AboutUs
