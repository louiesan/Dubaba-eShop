import { configureStore } from "@reduxjs/toolkit";
import productReduce from "./products/productSlice";
import cartReducer from "./cart/cartSlice";
import favoriteReducer from "./favorite/favoriteSlice";
export const store = configureStore({
  reducer: {
    productReduce,
    cartReducer,
    favoriteReducer,
  },
});
