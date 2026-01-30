import React, { useState } from "react";
import ProductCard from "./ProductCard";
import FilterSection from "./FilterSection";
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";

const product = {
  images: [
    "https://lajreedesigner.com/cdn/shop/files/KP-6026_1.jpg?v=1745490955&width=1780",
    "https://lajreedesigner.com/cdn/shop/files/KP-6026_4.jpg?v=1745490955&width=1780",
    "https://lajreedesigner.com/cdn/shop/files/KP-6026_005.jpg?v=1745490955&width=1780",
    "https://lajreedesigner.com/cdn/shop/files/KP-6026_3.jpg?v=1745490955&width=1780",
    "https://lajreedesigner.com/cdn/shop/files/KP-6026_2.jpg?v=1745490955&width=1780",
  ],
  seller: {
    businessDetails: {
      businessName: "Lajree Designer",
    },
  },
};

const mockProducts = Array.from({ length: 12 }, () => product);

const Products = () => {
  const [sort, setSort] = useState("price_low");

  return (
    <div className="mt-10">

      <h1 className="text-3xl text-center font-bold text-gray-700 pb-6 uppercase">
        Women Sarees
      </h1>

      <div className="lg:flex max-w-[1400px] mx-auto px-2">
        <aside className="hidden lg:block w-[18%]  pr-3">
          <FilterSection />
        </aside>

        <main className="w-full lg:w-[82%] space-y-8 px-4">

          <div className="flex items-center justify-end h-10">
            <FormControl size="small" className="min-w-[180px] bg-white">
              <InputLabel id="sort-label">Sort</InputLabel>
              <Select
                labelId="sort-label"
                value={sort}
                label="Sort"
                onChange={(e) => setSort(e.target.value)}
              >
                <MenuItem value="price_low">Price : Low - High</MenuItem>
                <MenuItem value="price_high">Price : High - Low</MenuItem>
              </Select>
            </FormControl>
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-4">
            {mockProducts.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
          <div className="flex justify-center py-6">
            <Pagination count={10} variant="outlined" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
