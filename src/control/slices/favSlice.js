import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectFav: {}, // selectFav'ı bir dizi olarak başlatın
};

const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    favItem(state, action) {
      state.selectFav = action.payload; // Seçilen ürünleri bir dizi içinde saklayın
    },
  },
});

export const { favItem } = favSlice.actions;
export const favReducer = favSlice.reducer;


