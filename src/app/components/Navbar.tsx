import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Frame1.png'
import Link from 'next/link';
import Search from '../../../public/Auto Layout Horizontal.png'
import Heart from '../../../public/heart.png'
import Cart from '../../../public/cart.png'
import { FaBars } from 'react-icons/fa'; 
const Navbar = () => {

    type NavLink = {
        name: string;
        url: string;
      };
    const navLinks: NavLink[] = [
        { name: 'New & Featured', url: '/new-featured' },
        { name: 'Men', url: '/men' },
        { name: 'Women', url: '/women' },
        { name: 'Kids', url: '/kids' },
        { name: 'Sale', url: '/sale' },
        { name: 'SNKRS', url: '/snkrs' },
      ];
      
  return (
    <div className='mx-auto max-w-[1440px] w-full  flex justify-between  items-center'>
      <Link href={'/'}>
      
        <Image width={58.85} height={20.54} className=' ' src={Logo} alt="Nike's Logo"></Image>
      </Link>
       <span></span>
        <div className='md:flex   hidden gap-[15px]'>
            {
                navLinks.map((item,index)=>(
                    <p className='text-[15px] font-medium' key={index}>
                        <Link href={''}  >{item.name}</Link>
                    </p>
                ))
            }
        </div>
        <div className='flex  items-center '>
      <div className='flex  items-center border rounded-full bg-[#F5F5F5] relative w-full max-w-[180px] '>

      <input
        className='bg-transparent rounded-full pl-[48px] pr-4 py-[8px] placeholder:text-[#CCCCCC] placeholder:font-medium text-[#111111] w-full focus:outline-none focus:ring-2 focus:ring-[#000000]/50'
        type="text"
        placeholder='Search'
        />
     
      <div className='absolute left-2'>
        <Image src={Search} alt='Search Icon'  />
      </div>
        </div>
        <div className='flex items-center gap-3 pl-[12px]'>
            <Image src={Heart} alt=''></Image>
            <Link href={'/cart'}>
            <Image src={Cart} alt=''></Image>
            </Link>
        <FaBars className='block md:hidden' size={25} />
        </div>
    </div>
        </div>
  
  )
}

export default Navbar