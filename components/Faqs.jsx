import React, { useState } from 'react'
import Image from 'next/image'
import add from '../public/addImg.png'
const Faqs = ({txt}) => {
    const [open,setOpen] = useState(false);
  return (
    <>
      <div className=' py-6 border-b border-[#41333B]'>
            <div className='flex justify-between w-[300px] sm:w-auto sm:max-w-6xl'>
            <p className='text-xl sm:text-2xl font-quicksand font-[400] text-[#41333B] border-[#41333B]'>{txt}</p>
            <Image src={add} onClick={()=>{setOpen(true)}} className='cursor-pointer'/>
            </div>
            {open&&<div className='mt-5 mb-5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus fuga veritatis inventore exercitationem ab tempora optio. Corrupti eius aliquam totam quidem inventore aperiam molestias maxime vitae? Corrupti, necessitatibus nisi?</p>
            </div>}
      </div>
    </>
  )
}

export default Faqs
