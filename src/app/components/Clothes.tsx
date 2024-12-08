import React from 'react'
import arrow1 from '../../../public/arrow1.png'
import arrow2 from '../../../public/arrow2.png'
import man1 from '../../../public/man 1.png'
import man2 from '../../../public/man 2.png'
import women1 from '../../../public/women1.png'
import women2 from '../../../public/women2.png'

import Image from 'next/image'
const Clothes = () => {
  return (
    <div className='pt-[84px] pl-[48px] sm:px-[48px]  pb-[54px] max-w-[1440px]   mx-auto '>


        <h1 className='font-medium  text-[23px] leading-[28px]'>Gear Up</h1>


        <div className='flex flex-wrap items-center justify-center  gap-[12px]'>

        
        
        <div className='pt-[25px]   '>
            <div className='lg:pl-[407px] justify-center flex  items-center gap-[13px]'>

            <p className='font-medium text-[15px] leading-6'>Shop Men&apos;s</p>
            <div className='flex gap-[12px]'>

            <Image src={arrow1} alt=''></Image>
            <Image src={arrow2} alt=''></Image>
            </div>
            </div>
        <div className=' mt-[12px] flex-wrap items-center justify-center flex gap-[12px] lg:pl-[48px]'>
            <div>
            <Image className='lg:w-[300px] w-[200px] lg:h-[300px]' src={man1} alt=''></Image>
            <div className='pt-[21px] '>

            <p className='font-medium lg:text-[15px] text-[10px] leading-6 flex justify-between pr-4'>Nike Dri-FIT ADV TechKnit Ultra <span>₹ 3 895</span></p>
            <p  className='text-[#757575]'>Men&apos;s Short-Sleeve </p>
            <p  className='text-[#757575]'>Running Top</p>
            </div>
            </div>
            <div>
            <Image className='lg:w-[300px] w-[200px] lg:h-[300px]' src={man2} alt=''></Image>
            <div className='pt-[21px]  '>

            <p className='font-medium lg:text-[15px] text-[10px] leading-6 flex justify-between pr-4'>Nike Dri-FIT Challenger <span>₹ 2 495</span></p>
            <p  className='text-[#757575] sm:text-[10px] lg:text-[14px]'>Men&apos;s 18cm (approx.) 2- </p>
            <p  className='text-[#757575] sm:text-[10px] lg:text-[14px]'>in-1 Versatile Shorts</p>
            </div>
            </div>
           

        </div>
        </div>
        <div className='pt-[25px]   max-w-[666px]'>
            <div className='lg:pl-[407px] justify-center flex  items-center gap-[13px]'>

            <p className='font-medium text-[15px] leading-6'>Shop Men&apos;s</p>
            <div className='flex gap-[12px]'>

            <Image src={arrow1} alt=''></Image>
            <Image src={arrow2} alt=''></Image>
            </div>
            </div>
        <div className=' mt-[12px] flex-wrap  items-center justify-center flex gap-[12px]  lg:pl-[48px]'>
            <div>
            <Image className='lg:w-[300px] w-[200px] lg:h-[300px]' src={women1} alt=''></Image>
            <div className='pt-[21px] '>

            <p className='font-medium lg:text-[15px] text-[10px] leading-6 flex justify-between pr-4'>Nike Dri-FIT ADV TechKnit Ultra <span>₹ 3 895</span></p>
            <p  className='text-[#757575] sm:text-[10px] lg:text-[14px]'>Men&apos;s Short-Sleeve </p>
            <p  className='text-[#757575] sm:text-[10px] lg:text-[14px]'>Running Top</p>
            </div>
            </div>  
            <div>
            <Image className='lg:w-[300px] w-[200px] lg:h-[300px]' src={women2} alt=''></Image>
            <div className='pt-[21px]  '>

            <p className='font-medium lg:text-[15px] text-[10px] leading-6 flex justify-between pr-4'>Nike Dri-FIT Challenger <span>₹ 2 495</span></p>
            <p  className='text-[#757575] sm:text-[10px] lg:text-[14px]'>Men&apos;s 18cm (approx.) 2- </p>
            <p  className='text-[#757575] sm:text-[10px] lg:text-[14px]'>in-1 Versatile Shorts</p>
            </div>
            </div>
           

        </div>
        </div>



        </div>

    </div>
  )
}

export default Clothes