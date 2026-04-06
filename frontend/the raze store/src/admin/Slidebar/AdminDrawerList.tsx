import {
  Add,
  Category,
  Dashboard,
  ElectricBolt,
  Home,
  IntegrationInstructions,
  LocalOffer,
  Logout,
} from "@mui/icons-material";
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppSelector } from "../../Redux ToolKit/Store";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <Dashboard className="text-teal-600" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Coupons",
    path: "/admin/coupon",
    icon: <IntegrationInstructions className="text-teal-600" />,
    activeIcon: <IntegrationInstructions className="text-white" />,
  },
  {
    name: "Add New Coupons",
    path: "/admin/add-coupon",
    icon: <Add className="text-teal-600" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: "Home Page",
    path: "/admin/home-grid",
    icon: <Home className="text-teal-600" />,
    activeIcon: <Home className="text-white" />,
  },
  {
    name: "Electronics Category",
    path: "/admin/electronics-category",
    icon: <ElectricBolt className="text-teal-600" />,
    activeIcon: <ElectricBolt className="text-white" />,
  },
  {
    name: "Shop By Category",
    path: "/admin/shop-by-category",
    icon: <Category className="text-teal-600" />,
    activeIcon: <Category className="text-white" />,
  },
  {
    name: "Deals",
    path: "/admin/deals",
    icon: <LocalOffer className="text-teal-600" />,
    activeIcon: <LocalOffer className="text-white" />,
  },
];

const AdminDrawerList = ({ toggleDrawer }) => {
  const user = useAppSelector((store) => store.user);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Handle Logout");
    // 👉 add your logout logic here (clear token, redux reset, etc.)
    navigate("/");
  };

  const handleClick = (item) => {
    navigate(item.path);
  };

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[280px] border-r border-gray-200 bg-white py-8">
        {/* Top Menu */}
        <div className="space-y-2">
          {menu.map((item) => (
            <div
              onClick={() => handleClick(item)}
              key={item.path}
              className="pr-5 cursor-pointer"
            >
              <div
                className={`${
                  location.pathname === item.path
                    ? "bg-teal-600 text-white shadow-sm"
                    : ""
                } flex items-center gap-3 px-6 py-3.5 rounded-r-full transition-all`}
              >
                <ListItemIcon className="!min-w-[34px]">
                  {location.pathname === item.path
                    ? item.activeIcon
                    : item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    className: "font-medium text-sm",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Logout Section */}
        <div className="space-y-6">
          <Divider className="mx-6" />

          <div className="px-6">
            <div className="flex items-center justify-between px-4 py-3 rounded-xl  hover:bg-teal-50 transition group">
              {/* Name */}
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  {user.user?.name || "Admin"}
                </span>
                <span className="text-[11px] text-gray-400">Admin</span>
              </div>

              {/* Logout */}
              <div
                onClick={handleLogout}
                className="flex items-center gap-1 text-gray-500 group-hover:text-teal-600 transition cursor-pointer"
              >
                <Logout fontSize="small" />
                <span className="text-xs font-medium">Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDrawerList;
