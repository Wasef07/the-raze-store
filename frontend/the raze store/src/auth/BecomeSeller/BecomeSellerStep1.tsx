import { Box, TextField } from "@mui/material";
import React from "react";

const BecomeSellerStep1 = ({ formik }: any) => {
  return (
    <Box>
      <p className="text-xl font-semibold text-center mb-8">Contact Details</p>

      <div className="space-y-6">
        <div>
          <TextField
            fullWidth
            id="mobile"
            name="mobile"
            label="Mobile Number"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </div>

        <div>
          <TextField
            fullWidth
            id="GSTIN"
            name="GSTIN"
            label="GSTIN Number"
            value={formik.values.GSTIN}
            onChange={formik.handleChange}
            error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
            helperText={formik.touched.GSTIN && formik.errors.GSTIN}
          />
        </div>
      </div>
    </Box>
  );
};

export default BecomeSellerStep1;
