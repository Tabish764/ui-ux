import Image from 'next/image'
import React from 'react'
import logo from '../../../public/Frame.png'
import Link from 'next/link'

const Topbar = () => {
  return (
    // container
    <div className='bg-[#F5F5F5] md:flex justify-between px-1  h-[36px] hidden items-center  w-full'>

    <div className=' items-center max-w-[1440px]  mx-auto   w-full  flex justify-between  '>
       
        <Image width={24} height={24} alt='Logo' src={logo}></Image>
       <span></span>
        <div className='bg-[#FFFFFF]  flex items-center '>
            <p className='text-[13px] px-[10px] flex items-center font-medium text-[#111111] leading-[26px]'>Skip to main content</p>
        </div>
        <div className='flex gap-[10.26px] text-[11px] font-medium  items-center'>
            <Link href={"/nikestore"} className='flex font-medium  gap-[10.26px]'>Find a Store </Link>
            <span className='text-[12px]'>|</span>
            <Link href={"/help"} className='flex font-medium  gap-[10.26px]'>Help <span  className='text-[12px]'>|</span></Link>
            <Link href={'nikemember'} className='flex font-medium  gap-[10.26px]'>Join Us<span  className='text-[12px]'>|</span></Link>
            <Link href={'signIn'}>Sign In </Link>
        </div>
    </div>

    </div>
  )
}

export default Topbar