import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

const initialState = {
  transactions: [],
  loading: false,
  error: "",
};

export const fetchTransactionsBySeller = createAsyncThunk<any, any>(
  "/transaction/fetchTransactionsBySeller",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`/transaction/seller`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Fetch Transaction By Seller", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  },
);


const transactionSlice=createSlice({
    name:"transaction",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchTransactionsBySeller.pending,(state)=>{
            state.loading=true;
            state.error="";
        })
        builder.addCase(fetchTransactionsBySeller.fulfilled,(state,action)=>{
            state.loading=false;
            state.transactions=action.payload;
        })
        builder.addCase(fetchTransactionsBySeller.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    }
})

export default transactionSlice.reducer;