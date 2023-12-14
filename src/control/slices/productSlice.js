import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    selectedProduct: {}
  }, // Başlangıç durumu bir boş dizi olarak belirlendi
  reducers: {
    selectProduct(state, action) {
      state.selectedProduct = action.payload // Gelen ürünü mevcut durum dizisinin bir parçası olarak ekle
    },
  },
});

export const { selectProduct } = productSlice.actions;
export default productSlice.reducer;
