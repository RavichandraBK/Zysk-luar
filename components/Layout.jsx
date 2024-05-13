import React from 'react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const Layout = ({children}) => {
  return (
    <>
      <p className="text-center text-[#444444]  p-3 font-quicksand font-[400] text-xl leading-[18.75px]">
          50% off all orders
        </p>
    
        <Header />
        <main>{children}</main>
        <Footer/>
    </>
  )
}

export default Layout
