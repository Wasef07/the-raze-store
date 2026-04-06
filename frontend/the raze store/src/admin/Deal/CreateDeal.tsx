import { useFormik } from "formik";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { menLevelTwo } from "../../data/Category/LevelTwo/menLevelTwo";
import { useAppDispatch, useAppSelector } from "../../Redux ToolKit/Store";
import { createDeal } from "../../Redux ToolKit/Features/Admin/DealSlice";

const CreateDeal = () => {
  const homeCategories = useAppSelector(
    (store) => store.homeCategory.homeCategories,
  );
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      discount: 0,
      homeCategory: "",
    },
    onSubmit: (values) => {
      dispatch(
        createDeal({
          ...values,
          discount: Number(values.discount),
        }),
      );
    },
  });

  return (
    <Box className="flex justify-center items-center py-10">
      <Paper
        elevation={3}
        sx={{
          width: 600,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Box
          component={"form"}
          onSubmit={formik.handleSubmit}
          className="space-y-6"
        >
          <Typography
            variant="h5"
            fontWeight={600}
            textAlign="center"
            sx={{ mb: 1 }}
          >
            Create New Deal
          </Typography>
          <div>
            <TextField
              fullWidth
              name="discount"
              label="Discount (%)"
              value={formik.values.discount}
              onChange={formik.handleChange}
              size="medium"
            />
          </div>

          <div>
            <FormControl fullWidth required>
              <InputLabel id="category-label">Category</InputLabel>

              <Select
                name="homeCategory"
                labelId="category-label"
                label="Category"
                value={formik.values.homeCategory}
                onChange={formik.handleChange}
              >
                <MenuItem value="none">None</MenuItem>

                {homeCategories?.deals?.map((item, index) => (
                  <MenuItem key={index} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div>
            <Button
              sx={{
                py: "12px",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 2,
                fontSize: "15px",
              }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Create Deal
            </Button>
          </div>
        </Box>
      </Paper>
    </Box>
  );
};

export default CreateDeal;
