import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import db from '../../firebase/firebase';
let initialState = {
  products: [],
  status:null
};
export const getProductsFromDatabase = createAsyncThunk(
  "products/getProductsFromDatabase", //bu action type'ı belirtir
  async () => {
    let res = await db.collection("products").get();
    let liste = res.docs.map((item)=>item.data());
    return liste;

  }
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, payload) => {
      state.products = [...state.products, payload];
    },
  },
  extraReducers: {
      [getProductsFromDatabase.pending]:(state,action)=>{
        state.status="loading";
      },
      [getProductsFromDatabase.fulfilled]:(state,action)=>{
          state.products = action.payload;
          console.log("state list=>",state.list);
          state.status= "success";
      },
      [getProductsFromDatabase.rejected]:(state)=>{
          state.status = "failed";
      }
  },
});
export default productsSlice.reducer