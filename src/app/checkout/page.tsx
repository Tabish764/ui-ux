'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo1.png";
import cart1 from "../../../public/cart1.png";
import msg from "../../../public/msg1.png";
import man1 from "../../../public/man 1.png";
import shoe1 from "../../../public/shoe1.png";
import Link from "next/link";
import location from "../../../public/location.png";
import card from "../../../public/payments.png";
import box from "../../../public/box.png";
import { useCart } from "../context/CartContext";

const Page = () => {
   const { cart, removeFromCart, updateQuantity } = useCart();
  
  const [checkbox2, setCheckbox2] = useState(false);

  
  const isButtonDisabled = !(checkbox2);
   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
   const shippingFee = 0; 
   const total = subtotal + shippingFee;
  return (
    //NAVBAR
    <>
      <div className="max-w-[1440px] pt-[26px] w-full mx-auto">
        <div className="flex justify-between">
          <Link href={"/"}>
            <Image src={logo} alt="logo"></Image>
          </Link>
          <div className="flex items-center">
            <p className="pr-[46px] ">000 800 100 9538</p>
            <div className="pr-[40px] flex items-center">
              <Image src={msg} alt="logo"></Image>
            </div>
            <Link href='/cart'>
            
            <Image src={cart1} alt="logo"></Image>
            </Link>
          </div>
        </div>

        <div className="pt-[90px] flex-wrap justify-center   flex md:justify-between mx-auto max-w-[880px]">
          <div className="md:max-w-[440px] max-w-[300px]">
            <h1 className="text-[21px] font-medium">
              How would you like to get your order?
            </h1>
            <p className="text-[15px] pb-[24px] text-[#757575]  pt-[11px]">
              Customs regulation for India require a copy of the
              recipient&apos;s KYC. The address on the KYC needs to match the
              shipping address. Our courier will contact you via SMS/email to
              obtain a copy of your KYC. The KYC will be stored securely and
              used solely for the purpose of clearing customs (including sharing
              it with customs officials) for all orders and returns. If your KYC
              does not match your shipping address, please click the link for
              more information. <span className="underline">Learn More</span>
            </p>
            <div className="text-center border-black rounded-[12px] border-2 relative">
              <div className="absolute left-5 top-1/2 transform  -translate-y-1/2">
                <Image src={box} alt="" />
              </div>
              <button className="md:py-[29px] text-[15px] md:pr-[307px] pl-[45px] font-medium py-4 px-5 rounded-[12px]">
                Deliver It
              </button>
            </div>

            <h1 className="text-[21px] font-medium pt-[44px]">
              Enter your name and address:
            </h1>
            <div className="pt-[28px]">
              <input
                type="text"
                className=" w-full mb-[32px] rounded-[4px] pl-[16px]  placeholder:text-black py-[16px] border"
                 placeholder="First Name"
              />
              <input
                type="text"
                className=" w-full rounded-[4px] mb-[32px] pl-[16px]  placeholder:text-black py-[16px] border"
                 placeholder="First Name"
              />
              <div className="mb-[32px] rounded-[4px]">
                <input
                  type="text"
                  className=" w-full rounded-[4px]  pl-[16px]  placeholder:text-black py-[16px] border"
                   placeholder="Address Line 1"
                />
                <p className="text-[11px] text-[#757575]">
                  We do not ship to P.O. boxes
                </p>
              </div>

              <input
                type="text"
                className=" w-full rounded-[4px] mb-[32px] pl-[16px]  placeholder:text-black py-[16px] border"
                 placeholder="Address Line 2"
              />
              <input
                type="text"
                className=" w-full rounded-[4px] mb-[32px] pl-[16px]  placeholder:text-black py-[16px] border"
                 placeholder="Address Line 3"
              />
              <div className="flex gap-[17px]  justify-between">
                <input
                  type="text"
                  className=" w-1/2 rounded-[4px] mb-[32px]  placeholder:pl-[16px]  placeholder:text-black py-[16px] border"
                   placeholder="Postal Code"
                />
                <input
                  type="text"
                  className=" w-1/2 rounded-[4px] mb-[32px]  pl-[16px]  placeholder:text-black py-[16px] border"
                   placeholder="Locality"
                />
              </div>
              <div className="flex g gap-[17px] justify-between">
                <input
                  type="text"
                  className=" w-1/2 rounded-[4px] mb-[32px] pl-[16px]   placeholder:text-[#757575] py-[16px] border"
                   placeholder="State/Territory"
                />
                <input
                  type="text"
                  className=" w-1/2 rounded-[4px] mb-[32px]  placeholder:text-black  pl-[16px]  py-[16px] border"
                   placeholder="India"
                />
              </div>
              <div className="flex gap-[14px]">
                <input
                  type="checkbox"
                  className="w-[18px]  pl-[16px] rounded-[3px] border border-[#757575] h-[18px]"
                />
                <p>Save this address to my profile</p>
              </div>
              <div className="flex pt-[32px] gap-[14px]">
                <input
                  className="w-[18px]  pl-[16px] rounded-[3px] border border-[#757575] h-[18px]"
                  type="checkbox"
                />
                <p>Save this address to my profile</p>
              </div>
              <h1 className="text-[21px] font-medium pt-[49px] pb-[28px]">
                Whats your contact information?
              </h1>
              <div className="mb-[32px]">
                <input
                  type="text"
                  className=" w-full rounded-[4px]   pl-[16px]  placeholder:text-black py-[16px] border"
                   placeholder="Email"
                />
                <p className="text-[11px] pl-[16px] text-[#757575]">
                  A confirmation email will be sent after checkout.
                </p>
              </div>
              <div className="">
                <input
                  type="text"
                  className=" w-full rounded-[4px]   pl-[16px]  placeholder:text-black py-[16px] border"
                   placeholder="Phone Number"
                />
                <p className="text-[11px] pl-[16px] text-[#757575]">
                  A carrier might contact you to confirm delivery.
                </p>
              </div>
              <h1 className="text-[21px] font-medium pt-[36px] pb-[28px]">
                Whats your PAN
              </h1>
              <div className="">
                <input
                  type="text"
                  className=" w-full rounded-[4px]   placeholder:pl-[16px]  placeholder:text-black py-[16px] border"
                   placeholder="PAN"
                />
                <p className="text-[11px] pl-[16px] text-[#757575]">
                  Enter your PAN to enable payment with UPI, Net Banking or
                  local <br />
                  card methods
                </p>
                <div className="flex items-center gap-[15.5px] pt-[8px]">
        <input
          type="checkbox"
          
        />
        <p className="text-[11px] text-[#757575]">
          Save PAN details to Nike Profile
        </p>
      </div>
      <div className="flex items-center gap-[15.5px] pt-[67px]">
        <input
          type="checkbox"
          checked={checkbox2}
          onChange={() => setCheckbox2(!checkbox2)}
        />
        <p className="text-[11px] text-[#757575]">
          I have read and consent to eShopWorld processing my information in
          accordance with the{" "}
          <span className="underline">Privacy Statement</span> and{" "}
          <span className="underline">Cookie Policy</span>. eShopWorld is a
          trusted Nike partner.
        </p>
      </div>
      <div className="pt-[71px]">
        <button
          className={`w-full py-[16px] rounded-[30px] font-medium ${
            isButtonDisabled ? "bg-[#F5F5F5] text-[#757575]" : "bg-black text-white"
          }`}
          disabled={isButtonDisabled}
        >
          Continue
        </button>
      </div>
                <hr className="w-full mt-[28px] " />
                <div className="mt-[21px]">
                  <h1 className="text-[20px] mb-[40px] font-medium">
                    Delivery
                  </h1>
                  <hr className="w-full mt-[28px] " />
                </div>
                <div className="mt-[21px]">
                  <h1 className="text-[20px] text-[#757575] mb-[40px] font-medium">
                    Shipping
                  </h1>
                  <hr className="w-full mt-[28px] " />
                </div>
                <div className="mt-[21px]">
                  <h1 className="text-[20px] text-[#757575] mb-[40px] font-medium">
                    Billing
                  </h1>
                  <hr className="w-full mt-[28px] " />
                </div>
                <div className="mt-[21px]">
                  <h1 className="text-[20px] pb-[178px] text-[#757575] font-medium">
                    Payment
                  </h1>
                </div>
              </div>
            </div>
          </div>



            

          <div className="w-[320px]  ">
            <h1 className="text-[21px] font-medium">Order Summary</h1>
            
            <div className="flex mt-[21px] text-[#8D8D8D] justify-between">
              <p>Subtotal</p>
              <p>₹ {subtotal.toFixed(2)}</p>
            </div>

            {/* Shipping */}
            <div className="flex mt-[21px] text-[#8D8D8D] justify-between">
              <p>Delivery/Shipping</p>
              <p>{shippingFee === 0 ? "Free" : `₹ ${shippingFee.toFixed(2)}`}</p>
            </div>

            <hr className="mt-[21px]" />

            {/* Total */}
            <div className="flex mt-[21px] font-medium justify-between">
              <p>Total</p>
              <p>₹ {total.toFixed(2)}</p>
            </div>
            <hr className="mt-[21px]" />
            <p className="text-[9px] mt-[18px] mb-[26px]">
              (The total reflects the price of your order, including all duties
              and taxes)
            </p>
            <div className="">
              <h1 className="font-bold">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>


                {
                  cart.map((item)=>(
                  
                    
              <div key={item.id} className="mt-[8px] gap-[12px] flex">
                <Image src={item.image} width={208} height={208}  alt=""></Image>
                <p>
                 {item.productName} <br />
                  <span className="text-[#8D8D8D]">Qty {item.quantity}</span>
                  <br />
                  <span className="text-[#8D8D8D]">Size L</span>
                  <br />
                  <span className="text-[#8D8D8D]">₹ {item.price}</span>
                </p>
              </div>
                  
                  ))
                }



              
         </div>
          </div>
        </div>
      </div>
           
      <div className="bg-black ite flex mt-auto absolute  flex-col px-[20px] justify-between  text-white w-full ">
        <div className="pt-[18px] pb-[18px] flex lg:flex-row flex-col  justify-between items-center gap-2">
          <div className="flex gap-2 flex-wrap items-center">
            <Image src={location} alt=""></Image>

            <p className="pr-[24.03px]">India</p>
            <p className="text-[11px] text-[#7E7E7E]">
              © 2023 Nike, Inc. All Rights Reserved
            </p>
            <div className="flex pl-[16.25px] gap-[18.72px]">
              <p className="text-[9px] text-[#8D8D8D]">Terms of use</p>
              <p className="text-[9px] text-[#8D8D8D]">Terms of sell</p>
              <p className="text-[9px] text-[#8D8D8D]">Privacy Policy</p>
            </div>
          </div>
          <div className="flex   ">
            <Image src={card} alt=""></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
