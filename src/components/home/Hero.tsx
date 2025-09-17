"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Variants for left and right sections
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // Badge animation variant
  const badgeVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, type: "spring", stiffness: 300 },
    }),
  };

  return (
    <section className="bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-row gap-10 items-center">
        {/* Left Text Section */}
        <motion.div
          className="w-[40%]"
          variants={leftVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Shop Your <span className="text-blue-600">Favorite Products</span>
            <br />
            with Ease & Convenience
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover thousands of products across electronics, fashion, home
            essentials, and more. Enjoy exclusive deals, fast shipping, and a
            seamless shopping experience.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
              Start Shopping →
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm hover:bg-gray-100 transition">
              Browse Categories
            </button>
          </div>
        </motion.div>

        {/* Right Image with Animated Badges */}
        <motion.div
          className="relative w-[60%] cursor-pointer"
          variants={rightVariant}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/banner-3.webp"
            alt="Shop Preview"
            width={900}
            height={600}
            className="rounded-xl shadow-lg"
          />

          {/* Text on top of the image */}
          <div className="absolute top-1/4 left-6 max-w-[300px] text-gray-900 drop-shadow-sm">
            <h2 className="text-2xl font-bold">Exclusive Deals</h2>
            <p className="mt-2 text-sm text-gray-700">
              Grab the best discounts on your favorite products today.
            </p>
          </div>

          {/* Animated Floating Badges */}
          <motion.div
            className="absolute top-4 left-6 bg-green-500 text-white px-3 py-1 rounded-lg text-sm shadow-md"
            custom={0}
            variants={badgeVariant}
            initial="hidden"
            animate="visible"
          >
            Free Shipping
          </motion.div>

          <motion.div
            className="absolute bottom-6 right-6 bg-orange-500 text-white px-3 py-1 rounded-lg text-sm shadow-md"
            custom={1}
            variants={badgeVariant}
            initial="hidden"
            animate="visible"
          >
            Best Prices Guaranteed
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-6 bg-white px-3 py-1 rounded-lg text-sm shadow-md flex items-center gap-2"
            custom={2}
            variants={badgeVariant}
            initial="hidden"
            animate="visible"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            24/7 Support
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
