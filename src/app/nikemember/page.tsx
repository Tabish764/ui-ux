import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Frame1.png'
const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center justify-centers'>
            <Image src={Logo} alt='logo'></Image>
        </div>
        <div className='flex flex-col'>

        <h1 className='font-bold text-[18px] text-center'>BECOME A NIKE MEMBER</h1>
        <p className='font-[400] text-[14px] pt-[27px] w-[274.08px] text-center text-[#8D8D8D]'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
        </div>
        <div className='flex justify-center pt-[20px] items-center flex-col'>

        <input placeholder='Email address' className="text w-[324px] border placeholder:px-[17px] rounded-[3px] py-2 border-[#E5E5E5]" />
        <input placeholder='Password' className="text mt-[13px] w-[324px] border placeholder:px-[17px] py-2 rounded-[3px] border-[#E5E5E5]" />
        <input placeholder='First Name' className="text mt-[13px] w-[324px] border placeholder:px-[17px] py-2 rounded-[3px] border-[#E5E5E5]" />
        <input placeholder='Last Name' className="text mt-[13px] w-[324px] border placeholder:px-[17px] py-2 rounded-[3px] border-[#E5E5E5]" />
        <input placeholder='Date of Birth' className="text mt-[13px] w-[324px] border placeholder:px-[17px] py-2 rounded-[3px] border-[#E5E5E5]" />
        <p className='text-[11px] font-[400] text-[#8D8D8D] pt-[7px]'>Get a Nike Member Reward every year on your Birthday.</p>
        <input placeholder='India' className="text mt-[13px] w-[324px] border placeholder:px-[17px] py-2 rounded-[3px] border-[#E5E5E5]" />
        <div className='flex gap-[16.22px]'>

        <input placeholder='Male' className="text-center mt-[13px] w-[153.89px] border placeholder:px-[17px] py-2 rounded-[3px] border-[#e5e5e5]" />
        <input placeholder='Female' className="text-center mt-[13px] w-[153.89px]  border placeholder:px-[17px] py-2 rounded-[3px] border-[#E5E5E5]" />
        </div>
        <div className='flex items-center w-[324px] gap-[14px] text-[#8D8D8D] pt-[23px]'>
            <div className='flex items-center gap-[14px]'>

            <input type="checkbox" className='w-[20px] h-[20px] border-[#E5E5E5]' />
            <p className='text-[11px] leading-[14px]  font-[400]'>Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
            </div>
            
        </div>
        <p className='text-center text-[12px] w-[279.31px] pt-[21px] text-[#8D8D8D] font-[400]'>By creating an account, you agree to Nike&apos;s <span >Privacy Policy</span> and <span className='underline'>Terms of Use.</span></p>
        <button className='bg-black text-white  text-[15px] w-[324px] h-[40px] rounded-[3px] mt-[30px]'>JOIN US</button>
        <p className='mt-[20px] pb-[33px] text-[#8D8D8D]'>Already a Member? <span className='text-black underline '>Sign In</span></p>
        </div>
    </div>
  )
}

export default page