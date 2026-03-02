import { Box, Button, Divider } from "@mui/material";
import React from "react";
import OrderStepper from "./OrderStepper";
import { Payment } from "@mui/icons-material";

const OrderDetail = () => {
  return (
    <Box className="space-y-8">

      {/* Product Preview */}
      <section className="flex flex-col items-center gap-4 text-center">

        <img
          className="w-[100px]  object-cover rounded-lg border"
          src="https://lajreedesigner.com/cdn/shop/files/KP-6026_1.jpg?v=1745490955&width=1780"
          alt=""
        />

        <div className="space-y-1">
          <h1 className="font-semibold text-lg">The Raze Store</h1>
          <p className="text-sm max-w-md">
            Extraordinary Yellow Soft Silk Saree With Glowing Blouse Piece
          </p>
          <p className="text-sm text-gray-500">Size : Free</p>
        </div>

      </section>

      {/* Order Stepper */}
      <section className="border border-gray-200 rounded-lg p-5 bg-white">
        <OrderStepper />
      </section>

      {/* Delivery Address */}
      <section className="border border-gray-200 rounded-lg p-5 bg-white space-y-3">
        <h1 className="font-semibold">Delivery Address</h1>

        <div className="text-sm space-y-2">
          <div className="flex items-center gap-4 font-medium">
            <p>Pablo Pandey</p>
            <Divider flexItem orientation="vertical" />
            <p>12324545667</p>
          </div>

          <p className="text-gray-600">
            Ripon Street, Kolkata - 09796
          </p>
        </div>
      </section>

      {/* Price & Payment */}
      <section className="border border-gray-200 rounded-lg bg-white overflow-hidden">

        {/* Price */}
        <div className="flex justify-between items-center text-sm p-5 border-b">
          <div className="space-y-1">
            <p className="font-semibold">Total Item Price</p>
            <p className="text-gray-500">
              You saved <span className="text-green-500 font-medium">₹6000</span> on this order
            </p>
          </div>

          <p className="font-semibold">₹12,545.00</p>
        </div>

        {/* Payment */}
        <div className="p-5">
          <div className="bg-teal-50 px-4 py-3 rounded-md text-sm font-medium flex items-center gap-3 text-teal-700">
            <Payment fontSize="small" />
            <p>Pay on Delivery</p>
          </div>
        </div>

        <Divider />

        {/* Seller */}
        <div className="px-5 py-4 text-sm">
          <p>
            <span className="font-semibold">Sold By:</span> Pablo Clothing
          </p>
        </div>

        <Divider />

        {/* Action */}
        <div className="p-6">
          <Button
            fullWidth
            variant="outlined"
            color="error"
          >
            Cancel Order
          </Button>
        </div>

      </section>

    </Box>
  );
};

export default OrderDetail;