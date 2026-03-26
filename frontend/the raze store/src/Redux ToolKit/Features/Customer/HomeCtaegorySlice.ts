import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

export const createHomeCategories = createAsyncThunk<any, any>(
  "home/createHomeCategories",
  async (homeCategories, { rejectWithValue }) => {
    try {
      const response = await api.post("/home/categories", homeCategories);

      console.log("Home Categories:", response.data);

      return response.data;
    } catch (error: any) {
      console.log("Create Home Categories Error:", error.response?.data);

      return rejectWithValue(
        error.response?.data?.message || "Failed to create home categories",
      );
    }
  },
);
export const fetchHomeCategories = createAsyncThunk<any, void>(
  "home/fetchHomeCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/home/home-category"); // ✅ CORRECT API

      console.log("FETCH HOME:", response.data);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch home categories",
      );
    }
  },
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
    builder.addCase(fetchHomeCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchHomeCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.homeCategories = action.payload; // ✅ now will have grid/shop/etc
    });

    builder.addCase(fetchHomeCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default homeCategorySlice.reducer;
