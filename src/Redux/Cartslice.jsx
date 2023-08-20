"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      // const itemIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemIndex >= 0) {
      //   state.cartItems[itemIndex].cartQuantity += 1;
      // } else {
      //   const tempProduct = { ...action.payload, cartQuantity: 1 };
      //   state.cartItems.push(tempProduct);
      // }
      return [...state, action.payload];
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    // decreaseCart(state, action) {
    //   const itemIndex = state.cartItems.findIndex(
    //     (cartItem) => cartItem.id === action.payload.id
    //   );

    //   if (state.cartItems[itemIndex].cartQuantity > 1) {
    //     state.cartItems[itemIndex].cartQuantity -= 1;
    //   }
    // },

    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { add, remove, decreaseCart, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
