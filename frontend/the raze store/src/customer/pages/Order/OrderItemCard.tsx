import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const OrderItemCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/account/orders/1/item/1")}
      className="bg-white border border-gray-300 rounded-lg p-5 space-y-4 
      hover:shadow-md transition cursor-pointer"
    >
      {/* Status */}
      <div className="flex items-center gap-3">
        <Avatar sx={{ bgcolor: "#00927c", width: 32, height: 32 }}>
          <ElectricBolt fontSize="small" />
        </Avatar>

        <div>
          <h1 className="font-semibold text-teal-600">Pending</h1>
          <p className="text-xs text-gray-500">Arriving by 12/12/2022</p>
        </div>
      </div>

      {/* Product */}
      <div className="flex gap-4 bg-gray-50 p-4 rounded-md">
        <img
          className="w-[70px] object-cover rounded-md "
          src="https://lajreedesigner.com/cdn/shop/files/KP-6026_1.jpg?v=1745490955&width=1780"
          alt=""
        />

        <div className="space-y-1">
          <h1 className="font-medium">Raze Store</h1>
          <p className="text-sm line-clamp-2">
            Extraordinary Yellow Soft Silk Saree With Glowing Blouse Piece
          </p>
          <p className="text-sm font-semibold">Free</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
