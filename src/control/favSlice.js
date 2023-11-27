import { createSlice } from "@reduxjs/toolkit";
import data from "../data/db.json"

const initialState = {
    cartItems: data,
    quantity: 0,
    total: 0,
}

const favSlice = createSlice({
    name:"cart",
    initialState,
})
console.log(favSlice)

export default favSlice.reducer;

