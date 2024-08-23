import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}


interface cartState {
  cartitems:CartItem[];

}

const initialState:cartState = {
    cartitems:[]
};


export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
                state.cartitems.push(action.payload)  
        },
        removefromCart:(state,action)=>{
            console.log(action.payload,'payload id');
            state.cartitems = state.cartitems.filter(f => f.id !== action.payload)
        }
    }
});


export const {addToCart,removefromCart} = cartSlice.actions 
export default cartSlice.reducer