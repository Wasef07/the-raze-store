import React from "react";
import SimilarProductCard from "./SimilarProductCard";

const product = {
  images: [
    "https://lajreedesigner.com/cdn/shop/files/KP-6026_1.jpg?v=1745490955&width=1780",
    "https://lajreedesigner.com/cdn/shop/files/KP-6026_4.jpg?v=1745490955&width=1780",
  ],
  seller: {
    businessDetails: {
      businessName: "Lajree Designer",
    },
  },
};

const SimilarProduct = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {Array.from({ length: 10 }).map((_, index) => (
        <SimilarProductCard key={index} item={product} />
      ))}
    </div>
  );
};

export default SimilarProduct;
