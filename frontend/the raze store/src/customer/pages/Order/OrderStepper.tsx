import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const steps = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "Placed" },
  { name: "Packed", description: "Item packed in dispatch warehouse", value: "Confirmed" },
  { name: "Shipped", description: "By 16 Jul - 18 Jul", value: "Shipped" },
  { name: "Arriving", description: "By 16 Jul - 18 Jul", value: "Arriving" },
  { name: "Arrived", description: "Delivered successfully", value: "Delivered" },
];

const canceledSteps = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "Placed" },
  { name: "Order Cancelled", description: "on Thu, 11 Jul", value: "Cancelled" },
];

const currentStep = 2;

function OrderStepper({ orderStatus }:any) {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    if (orderStatus === "Cancelled") {
      setStatusStep(canceledSteps);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  return (
    <Box className="mx-auto my-6">

      {statusStep.map((step, index) => {
        const isActive = step.value === orderStatus;
        const isCompleted = index <= currentStep;
        const isCancelled = orderStatus === "Cancelled" && isActive;

        return (
          <div key={index} className="flex gap-4">

            {/* Left Icon + Line */}
            <div className="flex flex-col items-center">

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${isCancelled
                    ? "bg-red-100 text-red-500"
                    : isCompleted
                    ? "bg-teal-100 text-teal-600"
                    : "bg-gray-200 text-gray-400"
                  }`}
              >
                {isActive ? (
                  <CheckCircleIcon fontSize="small" />
                ) : (
                  <FiberManualRecordIcon fontSize="small" />
                )}
              </div>

              {/* Connector Line */}
              {index < statusStep.length - 1 && (
                <div
                  className={`w-[2px] h-16 
                  ${isCompleted ? "bg-teal-400" : "bg-gray-300"}`}
                />
              )}
            </div>

            {/* Right Content */}
            <div className="flex-1 pb-8">

              <div
                className={`rounded-md p-3 transition
                ${isCancelled
                    ? "bg-red-500 text-white"
                    : isActive
                    ? "bg-teal-500 text-white"
                    : ""
                  }`}
              >
                <p className="font-medium">{step.name}</p>
                <p
                  className={`text-xs mt-1
                  ${isActive || isCancelled
                      ? "text-white/80"
                      : "text-gray-500"
                    }`}
                >
                  {step.description}
                </p>
              </div>

            </div>

          </div>
        );
      })}
    </Box>
  );
}

export default OrderStepper;