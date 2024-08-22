import { configureStore } from "@reduxjs/toolkit";
import listSlice  from "./slicers/listslice";
import cartslice from "./slicers/cartslice";



export const store = configureStore({
    reducer:{
        list:listSlice,
        cart:cartslice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch