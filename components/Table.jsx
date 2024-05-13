import React from "react";
import Image from "next/image";
import luarImg from "../public/luarImg.png";
const Table = () => {
//   const isImage =
//     typeof content === "string" && /\.(jpg|jpeg|png|gif)$/i.test(content);
//   const tableArr = [
//     {
//       tiers: "Member-only sales",
//       bold: luarImg,
//       bespoke: luarImg,
//       beyond: luarImg,
//     },
//     {
//       tiers: "Early access to new launches",
//       bold: "",
//       bespoke: luarImg,
//       beyond: luarImg,
//     },
//     {
//       tiers: "Early access to sales",
//       bold: "",
//       bespoke: luarImg,
//       beyond: luarImg,
//     },
//     {
//       tiers: "Purchase points on new arrivals ",
//       bold: "1.5x",
//       bespoke: "2x",
//       beyond: "2.5x",
//     },
//     {
//       tiers: "Birthday month points",
//       bold: "1.5x",
//       bespoke: "2x",
//       beyond: "2.5x",
//     },
//     {
//       tiers: "Birthday gift",
//       bold: "",
//       bespoke: "",
//       beyond: "Free bite-sized beauty at checkout",
//     },
//     {
//       tiers: "Access to exclusive events",
//       bold: "",
//       bespoke: "",
//       beyond: luarImg,
//     },
//   ];
  return (
    <>
      <table className="">
        <thead>
          <tr className="w-[1152px] flex justify-between   border-b-2 border-[#41333B]">
            <th className="w-60 text-left">
              <p className="text-[#41333B] font-[500] text-3xl">TIERS</p>
              <p className="text-[#41333B] text-lg mt-5">PERKS</p>
            </th>
            <th className="w-40 text-left">
              <p className="text-[#41333B] font-semibold text-3xl">BOLD</p>
              <p className="text-[#41333B] text-lg">0-24,000</p>
            </th>
            <th className="w-40 text-left">
              <p className="text-[#41333B] font-semibold text-3xl">BESPOKE</p>
              <p className="text-[#41333B] text-lg">24,000-28,000</p>
            </th>
            <th className="w-40 text-left ">
              <p className="text-[#41333B] font-semibold text-3xl ">BEYOND</p>
              <p className="text-[#41333B] text-lg">28,000 & above</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
        
            className="flex justify-between gap-56 w-[1152px] items-center border-b h-24 border-[#41333B]"
          >
            <td className="w-60 text-left">
              <p className="font-quicksand font-[400] text-xl">Member-only sales</p>
            </td>
            <td className="w-40 text-left">
              <Image src={luarImg} />
            </td>
            <td className="w-40 text-left">
              <Image src={luarImg} />
            </td>
            <td className="w-60  flex text-center">
              <Image src={luarImg} />
            </td>
          </tr>
          <tr
        
            className="flex justify-between gap-56 w-[1152px] items-center border-b h-24 border-[#41333B]"
          >
            <td className="w-60 text-left">
              <p className="font-quicksand font-[400] text-xl">Early access to new launches</p>
            </td>
            <td className="w-40 text-left">
              
            </td>
            <td className="w-40 text-left">
              <Image src={luarImg} />
            </td>
            <td className="w-60  flex text-center">
              <Image src={luarImg} />
            </td>
          </tr>
          <tr
        
            className="flex justify-between gap-56 w-[1152px] items-center border-b h-24 border-[#41333B]"
          >
            <td className="w-60 text-left">
              <p className="font-quicksand font-[400] text-xl">Early access to sales</p>
            </td>
            <td className="w-40 text-left">
              
            </td>
            <td className="w-40 text-left">
            <Image src={luarImg} />
            </td>
            <td className="w-60  flex text-center">
              <Image src={luarImg} />
            </td>
          </tr>
          <tr
        
            className="flex justify-between gap-56 w-[1152px] items-center border-b h-24 border-[#41333B]"
          >
            <td className="w-60 text-left">
              <p className="font-quicksand font-[400] text-xl">Purchase points on new arrivals</p>
            </td>
            <td className="w-40 text-left">
            <p className="font-quicksand font-[400] text-xl">1.5x</p>
            </td>
            <td className="w-40 text-left">
              <p className="font-quicksand font-[400] text-xl">2x</p>
            </td>
            <td className="w-60  flex text-center">
              <p className="font-quicksand font-[400] text-xl">2.5x</p>
            </td>
          </tr>
          <tr
        
            className="flex justify-between gap-56 w-[1152px] items-center border-b h-24 border-[#41333B]"
          >
            <td className="w-60 text-left">
              <p className="font-quicksand font-[400] text-xl">Birthday month points</p>
            </td>
            <td className="w-40 text-left">
              <p className="font-quicksand font-[400] text-xl">1.5x</p>
            </td>
            <td className="w-40 text-left">
              <p className="font-quicksand font-[400] text-xl">2x</p>
            </td>
            <td className="w-60  flex text-center">
              <p className="font-quicksand font-[400] text-xl">2.5x</p>
            </td>
          </tr>
          <tr
        
            className="flex justify-between gap-56 w-[1152px] items-center border-b h-24 border-[#41333B]"
          >
            <td className="w-60 text-left">
              <p className="font-quicksand font-[400] text-xl">Birthday gift</p>
            </td>
            <td className="w-40 text-left">
              <p className="font-quicksand font-[400] text-xl"></p>
            </td>
            <td className="w-40 text-left">
              <p className="font-quicksand font-[400] text-xl"></p>
            </td>
            <td className="w-60  flex text-center">
              <p className="font-quicksand font-[400] text-xl">Free bite-sized beauty at checkout</p>
            </td>
          </tr>
          <tr
        
            className="flex justify-between gap-56 w-[1152px] items-center border-b h-24 border-[#41333B]"
          >
            <td className="w-60 text-left">
              <p className="font-quicksand font-[400] text-xl">Access to exclusive events</p>
            </td>
            <td className="w-40 text-left">
              
            </td>
            <td className="w-40 text-left">
              
            </td>
            <td className="w-60  flex text-center">
              <Image src={luarImg} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
