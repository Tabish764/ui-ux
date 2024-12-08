import React from "react";
import shoe from "../../../public/Rectangle.png";
import Image from "next/image";
import cart from "../../../public/Buy 2.png";

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto pb-[362px] mt-[158px] flex flex-wrap gap-[50px] lg:gap-[130px] justify-center lg:justify-start lg:pl-[98px]">
      {/* Shoe Image */}
      <div className="flex justify-center w-full lg:w-auto">
        <Image className="px-5 lg:px-0" src={shoe} alt="Shoe" />
      </div>

      {/* Text Content */}
      <div className="max-w-[376px] w-full text-center lg:text-left">
        <h1 className="font-medium text-[28px] lg:text-[48px] leading-[48px]">
          Nike Air Force 1 PLT.AF.ORM
        </h1>
        <p className="font-400 lg:text-[15px] text-[10px] lg:leading-[28px] leading-[18px] pt-[34px]">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid.
          Its "inside out"-inspired construction, including unique layering and
          exposed foam accents, ups the ante on this timeless Jordan Brand
          silhouette. Details like the deco stitching on the Swoosh add coveted
          appeal, while the unexpected shading, rich mixture of materials and
          aged midsole aesthetic give this release an artisan finish.
        </p>
        <h1 className="text-[36px] leading-[28px] font-medium mt-[32px]">
          ₹ 8 695.00
        </h1>

        {/* Add to Cart Button */}
        <div className="bg-black rounded-[30px] text-white mt-[26px] flex items-center justify-center gap-[10px] py-[7.5px] px-[22.5px] w-[174.42px] mx-auto lg:mx-0">
          <Image src={cart} alt="Cart Icon" />
          <button className="text-[15px]">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default page;
