import React, { useEffect } from "react";
import Navbar from "../../common/Navbar";
import SellerDrawerList from "../Sidebar/SellerDrawerList";
import SellerRoutes from "../../Routes/SellerRoutes";
import { useAppDispatch } from "../../Redux ToolKit/Store";
import { fetchSellerReport } from "../../Redux ToolKit/Features/Seller/SellerSlice";

const SellerDashboard = () => {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchSellerReport(localStorage.getItem("jwt")))
  },[])
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar DrawerList={SellerDrawerList} panelName="Seller Panel"/>

      <section className="lg:flex min-h-[calc(100vh-64px)]">
        
        {/* Sidebar (Desktop) */}
        <div className="hidden lg:block w-[280px] border-r bg-white">
          <SellerDrawerList />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[calc(100%-280px)] p-6 lg:p-8 overflow-y-auto">
          <SellerRoutes />
        </div>

      </section>
    </div>
  );
};

export default SellerDashboard;