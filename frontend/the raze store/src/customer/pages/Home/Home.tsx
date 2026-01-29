import React from "react";
import ElectronicCategory from "./ElectronicCategory/ElectronicCategory";
import Grid from "./Grid/Grid";

import Deal from "./Deal/Deal.tsx";
import HomeCategory from "./HomeCategory/HomeCategory.tsx";
import { Button } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Home = () => {
  return (
    <div className="space-y-10">
      <ElectronicCategory />
      <section>
        <Grid />
      </section>
      <section className="pt-10">
        <h1 className="text-3xl font-bold text-center pb-5">Today's Deals</h1>
        <Deal />
      </section>
      <section className="pt-10">
        <h1 className="text-3xl font-bold text-center pb-5">
          Shop By Category
        </h1>
        <HomeCategory />
      </section>

      <section className="w-full py-10">
        <div
          className="max-w-7xl mx-auto h-[260px] lg:h-[360px] rounded-md overflow-hidden flex items-center bg-cover bg-no-repeat bg-[position:85%_center]"
          style={{
            backgroundImage: "url('/banners/seller-banner.jpg')",
          }}
        >

          <div className="px-8 lg:px-20 max-w-xl space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-black">
              Sell Your Product
            </h1>

            <p className="text-lg lg:text-2xl text-black">
              With{" "}
              <span className="logo font-bold text-xl lg:text-4xl text-teal-600">
                The Raze Store
              </span>
            </p>

            <Button startIcon={<StorefrontIcon />} variant="contained" size="large">Become Seller</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
