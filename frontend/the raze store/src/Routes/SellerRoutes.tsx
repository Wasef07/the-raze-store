import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../seller/HomePage/HomePage'
import Products from '../seller/Products/Products'
import AddProduct from '../seller/Products/AddProduct'
import Order from '../seller/Order/Order'
import Transaction from '../seller/Transaction/Transaction'
import Payment from '../seller/Payment/Payment'
import Account from '../seller/Account/Account'


const SellerRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/orders" element={<Order/>}/>
            <Route path="/add-product" element={<AddProduct/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/transaction" element={<Transaction/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
    </div>
  )
}

export default SellerRoutes
