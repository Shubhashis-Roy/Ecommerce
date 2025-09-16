"use client";

import { useState } from "react";
import { ShoppingCart, Star, Check } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface FrequentlyBoughtProps {
  products?: Array<{
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    reviews: number;
    image: string;
  }>;
}

export const FrequentlyBought = ({ products }: FrequentlyBoughtProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [addedProducts, setAddedProducts] = useState<number[]>([]);

  const defaultProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 3499,
      originalPrice: 4500,
      reviews: 120,
      image: "/assets/ProductImages/pink1.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      originalPrice: 5999,
      reviews: 80,
      image: "/assets/ProductImages/pink2.png",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 2599,
      originalPrice: 3200,
      reviews: 45,
      image: "/assets/ProductImages/pink3.png",
    },
    {
      id: 4,
      name: "Drone Camera",
      price: 12999,
      originalPrice: 15000,
      reviews: 20,
      image: "/assets/ProductImages/pink4.png",
    },
  ];

  const displayProducts = products || defaultProducts;

  const handleQuickAdd = (id: number) => {
    setAddedProducts((prev) => [...prev, id]);
    // Remove the effect after 1s
    setTimeout(() => {
      setAddedProducts((prev) => prev.filter((pid) => pid !== id));
    }, 1000);
  };

  return (
    <section
      ref={ref}
      className={`py-16 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          Frequently Bought Together
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Complete your electronics collection with these popular gadgets loved by our customers
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayProducts.map((item, index) => {
          const discountPercentage = Math.round(
            ((item.originalPrice - item.price) / item.originalPrice) * 100
          );

          const isAdded = addedProducts.includes(item.id);

          return (
            <div
              key={item.id}
              className="card-luxury group hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="sale-badge bg-red-600 text-white">
                  {discountPercentage}% OFF
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Add Button */}
                <button
                  onClick={() => handleQuickAdd(item.id)}
                  className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 btn-primary text-sm px-4 py-2 flex items-center gap-2 text-white ${
                    isAdded && "animate-bounce bg-green-600"
                  }`}
                >
                  {isAdded ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ShoppingCart className="w-4 h-4" />
                  )}
                  {isAdded ? "Added!" : "Quick Add"}
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-600 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({item.reviews})</span>
                </div>

                {/* Pricing */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{item.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-600 line-through">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-green-600 text-sm font-medium">
                    Save ₹{(item.originalPrice - item.price).toLocaleString()}
                  </p>
                </div>

                {/* Action Button */}
                <button className="w-full btn-outline text-sm py-3 text-gray-900 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
