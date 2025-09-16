import { useState, useEffect } from "react";
import { CustomerReviews } from "./CustomerReviews";
import { FrequentlyBought } from "./FrequentlyBought";
import { ProductImageGallery } from "./ProductImageGallery";
import { ProductInfo } from "./ProductInfo";
import { SpecialOffers } from "./SpecialOffers";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  reviews: number;
}

export const ProductDetails = () => {
  const [loaded, setLoaded] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setLoaded(true);
  }, []);

  const product: Product = {
    id: 1,
    name: "Wine Handloom Cotton Saree with Woven Border",
    price: 2485,
    originalPrice: 3100,
    reviews: 7,
  };

  return (
    <main className="min-h-screen bg-white">
      <section
        className={`pt-8 pb-16 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <span className="hover:text-primary cursor-pointer transition-colors">
              Home
            </span>
            <span>/</span>
            <span className="hover:text-primary cursor-pointer transition-colors">
              Sarees
            </span>
            <span>/</span>
            <span className="hover:text-primary cursor-pointer transition-colors">
              Handloom Cotton
            </span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>

          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="order-2 lg:order-1">
              <ProductImageGallery productName={product.name} />
            </div>
            <div className="order-1 lg:order-2">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Frequently Bought Together */}
        <FrequentlyBought />

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Trust & Security Section */}
        <SpecialOffers />
      </div>
    </main>
  );
};
