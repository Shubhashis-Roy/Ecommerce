"use client";

import { useInView } from "react-intersection-observer";

const offers = [
  {
    code: "JUSTDUET_15",
    description: "Get 15% off on 2 or more electronics!",
    extra: "Free shipping on orders above ₹2,000",
    emoji: "🎉",
  },
  {
    code: "NEWYEAR20",
    description: "20% off on all new arrivals!",
    extra: "Valid till 31st Dec",
    emoji: "✨",
  },
  {
    code: "FESTIVE10",
    description: "Flat 10% off on festive collection",
    extra: "Limited time offer",
    emoji: "💎",
  },
];

export const SpecialOffers = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-10">
          Special Offers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              ref={ref}
              className={`p-6 rounded-xl shadow-lg transition-all duration-700 transform ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } bg-gradient-to-tr from-white to-gray-50 hover:shadow-2xl hover:scale-105`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 text-xl mb-3 animate-pulse">
                <span className="text-teal-500 text-2xl">{offer.emoji}</span>
                {offer.code}
              </h4>
              <p className="text-gray-800 text-sm mb-1">{offer.description}</p>
              <p className="text-gray-500 text-sm">{offer.extra}</p>
              <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                Apply Offer
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
