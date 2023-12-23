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
    increaseQuantity: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      if (product) {
        if (product.quentity < 5) {
          product.quentity += 1;
        }
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      if (product) {
        if (product.quentity > 1) {
          product.quentity -= 1;
        }
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
