import { createSlice } from "@reduxjs/toolkit";
let initialState={
    cartList:[]
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProductToCart:(state,payload)=>{
            state.cartList= [...state.cartList,payload]
        },
        
    }
})