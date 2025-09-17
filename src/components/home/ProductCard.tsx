"use client";

import React, { Suspense, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  discount: number;
}

const Model = ({ url }: { url: string }) => {
  const { scene } = useGLTF(url);

  // ✅ Deep clone to allow multiple instances of the same model
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  useMemo(() => {
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());
    clonedScene.position.sub(center);

    const scale = 2 / size;
    clonedScene.scale.set(scale, scale, scale);
  }, [clonedScene]);

  return <primitive object={clonedScene} />;
};

const ProductCard = ({ image, title, price, discount }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const is3DModel = image.endsWith(".glb") || image.endsWith(".gltf");

  return (
    <div
      className={`relative group p-4 text-center bg-white rounded-xl 
  border border-gray-200 shadow-lg transform transition duration-300
  hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl `} // ✅ border color only
      style={{ perspective: "1000px" }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr   to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div
        className="relative w-full h-48 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? "rotateX(5deg) rotateY(-5deg)"
            : "rotateX(0) rotateY(0)",
          transition: "transform 0.4s ease",
        }}
      >
        {is3DModel ? (
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
                enableRotate={isHovered}
              />
            </Suspense>
          </Canvas>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition">
        {title}
      </h3>
      <div className="mt-2 flex justify-center items-center gap-2">
        <span className="text-yellow-500 font-bold text-lg drop-shadow-sm">
          ${(price - (price * discount) / 100).toFixed(2)}
        </span>
        {discount > 0 && (
          <span className="text-sm text-gray-400 line-through">
            ${price.toFixed(2)}
          </span>
        )}
      </div>
      {discount > 0 && (
        <span className="inline-block mt-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md transform group-hover:scale-110 transition">
          {discount}% OFF
        </span>
      )}
    </div>
  );
};

export default ProductCard;
