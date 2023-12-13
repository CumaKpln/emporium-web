import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [], // Başlangıç durumu bir boş dizi olarak belirlendi
  reducers: {
    selectProduct(state, action) {
      return [state, action.payload]; // Gelen ürünü mevcut durum dizisinin bir parçası olarak ekle
    },
  },
});

export const { selectProduct } = productSlice.actions;
export default productSlice.reducer;
