import React, { useEffect } from "react";
import ProductTable from "./ProductTable";
import { useAppDispatch } from "../../Redux ToolKit/Store";
import { fetchSellerProduct } from "../../Redux ToolKit/Features/Seller/SellerProduct";

const Products = () => {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchSellerProduct(localStorage.getItem("jwt")))
  },[])

  return (
    <>
      <h1 className="pb-5 font-bold text-xl ">All Products</h1>
      <ProductTable />
    </>
  );
};

export default Products;
