import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

export const createHomeCategories = createAsyncThunk(
  "home/createHomeCategories",
  async (homeCategories: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/home/categories", homeCategories);

      console.log("Home Categories:", response.data);

      return response.data;

    } catch (error: any) {

      console.log("Create Home Categories Error:", error.response?.data);

      return rejectWithValue(
        error.response?.data?.message || "Failed to create home categories"
      );
    }
  }
);

const initialState = {
  homeCategories: [],
  loading: false,
  error: null,
};

const homeCategorySlice = createSlice({
  name: "homeCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(createHomeCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(createHomeCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.homeCategories = action.payload;
    });

    builder.addCase(createHomeCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  },
});

export default homeCategorySlice.reducer;