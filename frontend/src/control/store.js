import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { tokenReducer } from "./slices/tokenSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    userToken:tokenReducer,
    userİnfo:userReducer,
  }
});
