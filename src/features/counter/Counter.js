import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,incrementByAmount } from "./counterSlice";


const Counter =()=>{
    const {counter} = useSelector((state)=>state.counter);//State counter'dan destructer ettik
    const dispatch = useDispatch();
    return(
        <div>
            <p>{counter}</p>
            <button onClick={()=>dispatch(increment())} >Arttır</button>
            <button onClick={()=>dispatch(decrement())} >Azalt</button>
            <button onClick={()=>dispatch(incrementByAmount(31))}>Amount ile Arttır</button>
        </div>
    )
}
export default Counter;