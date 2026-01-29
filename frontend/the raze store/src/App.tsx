import {ThemeProvider } from '@mui/material'
import {customerTheme} from './theme/customerTheme'
import Home from './customer/pages/Home/Home.tsx'
import Products from './customer/pages/Product/Products.tsx'
import Footer from './customer/footer/Footer.tsx'
import ProductDetails from './customer/pages/Product/ProductDetail/ProductDetails.tsx'

function App() {
  
  return (
    <ThemeProvider theme={customerTheme}>
      {/* <Home/> */}
      {/* <Products/> */}
      <ProductDetails/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
