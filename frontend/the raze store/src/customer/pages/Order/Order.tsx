import React from "react";
import OrderItemCard from "./OrderItemCard";
import { useNavigate } from "react-router";

const Order = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold">All Orders</h1>
        <p className="text-sm text-gray-500">From anytime</p>
      </div>

      <div className="space-y-4">
        {[1, 1, 1, 1, 1].map((_, index) => (
          <OrderItemCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Order;
