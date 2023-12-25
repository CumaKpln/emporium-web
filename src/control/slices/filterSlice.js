// productSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
};

const filterSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { selectCategory } = filterSlice.actions;
export const selectCategorySelector = (state) => state.category.selectedCategory;
export const filterReducer = filterSlice.reducer;
