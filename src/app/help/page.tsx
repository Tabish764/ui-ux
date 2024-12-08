import React from 'react';
import thumbs from '../../../public/thumbs up.png'
import thumbs1 from '../../../public/thumbs down.png'
import phone from '../../../public/phone.png'
import msg from '../../../public/msg.png'
import locator from '../../../public/locator.png'
import email from '../../../public/email.png'
import Image from 'next/image';
const Page = () => {
  return (
    <div className=" min-h-screen">
      <div className="max-w-[1440px] mx-auto py-8 px-[28px]">
        {/* Header */}
        <h1 className="text-[32px] font-medium text-center mb-6">GET HELP</h1>
        <div className="text-center mb-10">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full max-w-[457px] p-3 border border-gray-300 rounded-[8px]"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Payment Options */}
          <div className="md:col-span-2">
            <h2 className="text-[28px] font-medium mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
            <p className="mb-[33px]">
              We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the
              following payment options:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
              <p className='mt-[23px]'>PayTM or a local credit or debit card</p>
              <p className='mt-[23px]'>Apple Pay</p>
            </ul>
            <p className="mb-4 ">
             <span className='font-medium underline'>Nike Members</span>  can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re
              not already a Member, <a href="#" className="text-black font-medium underline">join us today</a>.
            </p>
            <div className="flex space-x-4 mb-6">
              <button className="bg-black text-white py-2 w-[106.13px] px-4 rounded-[30px]">JOIN US</button>
              <button className="bg-black text-white py-2 px-4 w-[129.84px] rounded-[30px]">SHOP NIKE</button>
            </div>

            {/* FAQs */}
            <h3 className="text-lg font-semibold mb-2">FAQs</h3>
            <div className="mb-4">
              <p className="font-bold mt-[17px]">Does my card need international purchases enabled?</p>
              <p>
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified
                at checkout if international purchases need to be enabled.
              </p>
              <p className='mt-[21px]'>Please note, some banks may charge a small transaction fee for international orders.</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Can I pay for my order with multiple methods?</p>
              <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">What payment method is accepted for SNKRS orders?</p>
              <p>You can use any accepted credit card to pay for your SNKRS order.</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Why don&apos;t I see Apple Pay as an option?</p>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple
                device running the latest OS, be signed in to your iCloud account and have a supported card in your
                Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
              </p>
              <p className='pt-[20px] text-[15px]'>Was this answer helpful?</p>
              <div className='flex items-center'>
                <Image src={thumbs} alt=''></Image>
                <Image src={thumbs1} alt=''></Image>
              </div>
            <p className='text-[#757575] font-medium'>RELATED</p>
            </div>
            <div>

              <p className='font-medium'>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
              <p className='font-medium'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-white flex flex-col   items-center   border-gray-200 rounded-md">
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <div className='flex pt-[21px]'>
              <Image src={phone} alt=''></Image>
            </div>
            <div className="mb-4 pt-[29px] text-center">
              <p className='font-medium'>000 800 919 0566</p>
              <br /> Products & Orders: 24 hours a day,
              <br /> 7 days a week
              <br /> Company Info & Enquiries: 07:30 -
              <br /> 16:30, Monday - Friday
            </div>
            <div className="flex pt-[53px] flex-col items-center mb-4">
              <span className="">
                <Image 
                  src={msg}
                  alt="24 hours icon"

                />
              </span>
              <p className='mt-[29px]'>24 hours a day,<br /> 7 days a week</p>
            </div>
            <div className="flex pt-[53px] flex-col items-center mb-4">
              <span className="">
              <Image 
                  src={email}
                  alt="24 hours icon"

                />
              </span>
              <p className='mt-[29px]'>We&apos;ll reply within <br /> five business days</p>
            </div>
            <div className="flex pt-[53px] flex-col items-center">
              <span className="">
              <Image 
                  src={locator}
                  alt="24 hours icon"

                />
              </span>
              <p className='mt-[29px] text-center'>Store Locator <br />Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
