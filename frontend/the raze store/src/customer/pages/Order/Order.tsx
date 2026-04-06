import React, { useEffect } from "react";
import OrderItemCard from "./OrderItemCard";
import { useNavigate } from "react-router";
import store, {
  useAppDispatch,
  useAppSelector,
} from "../../../Redux ToolKit/Store";
import { fetchUserOrderHistory } from "../../../Redux ToolKit/Features/Customer/OrderSlice";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const order = useAppSelector((store) => store.order);
  useEffect(() => {
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt")));
  }, []);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold">All Orders</h1>
        <p className="text-sm text-gray-500">From anytime</p>
      </div>

      <div className="space-y-4">
        {order?.orders?.map((ord) =>
          ord?.orderItems?.map((item) => (
            <OrderItemCard key={item._id} order={ord} item={item} />
          )),
        )}
      </div>
    </div>
  );
};

export default Order;
