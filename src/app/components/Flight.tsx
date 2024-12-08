import Image from 'next/image'
import React from 'react'
import fashion from '../../../public/fashion.png'
const Flight = () => {
  return (
    <div className='pt-[84px] pl-[48px]   max-w-[1440px]   mx-auto'>
         <h1 className='font-medium  text-[22px] leading-[28px]'>Dont Miss</h1>
         <div className='mt-[25px]'>
            <Image src={fashion} alt=''></Image>
            <h1 className='text-[52px] leading-[60px] text-center font-medium pt-[48px]'>FLIGHT ESSENTIALS</h1>
            <p className=' text-[15px] pt-[24px] text-center leading-6'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
            <div className='pt-[30px] text-center'>

            <button className='bg-black text-white py-[7.5px] pr-[21.88px] pl-[21.5px] rounded-[30px]'>Shop</button>
            </div>
         </div>
    </div>
  )
}

export default Flight