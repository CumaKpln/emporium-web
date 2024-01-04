import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { favReducer } from "./slices/favSlice";
import { tokenReducer } from "./slices/tokenSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    favProducts: favReducer,
    userToken:tokenReducer,
    userİnfo:userReducer
  },
});
