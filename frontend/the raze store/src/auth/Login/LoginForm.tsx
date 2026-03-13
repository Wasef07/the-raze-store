import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux ToolKit/Store";
import { sendLogicSignupOTP, signin } from "../../Redux ToolKit/Features/Auth/AuthSlice";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const auth=useAppSelector(store=>store.auth)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      dispatch(signin({ ...values, navigate }));
      console.log(values);
    },
  });
    const handleSentOtp=()=>{
      dispatch(sendLogicSignupOTP({email:formik.values.email}))
    }

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6 px-6 pb-6">
      <h1 className="text-2xl text-center font-bold text-teal-600 pt-4">
        Welcome Back
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

      {auth.otpSent && <div>
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
      </div>}

      <Button
        fullWidth
        sx={{ py: "12px", mt: 1 }}
        type="submit"
        variant="contained"
        onClick={auth.otpSent?formik.handleSubmit:handleSentOtp}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
