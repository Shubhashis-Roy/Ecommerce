"use client";

import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "./ProductCard";

interface Deal {
  image: string;
  title: string;
  price: number;
  discount: number;
}

const AnimatedDealCard = ({
  product,
  isActive,
}: {
  product: Deal;
  isActive: boolean;
}) => {
  return (
    <div
      className={`transition-all duration-700 ease-in-out flex-shrink-0 w-72 rounded-xl p-6 relative bg-white shadow-lg
        ${isActive ? "scale-110 z-20 opacity-100" : "scale-90 z-10 opacity-70"}
      `}
    >
      {/* Product Preview */}
      <div className="overflow-hidden h-56 mb-4">
        <ProductCard
          image={product.image}
          title={product.title}
          price={product.price}
          discount={product.discount}
        />
      </div>

      {/* Title & Price */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
        {product.title}
      </h3>
      <div className="flex justify-between items-center">
        <span className="text-green-600 font-bold">
          ${(product.price - (product.price * product.discount) / 100).toFixed(2)}
        </span>
        {product.discount > 0 && (
          <span className="text-sm text-gray-500 line-through">
            ${product.price.toFixed(2)}
          </span>
        )}
      </div>
      {product.discount > 0 && (
        <span className="inline-block mt-2 bg-red-500 text-white text-xs px-3 py-1 rounded">
          {product.discount}% OFF
        </span>
      )}

      {/* Add to Cart */}
      <button className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-all duration-300 hover:bg-green-600">
        <FiShoppingCart className="text-base" />
      </button>
    </div>
  );
};

const FeaturedDeals = () => {
  const deals: Deal[] = [
    { image: "/assets/PremiumProduct/pink_headphones.glb", title: "Extra Camera Bundle", price: 1349.99, discount: 8 },
    { image: "/assets/PremiumProduct/pink_headphones.glb", title: "Premium Gaming Laptop", price: 2499.99, discount: 12 },
    { image: "/assets/PremiumProduct/pink_headphones.glb", title: "Smartphone Pro", price: 1099.99, discount: 10 },
    { image: "/assets/PremiumProduct/pink_headphones.glb", title: "Wireless Headset", price: 299.99, discount: 5 },
    { image: "/assets/PremiumProduct/pink_headphones.glb", title: "VR Headset", price: 599.99, discount: 7 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + deals.length) % deals.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % deals.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-12 bg-gradient-to-br from-gray-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Featured Deals
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Grab these limited-time offers on premium electronics
          </p>
          <div className="mt-2 h-1 w-20 bg-green-400 mx-auto rounded"></div>
        </div>

        {/* Carousel */}
        <div
          className="relative flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 z-20 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full shadow-lg transition-all"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Cards Row */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(calc(50% - ${
                  activeIndex * (18 + 1) // card width (18rem) + gap (1rem)
                }rem - 9rem))`, // half card width to keep center aligned
              }}
            >
              {deals.map((deal, idx) => (
                <AnimatedDealCard
                  key={idx}
                  product={deal}
                  isActive={idx === activeIndex}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 z-20 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full shadow-lg transition-all"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
