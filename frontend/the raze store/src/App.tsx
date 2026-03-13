import { ThemeProvider } from "@mui/material";
import { customerTheme } from "./theme/customerTheme";
import Home from "./customer/pages/Home/Home.tsx";
import Products from "./customer/pages/Product/Products.tsx";
import Footer from "./customer/footer/Footer.tsx";
import ProductDetails from "./customer/pages/Product/ProductDetail/ProductDetails.tsx";
import Cart from "./customer/pages/Cart/Cart.tsx";
import Checkout from "./customer/pages/Checkout/Checkout.tsx";
import Navbar from "./customer/Navbar/Navbar.tsx";
import Profile from "./customer/pages/Order/Profile.tsx";
import { Route, Routes } from "react-router";
import SellerDashboard from "./seller/SellerDashboard/SellerDashboard.tsx";
import BecomeSeller from "./auth/BecomeSeller/BecomeSeller.tsx";
import CustomerRoutes from "./Routes/CustomerRoutes.tsx";
import Auth from "./auth/Login/Auth";
import Dashboard from "./admin/Dashboard/Dashboard.tsx";
import { useAppDispatch, useAppSelector } from "./Redux ToolKit/Store.ts";
import { useEffect } from "react";
import { fetchUserProfile } from "./Redux ToolKit/Features/Customer/UserSlice.ts";

function App() {
  const dispatch=useAppDispatch();
  const auth=useAppSelector(store=>store.auth)

  useEffect(()=>{
    const jwt=localStorage.getItem("jwt")

    if(jwt || auth.jwt){
      dispatch(fetchUserProfile(jwt))
    }
  },[auth.jwt])
  return (
    <ThemeProvider theme={customerTheme}>
      
      {/* <Home/> */}
      {/* <Products/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout /> */}
      {/* <Profile /> */}
      <Routes>
        <Route path="/become-seller" element={<BecomeSeller/>}/>
        <Route path="/seller/*" element={<SellerDashboard/>}/>
        <Route path="/admin/*" element={<Dashboard/>}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/*" element={<CustomerRoutes/>}/>
      </Routes>
      {/* <SellerDashboard/> */}


      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route
          path="/product-details/:categoryId/:name/:productId"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout/address" element={<Checkout/>}/>
        <Route path="/account/*" element={<Profile/>}/>
      </Routes> */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
