"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CarouselSidebar from "@/components/home/CarouselSidebar";
import PremiumProduct from "@/components/home/PremiumProduct";
import FeaturedDeals from "@/components/home/FeaturedDeals";

export default function Home() {
  // Scroll to top when page loads
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <>
      <Header />
      <CarouselSidebar />
      <PremiumProduct />
      <FeaturedDeals />
      <Footer />
    </>
  );
}
