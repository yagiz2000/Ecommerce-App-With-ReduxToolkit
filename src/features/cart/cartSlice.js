import { createSlice } from "@reduxjs/toolkit";
let initialState={
    cartList:JSON.parse(localStorage.getItem("cartList"))
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProductToCart:(state,{payload})=>{
            const index = state.cartList.findIndex((item)=>item.id===payload.id)
            if(index!==-1){
                state.cartList[index].quantity++;
            }
            else{
                state.cartList= [...state.cartList,{...payload,quantity:1}];
            }
        },
        saveProductsToLocalStorage:(state)=>{
            localStorage.setItem("cartList",JSON.stringify(state.cartList));
        },
        changeQuantityOfProduct(state,{payload}){
            let index = state.cartList.findIndex((item)=>item.id===payload.id);
            if(payload.type==="increment"){
                state.cartList[index].quantity++;
            }
            else{
                state.cartList[index].quantity--;
                if(state.cartList[index].quantity===0){
                    state.cartList.splice(index,1);
                }
            }
        },
        removeProductFromCart:(state,{payload})=>{
            let index = state.cartList.findIndex((item)=>item.id===payload);
            state.cartList.splice(index,1);
        }
    }
})
export const {addProductToCart,saveProductsToLocalStorage,changeQuantityOfProduct,removeProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;