import {
  Add,
  AddShoppingCart,
  Favorite,
  LocalShipping,
  Remove,
  Shield,
  Star,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import SimilarProduct from "./SimilarProduct";
import { useAppDispatch, useAppSelector } from "../../../../Redux ToolKit/Store";
import { fetchProductById } from "../../../../Redux ToolKit/Features/Customer/ProductSlice";
import { useParams } from "react-router";
const images = [
  "https://lajreedesigner.com/cdn/shop/files/KP-6026_1.jpg?v=1745490955&width=1780",
  "https://lajreedesigner.com/cdn/shop/files/KP-6026_4.jpg?v=1745490955&width=1780",
  "https://lajreedesigner.com/cdn/shop/files/KP-6026_005.jpg?v=1745490955&width=1780",
  "https://lajreedesigner.com/cdn/shop/files/KP-6026_3.jpg?v=1745490955&width=1780",
  "https://lajreedesigner.com/cdn/shop/files/KP-6026_2.jpg?v=1745490955&width=1780",
];

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch=useAppDispatch();
  const product = useAppSelector(store=>store.product)
  const {productId,categoryId} = useParams()
  useEffect(()=>{
    dispatch(fetchProductById(productId))
  },[dispatch])
  const handleChangeCurrentImage = (index: number) => setCurrentImage(index);
  const handleQuantityChange = (value: number) => setQuantity(value + quantity);
  return (
    <div className="min-h-screen px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[14%] flex flex-row lg:flex-col gap-3">
            {product.product?.image.map((item, index) => (
              <img
                onClick={() => handleChangeCurrentImage(index)}
                className={`lg:w-full w-[56px] cursor-pointer rounded-md border 
                    ${currentImage === index ? "border-gray-900" : "border-gray-200"}
                  `}
                src={item}
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              src={product.product?.image[currentImage]}
              className="w-full rounded-lg object-cover"
              alt=""
            />
          </div>
        </section>
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Lajree Designer
          </h2>

          <h1 className="mt-1 text-xl font-semibold text-gray-900 leading-snug">
            {product.product?.title}
          </h1>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 border rounded-md text-sm">
            <Star fontSize="small" className="text-yellow-500" />
            <span className="font-medium">4.0</span>
            <span className="text-gray-400">| 478 Ratings</span>
          </div>
          <div className="mt-5 space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-gray-900">
                ₹{product.product?.sellingPrice}
              </span>
              <span className="text-sm text-gray-400 line-through">₹{product.product?.mrpPrice}</span>
              <span className="text-sm font-medium text-green-600">
                {product.product?.discountPercent}% OFF
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Inclusive of all taxes • Free shipping above ₹1500
            </p>
          </div>
          <div className="mt-7 space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <Shield fontSize="small" color="primary"/>
              <span>Authentic & Quality Assured</span>
            </div>
            <div className="flex items-center gap-3">
              <WorkspacePremium fontSize="small" color="primary"/>
              <span>100% money-back guarantee</span>
            </div>
            <div className="flex items-center gap-3">
              <LocalShipping fontSize="small" color="primary"/>
              <span>Free shipping & returns</span>
            </div>
            <div className="flex items-center gap-3">
              <Wallet fontSize="small" color="primary"/>
              <span>Pay on delivery available</span>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <p className="text-sm font-medium">Quantity</p>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => quantity > 1 && handleQuantityChange(-1)}
                variant="outlined"
                size="small"
              >
                <Remove />
              </Button>

              <span className="min-w-[24px] text-center">{quantity}</span>

              <Button
                onClick={() => handleQuantityChange(1)}
                variant="outlined"
                size="small"
              >
                <Add />
              </Button>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <Button
              startIcon={<AddShoppingCart />}
              variant="contained"
              fullWidth
              sx={{ py: "0.9rem" }}
            >
              Add to Bag
            </Button>

            <Button
              startIcon={<Favorite />}
              variant="outlined"
              fullWidth
              sx={{ py: "0.9rem" }}
            >
              Wishlist
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            {product.product?.description}
          </p>
        </section>
      </div>
      <section className="mt-20">
  <h2 className="text-lg font-semibold mb-5">
    Similar Products
  </h2>
  <SimilarProduct />
</section>

    </div>
  );
};

export default ProductDetails;
