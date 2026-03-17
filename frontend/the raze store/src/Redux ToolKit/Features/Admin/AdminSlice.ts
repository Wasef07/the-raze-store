import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";


const API_URL = "/home";

export const updateHomeCategory = createAsyncThunk<any, any>(
  "/homeCategory/updateHomeCategory",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_URL}/home-category/${id}`, data);
      console.log("Update Home Categories:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const fetchHomeCategory = createAsyncThunk<any, any>(
  "/homeCategory/fetchHomeCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/home-category`);
      console.log("Fetch Home Category:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const initialState = {
  categories: [],
  loading: false,
  error: "",
};

const HomeCategorySlice = createSlice({
  name: "homeCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomeCategory.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchHomeCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchHomeCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateHomeCategory.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateHomeCategory.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.categories.findIndex(
        (category: any) => category._id === action.payload._id,
      );

      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    });
    builder.addCase(updateHomeCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default HomeCategorySlice.reducer;
