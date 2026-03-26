import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

const API_URL = "/api/sellers/products";

export const fetchSellerProduct = createAsyncThunk<any, any>(
  "/sellerProduct/fetchSellerProduct",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Fetch Seller Product", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

export const createProduct = createAsyncThunk<any, any>(
  "/sellerProduct/createProduct",
  async ({ jwt, request }, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_URL}`, request, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Create Seller Product", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

export const updateProduct = createAsyncThunk<any, any>(
  "/sellerProduct/updateProduct",
  async ({ jwt, productId, product }, { rejectWithValue }) => {
    try {
      const response = await api.put(`${API_URL}/${productId}`, product, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("Update Seller Product", response.data);

      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);

      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const initialState = {
  products: [],
  loading: false,
  error: "",
};

const sellerProductSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProduct.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchSellerProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSellerProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
      state.error = "";
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;

      const index = state.products.findIndex(
        (product: any) => product._id === action.payload._id,
      );

      if (index !== -1) {
        state.products[index] = action.payload;
      }

      state.error = "";
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default sellerProductSlice.reducer;
