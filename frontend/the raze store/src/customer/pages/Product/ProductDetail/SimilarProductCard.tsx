import React from 'react'

const SimilarProductCard = ({ item }: any) => {
  return (
    <div className="group cursor-pointer">

      <div className="relative aspect-[3/4] bg-gray-100 rounded-md overflow-hidden">
        <img
          src={item.images[0]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-2 space-y-1">
        <h3 className="text-xs font-medium text-gray-700 truncate">
          {item.seller.businessDetails.businessName}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2 leading-snug">
          Yellow Soft Silk Saree With Glowing Blouse Piece
        </p>

        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-gray-900">₹1,499</span>
          <span className="text-xs text-gray-400 line-through">₹2,299</span>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard
