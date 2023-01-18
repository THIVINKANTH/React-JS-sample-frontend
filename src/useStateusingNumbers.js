import { useState } from "react"

export let UseState2=()=>
{
    const[count,setCount]=useState(0)

    const counting1=()=>
    {
        setCount(count+1);
    }
    const CountingZero=()=>
    {
       setCount(0);
    }
    return(
        <>
        <button onClick={counting1} onDoubleClick={CountingZero}>Single click value is counted, double click value is nul(Zero)</button>
        <span style={{color:'red',backgroundColor:'white'}}>
        {count}
        </span>
        </>
    )
}