import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";
import { color } from "../../../data/Filter/color";
import { price } from "../../../data/Filter/price";
import { discount } from "../../../data/Filter/discount";

const FilterSection = () => {
  const [expandColor, setExpandColor] = useState(false);

  return (
    <div className="bg-white rounded-md border space-y-4">

      <div className="flex items-center justify-between px-3 py-2 border-b">
        <p className="text-base font-semibold text-gray-800">Filters</p>
        <Button size="small" sx={{ textTransform: "none" }}>
          Clear All
        </Button>
      </div>

      <div className="px-3 space-y-6">

        <section>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: teal[800],
                mb: 1,
              }}
            >
              Color
            </FormLabel>

            <RadioGroup sx={{ pl: 0 }}>
              {color
                .slice(0, expandColor ? color.length : 5)
                .map((item: any) => (
                  <FormControlLabel
                    key={item.name}
                    value={item.name}
                    control={
                      <Radio
                        size="small"
                        sx={{ p: 0.5 }}
                      />
                    }
                    label={
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full border"
                          style={{ backgroundColor: `#${item.hex}` }}
                        />
                        <span className="text-sm text-gray-700">
                          {item.name}
                        </span>
                      </div>
                    }
                    sx={{
                      ml: 0,
                      mr: 0,
                      py: 0.3,
                      width: "100%",
                    }}
                  />
                ))}
            </RadioGroup>

            <Button
              onClick={() => setExpandColor(!expandColor)}
              size="small"
              sx={{
                textTransform: "none",
                alignSelf: "flex-start",
                pl: 0,
                mt: 0.5,
              }}
            >
              {expandColor ? "Show less" : `+ ${color.length - 5} more`}
            </Button>
          </FormControl>
        </section>

        <section>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: teal[800],
                mb: 1,
              }}
            >
              Price
            </FormLabel>

            <RadioGroup sx={{ pl: 0 }}>
              {price.map((item: any) => (
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  control={<Radio size="small" sx={{ p: 0.5 }} />}
                  label={<span className="text-sm text-gray-700">{item.name}</span>}
                  sx={{ ml: 0, py: 0.3 }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

        <section>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: teal[800],
                mb: 1,
                
              }}
            >
              Discount
            </FormLabel>

            <RadioGroup sx={{ pl: 0 }}>
              {discount.map((item: any) => (
                <FormControlLabel
                  key={item.name}
                  value={item.name}
                  control={<Radio size="small" sx={{ p: 0.5 }} />}
                  label={<span className="text-sm text-gray-700">{item.name}</span>}
                  sx={{ ml: 0, py: 0.3 }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;