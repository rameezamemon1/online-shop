import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import authReducer from "./AuthSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;

// import { createContext, useReducer } from "react";

// export const store = createContext();

// const initialState = {
//   cart: { cartItems: [] },
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "CART_ADD_ITEM": {
//       const newItem = action.payload;
//       const existItem = state.cart.cartItems.find(
//         (item) => item.id === newItem.id
//       );
//       const cartItems = existItem
//         ? state.cart.cartItems.map((item) =>
//             item.name === existItem.name ? newItem : item
//           )
//         : [...state.cart.cartItems, newItem];
//       return { ...state, cart: { ...state.cart, cartItems } };
//     }
//   }
// }
