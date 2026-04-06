import { Box, Button, Divider } from "@mui/material";
import React, { useEffect } from "react";
import OrderStepper from "./OrderStepper";
import { Payment } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../Redux ToolKit/Store";
import {
  fetchOrderById,
  fetchOrderItemById,
} from "../../../Redux ToolKit/Features/Customer/OrderSlice";
import { useParams } from "react-router";

const OrderDetail = () => {
  const dispatch = useAppDispatch();
  const { orderItemId, orderId } = useParams();

  const { orderItem, currentOrder } = useAppSelector(
    (store) => store.order
  );

  useEffect(() => {
    dispatch(
      fetchOrderItemById({
        jwt: localStorage.getItem("jwt"),
        orderItemId,
      })
    );

    dispatch(
      fetchOrderById({
        jwt: localStorage.getItem("jwt"),
        orderId,
      })
    );
  }, [orderItemId, orderId]);

  const image =
    orderItem?.product?.image?.[0] || "/placeholder.png";

  return (
    <Box className="space-y-8">

      {/* Product Preview */}
      <section className="flex flex-col items-center gap-4 text-center">
        <img
          className="w-[100px] object-cover rounded-lg border"
          src={image}
          alt=""
        />

        <div className="space-y-1">
          <h1 className="font-semibold text-lg">
            {currentOrder?.seller?.businessDetails?.businessName || "Store"}
          </h1>

          <p className="text-sm max-w-md">
            {orderItem?.product?.title}
          </p>

          <p className="text-sm text-gray-500">
            Size : {orderItem?.size}
          </p>
        </div>
      </section>

      {/* Order Stepper */}
      <section className="border border-gray-200 rounded-lg p-5 bg-white">
        <OrderStepper status={currentOrder?.orderStatus} />
      </section>

      {/* Delivery Address */}
      <section className="border border-gray-200 rounded-lg p-5 bg-white space-y-3">
        <h1 className="font-semibold">Delivery Address</h1>

        <div className="text-sm space-y-2">
          <div className="flex items-center gap-4 font-medium">
            <p>{currentOrder?.shippingAddress?.name}</p>
            <Divider flexItem orientation="vertical" />
            <p>{currentOrder?.shippingAddress?.mobile}</p>
          </div>

          <p className="text-gray-600">
            {currentOrder?.shippingAddress?.address},{" "}
            {currentOrder?.shippingAddress?.locality},{" "}
            {currentOrder?.shippingAddress?.city},{" "}
            {currentOrder?.shippingAddress?.state} -{" "}
            {currentOrder?.shippingAddress?.pincode}
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
              You saved{" "}
              <span className="text-green-500 font-medium">
                ₹
                {(
                  (currentOrder?.totalMrpPrice || 0) -
                  (currentOrder?.totalSellingPrice || 0)
                )}
              </span>{" "}
              on this order
            </p>
          </div>

          <p className="font-semibold">
            ₹{currentOrder?.totalSellingPrice}
          </p>
        </div>

        {/* Payment */}
        <div className="p-5">
          <div className="bg-teal-50 px-4 py-3 rounded-md text-sm font-medium flex items-center gap-3 text-teal-700">
            <Payment fontSize="small" />
            <p>{currentOrder?.paymentStatus}</p>
          </div>
        </div>

        <Divider />

        {/* Seller */}
        <div className="px-5 py-4 text-sm">
          <p>
            <span className="font-semibold">Sold By:</span>{" "}
            {currentOrder?.seller?.businessDetails?.businessName}
          </p>
        </div>

        <Divider />

        {/* Action */}
        <div className="p-6">
          <Button fullWidth variant="outlined" color="error">
            Cancel Order
          </Button>
        </div>
      </section>
    </Box>
  );
};

export default OrderDetail;