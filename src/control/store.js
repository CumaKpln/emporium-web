import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/productSlice'; 

export const store = configureStore({
    reducer: {
        products: productReducer, // products reducer'ını burada eklemelisiniz
        // Diğer reducer'larınızı buraya ekleyebilirsiniz
    },
});
