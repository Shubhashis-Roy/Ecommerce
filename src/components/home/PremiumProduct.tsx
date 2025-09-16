"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation"; // ✅ Correct import

const AnimatedProductCard = ({
  product,
  index,
}: {
  product: { image: string; title: string; price: number; discount: number };
  index: number;
}) => {
  const router = useRouter();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 200, friction: 20, delay: index * 100 },
  });

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <animated.div
      ref={ref}
      style={cardAnimation}
      className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400 cursor-pointer"
      onClick={handleClick}
    >
      <ProductCard
        image={product.image}
        title={product.title}
        price={product.price}
        discount={product.discount}
      />
    </animated.div>
  );
};

const PremiumProduct = () => {
  const products = [
    {
      image: "/assets/PremiumProduct/pink_headphones.glb",
      title: "Flagship Smartphone",
      price: 999.99,
      discount: 12,
    },
    {
      image: "/assets/PremiumProduct/pink_headphones.glb",
      title: "Flagship Smartphone",
      price: 999.99,
      discount: 12,
    },
    {
      image: "/assets/PremiumProduct/pink_headphones.glb",
      title: "Flagship Smartphone",
      price: 999.99,
      discount: 12,
    },
    {
      image: "/assets/PremiumProduct/pink_headphones.glb",
      title: "Flagship Smartphone",
      price: 999.99,
      discount: 12,
    },
    {
      image: "/assets/PremiumProduct/pink_headphones.glb",
      title: "Flagship Smartphone",
      price: 999.99,
      discount: 12,
    },
  ];

  // Header animation
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const headerAnimation = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? "translateY(0px)" : "translateY(30px)",
    config: { tension: 200, friction: 25 },
  });

  const subHeaderAnimation = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? "translateY(0px)" : "translateY(30px)",
    config: { tension: 200, friction: 25, delay: 200 },
  });

  return (
    <section className="py-12 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-10">
          <animated.h2
            style={headerAnimation}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Test Products
          </animated.h2>
          <animated.p
            style={subHeaderAnimation}
            className="mt-4 text-lg text-black"
          >
            Discover our exclusive collection of luxury electronics
          </animated.p>
          <div className="mt-2 h-1 w-20 bg-yellow-400 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <AnimatedProductCard key={idx} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumProduct;
