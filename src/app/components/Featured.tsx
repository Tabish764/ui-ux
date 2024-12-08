import Image from 'next/image'
import React from 'react'
import image from '../../../public/img.png'
const Featured = () => {
  return (
    <div className='pt-[84px] px-[48px] max-w-[1440px] flex-col  mx-auto flex '>
        <h1 className='font-medium text-[23px] leading-7'>Featured</h1>
        <div className='pt-[25px]'>
        <Image src={image} alt=''></Image>
        </div>
        <h1 className='lg:pt-[48px] md:pt-[18px] font-medium lg:text-[54px]  md:text-[34px] sm:text-[30px] leading-[60px] text-center'>STEP INTO WHAT FEELS GOOD</h1>
        <p className='lg:pt-[24px] md:pt-[18px] text-center leading-[24px] text-[15px]'>Cause everyone should know the feeling of running in that perfect pair.</p>
        <div className='text-center pt-[30px]'>

        <button className='text-white rounded-[30px] bg-black py-[7.5px] pr-[23.93px] pl-[22.5px]'>Find Your Shoe</button>
        </div>
    </div>
  )
}

export default Featured