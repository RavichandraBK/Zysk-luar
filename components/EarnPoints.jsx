import React from 'react'
import Image from 'next/image'
import profile from '../public/profile.png'
const EarnPoints = ({img,titleTxt, subTxt}) => {
  return (
    <>
      <div className='rounded-2xl bg-[#E9E2E3] w-72 h-72 sm:w-[350px] sm:h-80 flex items-center'>
        <div className='mx-auto'>
            <Image src={img} className=' w-40 h-40 mx-auto'/>
            <p className='font-quicksand font-semibold text-xl text-[#41333B] capitalize text-center'>{titleTxt}</p>
            <p className='font-quicksand text-lg text-center pb-10'>{subTxt}</p>
        </div>
      </div>
    </>
  )
}

export default EarnPoints
