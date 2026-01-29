import React from "react";
import CartItemCard from "./CartItemCard";
import { Favorite, LocalOffer } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import PricingCard from "./PricingCard";

const Cart = () => {
  return (
    <div className="pt-10 px-4 sm:px-8 lg:px-20 xl:px-28 min-h-screen bg-gray-50">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT – CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {[1, 1, 1, 1].map((_, index) => (
              <CartItemCard key={index} />
            ))}
          </div>

          {/* RIGHT – SUMMARY */}
          <div className="space-y-4">
            
            {/* COUPON */}
            <div className="border border-gray-300 rounded-lg bg-white px-5 py-4">
              <div className="flex gap-3 items-center text-sm font-medium">
                <LocalOffer color="primary" sx={{ fontSize: 18 }} />
                <span>Apply Coupons</span>
              </div>

              <div className="mt-3 flex gap-2">
                <TextField fullWidth placeholder="Coupon Code" size="small" />
                <Button variant="outlined">Apply</Button>
              </div>
            </div>

            {/* PRICING */}
            <div className="border border-gray-300 rounded-lg bg-white">
              <PricingCard />
              <div className="p-4">
                <Button fullWidth variant="contained" sx={{ py: 1.2 }}>
                  BUY NOW
                </Button>
              </div>
            </div>

            {/* WISHLIST */}
            <div className="border border-gray-300 rounded-lg bg-white px-5 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50">
              <span className="text-sm font-medium">Add from wishlist</span>
              <Favorite color="primary" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
