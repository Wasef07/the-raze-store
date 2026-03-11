import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      fullname: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6 px-6 pb-6">
      <h1 className="text-2xl text-center font-bold text-teal-600 pt-4">
        Create Your Account
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
        <TextField
          fullWidth
          name="fullname"
          label="Full Name"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
          helperText={formik.touched.fullname && formik.errors.fullname}
        />
      </div>

      <Button
        fullWidth
        sx={{ py: "12px", mt: 1 }}
        type="submit"
        variant="contained"
      >
        Create Account
      </Button>
    </form>
  );
};

export default SignupForm;
