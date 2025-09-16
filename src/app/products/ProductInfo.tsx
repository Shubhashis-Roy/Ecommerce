import { useState } from "react";
import { Heart, Share2, ShoppingCart, Zap } from "lucide-react";

interface ProductInfoProps {
  product: {
    name: string;
    price: number;
    originalPrice: number;
    reviews: number;
  };
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Product Title & Actions */}
      <div className="flex justify-between items-start">
        <h1 className="text-4xl font-serif font-bold text-gray-900 leading-tight pr-4">
          {product.name}
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-3 rounded-full border transition-all duration-300 hover:-translate-y-1 ${
              isWishlisted
                ? "bg-blue-600 text-white border-blue-600 shadow-luxury"
                : "bg-white text-gray-600 border-gray-200 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            <Heart
              className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
            />
          </button>
          <button className="p-3 rounded-full bg-white text-gray-600 border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="star-rating text-yellow-600">★★★★★</div>
        <span className="text-gray-600 font-medium">
          ({product.reviews} {product.reviews === 1 ? "review" : "reviews"})
        </span>
        <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded-full">
          ✓ Verified Reviews
        </span>
      </div>

      {/* Pricing */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-4">
          <span className="text-4xl font-bold text-gray-900">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-xl text-gray-600 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
          <span className="bg-gradient-to-r from-red-600 to-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
            {discountPercentage}% OFF
          </span>
        </div>
        <p className="text-green-600 font-semibold">
          You save ₹{(product.originalPrice - product.price).toLocaleString()}
        </p>
      </div>

      {/* Description */}
      <div className="prose prose-lg">
        <p className="text-gray-600 leading-relaxed">
          Embrace timeless elegance with this exquisite handloom cotton saree.
          Meticulously woven with premium cotton threads and adorned with
          intricate golden borders, this piece represents the finest traditions
          of Indian craftsmanship. Perfect for festivals, weddings, and special
          occasions.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-900">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <span>100% Handloom Cotton</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-900">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <span>Woven Border Design</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-900">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <span>Festive & Traditional</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-900">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <span>Premium Quality</span>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-900">Quantity</label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-fit">
          {/* Decrement Button */}
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-900 font-bold"
          >
            −
          </button>

          {/* Quantity Display */}
          <div className="px-4 py-2 text-gray-900 font-medium">{quantity}</div>

          {/* Increment Button */}
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-900 font-bold"
          >
            +
          </button>
        </div>
      </div>

  <div className="flex flex-col md:flex-row gap-4 mt-4">
  {/* Add to Cart */}
  <button className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-900 font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-200 shadow-sm">
    <ShoppingCart className="w-5 h-5 text-gray-900 group-hover:scale-110 transition-transform" />
    Add to Cart
  </button>

  {/* Buy Now */}
  <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200">
    <Zap className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    Buy Now
  </button>
</div>

      {/* Offer Box */}
      <div className="offer-box">
        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
          <span className="text-yellow-600">🎉</span>
          Special Offers
        </h4>
        <div className="mt-3 space-y-2">
          <p className="text-sm text-gray-900">
            <span className="font-bold text-yellow-600">JUSTDUET_15</span> - Get
            15% off on 2 or more sarees!
          </p>
          <p className="text-sm text-gray-600">
            Free shipping on orders above ₹2,000
          </p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
          <span>Authentic Handloom</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
          <span>Easy Returns</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
          <span>Secure Payment</span>
        </div>
      </div>
    </div>
  );
};
