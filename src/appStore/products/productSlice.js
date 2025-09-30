import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  products: [],
  status: "idle",
  categories: [],
  showStatus: "idle",
  err: null,
};

export const fetchStore = createAsyncThunk("fetchStore", async () => {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();
  return data.products;
});
export const fetchMore = createAsyncThunk("fetchMore", async (skip) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=20&skip=${skip * 20}`
  );
  const data = await res.json();
  return data.products;
});

export const fetchSearch = createAsyncThunk("fetchSearch", async (para) => {
  const res = await fetch(`https://dummyjson.com/products/search?q=${para}`);
  const data = await res.json();
  return data.products;
});
export const fetchCategory = createAsyncThunk("fetchCategory", async (para) => {
  const res = await fetch(`https://dummyjson.com/products/category/${para}`);
  const data = await res.json();
  return data.products;
});
export const getCategories = createAsyncThunk("getCategory", async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchStore.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(fetchStore.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "succeeded";
        state.err = null;
      })
      .addCase(fetchStore.rejected, (state, action) => {
        state.err = action.payload;
        state.status = "rejected";
      });
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "succeeded";
        state.err = null;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.err = action.payload;
        state.status = "rejected";
      });
    builder
      .addCase(getCategories.pending, (state) => {
        state.err = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.err = null;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.err = action.payload;
      });
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "succeeded";
        state.err = null;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.err = action.payload;
        state.status = "rejected";
      });
    builder
      .addCase(fetchMore.pending, (state) => {
        state.showStatus = "loading";
        state.err = null;
      })
      .addCase(fetchMore.fulfilled, (state, action) => {
        state.products = [...state.products, ...action.payload];
        state.showStatus = "succeeded";
        state.err = null;
      })
      .addCase(fetchMore.rejected, (state, action) => {
        state.showStatus = "rejected";
      });
  },
  reducers: {
    showLess: (state, action) => {
      action.payload !== 0
        ? (state.products.length = action.payload * 20)
        : null;
    },
  },
});

export const { showLess } = productSlice.actions;
export default productSlice.reducer;
