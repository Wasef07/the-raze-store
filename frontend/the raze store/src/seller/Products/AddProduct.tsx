import { AddPhotoAlternate, Close } from "@mui/icons-material";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { color } from "../../data/Filter/color";

import { mainCategory } from "../../data/Category/mainCategory";
import { menLevelTwo } from "../../data/Category/LevelTwo/menLevelTwo";
import { womenLevelTwo } from "../../data/Category/LevelTwo/womenLevelTwo";
import { furnitureLevelTwo } from "../../data/Category/LevelTwo/furnitureLevelTwo";
import { electronicLevelTwo } from "../../data/Category/LevelTwo/electronicLevelTwo";

import { menLevelThree } from "../../data/Category/LevelThree/menLevelThree";
import { womenLevelThree } from "../../data/Category/LevelThree/womenLevelThree";
import { furnitureLevelThree } from "../../data/Category/LevelThree/furnitureLevelThree";
import { electronicLevelThree } from "../../data/Category/LevelThree/electronicLevelThree";
import { uploadToCloudnary } from "../../util/uploadToCloudnary";
import { useAppDispatch } from "../../Redux ToolKit/Store";
import { createProduct } from "../../Redux ToolKit/Features/Seller/SellerProduct";

const AddProduct = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
    onSubmit: (values) => {
  const jwt = localStorage.getItem("jwt");

  const request = {
    title: values.title,
    description: values.description,

    mrpPrice: Number(values.mrpPrice),
    sellingPrice: Number(values.sellingPrice),
    quantity: Number(values.quantity),

    discountPercent: Math.round(
      ((Number(values.mrpPrice) - Number(values.sellingPrice)) /
        Number(values.mrpPrice)) *
        100
    ),

    color: [values.color],
    size: [values.sizes],
    image: values.images,

    category: values.category3, // IMPORTANT (use final category)
  };

  console.log("FINAL REQUEST:", request);

  dispatch(createProduct({ jwt, request }));
}
  });

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadImage(true);

    const image = await uploadToCloudnary(file);

    if (image) {
      formik.setFieldValue("images", [...formik.values.images, image]);
    }

    setUploadImage(false);
    console.log("Handle Image Change");
  };
  const handleRemoveImage = () => {
    console.log("Handle Remove Image");
  };

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter(
      (child: any) => child.parentCategoryId === parentCategoryId,
    );
  };

  const categoryTwo = {
    men: menLevelTwo,
    women: womenLevelTwo,
    kids: [],
    home_furniture: furnitureLevelTwo,
    beauty: [],
    electronic: electronicLevelTwo,
  };

  const categoryThree = {
    men: menLevelThree,
    women: womenLevelThree,
    kids: [],
    home_furniture: furnitureLevelThree,
    beauty: [],
    electronic: electronicLevelThree,
  };

  const sizes = ["FREE", "XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Add Product</h1>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          {/* IMAGE SECTION */}
          <Grid className="flex flex-wrap gap-4 items-center" size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />

            <label htmlFor="fileInput" className="relative">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center border rounded-md border-gray-300 hover:border-gray-500 transition">
                <AddPhotoAlternate className="text-gray-700" />
              </span>

              {uploadImage && (
                <div className="absolute inset-0 flex justify-center items-center bg-white/70 rounded-md">
                  <CircularProgress size={24} />
                </div>
              )}
            </label>

            <div className="flex flex-wrap gap-3">
              {formik.values.images.map((item, index) => (
                <div className="relative" key={index}>
                  <img
                    src={item}
                    alt=""
                    className="w-24 h-24 object-cover rounded-md border"
                  />

                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      background: "white",
                    }}
                  >
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>

          {/* TITLE */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          {/* DESCRIPTION */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          {/* PRICES */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <TextField
              fullWidth
              id="mrpPrice"
              name="mrpPrice"
              type="number"
              label="MRP Price"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <TextField
              fullWidth
              id="sellingPrice"
              name="sellingPrice"
              label="Selling Price"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          {/* COLOR */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FormControl fullWidth required>
              <InputLabel id="color-label">Color</InputLabel>

              <Select
                name="color"
                labelId="color-label"
                label="Color"
                value={formik.values.color}
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {color.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* SIZE */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FormControl fullWidth required>
              <InputLabel id="size-label">Size</InputLabel>

              <Select
                name="sizes"
                labelId="size-label"
                label="Size"
                value={formik.values.sizes}
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {sizes.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <TextField
              fullWidth
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          {/* MAIN CATEGORY */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FormControl fullWidth required>
              <InputLabel id="category-label">Main Category</InputLabel>

              <Select
                name="category"
                labelId="category-label"
                label="Main Category"
                value={formik.values.category}
                onChange={formik.handleChange}
              >
                <MenuItem value="none">None</MenuItem>

                {mainCategory.map((item, index) => (
                  <MenuItem key={index} value={item.categoryId}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* SECOND CATEGORY */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FormControl fullWidth required>
              <InputLabel id="category2-label">Second Category</InputLabel>

              <Select
                name="category2"
                labelId="category2-label"
                label="Second Category"
                value={formik.values.category2}
                onChange={formik.handleChange}
              >
                <MenuItem value="none">None</MenuItem>

                {categoryTwo[formik.values.category]?.map((item, index) => (
                  <MenuItem key={index} value={item.categoryId}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* THIRD CATEGORY */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FormControl fullWidth required>
              <InputLabel id="category3-label">Third Category</InputLabel>

              <Select
                id="category3"
                labelId="category3-label"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Third Category"
              >
                <MenuItem value="none">None</MenuItem>

                {formik.values.category2 &&
                  childCategory(
                    categoryThree[formik.values.category],
                    formik.values.category2,
                  )?.map((item, index) => (
                    <MenuItem key={index} value={item.categoryId}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          {/* SUBMIT */}
          <Grid size={{ xs: 12 }} className="pt-4">
            <Button
              sx={{ p: "14px" }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProduct;
