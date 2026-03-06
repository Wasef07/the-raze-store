import { Edit } from "@mui/icons-material";
import { Avatar, Button, Divider } from "@mui/material";
import React from "react";
import ProfileFillCard from "../../customer/pages/Account/ProfileFillCard";

const SellerProfile = () => {
  return (
    <div className="lg:px-20 px-4 pt-6 pb-20 space-y-16">

      {/* SELLER DETAILS */}
      <div className="w-full lg:w-[70%] space-y-5">

        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl text-gray-800">
            Seller Details
          </h1>

          <Button size="small">
            <Edit />
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:items-center">

          <Avatar
            sx={{ width: "9rem", height: "9rem" }}
            src="https://wallpapers.com/images/featured/cute-aesthetic-profile-pictures-pjfl391j3q0f7rlz.jpg"
          />

          <div className="w-full space-y-2">
            <ProfileFillCard keys={"Seller Name"} value={"Pablo Pandey"} />
            <Divider />
            <ProfileFillCard keys={"Seller Email"} value={"pablo@gmail.com"} />
            <Divider />
            <ProfileFillCard keys={"Seller Mobile"} value={"1234567899"} />
          </div>

        </div>
      </div>

      {/* BUSINESS DETAILS */}
      <div className="w-full lg:w-[70%] space-y-5">

        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl text-gray-800">
            Business Details
          </h1>

          <Button size="small">
            <Edit />
          </Button>
        </div>

        <div className="space-y-2">
          <ProfileFillCard keys={"Business Name"} value={"Pablo Clothing"} />
          <Divider />
          <ProfileFillCard keys={"GSTIN"} value={"GSTIN876"} />
          <Divider />
          <ProfileFillCard keys={"Account Status"} value={"Pending_Verification"} />
        </div>

      </div>

      {/* PICKUP ADDRESS */}
      <div className="w-full lg:w-[70%] space-y-5">

        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl text-gray-800">
            Pickup Address
          </h1>

          <Button size="small">
            <Edit />
          </Button>
        </div>

        <div className="space-y-2">
          <ProfileFillCard keys={"Address"} value={"RAZE HOUSE"} />
          <Divider />
          <ProfileFillCard keys={"City"} value={"Kolkata"} />
          <Divider />
          <ProfileFillCard keys={"State"} value={"West Bengal"} />
          <Divider />
          <ProfileFillCard keys={"Mobile No."} value={"12345678"} />
        </div>

      </div>

    </div>
  );
};

export default SellerProfile;