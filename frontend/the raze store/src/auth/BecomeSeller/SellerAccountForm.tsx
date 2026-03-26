import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import BecomeSellerStep1 from "./BecomeSellerStep1";
import BecomeSellerStep2 from "./BecomeSellerStep2";
import BecomeSellerStep3 from "./BecomeSellerStep3";
import BecomeSellerStep4 from "./BecomeSellerStep4";
import { useAppDispatch } from "../../Redux ToolKit/Store";
import { createSeller } from "../../Redux ToolKit/Features/Seller/SellerAuthentication";

const SellerAccountForm = () => {

  const dispatch = useAppDispatch();
  const steps = [
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Business Details",
  ];

  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      GSTIN: "",
      pickupAddress: {
        name: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        locality: "",
      },
      bankDetails: {
        accountHolderName: "",
        accountNumber: "",
        ifscCode: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: "",
      },
    },
    onSubmit: (values) => {
      dispatch(createSeller(values))
      console.log(values);
    },
  });

  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-full">

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="mt-10">

        {activeStep == 0 ? (
          <BecomeSellerStep1 formik={formik} />
        ) : activeStep == 1 ? (
          <BecomeSellerStep2 formik={formik} />
        ) : activeStep == 2 ? (
          <BecomeSellerStep3 formik={formik} />
        ) : (
          <BecomeSellerStep4 formik={formik} />
        )}

      </div>

      <div className="flex items-center justify-between mt-10">
        <Button
          variant="outlined"
          disabled={activeStep === 0}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={
            activeStep === steps.length - 1
              ? formik.handleSubmit
              : () => setActiveStep(activeStep + 1)
          }
        >
          {activeStep === steps.length - 1 ? "Create Account" : "Next"}
        </Button>
      </div>

    </div>
  );
};

export default SellerAccountForm;                                                      