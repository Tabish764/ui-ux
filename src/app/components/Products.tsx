'use client'

import Nike from '../../../public/nike.png';
import Nike2 from '../../../public/nike 2.png';
import arrow1 from '../../../public/arrow1.png';
import arrow2 from '../../../public/arrow2.png';
import React, { useRef } from 'react';
import Image from 'next/image';

const Products = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-[84px] max-w-[1440px] mx-auto flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 lg:px-12">
        <h1 className="font-medium text-lg md:text-xl lg:text-2xl pb-3 leading-6 md:leading-8 pt-3">
          Best of Air Max
        </h1>
        <div className="flex items-center gap-3">
          <p className="font-medium text-sm md:text-base leading-6">Shop</p>
          <button onClick={scrollLeft}>
            <Image className="w-8 h-8 md:w-12 md:h-12" src={arrow1} alt="Scroll Left" />
          </button>
          <button onClick={scrollRight}>
            <Image className="w-8 h-8 md:w-12 md:h-12" src={arrow2} alt="Scroll Right" />
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div
        ref={scrollContainer}
        className="flex gap-4 px-6 lg:px-12 pt-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {/* Product Item */}
        {[Nike, Nike, Nike2, Nike2].map((imageSrc, index) => (
          <div
            key={index}
            className="min-w-[200px] md:min-w-[300px] lg:min-w-[400px] snap-center flex-shrink-0"
          >
            <Image
              className="w-full h-auto rounded-lg"
              src={imageSrc}
              alt={`Nike Product ${index + 1}`}
            />
            <p className="flex justify-between pt-4 text-sm md:text-base font-medium leading-6">
              Nike Air Max Pulse <span>₹ 13,995</span>
            </p>
            <p className="text-sm text-gray-500">Men's Shoes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
