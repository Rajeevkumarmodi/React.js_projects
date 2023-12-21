import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  userInfo: null,
};

const cartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isMatch = state.cart.find((data) => data.id === action.payload.id);
      if (!isMatch) {
        state.cart.push(action.payload);
      } else {
        isMatch.quentity += 1;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
