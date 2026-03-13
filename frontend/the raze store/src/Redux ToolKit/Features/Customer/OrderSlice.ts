import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

const initialState = {
  orders: [],
  loading: false,
  error: "",
  orderItem: null,
  currentOrder: null,
  paymentOrder: null,
};

const API_URL = "/api/orders";

export const fetchUserOrderHistory = createAsyncThunk<any, any>(
  "/orders/fetchUserOrderHistory",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Ftech User Order History", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const fetchOrderById = createAsyncThunk<any, any>(
  "/orders/fetchOrderById",
  async ({ jwt, orderId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/${orderId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Ftech Order By Id", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const createOrder = createAsyncThunk<any, any>(
  "/orders/createOrder",
  async ({ address, jwt, paymentGateway }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        `${API_URL}`,
        {
          shippingAddress: address,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          params: { paymentMethod: paymentGateway },
        },
      );
      console.log("Create Order:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const fetchOrderItemById = createAsyncThunk<any, any>(
  "/orders/fetchOrderItemById",
  async ({ jwt, orderItemId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/item/${orderItemId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Fetch Order By Id", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const paymentSuccess = createAsyncThunk<any, any>(
  "/orders/paymentSuccess",

  async ({ jwt, paymentId, paymentLinkId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/payment/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        params: { paymentLinkId },
      });
      console.log("Payment Suceess: ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const cancelOrder = createAsyncThunk<any, any>(
  "/orders/cancelOrder",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `${API_URL}/${orderId}/cancel`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        },
      );
      console.log("Cancel Order", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrderHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserOrderHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
    builder.addCase(fetchUserOrderHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchOrderById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrderById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrder = action.payload;
    });
    builder.addCase(fetchOrderById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrder = action.payload;
      state.paymentOrder = action.payload;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(paymentSuccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(paymentSuccess.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrder = action.payload;
    });
    builder.addCase(paymentSuccess.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(cancelOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(cancelOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrder = action.payload;
    });
    builder.addCase(cancelOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchOrderItemById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrderItemById.fulfilled, (state, action) => {
      state.loading = false;
      state.orderItem = action.payload;
    });
    builder.addCase(fetchOrderItemById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default orderSlice.reducer;
