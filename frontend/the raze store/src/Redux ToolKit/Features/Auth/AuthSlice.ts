import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { resetUserState } from "../Customer/UserSlice";
import { resetSellerAuthState } from "../Seller/SellerAuthentication";

const API_URL = "/auth";

const initialState = {
  jwt: null,
  role: null,
  loading: false,
  error: null,
  otpSent: false,
};

export const sendLogicSignupOTP = createAsyncThunk(
  "/auth/sendLogicSignupOTP",
  async ({ email }: { email: string }) => {
    try {
      const response = await api.post(`${API_URL}/send/login-signup-otp`, {
        email,
      });
      console.log("Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
    }
  },
);

export const signup = createAsyncThunk(
  "/auth/signup",
  async (signupRequest: any, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_URL}/signup`, signupRequest);
      console.log("Response:", response.data);
      localStorage.setItem("jwt", response.data.jwt);
      signupRequest.navigate("/");
      return response.data;
    } catch (error: any) {
      console.log("Signin Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

export const signin = createAsyncThunk(
  "/auth/signin",
  async (signinRequest: any, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_URL}/signin`, signinRequest);
      console.log("Response:", response.data);
      localStorage.setItem("jwt", response.data.jwt);
      if (response.data.role == "ROLE_ADMIN") {
        signinRequest.navigate("/admin");
      } else {
        signinRequest.navigate("/");
      }

      return response.data;
    } catch (error: any) {
      console.log("Signup Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
      state.role = null;
      state.otpSent = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendLogicSignupOTP.fulfilled, (state) => {
      state.otpSent = true;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.jwt = action.payload.jwt;
      state.role = action.payload.role;
    });

    builder.addCase(signin.fulfilled, (state, action) => {
      state.jwt = action.payload.jwt;
      state.role = action.payload.role;
    });
  },
});

export const { logout } = authSlice.actions;
export const performLogout = () => async (dispatch: any) => {
  dispatch(logout());
  dispatch(resetUserState());
  dispatch(resetSellerAuthState());
  localStorage.removeItem("jwt");
};

export default authSlice.reducer;
