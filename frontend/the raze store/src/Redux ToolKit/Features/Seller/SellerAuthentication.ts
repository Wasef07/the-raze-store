import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

const initialState = {
  otpSent: false,
  jwt: null,
  error: null,
  loading: false,
};

const API_URL = "/sellers";

export const sendLoginOTP = createAsyncThunk<any, any>(
  "/auth/sendLoginOTP",
  async ({ email }: { email: string }) => {
    try {
      const response = await api.post(`${API_URL}/send/login-otp`, {
        email,
      });
      console.log("OTP Send:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
    }
  },
);

export const verifyLoginOTP = createAsyncThunk<any, any>(
  "/auth/verifyLoginOTP",
  async (data: any) => {
    try {
      const response = await api.post(`${API_URL}/verify/login-otp`, data);
      localStorage.setItem("jwt", response.data.jwt);
      data.navigate("/seller");
      console.log("OTP Send:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
    }
  },
);

export const createSeller = createAsyncThunk(
  "/sellers/createSeller",
  async (seller: any, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_URL}`, seller);
      console.log("Create Seller:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    resetSellerAuthState: (state) => {
      state.otpSent = false;
      state.jwt = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendLoginOTP.fulfilled, (state) => {
      state.otpSent = true;
    });

    builder.addCase(createSeller.fulfilled, (state, action) => {
      state.jwt = action.payload.jwt;
    });

    builder.addCase(verifyLoginOTP.fulfilled, (state, action) => {
      state.jwt = action.payload.jwt;
    });
  },
});

export const { resetSellerAuthState } = sellerSlice.actions;
export default sellerSlice.reducer;
