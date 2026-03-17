import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
const initialState = {
  orders: [],
  loading: false,
  error: "",
};

export const fetchSellerOrders = createAsyncThunk<any, any>(
  "sellerOrders/fetchSellerOrders",
  async (jwt: any, { rejectWithValue }: any) => {
    try {
      const response = await api.get("/api/seller/orders", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Fetch Seller Orders", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

export const updateOrderStatus = createAsyncThunk<any, any>(
  "sellerOrders/updateOrderStatus",
  async ({ jwt, orderId, orderStatus }, { rejectWithValue }: any) => {
    try {
      const response = await api.patch(
        `/api/seller/orders/${orderId}/status/${orderStatus}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      );
      console.log("Update Seller Orders", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

const sellerOrderSlice = createSlice({
  name: "sellerOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSellerOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSellerOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
    builder.addCase(fetchSellerOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateOrderStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.orders.findIndex(
        (order: any) => order._id === action.payload._id,
      );

      if (index !== -1) {
        state.orders[index] = action.payload;
      }
    });
    builder.addCase(updateOrderStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default sellerOrderSlice.reducer;
