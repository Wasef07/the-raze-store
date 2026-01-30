import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ item }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const mainImage = item.images?.[1];

  return (
    <div className="group px-4">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-[250px] sm:w-full h-[350px] overflow-hidden rounded-lg bg-gray-100"
      >
        <img
          src={mainImage}
          alt={item.name}
          className="card-media transition-transform duration-500 group-hover:scale-105"
        />
      </div>


      <div className="pt-3 space-y-2">

        <h3 className="text-sm font-semibold text-gray-700 truncate">
          {item.seller.businessDetails.businessName}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 leading-snug">
          Extraordinary Yellow Soft Silk Saree With Glowing Blouse Piece
        </p>

        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-gray-900">
            ₹1,499
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹2,299
          </span>

          <span className="text-sm font-medium text-green-600">
            38% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
