import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./addToCartSlice";

export const store = configureStore({
  reducer: {
    allCartData: cartSlice,
  },
});
