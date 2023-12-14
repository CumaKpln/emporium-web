import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/db.json";

// db.json'dan gelen verileri cartItems içine yerleştirme
const initialState = {
    cartItems: data["ilan-ver"], 
    quantity: 0,
    total: 0,
};

const favSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Eğer slice'a ekstra reducer'lar veya actions eklemek isterseniz, burada tanımlayabilirsiniz
    }
});

export const { /* Ekstra action'larınız varsa burada export edebilirsiniz */ } = favSlice.actions;
export default favSlice.reducer;


