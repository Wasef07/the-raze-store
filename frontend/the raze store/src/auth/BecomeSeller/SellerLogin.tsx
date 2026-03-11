import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const SellerLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-5">
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
      <div>
        <Button fullWidth sx={{py:"12px"}}type="submit" variant="contained">Login</Button>
      </div>
    </form>
  );
};

export default SellerLogin;
