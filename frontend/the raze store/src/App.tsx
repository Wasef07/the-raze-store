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

function App() {
  return (
    <ThemeProvider theme={customerTheme}>
      {/* <Navbar /> */}
      {/* <Home/> */}
      {/* <Products/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout /> */}
      {/* <Profile /> */}
      <Routes>
        <Route path="/seller/*" element={<SellerDashboard/>}></Route>
      </Routes>
      {/* <SellerDashboard/> */}



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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
