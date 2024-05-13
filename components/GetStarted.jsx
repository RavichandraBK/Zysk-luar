import React from 'react'
import Image from 'next/image'
import signuppic from '../public/Artboard 1 3.png'
const GetStarted = ({pic,headTxt,detailTxt}) => {
  return (
    <>
        <div className='mt-16'>
            <div className='rounded-full bg-[#E9E2E3] w-36  h-36  mx-auto'>
                <Image src={pic} className='w-auto mx-auto'/>
            </div>
            <div className='mt-7'>
                <p className='text-xl sm:text-2xl font-quicksand font-semibold text-[#41333B] text-center uppercase'>{headTxt}</p>
                <p className='text-lg sm:text-xl font-quicksand font-semibold w-56 mx-auto sm:w-56 text-center'>{detailTxt}</p>
            </div>
        </div>
    </>
  )
}

export default GetStarted
