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
export const addProductToDatabase = createAsyncThunk("products/addProductToDatabase",
  async(payload)=>{
    try{
      let ref = await db.collection("products").doc();
      let randomId = ref.id;
      let res = await ref.set({id:randomId,...payload})
      console.log("res çıktı",res);
    }
    catch(err){
      alert(err);
    }

  })
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
          state.status= "success";
      },
      [getProductsFromDatabase.rejected]:(state)=>{
          state.status = "failed";
      },
      [addProductToDatabase.pending]:(state)=>{
        state.addingProductsStatus = "loading";
      },
      [addProductToDatabase.fulfilled]:(state)=>{
        state.addingProductsStatus = "Uploaded"
      },
      [addProductToDatabase.pending]:(state)=>{
        state.addingProductsStatus="error";
      }
  },
});
export default productsSlice.reducer;