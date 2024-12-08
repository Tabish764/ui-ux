import Image from 'next/image'
import React from 'react'
import Search from '../../../public/Auto Layout Horizontal.png'
import setting from '../../../public/setting.png'
import map from '../../../public/map.png'
const page = () => {
  return (
    <>
    <div className=' mx-auto   items  flex flex-wrap justify-between w-full'>
      <div className='border mx-auto xl:mx-0'>

      <div className=' pl-[32px] pr-[44px]  mx-auto'>

      <div className=' flex flex-col '>

      <h1 className='font-medium text-[27px] leading-[32px] pt-[36px] '>Find a Nike Store</h1>
      <div className='flex  items-center pt-[44px]'>
      <div className='flex  items-center  rounded-[8px]   relative w-full max-w-[480px] '>

      <input
        className='bg-transparent border rounded-[8px] pl-[48px] h-[56px]  placeholder:text-[#CCCCCC] placeholder:text-[15px] text-[#111111] w-full pr-[258px] focus:ring-2 focus:ring-[#000000]/50'
        type="text"
        placeholder='Search Location'
        />
     
      <div className='absolute left-2'>
        <Image src={Search} alt='Search Icon'  />
      </div>
        </div>
    </div>
    <div className='flex justify-between  pt-[20px] pb-4 items-center'>
      <p className=' text-[#757575]'>15 Stores Near You</p>
      <button className='flex gap-[8.56px] border items-center py-[7.5px] px-[21.5px]  rounded-[30px] '>Filter <span><Image src={setting} alt=''></Image></span></button>
    </div>
        </div>
        </div>
        <hr className='w-full' />
        <div className='pl-[32px] w-full flex flex-col justify-center  pb-[24px]'>
          <p className='font-medium text-[15px] text-black pt-[28px] '>Nike NYC - House of Innovation 000</p>
          <p className='text-[15px] text-[#757575]'>650 5th Ave.</p>
          <p className='text-[15px] text-[#757575]'>New York, NY, 10019, US</p>
          <p className='text-[15px] text-[#757575]'><span className='text-[#D43F21] font-[400]'>Closed • </span>Opens at 11:00 am</p>
        </div>
        <hr className='w-[500px]' />
        <div className='pl-[32px] w-full pb-[24px]'>
          <p className='font-medium text-[15px] text-black pt-[28px] '>Nike By Upper East Side</p>
          <p className='text-[15px] text-[#757575]'>1131 3rd Ave.</p>
          <p className='text-[15px] text-[#757575]'>New York, NY, 10065, US</p>
          <p className='text-[15px] text-[#757575]'><span className='text-[#D43F21] font-[400]'>Closed • </span>Opens at 11:00 am</p>
        </div>
        <hr className='w-[500px]' />
        <div className='pl-[32px] w-full'>
          <p className='font-medium text-[15px] text-black pt-[28px] '>Nike By Flatiron</p>
          <p className='text-[15px] text-[#757575]'>156 Fifth Ave.</p>
          <p className='text-[15px] text-[#757575]'>New York, NY, 10010, US</p>
          <p className='text-[15px] text-[#757575]'><span className='text-[#D43F21] font-[400]'>Closed • </span>Opens at 11:00 am</p>
        </div>
        <hr className='w-[500px]' />
        <p className='pl-[32px] w-full underline font-medium pt-[14px]'>View All Stories</p>
        </div>
        <div className='flex justify-center items-center xl:w-[960px] w-full'>
          <Image src={map} alt=''></Image>
        </div>
    </div>
        </>
  )
}

export default page