import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Button } from "@mui/material";
import authBanner from "../../assets/images/auth_card.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-[90vh] px-4">

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">

        <img
          className="w-full h-40 object-cover"
          src={authBanner}
          alt="Auth Banner"
        />

        <div className="pt-2">
          {isLogin ? <LoginForm /> : <SignupForm />}

          <div className="flex items-center justify-center gap-2 pb-6 text-sm">

            <p className="text-gray-600">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>

            <Button
              size="small"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Signup" : "Login"}
            </Button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;