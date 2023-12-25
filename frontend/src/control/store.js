import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { favReducer } from "./slices/favSlice";
import { filterReducer } from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    favProducts: favReducer,
    filterProduct: filterReducer,
  },
});
