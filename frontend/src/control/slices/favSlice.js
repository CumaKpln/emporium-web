import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectFav: [], // selectFav'ı bir dizi olarak başlatın
};

const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    favItem(state, action) {
      state.selectFav = [...state.selectFav, action.payload]; // Yeni ürünü favori ürünler listesine ekle
    },
    removeFav(state, action) {
      state.selectFav = state.selectFav.filter(item => item.id !== action.payload.id); // Favori ürünü listeden kaldırma
    },
    clearFav(state) {
      state.selectFav = []; // Tüm favori ürünleri temizleme
    },
  },
});

export const { favItem, removeFav, clearFav } = favSlice.actions;
export const favReducer = favSlice.reducer;
