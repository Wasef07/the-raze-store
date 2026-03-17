import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

const API_URL = "/api/coupons";

export const createCoupon = createAsyncThunk<any, any>(
  "/coupon/createCoupon",
  async ({ jwt, request }, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_URL}/admin/create`, request, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Create Coupon", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const fetchAllCoupon = createAsyncThunk<any, any>(
  "/coupon/fetchAllCoupon",
  async ({ jwt }, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/admin/all`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Create Coupon", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const deleteCoupon = createAsyncThunk<any, any>(
  "/coupon/deleteCoupon",
  async ({ jwt, couponId }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${API_URL}/admin/delete/${couponId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Delete Coupon", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const initialState = {
  coupons: [],
  loading: false,
  error: "",
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // CREATE COUPON
    builder.addCase(createCoupon.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(createCoupon.fulfilled, (state, action) => {
      state.loading = false;
      state.coupons.push(action.payload);
    });

    builder.addCase(createCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // FETCH ALL COUPONS
    builder.addCase(fetchAllCoupon.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchAllCoupon.fulfilled, (state, action) => {
      state.loading = false;
      state.coupons = action.payload;
    });

    builder.addCase(fetchAllCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // DELETE COUPON
    builder.addCase(deleteCoupon.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(deleteCoupon.fulfilled, (state, action) => {
      state.loading = false;

      // remove deleted coupon using id
      state.coupons = state.coupons.filter(
        (coupon: any) => coupon._id !== action.meta.arg.couponId,
      );
    });

    builder.addCase(deleteCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default couponSlice.reducer;