"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import bin from "../../../public/bin.png";
import heart from "../../../public/heart.png";
import Link from "next/link";

const page = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="w-full pb-[100px] lg:pb-[0px] max-w-[1240px] mx-auto mt-10 px-4 flex flex-wrap gap-8">
      {/* Left Section */}
      <div className="lg:flex-1 flex flex-col mx-auto ">
        <div className="bg-[#F7F7F7] p-4">
          <h1 className="font-medium text-[13px]">Free Delivery</h1>
          <p className="text-[11px]">
            Applies to orders of ₹ 14 000.00 or more.{" "}
            <span className="font-medium underline">View details</span>
          </p>
        </div>

        <div className="mt-6 space-y-6 mb-[85px]">
          <h1 className="text-[22px] font-medium">Bag</h1>
          {cart.length === 0 ? (
            <p>Your bag is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex flex-wrap items-start gap-4 border-b pb-4">
                <div className="w-[150px]">
                  <Image width={150} height={150} className="w-full" alt={item.productName} src={item.image} />
                </div>

                <div className="flex-1">
                  <h1 className="font-medium text-[15px]">{item.productName}</h1>
                  <p className="text-[#757575] text-[15px]">{item.description}</p>

                  <div className="flex text-[#757575] mt-3 space-x-6">
                    <div className="flex items-center space-x-2">
                      <p>Size:</p>
                      <span className="text-[14px]">{item.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p>Quantity:</p>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-5 space-x-4 items-center">
                    <Image src={heart} alt="Heart Icon" />
                    <Image
                      src={bin}
                      alt="Bin Icon"
                      onClick={() => removeFromCart(item.id)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                <div className="ml-auto">
                  <p className="font-medium text-[15px]">MRP: ₹ {item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="w-full max-w-[350px] mx-auto lg:mx-0 bg-white rounded-lg">
        <h1 className="text-[21px] font-medium mb-4">Summary</h1>
        <div className="flex justify-between text-sm mb-2">
          <p>Subtotal</p>
          <p>₹ {subtotal.toLocaleString()}</p>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <p>Estimated Delivery & Handling</p>
          <p>{subtotal >= 14000 ? "Free" : "₹ 500"}</p>
        </div>
        <hr className="mt-[20px]" />
        <div className="flex justify-between font-medium text-sm mt-[17px]">
          <p>Total</p>
          <p>
            ₹ {(subtotal >= 14000 ? subtotal : subtotal + 500).toLocaleString()}
          </p>
        </div>
        <hr className="mt-[20px]" />
        <Link href='/checkout'>
        
        <button className="w-full bg-black text-white py-[18px] rounded-[30px] mt-[49px]">
          Member Checkout
        </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
