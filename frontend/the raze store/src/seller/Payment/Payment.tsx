import { Card, Divider } from "@mui/material";
import React from "react";
import TransactionTable from "../Transaction/TransactionTable";

const Payment = () => {
  return (
    <div className="space-y-6">
      
      <Card className="p-6 rounded-lg space-y-5">
        <h1 className="text-gray-600 text-sm font-medium">
          Total Earning
        </h1>

        <h1 className="font-bold text-2xl text-gray-800">
          ₹12,345
        </h1>

        <Divider className="my-2" />

        <p className="text-sm text-gray-600">
          Last Payment: <strong className="text-gray-900">₹0</strong>
        </p>
      </Card>

      <TransactionTable />

    </div>
  );
};

export default Payment;