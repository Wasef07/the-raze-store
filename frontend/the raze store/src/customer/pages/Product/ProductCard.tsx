import React, { useState } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../Redux ToolKit/Store";

const ProductCard = ({ item }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate =  useNavigate();
  const mainImage = item.image?.[2];

  const dispatch = useAppDispatch();
  
  return (
    <div onClick={()=>navigate(`/product-details/${item.category}/${item.title}/${item._id}`)} className="group px-4">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" z-1 relative w-[250px] sm:w-full h-[350px] overflow-hidden rounded-lg bg-gray-100"
      >
        <img
          src={mainImage}
          alt={item.name}
          className="card-media transition-transform duration-500 group-hover:scale-105"
        />
      </div>


      <div className="pt-3 space-y-2">

        <h3 className="text-sm font-semibold text-gray-700 truncate">
          {item?.seller?.businessDetails?.businessName}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 leading-snug">
          {item.title}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-gray-900">
            {item.sellingPrice}
          </span>

          <span className="text-sm text-gray-400 line-through">
            {item.mrpPrice}
          </span>

          <span className="text-sm font-medium text-green-600">
            {item.discountPercent}%off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
