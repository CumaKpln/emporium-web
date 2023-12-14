import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../control/slices/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    // Diğer reducer'lar buraya eklenebilir
  },
  
  
});

export default store;
