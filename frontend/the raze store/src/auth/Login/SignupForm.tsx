import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux ToolKit/Store";
import { useNavigate } from "react-router";
import { signup, sendLogicSignupOTP } from "../../Redux ToolKit/Features/Auth/AuthSlice";

const SignupForm = () => {
  const auth = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
  email: "",
  otp: "",
  name: "",
},
    onSubmit: (values) => {
      console.log(values);
      dispatch(signup({ ...values, navigate }));
    },
  });
  const handleSentOtp=()=>{
    dispatch(sendLogicSignupOTP({email:formik.values.email}))
  }
  return (
    <div className="space-y-6 px-6 pb-6">
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

      {auth.otpSent && (
        <div>
          <TextField
            fullWidth
            name="name"
            label="Full Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
      )}

      <Button
        fullWidth
        sx={{ py: "12px", mt: 1 }}
        type="submit"
        variant="contained"
        onClick={auth.otpSent?formik.handleSubmit:handleSentOtp}
      >
        Create Account
      </Button>
    </div>
  );
};

export default SignupForm;
