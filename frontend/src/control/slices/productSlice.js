import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProduct: (""), // selectedProduct'ı bir dizi olarak başlatın
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectProduct(state, action) {
      state.selectedProduct = action.payload; // Seçilen ürünleri bir dizi içinde saklayın
    console.log(selectProduct)
    },
  },
});

export const { selectProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
