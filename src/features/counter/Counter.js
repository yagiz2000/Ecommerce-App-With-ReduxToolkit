/* eslint-disable no-undef */
import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,incrementByAmount,getTodos } from "./counterSlice";


const Counter =()=>{
    const {counter,list,status} = useSelector((state)=>state.counter);//State counter'dan destructer ettik
    const dispatch = useDispatch();
    useEffect(()=>dispatch(getTodos()),[dispatch]);//Use effect ile 1 kere yapmasını sağladık.
    return(
        <div>
            <p>{counter}</p>
            <button onClick={()=>dispatch(increment())} >Arttır</button>
            <button onClick={()=>dispatch(decrement())} >Azalt</button>
            <button onClick={()=>dispatch(incrementByAmount(31))}>Amount ile Arttır</button>
            <button onClick={()=>dispatch(getTodos())}>Start exe</button>
            <p>{list}</p>
            <p>{status}</p>
        </div>
    )
}
export default Counter;