import React from 'react';
import man from '../../../public/man.png';
import Image from 'next/image';
import bin from '../../../public/bin.png';
import heart from '../../../public/heart.png';

const page = () => {
  return (
    <div className="w-full pb-[100px] lg:pb-[0px] max-w-[1240px] mx-auto mt-10 px-4 flex flex-wrap gap-8">
      
      {/* Left Section */}
      <div className="lg:flex-1 flex flex-col mx-auto ">
        {/* Free Delivery Section */}
        <div className="bg-[#F7F7F7] p-4">
          <h1 className="font-medium text-[13px]">Free Delivery</h1>
          <p className="text-[11px]">
            Applies to orders of ₹ 14 000.00 or more.{" "}
            <span className="font-medium underline">View details</span>
          </p>
        </div>

        {/* Bag Items */}
        <div className="mt-6 space-y-6  mb-[85px]">
          {/* First Item */}
            <h1 className='text-[22px] font-medium '>Bag</h1>
          <div className="flex flex-wrap items-start gap-4 border-b pb-4">
            {/* Image Section */}
            <div className="w-[150px]">
              <Image className="w-full" alt="man" src={man} />
            </div>

            {/* Details Section */}
            <div className="flex-1">
              <h1 className="font-medium text-[15px]">Nike Dri-FIT ADV TechKnit Ultra</h1>
              <p className="text-[#757575] text-[15px]">Men&apos;s Short-Sleeve Running Top</p>
              <p className="text-[15px] font-light text-[#757575]">Ashen Slate/Cobalt Bliss</p>

              <div className="flex text-[#757575] mt-3 space-x-6">
                <div className="flex items-center space-x-2">
                  <p>Size:</p>
                  <span className="text-[14px]">L</span>
                </div>
                <div className="flex items-center space-x-2">
                  <p>Quantity:</p>
                  <span className="text-[13px]">1</span>
                </div>
              </div>

              <div className="flex mt-5 space-x-4 items-center">
                <Image src={heart} alt="Heart Icon" />
                <Image src={bin} alt="Bin Icon" />
              </div>
            </div>

            {/* MRP Section */}
            <div className="ml-auto">
              <p className="font-medium text-[15px]">MRP: ₹ 3 895.00</p>
            </div>
          </div>

          {/* Second Item */}
          <div className="flex flex-wrap items-start gap-4 border-b pb-4">
            {/* Image Section */}
            <div className="w-[150px]">
              <Image className="w-full" alt="man" src={man} />
            </div>

            {/* Details Section */}
            <div className="flex-1">
              <h1 className="font-medium text-[15px]">Nike Air Max 97 SE</h1>
              <p className="text-[#757575] text-[15px]">Men&apos;s Shoes</p>
              <p className="text-[15px] font-light text-[#757575]">
                Flat Pewter/Light Bone/Black/White
              </p>

              <div className="flex text-[#757575] mt-3 space-x-6">
                <div className="flex items-center space-x-2">
                  <p>Size:</p>
                  <span className="text-[14px]">8</span>
                </div>
                <div className="flex items-center space-x-2">
                  <p>Quantity:</p>
                  <span className="text-[13px]">1</span>
                </div>
              </div>

              <div className="flex mt-5 space-x-4 items-center">
                <Image src={heart} alt="Heart Icon" />
                <Image src={bin} alt="Bin Icon" />
              </div>
            </div>

            {/* MRP Section */}
            <div className="ml-auto">
              <p className="font-medium text-[15px]">MRP: ₹ 16 995.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-full max-w-[350px] mx-auto lg:mx-0 bg-white rounded-lg">
        <h1 className="text-[21px] font-medium mb-4">Summary</h1>
        <div className="flex justify-between text-sm mb-2">
          <p>Subtotal</p>
          <p>₹ 20 890.00</p>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <p>Estimated Delivery & Handling</p>
          <p>Free</p>
        </div>
        <hr className='mt-[20px]' />
        <div className="flex justify-between t font-medium text-sm mt-[17px]">
          <p>Total</p>
          <p>₹ 20 890.00</p>
        </div>
        <hr className='mt-[20px]' />
        <button className="w-full bg-black text-white py-[18px] rounded-[30px] mt-[49px]">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default page;
