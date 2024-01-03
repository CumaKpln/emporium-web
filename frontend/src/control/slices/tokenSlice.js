import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "",  // selectedProduct'ı bir dizi olarak başlatın
};

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        userToken(state, action) {
            state.value = action.payload; // Seçilen ürünleri bir dizi içinde saklayın
        },
    },
});

export const { userToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;