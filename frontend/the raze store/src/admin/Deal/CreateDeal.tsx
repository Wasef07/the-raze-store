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

const CreateDeal = () => {
  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
              name="dicount"
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
                name="category"
                labelId="category-label"
                label="Category"
                value={formik.values.category}
                onChange={formik.handleChange}
              >
                <MenuItem value="none">None</MenuItem>

                {menLevelTwo.map((item, index) => (
                  <MenuItem key={index} value={item.categoryId}>
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
