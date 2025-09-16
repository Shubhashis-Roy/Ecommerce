import { Star, ThumbsUp, Verified } from "lucide-react";

interface Review {
  id: number;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  helpful: number;
}

interface CustomerReviewsProps {
  averageRating?: number;
  totalReviews?: number;
  ratingDistribution?: { [key: number]: number };
}

export const CustomerReviews = ({
  averageRating = 5.0,
  totalReviews = 7,
  ratingDistribution = { 5: 7, 4: 0, 3: 0, 2: 0, 1: 0 },
}: CustomerReviewsProps) => {
  const sampleReviews: Review[] = [
    {
      id: 1,
      author: "Priya S.",
      rating: 5,
      title: "Absolutely Beautiful!",
      content:
        "The quality of this saree exceeded my expectations. The handloom work is exquisite and the wine color is so rich and elegant. Perfect for my sister's wedding!",
      date: "2 weeks ago",
      verified: true,
      helpful: 12,
    },
    {
      id: 2,
      author: "Meera K.",
      rating: 5,
      title: "Premium Quality",
      content:
        "Gorgeous saree with beautiful border work. The cotton is soft and comfortable to wear all day. Received many compliments at the function.",
      date: "1 month ago",
      verified: true,
      helpful: 8,
    },
    {
      id: 3,
      author: "Anjali R.",
      rating: 5,
      title: "Traditional Elegance",
      content:
        "Perfect traditional saree for festivals. The golden border adds such a classy touch. Fast delivery and excellent packaging too!",
      date: "3 weeks ago",
      verified: true,
      helpful: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-amber-500 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const getPercentage = (count: number) => (count / totalReviews) * 100;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
            Customer Reviews
          </h2>

          {/* Rating Overview */}
          <div className="card-luxury grid md:grid-cols-3 gap-8 p-6 bg-white rounded-lg shadow-md">
            {/* Overall Rating */}
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-5xl font-bold text-amber-600 mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.floor(averageRating))}
              </div>
              <p className="text-gray-600 text-lg">
                Based on {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-3 p-4">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-lg font-medium text-gray-800 w-10">
                    {rating} ★
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-amber-500 transition-all duration-500 rounded-full"
                      style={{ width: `${getPercentage(ratingDistribution[rating] || 0)}%` }}
                    />
                  </div>
                  <span className="text-lg text-gray-600 w-10">
                    {ratingDistribution[rating] || 0}
                  </span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center p-4">
              <button className="btn-primary w-full mb-4 text-white bg-amber-500 hover:bg-amber-600 rounded-lg py-3 text-lg shadow-md transition-colors">
                Write a Review
              </button>
              <p className="text-gray-600 text-md">
                Share your experience with this product
              </p>
            </div>
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">
            Recent Reviews
          </h3>

          {sampleReviews.map((review, index) => (
            <div
              key={review.id}
              className="card-luxury hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg p-6"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-xl font-semibold text-gray-800">
                        {review.author}
                      </h4>
                      {review.verified && (
                        <div className="flex items-center gap-1 text-green-600 text-sm bg-green-50 px-2 py-1 rounded-full">
                          <Verified className="w-4 h-4" />
                          Verified Purchase
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-gray-600 text-md">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                {review.title}
              </h5>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {review.content}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600 text-md hover:text-amber-500 transition-colors">
                  <ThumbsUp className="w-5 h-5" />
                  Helpful ({review.helpful})
                </button>
                <button className="text-gray-600 text-md hover:text-amber-500 transition-colors">
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Reviews */}
        <div className="text-center mt-8">
          <button className="btn-outline px-8 py-3 text-gray-800 bg-white border border-amber-200 rounded-lg hover:bg-amber-50 shadow-md transition-colors">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};