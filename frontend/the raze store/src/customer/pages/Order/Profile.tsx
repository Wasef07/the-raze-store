import { Divider } from "@mui/material";
import React from "react";
import Order from "./Order";
import OrderDetail from "./OrderDetail";
import { Route, Routes, useNavigate } from "react-router";
import UserDetail from "../Account/UserDetail";
import { performLogout } from "../../../Redux ToolKit/Features/Auth/AuthSlice";
import { useAppDispatch } from "../../../Redux ToolKit/Store";

const menu = [
  { name: "Orders", path: "/account/orders" },
  { name: "Profile", path: "/account" },
  { name: "Saved Card", path: "/saved-card" },
  { name: "Addresses", path: "/addresses" },
  { name: "Logout", path: "/" },
];

const Profile = () => {
  const dispatch=useAppDispatch();
  const navigate = useNavigate();
  const handleClick=(item:any)=>{
    if(item.name==="Logout")handleLogout();
    navigate(item.path)
  }

  const handleLogout = ()=>{
    dispatch(performLogout());
  }
  return (
    <div className="px-4 lg:px-32 min-h-screen mt-10">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-5">My Account</h1>
      <Divider />

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 bg-white  rounded-lg p-4 space-y-2 h-fit">
          {menu.map((item) => (
            <div
              onClick={()=>handleClick(item)}
              key={item.path}
              className="px-4 py-2 rounded-md text-sm cursor-pointer
              hover:bg-teal-500 hover:text-white transition"
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="lg:col-span-3 bg-white border border-gray-400  rounded-lg p-6">
          <Routes>
            <Route path="/" element={<UserDetail />} />
            <Route path="/orders" element={<Order />} />
            <Route
              path="/orders/:orderId/item/:orderItemId"
              element={<OrderDetail />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;
