import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    searchquery:'',
    list:[]
}

export const listSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
        inputreducer:(state,action)=>{
            state.searchquery = action.payload 
        }
    }
})

export const {inputreducer} = listSlice.actions;
// export const selectquery = (state:RootState) => state.list.searchquery
export default listSlice.reducer;