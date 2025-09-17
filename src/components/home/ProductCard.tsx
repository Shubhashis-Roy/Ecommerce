"use client";

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Model } from "./Model";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  discount: number;
}

const ProductCard = ({ image, title, price, discount }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-4 text-center bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition">
      <div
        className="relative w-full h-48 mb-4 rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense
            fallback={
              <mesh>
                <boxGeometry />
                <meshStandardMaterial color="gray" />
              </mesh>
            }
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <Model url={image} />
            <OrbitControls
              makeDefault
              enablePan={false}
              enableZoom={true}
              enableRotate={isHovered} // rotate only on hover
            />
          </Suspense>
        </Canvas>
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="mt-2 flex justify-center items-center gap-2">
        <span className="text-yellow-500 font-bold text-lg">
          ${(price - (price * discount) / 100).toFixed(2)}
        </span>
        {discount > 0 && (
          <span className="text-sm text-gray-400 line-through">
            ${price.toFixed(2)}
          </span>
        )}
      </div>
      {discount > 0 && (
        <span className="inline-block mt-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {discount}% OFF
        </span>
      )}
    </div>
  );
};

// Preload for performance
useGLTF.preload("/assets/PremiumProduct/pink_headphones.glb");

export default ProductCard;
