import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const AddressForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
      locality: "",
    },
    onSubmit: (value) => {
      console.log("Form Submitted : ", value);
    },
  });

  return (
    <Box className="bg-white rounded-lg">

      <div className="pb-5 border-b">
        <h1 className="text-lg font-semibold text-gray-900">
          Contact Details
        </h1>
        <p className="text-sm text-gray-500">
          Add a new delivery address
        </p>
      </div>


      <form onSubmit={formik.handleSubmit} className="pt-5">
        <Grid container spacing={2}>
          
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Pin Code"
              name="pinCode"
              value={formik.values.pinCode}
              onChange={formik.handleChange}
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              size="small"
              multiline
              rows={2}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Locality / Area"
              name="locality"
              value={formik.values.locality}
              onChange={formik.handleChange}
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ py: "12px", mt: 1 }}
            >
              Add Address
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddressForm;
