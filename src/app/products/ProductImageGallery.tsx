import { useState, useEffect } from "react";

interface ProductImageGalleryProps {
  productName: string;
}

export const ProductImageGallery = ({ productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [loaded, setLoaded] = useState(false); // for animation trigger

  useEffect(() => {
    setLoaded(true); // triggers animation on mount
  }, []);

  // Use public folder paths directly
  const images = [
    "/assets/ProductImages/pink1.png",
    "/assets/ProductImages/pink2.png",
    "/assets/ProductImages/pink3.png",
    "/assets/ProductImages/pink4.png",
  ];

  const imageDescriptions = ["Main View", "Detail View", "Drape Style", "Full Length"];

  return (
    <div className={`space-y-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      {/* Main Image */}
      <div className="image-luxury group relative aspect-[3/4] w-full">
        <img
          src={images[selectedImage]}
          alt={`${productName} - ${imageDescriptions[selectedImage]}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 justify-center">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative w-20 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-elegant ${
              selectedImage === idx
                ? "border-blue-600 shadow-luxury scale-105"
                : "border-gray-200 hover:border-blue-300"
            }`}
          >
            <img
              src={img}
              alt={`${productName} - ${imageDescriptions[idx]} thumbnail`}
              className="w-full h-full object-cover"
            />
            {selectedImage === idx && (
              <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce-in" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Image Navigation Dots */}
      <div className="flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selectedImage === idx
                ? "bg-blue-600 w-6"
                : "bg-gray-400 hover:bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
