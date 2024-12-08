import React from 'react'
import Mens from '../../../public/mens.png'
import Womens from '../../../public/womens.png'
import Kids from '../../../public/kids.png'
import Image from 'next/image'
const Essentials = () => {
  return (
    <div className='pt-[84px] lg:pl-[48px] px-[48px]   max-w-[1440px]   mx-auto'>
         <h1 className='font-medium  text-[23px] leading-[28px]'>The Essentials</h1>
         <div className='flex   pt-[25px] gap-[12px] flex-wrap items-center justify-center'>
            <div>

            <Image className=' max-w-[] lg:max-w-[440px] h-[540px]' src={Mens} alt='' ></Image>
            </div>
            <div>


            <Image className=' max-w-[] lg:max-w-[440px] h-[540px]' src={Womens} alt='' ></Image>
            </div>
            <div></div>
            <Image className=' max-w-[] lg:max-w-[440px] h-[540px]' src={Kids} alt='' ></Image>
         </div>
         <div className="px-6 lg:mx-[232px] flex flex-wrap lg:flex-nowrap gap-8 lg:gap-[153px] border items-start pt-10">
  <div>
    <p className="font-medium text-[15px] leading-6 pb-6">Icons</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Air Force 1</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Huarache</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Air Max 90</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Air Max 95</p>
  </div>&apos;  <div>
    <p className="font-medium text-[15px] leading-6 pb-6">Shoes</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">All Shoes</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Custom Shoes</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Jordan Shoes</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Running Shoes</p>
  </div>
  <div>
    <p className="font-medium text-[15px] leading-6 pb-6">Clothing</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">All Clothing</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Modest Wear</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Hoodies & Pullovers</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Shirts & Tops</p>
  </div>
  <div>
    <p className="font-medium text-[15px] leading-6 pb-6">Kids</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Infant & Toddler Shoes</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Kids&apos; Shoes</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Kids&apos; Jordan Shoes</p>
    <p className="pb-4 text-[15px] leading-6 font-medium text-[#757575]">Kids&apos; Basketball Shoes</p>
  </div>
</div>

    </div>
  )
}

export default Essentials