import React, { useState } from "react";
import SellerLogin from "./SellerLogin";
import SellerAccountForm from "./SellerAccountForm";
import { Button } from "@mui/material";

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">
      {/* LEFT FORM SECTION */}
      <section className="flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          {isLogin ? <SellerLogin /> : <SellerAccountForm />}

          <div className="mt-8 text-center space-y-3">
            <h1 className="text-sm text-gray-500">
              {isLogin
                ? "Don't have a seller account?"
                : "Already have a seller account?"}
            </h1>

            <Button
              onClick={() => setIsLogin(!isLogin)}
              sx={{ py: "12px" }}
              fullWidth
              variant="outlined"
            >
              {isLogin ? "Create Seller Account" : "Login"}
            </Button>
          </div>
        </div>
      </section>

      {/* RIGHT IMAGE SECTION */}
      <section className="hidden md:flex items-center justify-center bg-gray-50 p-10">
        <img
          className=" w-full max-h-[500px] object-contain"
          src="https://cdni.iconscout.com/illustration/premium/thumb/woman-small-business-owner-works-sitting-near-computer-and-boxes-selling-goods-through-online-store-illustration-svg-download-png-9898546.png"
          alt="seller"
        />
      </section>
    </div>
  );
};

export default BecomeSeller;
