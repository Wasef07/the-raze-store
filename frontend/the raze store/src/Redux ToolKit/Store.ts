import {configureStore,combineReducers} from "@reduxjs/toolkit"
import { thunk } from "redux-thunk"
import {useDispatch, useSelector, type TypedUseSelectorHook} from "react-redux"
import authReducer from "./Features/Auth/AuthSlice"
import userReducer from "./Features/Customer/UserSlice"
import productReducer from "./Features/Customer/ProductSlice"
import orderReducer from "./Features/Customer/OrderSlice"
import cartReducer from "./Features/Customer/CartSlice"
import couponReducer from "./Features/Customer/CouponSlice"
import homeCategoryReducer from "./Features/Customer/HomeCtaegorySlice"

const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    product:productReducer,
    order:orderReducer,
    cart:cartReducer,
    coupon:couponReducer,
    homeCategory:homeCategoryReducer

})

const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type AddDispatch=typeof store.dispatch;
export type RooteState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RooteState>=useSelector;

export default store;