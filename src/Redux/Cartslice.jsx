"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    add(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      // return [...state, action.payload];
    },

    remove(state, action) {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
    increaseQuantity(state, action) {
      const itemIdToIncrease = action.payload;
      state.cartItems = state.cartItems.map((item) =>
        item.id === itemIdToIncrease
          ? { ...item, cartQuantity: item.cartQuantity + 1 }
          : item
      );
    },
    decreaseQuantity(state, action) {
      const itemIdToDecrease = action.payload;
      state.cartItems = state.cartItems.map((item) =>
        item.id === itemIdToDecrease && item.cartQuantity > 1
          ? { ...item, cartQuantity: item.cartQuantity - 1 }
          : item
      );
    },

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

export const {
  add,
  remove,
  decreaseCart,
  getTotal,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
