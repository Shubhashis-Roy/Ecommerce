"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ProductDetails } from "./ProductDetails";

const ProductsPage = () => {
  return (
    <>
      <Header />
      <ProductDetails />;
      <Footer />
    </>
  );
};

export default ProductsPage;
