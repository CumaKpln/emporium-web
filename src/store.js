import {configureStore} from "@reduxjs/toolkit"
import favReducer from './control/favSlice';

export const store=configureStore({
    reducer:{
      data:favReducer,
    },
}) 