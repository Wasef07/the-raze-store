import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

const initialState = {
  deals: [],
  loading: false,
  error: "",
};
export const createDeal = createAsyncThunk<any, any>(
  "/deal/createDeal",
  async (deal, { rejectWithValue }) => {
    try {
      const response = await api.post("/admin/deals", deal, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("Create Deal:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const getAllDeals = createAsyncThunk<any, any>(
  "deal/getAllDeal",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/admin/deals", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Get All Deals", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const deleteDeal = createAsyncThunk<any, any>(
  "deal/deleteDeal",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/admin/deals/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("Delete Deal:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const updateDeal = createAsyncThunk<any, any>(
  "deal/updateDeal",
  async ({ id, deal }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/admin/deals/${id}`, deal, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("Update Deal:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const dealSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // CREATE DEAL
    builder.addCase(createDeal.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(createDeal.fulfilled, (state, action) => {
      state.loading = false;
      state.deals.push(action.payload);
    });

    builder.addCase(createDeal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // GET ALL DEALS
    builder.addCase(getAllDeals.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(getAllDeals.fulfilled, (state, action) => {
      state.loading = false;
      state.deals = action.payload;
    });

    builder.addCase(getAllDeals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // DELETE DEAL
    builder.addCase(deleteDeal.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(deleteDeal.fulfilled, (state, action) => {
      state.loading = false;

      state.deals = state.deals.filter(
        (deal: any) => deal._id !== action.meta.arg,
      );
    });

    builder.addCase(deleteDeal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // UPDATE DEAL
    builder.addCase(updateDeal.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(updateDeal.fulfilled, (state, action) => {
      state.loading = false;

      const index = state.deals.findIndex(
        (deal: any) => deal._id === action.payload._id,
      );

      if (index !== -1) {
        state.deals[index] = action.payload;
      }
    });

    builder.addCase(updateDeal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default dealSlice.reducer;