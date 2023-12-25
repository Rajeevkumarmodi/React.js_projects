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

    removeItem: (state, action) => {
      const filterData = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.cart = filterData;
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
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state, action) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  addUser,
  removeUser,
} = cartSlice.actions;
export default cartSlice.reducer;
