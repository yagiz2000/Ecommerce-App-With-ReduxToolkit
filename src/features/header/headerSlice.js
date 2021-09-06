import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    navLink:null
}
export const  headerSlice = createSlice({
    name:'headerSlice',
    initialState,
    reducers:{
        changeNavLinkIndex:(state,{payload})=>{
            state.navLink = payload;
        }
    }
})
export const {changeNavLinkIndex} = headerSlice.actions;
export default headerSlice.reducer;