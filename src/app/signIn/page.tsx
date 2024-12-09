import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Frame1.png'
const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex  items-center justify-centers'>
            <Image className='' src={Logo} alt='logo'></Image>
        </div>
        <div className='flex'>

        <h1 className='font-bold text-[18px] text-center w-[156px]'>YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
        </div>
        <div className='flex justify-center mt-[25px] items-center flex-col'>

        <input placeholder='Email address' className="text w-[324px] rounded-[4px] border placeholder:px-[17px] py-3 border-[#E5E5E5]" />
        <input placeholder='Password' className="text mt-[13px] w-[324px] rounded-[4px] border placeholder:px-[17px] py-3 border-[#E5E5E5]" />
        <div className='flex items-center justify-between  w-full gap-[14px] text-[#8D8D8D] pt-[23px]'>
            <div className='flex justify-between items-center gap-[14px]'>

            <input type="checkbox" className='w-[20px] h-[20px] border-[#E5E5E5]' />
            <p className='text-[12px]  font-[400]'>Keep me signed in</p>
            </div>
            <div>
                <p className='text-[12px] font-[400] text-[#BCBCBC]'>Forgotten your password?</p>
            </div>
        </div>
        <p className='text-center text-[12px] w-[279.31px] pt-[25px] text-[#8D8D8D] font-[400]'>By logging in, you agree to Nike&apos;s <span >Privacy Policy</span> and <span className='underline'>Terms of Use.</span></p>
        <button className='bg-black text-white text-[11px] w-[324px] h-[40px] rounded-[3px] mt-[30px]'>SIGN IN</button>
        <p className='mt-[20px] pb-[83px] text-[#8D8D8D]'>Not a Member? <span className='text-black underline '>Join us</span></p>
        </div>
    </div>
    
  )
}

export default page