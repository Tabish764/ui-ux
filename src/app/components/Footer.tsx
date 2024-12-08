import React from 'react'
import twitter from '../../../public/twitter.png'
import facebook from '../../../public/facebook.png'
import insta from '../../../public/insta.png'
import youtube from '../../../public/youtube.png'
import Image from 'next/image'
import location from '../../../public/location.png'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='bg-black pt-[40px] flex  flex-col px-[42px] justify-between  text-white w-full '>
        <div className='  flex  justify-between lg:flex-row flex-col max-w-[1440px] w-full   mx-auto'>

     
            <div className='flex lg:flex-nowrap flex-wrap flex-col lg:flex-row lg:text-start  mx-auto lg:mx-0 text-center '>

            <div className=' flex flex-col lg:mr-[159px]'>
            <Link href={''} className='text-[10px] leading-[32.63px] '>FIND A STORE</Link>
            <Link href={'/nikemember'} className='text-[10px] leading-[32.63px] '>BECOME A MEMEBER</Link>
            <Link href={'/signIn'} className='text-[10px] leading-[32.63px] '>SIGN UP FOR EMAIL</Link>
            <p className='text-[10px] lg:w-[93.45px] leading-[24px] lg:text-center'>Send Us Feedback</p>
            <p className='text-[10px] leading-[32.63px] '>STUDENT DISCOUNTS</p>
        

            </div>
        
            <div className='lg:mr-[76.32px] '>
            <p className='text-[10px] leading-6 '>GET HELP</p>
            <p className='text-[11px] leading-[28px] text-[#7E7E7E] '>Order Status</p>
            <p className='text-[11px] leading-[28px] text-[#7E7E7E] '>Delivery</p>
            <p className='text-[11px] leading-[28px] text-[#7E7E7E] '>Returns</p>
            <p className='text-[11px] leading-[28px] text-[#7E7E7E] '>Payment Options</p>
            <p className='text-[11px] leading-[28px] text-[#7E7E7E] '>Contact Us on Nike.com Inquiries</p>
            <p className='text-[11px] leading-[28px] text-[#7E7E7E] '>Contact Us On All Other Inquiries</p>
           
        </div>

       
            <div className=' '>
            <p className='text-[10px] '>ABOUT MIKE</p>
            <p className='text-[11px] pt-[14px]  text-[#7E7E7E] '>News</p>
            <p className='text-[11px] pt-[17px] text-[#7E7E7E] '>Careers</p>
            <p className='text-[11px]  pt-[17px] text-[#7E7E7E] '>Investors</p>
            <p className='text-[11px] pt-[17px] text-[#7E7E7E] '>Sustainability</p>
        
           
        </div>
            </div>
            <div className='flex lg:justify-start lg:mt-0 mt-5 justify-center  gap-[16px]'>
                <div>
                <Image alt='' src={twitter}></Image>
                </div>
                <div>
                <Image alt='' src={facebook}></Image>
                </div>
                <div>
                <Image alt='' src={youtube}></Image>
                </div>
                <div>
                <Image alt='' src={insta}></Image>
                </div>

               
            </div>
       
        </div>



       <div className='pt-[45px] pb-[18px] flex lg:flex-row flex-col  justify-between items-center gap-2'>
        <div className='flex gap-2 flex-wrap items-center'>

        <div>
            <Image src={location} alt=''></Image>
        </div>
        <p className='pr-[24.03px]'>India</p>
        <p className='text-[11px] text-[#7E7E7E]'>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
    <div className='flex lg:flex-nowrap flex-wrap gap-[27.8px]'>
        <p className='text-[12px] text-[#7E7E7E] leading-[28px]'>Guides</p>
        <p className='text-[12px] text-[#7E7E7E] leading-[28px]'>Terms of Sale</p>
        <p className='text-[12px] text-[#7E7E7E] leading-[28px]'>Terms of Use</p>
        <p className='text-[12px] text-[#7E7E7E] leading-[28px]'>Nike Privacy Policy</p>
    </div>
       </div>



        </div>
       

  )
}

export default Footer