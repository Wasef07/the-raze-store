import { Grid, TextField } from '@mui/material'
import React from 'react'

const BecomeSellerStep2 = ({ formik }: any) => {
  return (
    <div>
            <p className="text-xl font-semibold text-center mb-8">Pickup Address</p>
      <Grid container spacing={3}>
        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            name="pickupAddress.name"
            label="Name"
            value={formik.values.pickupAddress.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>

        <Grid size={{xs:6}}>
          <TextField
            fullWidth
            name="pickupAddress.mobile"
            label="Mobile"
            value={formik.values.pickupAddress.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </Grid>


        <Grid size={{xs:6}}>
          <TextField
            fullWidth
            name="pickupAddress.pinCode"
            label="Pincode"
            value={formik.values.pickupAddress.pinCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
            helperText={formik.touched.pinCode && formik.errors.pinCode}
          />
        </Grid>


        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            name="pickupAddress.address"
            label="Address (House No, Building , Street)"
            value={formik.values.pickupAddress.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>

        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            name="pickupAddress.locality"
            label="Locality/Town"
            value={formik.values.pickupAddress.locality}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.locality && Boolean(formik.errors.locality)}
            helperText={formik.touched.locality && formik.errors.locality}
          />
        </Grid>

        <Grid size={{xs:6}}>
          <TextField
            fullWidth
            name="pickupAddress.city"
            label="City"
            value={formik.values.pickupAddress.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>


        <Grid size={{xs:6}}>
          <TextField
            fullWidth
            name="pickupAddress.state"
            label="State"
            value={formik.values.pickupAddress.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          />
        </Grid>
        
      </Grid>
    </div>
  )
}

export default BecomeSellerStep2
