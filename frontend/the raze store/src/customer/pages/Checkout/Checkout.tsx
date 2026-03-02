import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import AddressCard from "./AddressCard";
import { Add } from "@mui/icons-material";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";
import CloseIcon from "@mui/icons-material/Close";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  p: { xs: 2, sm: 4 },
};


const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const handleChange = (e: any) => setSelectedAddress(e.target.value);
  
  return (
    <div className="pt-10 px-4 sm:px-8 lg:px-20 xl:px-28 min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-6">

            <div className="flex justify-between items-center">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Select Delivery Address
              </h1>
              <Button onClick={handleOpen} variant="outlined">
                Add New Address
              </Button>
            </div>


            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Saved Addresses
              </h2>

              <div className="space-y-3">
                {[1, 2, 3, 4].map((item, index) => (
                  <AddressCard
                    value={item}
                    selectedValue={selectedAddress}
                    handleChange={handleChange}
                    key={index}
                  />
                ))}
              </div>
            </div>

            <div className="border border-dashed border-gray-300 rounded-md px-5 py-4">
              <Button onClick={handleOpen} startIcon={<Add />}>
                Add New Address
              </Button>
            </div>
          </div>
          <div className="space-y-5">
            <section className="bg-white border border-gray-300 rounded-md p-5 space-y-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Payment Gateway
              </h2>

              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-md bg-gray-50">
                <img
                  src="https://razorpay.com/assets/razorpay-logo.svg"
                  alt="Razorpay"
                  className="h-6 object-contain"
                />
                <span className="text-sm text-gray-700">
                  Payments will be processed securely via Razorpay
                </span>
              </div>
            </section>

            <section className="bg-white border border-gray-300 rounded-md">
              <PricingCard />
              <div className="p-4">
                <Button variant="contained" fullWidth sx={{ py: "11px" }}>
                  PLACE ORDER
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} position="relative">
    
    <IconButton
      onClick={handleClose}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        color: "grey.600",
      }}
      size="small"
    >
      <CloseIcon/>
    </IconButton>
    <AddressForm />
  </Box>
</Modal>

    </div>
  );
};

export default Checkout;
