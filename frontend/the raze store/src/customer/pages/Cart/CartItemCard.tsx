import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React, { use } from "react";
import { useAppDispatch } from "../../../Redux ToolKit/Store";
import { deleteCartItem, updateCartItem } from "../../../Redux ToolKit/Features/Customer/CartSlice";

const CartItemCard = ({ item }: any) => {
  const dispatch = useAppDispatch();
  const handleUpdateCartItem=(quantity:number)=>{
    dispatch(updateCartItem({
      jwt: localStorage.getItem("jwt"),
      cartItemId: item._id,
      quantity
    }))
  }
  const handleRemove = () => {
    dispatch(
      deleteCartItem({
        jwt: localStorage.getItem("jwt"),
        cartItemId: item._id,
      }),
    );
  };
  return (
    <div className="border border-gray-300 rounded-md bg-white relative">
      <div className="p-4 flex gap-3">
        <img
          className="w-[90px] h-[110px] object-cover rounded-md"
          src={item?.product?.image[0]}
          alt="product"
        />

        <div className="space-y-1 flex-1">
          <h2 className="text-sm font-semibold text-gray-800">
            Lajree Designer
          </h2>

          <p className="text-sm text-gray-700 leading-snug line-clamp-2">
            {item.product.title}
          </p>

          <p className="text-xs text-gray-400">
            <span className="font-medium">Sold by:</span> Lajree Designer
          </p>

          <p className="text-xs text-gray-500">7 days replacement available</p>
        </div>
      </div>

      <IconButton
        onClick={handleRemove}
        size="small"
        sx={{
          position: "absolute",
          top: 6,
          right: 6,
        }}
      >
        <Close fontSize="small" />
      </IconButton>

      <Divider />

      <div className="px-4 py-2 flex justify-between items-center">
        <div className="flex items-center border border-gray-300 rounded-md">
          <Button disabled={item.quantity===1} onClick={()=>handleUpdateCartItem(item.quantity-1)} size="small" sx={{ minWidth: 30 }}>
            <Remove fontSize="small" />
          </Button>

          <span className="px-3 text-sm font-semibold text-gray-800">
            {item.quantity}
          </span>

          <Button onClick={()=>handleUpdateCartItem(item.quantity+1)} size="small" sx={{ minWidth: 30 }}>
            <Add fontSize="small" />
          </Button>
        </div>

        <p className="text-sm font-semibold text-gray-800">
          ₹{item.sellingPrice}
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
