import { Radio } from "@mui/material";
import React from "react";

const AddressCard = ({ value, selectedValue, handleChange, item }: any) => {
  const isSelected = selectedValue === value;

  return (
    <div
      className={`flex gap-4 px-5 py-4 rounded-md border cursor-pointer transition
        ${isSelected ? "border-primary bg-blue-50/40" : "border-gray-300 bg-white hover:border-gray-400"}
      `}
      onClick={() =>
        handleChange({ target: { value } })
      }
    >

      <div className="pt-1">
        <Radio
          checked={isSelected}
          value={value}
          onChange={handleChange}
          name="radio-buttons"
          size="small"
        />
      </div>


      <div className="flex-1 space-y-1 text-sm">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-gray-800">
            Raze
          </h1>
          <span className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
            Home
          </span>
        </div>

        <p className="text-gray-600 leading-snug">
          87/1 Ripon Street, Kolkata – 700016, West Bengal
        </p>

        <p className="text-gray-600">
          <span className="font-medium text-gray-700">Mobile:</span>{" "}
          9876543210
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
