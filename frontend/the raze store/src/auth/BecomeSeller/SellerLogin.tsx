import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux ToolKit/Store";
import { sendLoginOTP, verifyLoginOTP } from "../../Redux ToolKit/Features/Seller/SellerAuthentication";
import { sendLogicSignupOTP } from "../../Redux ToolKit/Features/Auth/AuthSlice";
import { useNavigate } from "react-router";

const SellerLogin = () => {
  const auth = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(verifyLoginOTP({...values,navigate}))
    },
  });
  const handleSentOtp = () => {
    dispatch(sendLogicSignupOTP({ email: formik.values.email }));
  };

  return (
    <div className="space-y-5">
      <h1 className="text-2xl text-center font-bold text-teal-600 pb-5">
        Welcome Back, Seller
      </h1>
      <div>
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </div>

      {auth.otpSent && (
        <div>
          <TextField
            fullWidth
            name="otp"
            label="OTP"
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}
          />
        </div>
      )}
      <div>
        <Button
          onClick={auth.otpSent ? formik.handleSubmit : handleSentOtp}
          fullWidth
          sx={{ py: "12px" }}
          type="submit"
          variant="contained"
        >
          {auth.otpSent ? "Login" : "Send Otp"}
        </Button>
      </div>
    </div>
  );
};

export default SellerLogin;
