/* eslint-disable no-undef */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    counter:0,
    list:[],
    status:"bekleniyor"
};
export const getTodos = createAsyncThunk('posts/getPosts',
    async ()=>{
        let res = await new Promise((resolve)=>{
            setTimeout(()=>resolve([1,2,3]),3000)
        }) 
        console.log(res);
        return res;
    }
)
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter++;
        },
        decrement:(state)=>{
            state.counter--;
        },
        incrementByAmount:(state,action)=>{
            state.counter += action.payload; 
        }
    },
    extraReducers:{
        [getTodos.pending]:(state)=>{
            state.status="hala bekleniyor";
        },
        [getTodos.fulfilled]:(state,{payload})=>{
            state.list= payload;
            state.status="oldu";
        }

    }
});
export const {increment,decrement,incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
