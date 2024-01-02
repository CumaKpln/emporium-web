import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { favReducer } from "./slices/favSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    favProducts: favReducer,
    userToken: userReducer.Login.token
  },
});
