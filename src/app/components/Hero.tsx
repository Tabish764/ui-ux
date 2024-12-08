import React from 'react'
import HeroImg from '../../../public/Image.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className=' flex flex-col justify-center  items-center w-full'>

        <div className='w-full pt-[10px] pb-1 bg-[#F5F5F5] flex flex-col items-center justify-center'>  
        <h1 className='text-[15px] font-medium text-center'>Hello Nike App</h1>

        <p className='text-[11px] leading-6 top-[19px] text-center'>Download the app to access everything Nike. <span className='underline font-medium'>Get Your Great</span></p>
        </div>

        <div className='w-full mx-auto flex justify-center items-center'>
            <Image className='' src={HeroImg} alt=''></Image>
        </div>

        <div className='mt-[48px]  flex flex-col justify-center  items-center  text-[15px] '>
            <p className='font-medium leading-6'>First Look</p>
            <h1 className='lg:text-[56px] md:text-[46px] sm:text-[36px] text-[26px] mt-[4px] text-center font-medium leading-[60px]'>
            Nike Air Max Pulse
            </h1>
            <p className='text-[15px] lg:pt-[24px]  text-center max-w-[511px] leading-6'>
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.
            </p>
        </div>
        
        <div className='flex mt-[30px] text-center leading-6 gap-[6px]'>
            <button className='bg-black text-white w-[110.58px] h-[39px] rounded-[30px]'>Notify Me</button>
            <button  className='bg-black text-white w-[138.16px] h-[39px] rounded-[30px]'>Shop Air Max</button>
        </div>
    </div>
  )
}

export default Hero