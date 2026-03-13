import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

const API_URL = "/api/coupons";

export const applyCoupon = createAsyncThunk<any, any>(
  "coupon/applyCoupon",
  async ({ apply, code, orderValue, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_URL}/apply`, null, {
        params: { apply, code, orderValue },
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("Apply Coupons:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Signup Error:", error.response?.data);
      return rejectWithValue(error.response?.data?.message || "Coupon failed");
    }
  },
);

const initialState: CouponState={
    coupons:[],
    cart:null,
    loading:false,
    error:null,
    couponCreated:false,
    couponApplied:false,
}

const couponSlice = createSlice({
    name:"coupon",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(applyCoupon.pending,(state)=>{
            state.loading=true;
            state.error=null;
            state.couponApplied=false
        })
        builder.addCase(applyCoupon.fulfilled ,(state,action)=>{
            state.loading=false;
            state.cart=action.payload;
            if(action.meta.arg.apply=="true"){
                state.couponApplied=true
            }
        })
        builder.addCase(applyCoupon.rejected ,(state,action)=>{
            state.loading=false;
            state.error = action.payload || "Failed to apply coupon";
            state.couponApplied=false;
        })
    }
})

export default couponSlice.reducer;