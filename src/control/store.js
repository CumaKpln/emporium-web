import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/productSlice';
import { favReducer } from './slices/favSlice';

export const store = configureStore({
  reducer: {
    products: productReducer, 
    favProducts: favReducer,
  },
});
