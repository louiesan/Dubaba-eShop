import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart"))
    : [],
  totalAmount: window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart")).reduce(
        (prev, next) => prev + next.price * next.quantity,
        0
      )
    : 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex(
        (e) => e.id === action.payload.newItem.id
      );
      console.log(action.payload);
      console.log(index);
      if (index === -1 || !state.cart) {
        state.cart.push(action.payload.newItem);
      } else {
        state.cart[index].quantity += Number(action.payload.amount);
      }

      state.totalAmount = state.cart.reduce(
        (prev, next) => prev + next.price * next.quantity,
        0
      );
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrement: (state, action) => {
      const index = state.cart.findIndex(
        (e) => e.id === action.payload.newItem.id
      );
      console.log(state.cart[0].quantity);
      console.log(index);
      if (state.cart[index].quantity <= 1) {
        state.cart.splice(index, 1);
      } else {
        state.cart[index].quantity -= action.payload.amount;
      }
      state.totalAmount = state.cart.reduce(
        (prev, next) => prev + next.price * next.quantity,
        0
      );
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeCart: (state, action) => {
      const index = state.cart.findIndex((e) => e.id === action.payload.id);
      state.cart.splice(index, 1);
      state.totalAmount = state.cart.reduce(
        (prev, next) => prev + next.price * next.quantity,
        0
      );
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, decrement, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
