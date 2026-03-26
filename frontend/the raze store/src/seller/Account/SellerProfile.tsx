import { Edit } from "@mui/icons-material";
import { Avatar, Button, Divider } from "@mui/material";
import React from "react";
import ProfileFillCard from "../../customer/pages/Account/ProfileFillCard";
import { useAppSelector } from "../../Redux ToolKit/Store";

const SellerProfile = () => {
  const {seller}=useAppSelector(store=>store)
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
            <ProfileFillCard keys={"Seller Name"} value={seller.profile?.name} />
            <Divider />
            <ProfileFillCard keys={"Seller Email"} value={seller.profile?.email} />
            <Divider />
            <ProfileFillCard keys={"Seller Mobile"} value={seller.profile?.mobile} />
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
          <ProfileFillCard keys={"Business Name"} value={seller.profile?.businessDetails?.businessName} />
          <Divider />
          <ProfileFillCard keys={"GSTIN"} value={seller.profile?.GSTIN} />
          <Divider />
          <ProfileFillCard keys={"Account Status"} value={seller.profile?.accountStatus} />
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
          <ProfileFillCard keys={"Address"} value={seller.profile?.pickupAddress?.address} />
          <Divider />
          <ProfileFillCard keys={"City"} value={seller.profile?.pickupAddress?.locality} />
          <Divider />
          <ProfileFillCard keys={"State"} value={seller.profile?.pickupAddress?.state} />
          <Divider />
          <ProfileFillCard keys={"Mobile No."} value={seller.profile?.pickupAddress?.mobile} />
        </div>

      </div>

    </div>
  );
};

export default SellerProfile;