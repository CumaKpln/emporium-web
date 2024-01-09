import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {} // başlangıç değeri
  },
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload; // payload'dan gelen veriyi userData'ya ata
    },
  }
});

export const { setUserData } = userSlice.actions;
export const selectUserData = state => state.user.userData;
export const userReducer= userSlice.reducer;
