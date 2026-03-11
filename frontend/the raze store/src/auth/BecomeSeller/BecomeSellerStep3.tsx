import { Box, TextField } from "@mui/material";
import React from "react";

const BecomeSellerStep3 = ({ formik }: any) => {
  return (
    <Box>
                  <p className="text-xl font-semibold text-center mb-8">Bank Details</p>
<div className="space-y-5">
      <div>
        <TextField
          fullWidth
          name="bankDetails.accountNumber"
          label="Account Number"
          value={formik.values.bankDetails.accountNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.accountNumber && Boolean(formik.errors.accountNumber)
          }
          helperText={
            formik.touched.accountNumber && formik.errors.accountNumber
          }
        />
      </div>

      <div>
        <TextField
          fullWidth
          name="bankDetails.ifscCode"
          label="IFSC Code"
          value={formik.values.bankDetails.ifscCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.ifscCode && Boolean(formik.errors.ifscCode)}
          helperText={formik.touched.ifscCode && formik.errors.ifscCode}
        />
      </div>

      <div>
        <TextField
          fullWidth
          name="bankDetails.accountHolderName"
          label="Account Holder Name"
          value={formik.values.bankDetails.accountHolderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.accountHolderName &&
            Boolean(formik.errors.accountHolderName)
          }
          helperText={
            formik.touched.accountHolderName && formik.errors.accountHolderName
          }
        />
      </div>
    </div>
    </Box>
    
  );
};

export default BecomeSellerStep3;
