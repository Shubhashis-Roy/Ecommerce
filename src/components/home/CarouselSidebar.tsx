"use client";

import { useState, useEffect } from "react";
import { useSprings, animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";
import {
  FiCpu,
  FiMonitor,
  FiHeadphones,
  FiSmartphone,
  FiCamera,
  FiWatch,
  FiStar,
  FiTag,
  FiGift,
} from "react-icons/fi";
import { MdGamepad } from "react-icons/md";

const categories = [
  { name: "Computer & Laptop", icon: <FiCpu /> },
  { name: "Television & Video", icon: <FiMonitor /> },
  { name: "Headphones", icon: <FiHeadphones /> },
  { name: "Smartphones", icon: <FiSmartphone /> },
  { name: "Camera & Photos", icon: <FiCamera /> },
  { name: "Smart Watch", icon: <FiWatch /> },
  { name: "Video Games", icon: <MdGamepad /> },
  { name: "Best Seller", icon: <FiStar /> },
  { name: "Special Discount", icon: <FiTag /> },
  { name: "New Arrivals", icon: <FiGift /> },
];

const slides = [
  {
    id: 1,
    title: "A camera to fulfill your dreams",
    desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper enim sed morbi integer felis ut tristique.",
    tag: "Sale Top 20% OFF",
    img: "/banner-3.webp",
  },
  {
    id: 2,
    title: "Upgrade your style with Smart Watches",
    desc: "Modern watches with advanced features for daily life.",
    tag: "New Collection",
    img: "/banner-3.webp",
  },
  {
    id: 3,
    title: "Best Headphones for your music",
    desc: "Experience premium sound quality with comfort.",
    tag: "Hot Deal",
    img: "/banner-3.webp",
  },
];
const HoverCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  const [style, api] = useSpring(() => ({
    transform: "translateY(0px) scale(1)",
    backgroundColor: "#ffffff",
    color: "#000000",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    config: { tension: 300, friction: 20 },
  }));

  return (
    <animated.div
      style={style}
      className="flex items-center justify-between px-3 py-2 cursor-pointer rounded transition-all"
      onMouseEnter={() =>
        api.start({
          transform: "translateY(-3px) scale(1.02)",
          backgroundColor: "#FDC800",
          color: "#041E42",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        })
      }
      onMouseLeave={() =>
        api.start({
          transform: "translateY(0px) scale(1)",
          backgroundColor: "#ffffff",
          color: "#000000",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        })
      }
    >
      <span className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <span className="text-sm">{name}</span>
      </span>
      <span className="text-gray-400">›</span>
    </animated.div>
  );
};

export default function HomeSection() {
  const [index, setIndex] = useState(0);

  // Auto-swipe every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Springs for slides
  const [springs, api] = useSprings(slides.length, (i) => ({
    x: i * 100,
  }));

  // Update springs on index change
  useEffect(() => {
    api.start((i) => ({
      x: (i - index) * 100,
    }));
  }, [index, api]);

  // Drag gesture
  const bind = useDrag(
    ({ active, movement: [mx], direction: [dx], distance, cancel }) => {
      // distance is Vector2: [xDistance, yDistance]
      const distanceX = distance[0]; // horizontal distance

      if (active && distanceX > 80) {
        if (dx < 0 && index < slides.length - 1) {
          setIndex((prev) => prev + 1);
        } else if (dx > 0 && index > 0) {
          setIndex((prev) => prev - 1);
        }
        cancel?.();
      }
    }
  );

  // Sidebar animation (from left)
  const sidebarSpring = useSpring({
    from: { x: -200, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { tension: 200, friction: 25 },
  });

  // Carousel animation (from right)
  const carouselSpring = useSpring({
    from: { x: 200, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { tension: 200, friction: 25 },
  });

  return (
    <section className="flex flex-col md:flex-row w-full h-[600px] bg-gradient-to-r from-indigo-500 to-purple-500 p-10 gap-4">
      {/* Sidebar */}
      <animated.aside
        style={sidebarSpring}
        className="w-full md:w-1/4 bg-white shadow-md p-4 space-y-2 overflow-x-auto"
      >
        {categories.map((cat, i) => (
          <HoverCard key={i} icon={cat.icon} name={cat.name} />
        ))}
      </animated.aside>

      {/* Carousel */}
      <animated.div
        style={carouselSpring}
        className="relative flex-1 overflow-hidden bg-white"
      >
        <div
          {...bind()}
          className="w-full h-full relative touch-none cursor-grab"
        >
          {springs.map((style, i) => (
            <animated.div
              key={slides[i].id}
              style={{
                transform: style.x.to((x) => `translateX(${x}%)`),
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={slides[i].img}
                  alt={slides[i].title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-center md:items-start justify-center h-full px-6 md:px-10 py-4 max-w-md mx-auto md:mx-0">
                <span className="bg-yellow-300 text-sm px-3 py-1 rounded-full text-black">
                  {slides[i].tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 drop-shadow-lg">
                  {slides[i].title}
                </h2>
                <p className="mt-3 text-gray-700 drop-shadow-md">
                  {slides[i].desc}
                </p>
                <button className="mt-5 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
                  Shop Now
                </button>
              </div>
            </animated.div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </animated.div>
    </section>
  );
}
