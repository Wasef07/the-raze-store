import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { api } from "../../../config/api";

const initialState = {
  sellers: [],
  selectedSeller: null,
  loading: false,
  error: null,
  profile: null,
  report: null,
  profileUpdated: false,
};

const API_URL = "/sellers";

export const fetchSellerProfile = createAsyncThunk<any, any>(
  "sellers/fetchSellerProfile",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Fetch Seller Profile", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

export const fetchSeller = createAsyncThunk<any, string>(
  "sellers/fetchSeller",
  async (status: string, { rejectWithValue }) => {
    try {
      const response = await api.get(API_URL, {
        params: {
          status,
        },
      });
      console.log("Fetch Sellers", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);
export const fetchSellerReport = createAsyncThunk<any, any>(
  "sellers/fetchSellerReport",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api${API_URL}/report`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Fetch Seller Report", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

export const fetchSellerById = createAsyncThunk<any, any>(
  "sellers/fetchSellerById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/${id}`);
      console.log("Fetch Seller Report", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

export const updateSelleAccountStatus = createAsyncThunk<any, any>(
  "sellers/updateSelleAccountStatus",
  async (
    { id: any, status: any }: { id: number; status: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.patch(`/admin/seller/${id}/status/${status}`);
      console.log("Fetch Seller Report", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);

const sellerSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Seller Profile
    builder.addCase(fetchSellerProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.profileUpdated = false;
    });

    builder.addCase(fetchSellerProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    });

    builder.addCase(fetchSellerProfile.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) || "Failed to fetch seller profile";
    });

    // Fetch Sellers List (Admin)
    builder.addCase(fetchSeller.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchSeller.fulfilled, (state, action) => {
      state.loading = false;
      state.sellers = action.payload;
    });

    builder.addCase(fetchSeller.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Failed to fetch sellers";
    });

    // Fetch Seller Report
    builder.addCase(fetchSellerReport.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchSellerReport.fulfilled, (state, action) => {
      state.loading = false;
      state.report = action.payload;
    });

    builder.addCase(fetchSellerReport.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) || "Failed to fetch seller report";
    });

    // Fetch Seller By ID
    builder.addCase(fetchSellerById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchSellerById.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedSeller = action.payload;
    });

    builder.addCase(fetchSellerById.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Failed to fetch seller";
    });

    // Update Seller Account Status (Admin)
    builder.addCase(updateSelleAccountStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(updateSelleAccountStatus.fulfilled, (state, action) => {
      state.loading = false;

      const index = state.sellers.findIndex(
        (seller: any) => seller._id === action.payload._id,
      );

      if (index !== -1) {
        state.sellers[index] = action.payload;
      }
    });

    builder.addCase(updateSelleAccountStatus.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) || "Failed to update seller status";
    });
  },
});

export default sellerSlice.reducer;